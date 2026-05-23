import { type FormEvent, useEffect, useMemo, useRef, useState } from 'react';

type Locale = 'en' | 'ja' | 'pt' | 'es';

interface Props {
  defaultLocale?: Locale;
}

type Mode = 'idle' | 'running' | 'breakReady' | 'break' | 'stopped';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

const durations = [15, 25, 45];

const languageNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  pt: 'Português',
  es: 'Español',
};

const islandCopy: Record<
  Locale,
  {
    waiting: string;
    sleeping: string;
    angry: string;
    breakReady: string;
    breakStatus: string;
    start: string;
    stop: string;
    retry: string;
    startBreak: string;
    skipBreak: string;
    tasks: string;
    fullscreen: string;
    close: string;
    taskPanelTitle: string;
    taskInput: string;
    taskPlaceholder: string;
    addTask: string;
    closeTasks: string;
    emptyTasks: string;
    removeTask: string;
    customDuration: string;
  }
> = {
  en: {
    waiting: 'Gamu Neko is waiting...',
    sleeping: 'Gamu Neko is sleeping...',
    angry: 'Gamu Neko woke up...',
    breakReady: 'Focus complete! Take a break?',
    breakStatus: 'Break time with Gamu Neko...',
    start: 'Start Focus',
    stop: 'Stop',
    retry: 'Try Again',
    startBreak: 'Start Break',
    skipBreak: 'Skip Break',
    tasks: 'Tasks',
    fullscreen: 'Open fullscreen preview',
    close: 'Close fullscreen preview',
    taskPanelTitle: 'Focus tasks',
    taskInput: 'New task',
    taskPlaceholder: 'What will you focus on?',
    addTask: 'Add',
    closeTasks: 'Close tasks',
    emptyTasks: 'Add a small task before you start.',
    removeTask: 'Remove task',
    customDuration: 'Custom',
  },
  ja: {
    waiting: 'Gamu Neko が待っています...',
    sleeping: 'Gamu Neko が眠っています...',
    angry: 'Gamu Neko が起きました...',
    breakReady: '集中完了！休憩しますか？',
    breakStatus: 'Gamu Neko と休憩中...',
    start: '集中を始める',
    stop: '止める',
    retry: 'もう一度',
    startBreak: '休憩を始める',
    skipBreak: '休憩をスキップ',
    tasks: 'タスク',
    fullscreen: 'プレビューを全画面で開く',
    close: '全画面プレビューを閉じる',
    taskPanelTitle: '集中タスク',
    taskInput: '新しいタスク',
    taskPlaceholder: '何に集中しますか？',
    addTask: '追加',
    closeTasks: 'タスクを閉じる',
    emptyTasks: '始める前に小さなタスクを追加しましょう。',
    removeTask: 'タスクを削除',
    customDuration: 'カスタム',
  },
  pt: {
    waiting: 'Gamu Neko está esperando...',
    sleeping: 'Gamu Neko está dormindo...',
    angry: 'Gamu Neko acordou...',
    breakReady: 'Foco concluído! Fazer uma pausa?',
    breakStatus: 'Pausa com Gamu Neko...',
    start: 'Iniciar foco',
    stop: 'Parar',
    retry: 'Tentar de novo',
    startBreak: 'Iniciar pausa',
    skipBreak: 'Pular pausa',
    tasks: 'Tarefas',
    fullscreen: 'Abrir prévia em tela cheia',
    close: 'Fechar prévia em tela cheia',
    taskPanelTitle: 'Tarefas de foco',
    taskInput: 'Nova tarefa',
    taskPlaceholder: 'Em que você vai focar?',
    addTask: 'Adicionar',
    closeTasks: 'Fechar tarefas',
    emptyTasks: 'Adicione uma pequena tarefa antes de começar.',
    removeTask: 'Remover tarefa',
    customDuration: 'Personalizado',
  },
  es: {
    waiting: 'Gamu Neko está esperando...',
    sleeping: 'Gamu Neko está durmiendo...',
    angry: 'Gamu Neko despertó...',
    breakReady: '¡Enfoque completo! ¿Tomar un descanso?',
    breakStatus: 'Descanso con Gamu Neko...',
    start: 'Iniciar enfoque',
    stop: 'Detener',
    retry: 'Intentar de nuevo',
    startBreak: 'Iniciar descanso',
    skipBreak: 'Saltar descanso',
    tasks: 'Tareas',
    fullscreen: 'Abrir vista previa en pantalla completa',
    close: 'Cerrar vista previa en pantalla completa',
    taskPanelTitle: 'Tareas de enfoque',
    taskInput: 'Nueva tarea',
    taskPlaceholder: '¿En qué te vas a enfocar?',
    addTask: 'Agregar',
    closeTasks: 'Cerrar tareas',
    emptyTasks: 'Agrega una tarea pequeña antes de empezar.',
    removeTask: 'Eliminar tarea',
    customDuration: 'Personalizado',
  },
};

