import { useLocale } from '../locale';

const seoCopy = {
  en: {
    introKicker: 'A Pomodoro timer that makes focus feel gentler',
    introTitle: 'Most productivity timers feel like tools. Gamu Neko feels like a small companion.',
    introBody: 'It gives your focus session a simple emotional loop: begin, stay present, protect the sleeping cat, and finish with a clearer record of what you worked on.',
    featuresKicker: 'Key features',
    featuresTitle: 'Built for cozy focus, not pressure',
    features: [
      ['Cat-based focus feedback', 'Start a session and your cat rests while you work. Stop early and Munchkin wakes up.'],
      ['Pomodoro timer for study and work', 'Use a classic focus rhythm for homework, writing, coding, reading, or daily tasks.'],
      ['Tasks and projects', 'Plan what you want to finish before each session and keep your focus routine organized.'],
      ['Productivity diary', 'Turn completed sessions into a personal record of what you worked on.'],
      ['Focus Aura and progress', 'See consistency build through gentle progress feedback, streaks, and achievements.'],
      ['Cozy unlocks', 'Personalize the app with cat packs and backgrounds that make focus feel inviting.'],
      ['Offline-first privacy', 'No account is required for the core experience, and your focus data stays personal.'],
      ['Localized experience', 'Use Gamu Neko in English, Spanish, Portuguese, or Japanese.'],
    ],
    useCasesKicker: 'Made for quiet focus',
    useCasesTitle: 'Use one calm timer across study, work, and creative routines',
    useCases: ['Studying', 'Homework and exam prep', 'Remote work', 'Writing', 'Reading', 'Coding', 'Creative practice', 'Daily deep work routines'],
    privacyKicker: 'Private by design',
    privacyTitle: 'A personal focus companion, not a social feed',
    privacyBody: 'Gamu Neko is designed as a personal focus companion, not a social feed or team productivity platform. The experience is intentionally quiet, local-first, and low-pressure, so your focus routine can stay personal.',
    previewKicker: 'About this preview',
    previewTitle: 'A lightweight demo of the mobile app idea',
    previewBody: 'This page is a lightweight interactive preview of Gamu Neko. It is not the full mobile app. The timer runs at normal speed, while app screens, unlocks, and some interactions are simplified for demonstration.',
    faqKicker: 'FAQ',
    faqTitle: 'Questions about Gamu Neko',
    faqs: [
      ['What is Gamu Neko?', 'Gamu Neko is a cozy focus companion that combines a Pomodoro timer with a sleeping cat mechanic.'],
      ['Is Gamu Neko a Pomodoro timer?', 'Yes. It supports Pomodoro-style focus sessions and break routines for study, work, and quiet productivity.'],
      ['Who is Gamu Neko for?', 'It is made for students, remote workers, writers, readers, coders, creatives, and anyone who wants a softer focus timer.'],
      ['Does the cat really react when I stop focusing?', 'In the mobile app, the cat-based feedback is part of the focus loop. This web preview shows a simplified version.'],
      ['Can I use Gamu Neko for studying?', 'Yes. Gamu Neko works well as a study timer for homework, exam prep, reading, and longer deep work sessions.'],
      ['Is this web preview the full app?', 'No. This page is a lightweight interactive preview. The timer runs at normal speed, while app screens, unlocks, and some interactions are simplified for demonstration.'],
      ['Does Gamu Neko work offline?', 'The mobile app is designed around an offline-first, local-first focus routine with no account required for core use.'],
    ],
  },
  ja: {
    introKicker: '集中をもっとやさしくするポモドーロタイマー',
    introTitle: 'ほとんどの生産性タイマーはツールのよう。Gamu Neko は小さな相棒のよう。',
    introBody: '集中セッションにシンプルな感情のループを。始めて、今に集中して、眠っている猫を守り、何をしたかの記録とともに終える。',
    featuresKicker: '主な機能',
    featuresTitle: 'プレッシャーではなく、心地よい集中のために',
    features: [
      ['猫ベースの集中フィードバック', 'セッションを始めると猫が休みます。途中でやめると起きてしまいます。'],
      ['勉強と仕事のポモドーロタイマー', '宿題、執筆、コーディング、読書、日常のタスクにクラシックな集中リズムを。'],
      ['タスクとプロジェクト', 'セッション前にやることを計画し、集中ルーティンを整理。'],
      ['生産性ダイアリー', '完了したセッションを作業記録に。'],
      ['集中オーラと進捗', 'やさしい進捗フィードバック、連続記録、実績で一貫性を実感。'],
      ['かわいいアンロック', '猫パックや背景でアプリをカスタマイズ。集中が楽しくなる。'],
      ['オフラインファーストのプライバシー', 'コア体験にアカウント不要。集中データは個人のまま。'],
      ['多言語対応', 'Gamu Neko を英語、スペイン語、ポルトガル語、日本語で使用可能。'],
    ],
    useCasesKicker: '静かな集中のために',
    useCasesTitle: '勉強、仕事、クリエイティブな作業に一つの穏やかなタイマーを',
    useCases: ['勉強', '宿題と試験準備', 'リモートワーク', '執筆', '読書', 'コーディング', 'クリエイティブな練習', '毎日のディープワーク'],
    privacyKicker: 'プライバシー重視の設計',
    privacyTitle: 'ソーシャルフィードではなく、個人的な集中の相棒',
    privacyBody: 'Gamu Neko はソーシャルフィードやチーム生産性プラットフォームではなく、個人的な集中の相棒として設計されています。意図的に静かで、ローカルファースト、低プレッシャーな体験です。',
    previewKicker: 'このプレビューについて',
    previewTitle: 'モバイルアプリのアイデアの軽量デモ',
    previewBody: 'このページは Gamu Neko の軽量インタラクティブプレビューです。完全なモバイルアプリではありません。タイマーは通常速度で動作し、アプリ画面やアンロック、一部のインタラクションはデモ用に簡略化されています。',
    faqKicker: 'よくある質問',
    faqTitle: 'Gamu Neko についての質問',
    faqs: [
      ['Gamu Neko とは？', 'Gamu Neko はポモドーロタイマーと眠る猫のメカニクスを組み合わせた心地よい集中の相棒です。'],
      ['Gamu Neko はポモドーロタイマーですか？', 'はい。勉強、仕事、静かな生産性のためのポモドーロスタイルの集中セッションと休憩をサポートしています。'],
      ['Gamu Neko は誰のため？', '学生、リモートワーカー、ライター、読者、コーダー、クリエイター、よりやさしい集中タイマーを求めるすべての人のために。'],
      ['猫は本当に集中をやめると反応する？', 'モバイルアプリでは猫のフィードバックは集中ループの一部です。このウェブプレビューは簡略版です。'],
      ['Gamu Neko は勉強に使える？', 'はい。宿題、試験準備、読書、長時間のディープワークの学習タイマーとして最適です。'],
      ['このウェブプレビューは完全なアプリ？', 'いいえ。軽量インタラクティブプレビューです。タイマーは通常速度で、一部はデモ用に簡略化されています。'],
      ['Gamu Neko はオフラインで動く？', 'モバイルアプリはオフラインファースト、ローカルファーストの集中ルーティンとして設計されており、コア利用にアカウントは不要です。'],
    ],
  },
  pt: {
    introKicker: 'Um timer Pomodoro que torna o foco mais gentil',
    introTitle: 'A maioria dos timers de produtividade parecem ferramentas. Gamu Neko parece um pequeno companheiro.',
    introBody: 'Ele dá à sua sessão de foco um ciclo emocional simples: comece, fique presente, proteja o gato dormindo, e termine com um registro mais claro do que você trabalhou.',
    featuresKicker: 'Recursos principais',
    featuresTitle: 'Feito para foco aconchegante, não pressão',
    features: [
      ['Feedback de foco com gato', 'Comece uma sessão e seu gato descansa enquanto você trabalha. Pare cedo e o Munchkin acorda.'],
      ['Timer Pomodoro para estudo e trabalho', 'Use um ritmo clássico de foco para tarefas, escrita, programação, leitura ou rotinas diárias.'],
      ['Tarefas e projetos', 'Planeje o que quer terminar antes de cada sessão e mantenha sua rotina de foco organizada.'],
      ['Diário de produtividade', 'Transforme sessões concluídas em um registro pessoal do que você trabalhou.'],
      ['Aura de foco e progresso', 'Veja a consistência crescer com feedback gentil de progresso, sequências e conquistas.'],
      ['Desbloqueios fofos', 'Personalize o app com pacotes de gatos e fundos que tornam o foco acolhedor.'],
      ['Privacidade offline-first', 'Nenhuma conta é necessária para a experiência principal, e seus dados de foco permanecem pessoais.'],
      ['Experiência localizada', 'Use Gamu Neko em inglês, espanhol, português ou japonês.'],
    ],
    useCasesKicker: 'Feito para foco tranquilo',
    useCasesTitle: 'Use um timer calmo para estudo, trabalho e rotinas criativas',
    useCases: ['Estudar', 'Lição de casa e preparação para provas', 'Trabalho remoto', 'Escrita', 'Leitura', 'Programação', 'Prática criativa', 'Rotinas diárias de trabalho focado'],
    privacyKicker: 'Privacidade por design',
    privacyTitle: 'Um companheiro pessoal de foco, não um feed social',
    privacyBody: 'Gamu Neko é projetado como um companheiro pessoal de foco, não um feed social ou plataforma de produtividade em equipe. A experiência é intencionalmente tranquila, local-first e de baixa pressão.',
    previewKicker: 'Sobre este preview',
    previewTitle: 'Um demo leve da ideia do app móvel',
    previewBody: 'Esta página é um preview interativo leve do Gamu Neko. Não é o app móvel completo. O timer roda em velocidade normal, enquanto telas, desbloqueios e algumas interações são simplificados para demonstração.',
    faqKicker: 'Perguntas frequentes',
    faqTitle: 'Perguntas sobre Gamu Neko',
    faqs: [
      ['O que é Gamu Neko?', 'Gamu Neko é um companheiro de foco aconchegante que combina um timer Pomodoro com a mecânica de um gato dormindo.'],
      ['Gamu Neko é um timer Pomodoro?', 'Sim. Suporta sessões de foco estilo Pomodoro e rotinas de pausa para estudo, trabalho e produtividade tranquila.'],
      ['Para quem é o Gamu Neko?', 'É feito para estudantes, trabalhadores remotos, escritores, leitores, programadores, criativos e qualquer pessoa que queira um timer de foco mais suave.'],
      ['O gato realmente reage quando paro de focar?', 'No app móvel, o feedback do gato faz parte do ciclo de foco. Este preview web mostra uma versão simplificada.'],
      ['Posso usar Gamu Neko para estudar?', 'Sim. Gamu Neko funciona bem como timer de estudo para tarefas, preparação de provas, leitura e sessões longas de trabalho focado.'],
      ['Este preview web é o app completo?', 'Não. É um preview interativo leve. O timer roda em velocidade normal, enquanto telas e interações são simplificadas para demonstração.'],
      ['Gamu Neko funciona offline?', 'O app móvel é projetado com foco offline-first e local-first, sem necessidade de conta para uso principal.'],
    ],
  },
  es: {
    introKicker: 'Un temporizador Pomodoro que hace el enfoque más suave',
    introTitle: 'La mayoría de los temporizadores de productividad se sienten como herramientas. Gamu Neko se siente como un pequeño compañero.',
    introBody: 'Le da a tu sesión de enfoque un ciclo emocional simple: comienza, permanece presente, protege al gato durmiendo, y termina con un registro más claro de lo que trabajaste.',
    featuresKicker: 'Características principales',
    featuresTitle: 'Hecho para enfoque acogedor, no presión',
    features: [
      ['Feedback de enfoque con gato', 'Inicia una sesión y tu gato descansa mientras trabajas. Detente antes y Munchkin se despierta.'],
      ['Temporizador Pomodoro para estudio y trabajo', 'Usa un ritmo clásico de enfoque para tareas, escritura, programación, lectura o rutinas diarias.'],
      ['Tareas y proyectos', 'Planifica lo que quieres terminar antes de cada sesión y mantén tu rutina de enfoque organizada.'],
      ['Diario de productividad', 'Convierte sesiones completadas en un registro personal de lo que trabajaste.'],
      ['Aura de enfoque y progreso', 'Observa la consistencia crecer con retroalimentación suave, rachas y logros.'],
      ['Desbloqueos lindos', 'Personaliza la app con paquetes de gatos y fondos que hacen el enfoque acogedor.'],
      ['Privacidad offline-first', 'No se requiere cuenta para la experiencia principal, y tus datos de enfoque permanecen personales.'],
      ['Experiencia localizada', 'Usa Gamu Neko en inglés, español, portugués o japonés.'],
    ],
    useCasesKicker: 'Hecho para enfoque tranquilo',
    useCasesTitle: 'Usa un temporizador tranquilo para estudio, trabajo y rutinas creativas',
    useCases: ['Estudiar', 'Tareas y preparación de exámenes', 'Trabajo remoto', 'Escritura', 'Lectura', 'Programación', 'Práctica creativa', 'Rutinas diarias de trabajo profundo'],
    privacyKicker: 'Privacidad por diseño',
    privacyTitle: 'Un compañero personal de enfoque, no un feed social',
    privacyBody: 'Gamu Neko está diseñado como un compañero personal de enfoque, no un feed social o plataforma de productividad de equipo. La experiencia es intencionalmente tranquila, local-first y de baja presión.',
    previewKicker: 'Sobre esta vista previa',
    previewTitle: 'Un demo ligero de la idea de la app móvil',
    previewBody: 'Esta página es una vista previa interactiva ligera de Gamu Neko. No es la app móvil completa. El temporizador funciona a velocidad normal, mientras que las pantallas, desbloqueos y algunas interacciones están simplificadas para demostración.',
    faqKicker: 'Preguntas frecuentes',
    faqTitle: 'Preguntas sobre Gamu Neko',
    faqs: [
      ['¿Qué es Gamu Neko?', 'Gamu Neko es un compañero de enfoque acogedor que combina un temporizador Pomodoro con la mecánica de un gato durmiendo.'],
      ['¿Es Gamu Neko un temporizador Pomodoro?', 'Sí. Soporta sesiones de enfoque estilo Pomodoro y rutinas de descanso para estudio, trabajo y productividad tranquila.'],
      ['¿Para quién es Gamu Neko?', 'Está hecho para estudiantes, trabajadores remotos, escritores, lectores, programadores, creativos y cualquiera que quiera un temporizador de enfoque más suave.'],
      ['¿El gato reacciona cuando dejo de enfocarme?', 'En la app móvil, el feedback del gato es parte del ciclo de enfoque. Esta vista previa web muestra una versión simplificada.'],
      ['¿Puedo usar Gamu Neko para estudiar?', 'Sí. Gamu Neko funciona bien como temporizador de estudio para tareas, preparación de exámenes, lectura y sesiones largas de trabajo profundo.'],
      ['¿Esta vista previa web es la app completa?', 'No. Es una vista previa interactiva ligera. El temporizador funciona a velocidad normal, mientras las pantallas e interacciones están simplificadas para demostración.'],
      ['¿Gamu Neko funciona offline?', 'La app móvil está diseñada con enfoque offline-first y local-first, sin necesidad de cuenta para uso principal.'],
    ],
  },
} as const;

