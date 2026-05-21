const features = [
  ['Cat-based focus feedback', 'Start a session and your cat rests while you work. Stop early and Munchkin wakes up.'],
  ['Pomodoro timer for study and work', 'Use a classic focus rhythm for homework, writing, coding, reading, or daily tasks.'],
  ['Tasks and projects', 'Plan what you want to finish before each session and keep your focus routine organized.'],
  ['Productivity diary', 'Turn completed sessions into a personal record of what you worked on.'],
  ['Focus Aura and progress', 'See consistency build through gentle progress feedback, streaks, and achievements.'],
  ['Cozy unlocks', 'Personalize the app with cat packs and backgrounds that make focus feel inviting.'],
  ['Offline-first privacy', 'No account is required for the core experience, and your focus data stays personal.'],
  ['Localized experience', 'Use Gamu Neko in English, Spanish, Portuguese, or Japanese.'],
];

const useCases = [
  'Studying',
  'Homework and exam prep',
  'Remote work',
  'Writing',
  'Reading',
  'Coding',
  'Creative practice',
  'Daily deep work routines',
];

const faqs = [
  [
    'What is Gamu Neko?',
    'Gamu Neko is a cozy focus companion that combines a Pomodoro timer with a sleeping cat mechanic.',
  ],
  [
    'Is Gamu Neko a Pomodoro timer?',
    'Yes. It supports Pomodoro-style focus sessions and break routines for study, work, and quiet productivity.',
  ],
  [
    'Who is Gamu Neko for?',
    'It is made for students, remote workers, writers, readers, coders, creatives, and anyone who wants a softer focus timer.',
  ],
  [
    'Does the cat really react when I stop focusing?',
    'In the mobile app, the cat-based feedback is part of the focus loop. This web preview shows a simplified version.',
  ],
  [
    'Can I use Gamu Neko for studying?',
    'Yes. Gamu Neko works well as a study timer for homework, exam prep, reading, and longer deep work sessions.',
  ],
  [
    'Is this web preview the full app?',
    'No. This page is a lightweight interactive preview. The timer runs at normal speed, while app screens, unlocks, and some interactions are simplified for demonstration.',
  ],
  [
    'Does Gamu Neko work offline?',
    'The mobile app is designed around an offline-first, local-first focus routine with no account required for core use.',
  ],
];

export function SeoSections() {
  return (
    <>
      <section className="content-band intro-band" aria-labelledby="gentle-title">
        <div className="narrow-copy">
          <p className="section-kicker">A Pomodoro timer that makes focus feel gentler</p>
          <h2 id="gentle-title">Most productivity timers feel like tools. Gamu Neko feels like a small companion.</h2>
          <p>
            It gives your focus session a simple emotional loop: begin, stay present,
            protect the sleeping cat, and finish with a clearer record of what you worked on.
          </p>
        </div>
      </section>

      <section className="content-band" id="features" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="section-kicker">Key features</p>
          <h2 id="features-title">Built for cozy focus, not pressure</h2>
        </div>
        <div className="feature-grid">
          {features.map(([title, body]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band split-band" aria-labelledby="quiet-title">
        <div>
          <p className="section-kicker">Made for quiet focus</p>
          <h2 id="quiet-title">Use one calm timer across study, work, and creative routines</h2>
        </div>
        <ul className="use-case-list" aria-label="Gamu Neko use cases">
          {useCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-band privacy-band" id="privacy" aria-labelledby="privacy-title">
        <p className="section-kicker">Private by design</p>
        <h2 id="privacy-title">A personal focus companion, not a social feed</h2>
        <p>
          Gamu Neko is designed as a personal focus companion, not a social feed or
          team productivity platform. The experience is intentionally quiet, local-first,
          and low-pressure, so your focus routine can stay personal.
        </p>
      </section>

      <section className="content-band preview-note" aria-labelledby="preview-note-title">
        <p className="section-kicker">About this preview</p>
        <h2 id="preview-note-title">A lightweight demo of the mobile app idea</h2>
        <p>
          This page is a lightweight interactive preview of Gamu Neko. It is not the
          full mobile app. The timer runs at normal speed, while app screens, unlocks,
          and some interactions are simplified for demonstration.
        </p>
      </section>

      <section className="content-band faq-band" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2 id="faq-title">Questions about Gamu Neko</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
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