const stanceImage: Record<Mode, string> = {
  idle: '/assets/munchkin_cat_idle_0.webp',
  running: '/assets/munchkin_cat_sleep_1.webp',
  breakReady: '/assets/munchkin_cat_idle_0.webp',
  break: '/assets/munchkin_cat_idle_0.webp',
  stopped: '/assets/munchkin_cat_angry_0.webp',
};

const stanceAlt: Record<Mode, string> = {
  idle: 'Munchkin cat sitting calmly',
  running: 'Munchkin cat sleeping during focus time',
  breakReady: 'Munchkin cat awake after focus session',
  break: 'Munchkin cat resting during break',
  stopped: 'Munchkin cat awake after an interruption',
};

function breakMinutes(focusMinutes: number) {
  return Math.max(1, Math.round(focusMinutes / 5));
}

const seedTasks: Task[] = [
  { id: 1, title: 'Review notes', done: false },
  { id: 2, title: 'Write one focused draft', done: false },
];

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

export function AppPreviewIsland({ defaultLocale = 'en' }: Props) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [durationChoice, setDurationChoice] = useState<number | 'custom'>(25);
  const [customInput, setCustomInput] = useState('30');
  const duration =
    durationChoice === 'custom'
      ? Math.max(1, Math.min(180, parseInt(customInput, 10) || 30))
      : durationChoice;
  const [mode, setMode] = useState<Mode>('idle');
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [expanded, setExpanded] = useState(false);
  const [tasksOpen, setTasksOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [taskDraft, setTaskDraft] = useState('');
  const meowRef = useRef<HTMLAudioElement | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const activeCopy = islandCopy[locale];

  useEffect(() => {
    meowRef.current = new Audio('/assets/meow.mp3');
  }, []);

  useEffect(() => {
    if (mode !== 'running' && mode !== 'break') {
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          if (meowRef.current) {
            meowRef.current.currentTime = 0;
            meowRef.current.play().catch(() => {});
          }
          if (mode === 'running') {
            setMode('breakReady');
            return breakMinutes(duration) * 60;
          }
          setMode('idle');
          return duration * 60;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [duration, mode]);

  useEffect(() => {
    if (mode === 'idle') {
      setSecondsLeft(duration * 60);
    }
  }, [duration, mode]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setExpanded(document.fullscreenElement === previewRef.current);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && tasksOpen) setTasksOpen(false);
      if (event.key === 'Escape' && expanded && !document.fullscreenElement) setExpanded(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [expanded, tasksOpen]);

  const statusText = useMemo(() => {
    if (mode === 'running') return activeCopy.sleeping;
    if (mode === 'breakReady') return activeCopy.breakReady;
    if (mode === 'break') return activeCopy.breakStatus;
    if (mode === 'stopped') return activeCopy.angry;
    return activeCopy.waiting;
  }, [activeCopy, mode]);

  const startFocus = () => {
    setSecondsLeft(duration * 60);
    setMode('running');
    setTasksOpen(false);
  };

  const stopFocus = () => {
    if (mode === 'running') setMode('stopped');
  };

  const startBreak = () => setMode('break');

  const reset = () => {
    setMode('idle');
    setSecondsLeft(duration * 60);
  };

  const addTask = (event: FormEvent) => {
    event.preventDefault();
    const title = taskDraft.trim();
    if (!title) return;
    setTasks((current) => [...current, { id: Date.now(), title, done: false }]);
    setTaskDraft('');
  };

  const toggleTask = (id: number) => {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  };

  const removeTask = (id: number) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  const toggleFullscreen = async () => {
    if (expanded || document.fullscreenElement) {
      if (document.fullscreenElement) await document.exitFullscreen();
      setExpanded(false);
      return;
    }
    if (previewRef.current?.requestFullscreen) {
      await previewRef.current.requestFullscreen();
      setExpanded(true);
      return;
    }
    setExpanded(true);
  };

  return (
    <div
      className={`preview-shell${expanded ? ' preview-expanded' : ''}`}
      id="preview-demo"
      ref={previewRef}
    >
      <div className="app-preview" aria-label="Interactive Gamu Neko app preview">
        <img className="app-background" src="/assets/app_background.webp" alt="" />

        <div className="preview-toolbar" aria-label="Preview settings">
          <label>
            <span className="sr-only">Preview language</span>
            <select value={locale} onChange={(e) => setLocale(e.target.value as Locale)}>
              {(Object.entries(languageNames) as [Locale, string][]).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">Focus length</span>
            <select
              value={durationChoice}
              disabled={mode === 'running'}
              onChange={(e) => {
                const val = e.target.value;
                setDurationChoice(val === 'custom' ? 'custom' : Number(val));
              }}
            >
              {durations.map((minutes) => (
                <option key={minutes} value={minutes}>{minutes} min</option>
              ))}
              <option value="custom">{activeCopy.customDuration}</option>
            </select>
          </label>
          {durationChoice === 'custom' && (
            <label>
              <span className="sr-only">Custom duration in minutes</span>
              <input
                className="custom-duration-input"
                type="number"
                min={1}
                max={180}
                value={customInput}
                disabled={mode === 'running'}
                onChange={(e) => setCustomInput(e.target.value)}
              />
            </label>
          )}
          <button
            className="fullscreen-button"
            type="button"
            onClick={toggleFullscreen}
            aria-label={expanded ? activeCopy.close : activeCopy.fullscreen}
          >
            {expanded ? 'Close' : 'Fullscreen'}
          </button>
        </div>

        <div className="timer-pill glass-surface" aria-live="polite">
          {formatTime(secondsLeft)}
        </div>

        <img className={`cat-image cat-${mode}`} src={stanceImage[mode]} alt={stanceAlt[mode]} />

        <div className="preview-bottom-hud">
          <div className="status-pill glass-surface">{statusText}</div>

          <div className="app-actions" aria-label="Focus controls">
            <button
              className="task-button"
              type="button"
              onClick={() => setTasksOpen((c) => !c)}
              aria-expanded={tasksOpen}
              aria-controls="tasks-panel"
            >
              {activeCopy.tasks}
            </button>
            {mode === 'running' ? (
              <button className="focus-button stop-button" type="button" onClick={stopFocus}>
                {activeCopy.stop}
              </button>
            ) : mode === 'breakReady' ? (
              <>
                <button className="focus-button" type="button" onClick={startBreak}>
                  {activeCopy.startBreak}
                </button>
                <button className="focus-button retry-button" type="button" onClick={reset}>
                  {activeCopy.skipBreak}
                </button>
              </>
            ) : mode === 'break' ? (
              <button className="focus-button retry-button" type="button" onClick={reset}>
                {activeCopy.skipBreak}
              </button>
            ) : mode === 'stopped' ? (
              <button className="focus-button retry-button" type="button" onClick={reset}>
                {activeCopy.retry}
              </button>
            ) : (
              <button className="focus-button" type="button" onClick={startFocus}>
                {activeCopy.start}
              </button>
            )}
          </div>
        </div>

        {tasksOpen && (
          <section className="tasks-panel" id="tasks-panel" aria-labelledby="tasks-panel-title">
            <div className="tasks-panel-header">
              <h2 id="tasks-panel-title">{activeCopy.taskPanelTitle}</h2>
              <button type="button" onClick={() => setTasksOpen(false)}>
                {activeCopy.closeTasks}
              </button>
            </div>
            <form className="task-form" onSubmit={addTask}>
              <label>
                <span className="sr-only">{activeCopy.taskInput}</span>
                <input
                  value={taskDraft}
                  onChange={(e) => setTaskDraft(e.target.value)}
                  placeholder={activeCopy.taskPlaceholder}
                />
              </label>
              <button type="submit">{activeCopy.addTask}</button>
            </form>
            {tasks.length === 0 && <p>{activeCopy.emptyTasks}</p>}
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span>{task.title}</span>
                  </label>
                  <button type="button" onClick={() => removeTask(task.id)}>
                    {activeCopy.removeTask}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