export function SeoSections() {
  const { locale } = useLocale();
  const t = seoCopy[locale];

  return (
    <>
      <section className="content-band intro-band" aria-labelledby="gentle-title">
        <div className="narrow-copy">
          <p className="section-kicker">{t.introKicker}</p>
          <h2 id="gentle-title">{t.introTitle}</h2>
          <p>{t.introBody}</p>
        </div>
      </section>

      <section className="content-band" id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="section-kicker">{t.featuresKicker}</p>
          <h2 id="features-title">{t.featuresTitle}</h2>
        </div>
        <div className="feature-grid">
          {t.features.map(([title, body]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band split-band" aria-labelledby="quiet-title">
        <div>
          <p className="section-kicker">{t.useCasesKicker}</p>
          <h2 id="quiet-title">{t.useCasesTitle}</h2>
        </div>
        <ul className="use-case-list" aria-label="Gamu Neko use cases">
          {t.useCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-band privacy-band" id="privacy" aria-labelledby="privacy-title">
        <p className="section-kicker">{t.privacyKicker}</p>
        <h2 id="privacy-title">{t.privacyTitle}</h2>
        <p>{t.privacyBody}</p>
      </section>

      <section className="content-band preview-note" aria-labelledby="preview-note-title">
        <p className="section-kicker">{t.previewKicker}</p>
        <h2 id="preview-note-title">{t.previewTitle}</h2>
        <p>{t.previewBody}</p>
      </section>

      <section className="content-band faq-band" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="section-kicker">{t.faqKicker}</p>
          <h2 id="faq-title">{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
