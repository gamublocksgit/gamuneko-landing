export type Locale = 'en' | 'ja' | 'pt' | 'es';

export const languageNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  pt: 'Português',
  es: 'Español',
};

export const localePaths: Record<Locale, string> = {
  en: '/',
  ja: '/ja/',
  pt: '/pt/',
  es: '/es/',
};

export const hreflangMap: Record<Locale, string> = {
  en: 'en',
  ja: 'ja',
  pt: 'pt-BR',
  es: 'es',
};

export type FaqItem = { q: string; a: string };

export type LocaleCopy = {
  meta: { title: string; description: string };
  snackable: string;
  header: { cta: string };
  hero: { kicker: string; h1: string; sub: string };
  guiltMechanic: {
    kicker: string;
    title: string;
    steps: Array<{ label: string; desc: string }>;
  };
  intro: { kicker: string; title: string; body: string };
  features: {
    kicker: string;
    title: string;
    items: Array<[string, string]>;
  };
  useCases: {
    kicker: string;
    title: string;
    items: string[];
  };
  privacy: { kicker: string; title: string; body: string };
  mikenchiStory: { kicker: string; title: string; body: string; cta: string };
  comparison: {
    kicker: string;
    title: string;
    headers: [string, string, string, string];
    rows: Array<[string, string, string, string]>;
  };
  previewNote: { kicker: string; title: string; body: string };
  store: { kicker: string; title: string; body: string };
  footer: string;
  faq: { kicker: string; title: string; items: FaqItem[] };
};

export const copy: Record<Locale, LocaleCopy> = {
  en: {
    meta: {
      title: 'Gamu Nemu: Cute Cat Pomodoro Timer',
      description:
        'Gamu Nemu is a free offline-first cat Pomodoro focus timer. No ads, no account. Your cat sleeps when you study. iOS & Android.',
    },
    snackable:
      'Gamu Nemu is a free, offline-first Pomodoro focus timer where a sleeping cat reacts to your focus sessions. No ads, no account required. Available on iOS and Android.',
    header: { cta: 'Get the App' },
    hero: {
      kicker: 'Free for iOS & Android',
      h1: 'The Cozy Cat Pomodoro Timer',
      sub: 'Focus gently. Your cat sleeps while you study, and wakes up when you leave.',
    },
    guiltMechanic: {
      kicker: 'How it works',
      title: 'Your cat is the focus mechanic',
      steps: [
        {
          label: 'Start a session',
          desc: 'Your cat curls up and drifts off to sleep. Your focus session begins.',
        },
        {
          label: 'Stay in the app',
          desc: 'The cat stays peacefully asleep as long as you remain focused.',
        },
        {
          label: 'Leave the app',
          desc: 'Gamu Nemu wakes up: a gentle, guilt-free nudge to come back.',
        },
      ],
    },
    intro: {
      kicker: 'A Pomodoro timer that feels gentler',
      title: 'Most productivity timers feel like tools. Gamu Nemu feels like a small companion.',
      body: 'It gives your focus session a simple emotional loop: begin, stay present, protect the sleeping cat, and finish with a clearer record of what you worked on.',
    },
    features: {
      kicker: 'Key features',
      title: 'Built for cozy focus, not pressure',
      items: [
        ['Cat-based focus feedback', 'Start a session and your cat rests while you work. Stop early and Munchkin wakes up.'],
        ['Pomodoro timer for study and work', 'Use a classic focus rhythm for homework, writing, coding, reading, or daily tasks.'],
        ['Tasks and projects', 'Plan what you want to finish before each session and keep your focus routine organized.'],
        ['Productivity diary', 'Turn completed sessions into a personal record of what you worked on.'],
        ['Focus Aura and progress', 'See consistency build through gentle progress feedback, streaks, and achievements.'],
        ['Cozy unlocks', 'Personalize with cat packs (Munchkin, Shadow Neko, Orange Cat, Himalayan, British Shorthair) and quarterly seasonal backgrounds inspired by Japanese seasons.'],
        ['Offline-first privacy', 'No account is required for the core experience. Your focus data stays on your device.'],
        ['Localized experience', 'Use Gamu Nemu in English, Japanese, Portuguese, or Spanish.'],
      ],
    },
    useCases: {
      kicker: 'Made for quiet focus',
      title: 'One calm timer for study, work, and creative routines',
      items: ['Studying', 'Homework and exam prep', 'Remote work', 'Writing', 'Reading', 'Coding', 'Creative practice', 'Daily deep work routines'],
    },
    privacy: {
      kicker: 'Private by design',
      title: 'A personal focus companion, not a social feed',
      body: 'Gamu Nemu is designed as a personal focus companion, not a social feed or team productivity platform. The experience is intentionally quiet, local-first, and low-pressure, so your focus routine stays personal.',
    },
    mikenchiStory: {
      kicker: 'Character story',
      title: 'Meet Mikenchi, one of the cats behind the cozy world of Gamu Nemu',
      body: 'Mikenchi has a dedicated story page with a calmer, character-focused look at this Gamu Nemu cat.',
      cta: 'Visit the Mikenchi story',
    },
    comparison: {
      kicker: 'Honest comparison',
      title: 'Why choose Gamu Nemu',
      headers: ['Feature', 'Gamu Nemu', 'Typical Ad-Supported Timers', 'Standard Subscription Apps'],
      rows: [
        ['Ads', '100% ad-free', 'Frequent video and pop-up ads', 'Ad-free only on paid tiers'],
        ['Privacy', 'Zero accounts, 100% local, no tracking', 'Third-party data collection', 'Mandatory cloud accounts and usage tracking'],
        ['Price', 'Free core, optional one-time background purchases', 'Free but heavily interrupted', 'Costly recurring subscription'],
        ['Offline use', 'Fully offline, no internet required', 'Varies, often ad-dependent', 'Cloud sync requires connection'],
        ['Data ownership', 'All data stays on your device', 'Data shared with ad networks', 'Data stored on provider servers'],
      ],
    },
    previewNote: {
      kicker: 'About this preview',
      title: 'A lightweight demo of the mobile app',
      body: 'This page is a lightweight interactive preview of Gamu Nemu. It is not the full mobile app. The timer runs at normal speed, while app screens, unlocks, and some interactions are simplified for demonstration.',
    },
    store: {
      kicker: 'Get Gamu Nemu',
      title: 'Start your next focus session with Gamu Nemu',
      body: 'Download Gamu Nemu for iOS or Android and use a gentle cat Pomodoro timer for studying, writing, coding, reading, and daily deep work.',
    },
    footer: 'Gamu Nemu is built by Gamu Blocks. This site uses no cookies or analytics.',
    faq: {
      kicker: 'FAQ',
      title: 'Questions about Gamu Nemu',
      items: [
        { q: 'What is Gamu Nemu?', a: 'Gamu Nemu is a cozy focus companion that combines a Pomodoro timer with a sleeping cat mechanic. Your cat rests while you focus and wakes up if you leave.' },
        { q: 'What is the Pomodoro Technique?', a: 'The Pomodoro Technique is a time-management method where you work in focused intervals, typically 25 minutes, followed by a short break.' },
        { q: 'Is Gamu Nemu free?', a: 'Yes. The core experience is completely free. Optional one-time purchase unlock additional backgrounds.' },
        { q: 'Does Gamu Nemu work offline?', a: 'Yes. The mobile app is designed around an offline-first, local-first focus routine. No internet connection is required for any core feature.' },
        { q: 'Is my data backed up to the cloud?', a: 'No cloud sync is required. All your focus data, task history, and session records stay on your device by default. No account is needed.' },
        { q: 'Does Gamu Nemu work for ADHD focus routines?', a: 'Many users with ADHD find that short Pomodoro intervals, visual feedback, and a low-pressure mechanic like Gamu Nemu help build focus habits. The app uses gentle emotional cues rather than alarms or penalties. Gamu Nemu is not a medical device and is not intended to diagnose, treat, cure, or prevent ADHD or any other medical condition.' },
        { q: 'How does Gamu Nemu protect my privacy?', a: 'Gamu Nemu requires no account, collects no personal data, shows no ads, and does not transmit any information to external servers. Everything stays on your device.' },
        { q: 'Can I use Gamu Nemu for studying?', a: 'Yes. Gamu Nemu works well as a study timer for homework, exam prep, reading, and longer deep work sessions.' },
        { q: 'Does the cat react when I stop focusing?', a: 'In the mobile app, leaving the timer activates the wake mechanic: the cat stirs, giving you a visual cue that your focus session was interrupted. The web preview shows a simplified version.' },
        { q: 'What platforms does Gamu Nemu support?', a: 'Gamu Nemu is available on iOS (12.0 or later) and Android (8.0 or later).' },
      ],
    },
  },

  ja: {
    meta: {
      title: 'Gamu Nemu: かわいい猫のポモドーロタイマー',
      description:
        'Gamu Nemu は無料のオフラインファースト猫ポモドーロ集中タイマー。広告なし、アカウント不要。勉強中に猫が眠ります。iOS・Android対応。',
    },
    snackable:
      'Gamu Nemu は、眠る猫があなたの集中に反応する無料のオフラインファーストポモドーロタイマーです。広告なし、アカウント不要。iOS と Android で利用可能。',
    header: { cta: 'アプリを入手' },
    hero: {
      kicker: 'iOS・Android 無料',
      h1: '心地よい猫のポモドーロタイマー',
      sub: 'やさしく集中。勉強中は猫が眠り、離れると目を覚まします。',
    },
    guiltMechanic: {
      kicker: '使い方',
      title: '猫が集中のメカニクス',
      steps: [
        {
          label: 'セッションを開始',
          desc: '猫が丸くなり、眠りにつきます。集中セッションの始まりです。',
        },
        {
          label: 'アプリに集中',
          desc: '集中している間、猫は穏やかに眠り続けます。',
        },
        {
          label: 'アプリを離れると',
          desc: 'Gamu Nemu が目を覚まします。やさしく、罪悪感なく戻ってこられます。',
        },
      ],
    },
    intro: {
      kicker: 'もっとやさしいポモドーロタイマー',
      title: 'ほとんどの生産性タイマーはツールのよう。Gamu Nemu は小さな相棒のよう。',
      body: '集中セッションにシンプルな感情のループを。始めて、今に集中して、眠っている猫を守り、何をしたかの記録とともに終える。',
    },
    features: {
      kicker: '主な機能',
      title: 'プレッシャーではなく、心地よい集中のために',
      items: [
        ['猫ベースの集中フィードバック', 'セッションを始めると猫が休みます。途中でやめると起きてしまいます。'],
        ['勉強と仕事のポモドーロタイマー', '宿題、執筆、コーディング、読書、日常のタスクにクラシックな集中リズムを。'],
        ['タスクとプロジェクト', 'セッション前にやることを計画し、集中ルーティンを整理。'],
        ['生産性ダイアリー', '完了したセッションを作業記録に。'],
        ['集中オーラと進捗', 'やさしい進捗フィードバック、連続記録、実績で一貫性を実感。'],
        ['かわいいアンロック', 'マンチカン、Shadow Neko、オレンジ猫、ヒマラヤン、ブリティッシュショートヘアなど猫パックと日本の季節をイメージした背景でカスタマイズ。'],
        ['オフラインファーストのプライバシー', 'コア体験にアカウント不要。集中データはデバイスに保存されます。'],
        ['多言語対応', 'Gamu Nemu を英語、日本語、ポルトガル語、スペイン語で使用可能。'],
      ],
    },
    useCases: {
      kicker: '静かな集中のために',
      title: '勉強、仕事、クリエイティブな作業に一つの穏やかなタイマーを',
      items: ['勉強', '宿題と試験準備', 'リモートワーク', '執筆', '読書', 'コーディング', 'クリエイティブな練習', '毎日のディープワーク'],
    },
    privacy: {
      kicker: 'プライバシー重視の設計',
      title: 'ソーシャルフィードではなく、個人的な集中の相棒',
      body: 'Gamu Nemu はソーシャルフィードやチーム生産性プラットフォームではなく、個人的な集中の相棒として設計されています。意図的に静かで、ローカルファースト、低プレッシャーな体験です。',
    },
    mikenchiStory: {
      kicker: 'キャラクターストーリー',
      title: 'Gamu Nemu の心地よい世界に登場する猫、Mikenchi',
      body: 'Mikenchi には専用のストーリーページがあります。この Gamu Nemu の猫を、より穏やかなキャラクター視点で紹介しています。',
      cta: 'Mikenchi の物語を見る',
    },
    comparison: {
      kicker: '正直な比較',
      title: 'Gamu Nemu を選ぶ理由',
      headers: ['機能', 'Gamu Nemu', '一般的な広告付きタイマー', '一般的なサブスクリプションアプリ'],
      rows: [
        ['広告', '100%広告なし', '頻繁な動画・ポップアップ広告', '有料プランのみ広告なし'],
        ['プライバシー', 'アカウント不要、100%ローカル、追跡なし', 'サードパーティデータ収集', 'クラウドアカウント必須、利用状況追跡あり'],
        ['価格', '無料（オプションの一回限り購入あり）', '無料だが広告で頻繁に中断', '高額な定期サブスクリプション'],
        ['オフライン使用', '完全オフライン、インターネット不要', '広告依存でオフライン不可なことも', 'クラウド同期に接続が必要'],
        ['データ所有権', '全データはデバイスに保存', 'データは広告ネットワークと共有', 'データはプロバイダーサーバーに保存'],
      ],
    },
    previewNote: {
      kicker: 'このプレビューについて',
      title: 'モバイルアプリの軽量デモ',
      body: 'このページは Gamu Nemu の軽量インタラクティブプレビューです。完全なモバイルアプリではありません。タイマーは通常速度で動作し、一部はデモ用に簡略化されています。',
    },
    store: {
      kicker: 'Gamu Nemu を入手',
      title: 'Gamu Nemu で次の集中セッションを始めよう',
      body: 'Gamu Nemu を iOS または Android でダウンロード。勉強、執筆、コーディング、読書、日々のディープワークに優しい猫のポモドーロタイマーを。',
    },
    footer: 'Gamu Nemu は Gamu Blocks が開発しています。このサイトは Cookie や解析ツールを使用していません。',
    faq: {
      kicker: 'よくある質問',
      title: 'Gamu Nemu についての質問',
      items: [
        { q: 'Gamu Nemu とは？', a: 'Gamu Nemu はポモドーロタイマーと眠る猫のメカニクスを組み合わせた心地よい集中の相棒です。集中中は猫が眠り、離れると目を覚まします。' },
        { q: 'ポモドーロテクニックとは？', a: 'ポモドーロテクニックは、通常25分の集中インターバルと短い休憩を繰り返す時間管理法です。Gamu Nemu は15・25・45分のセッションをサポートしています。' },
        { q: 'Gamu Nemu は無料ですか？', a: 'はい。コア体験は完全無料です。オプションの一回限り購入で追加の猫の種類と季節の背景がアンロックされます。' },
        { q: 'Gamu Nemu はオフラインで動作しますか？', a: 'はい。モバイルアプリはオフラインファースト・ローカルファーストで設計されており、コア機能にインターネット接続は不要です。' },
        { q: 'データはクラウドにバックアップされますか？', a: 'クラウド同期は不要です。すべての集中データ、タスク履歴、セッション記録はデフォルトでデバイスに保存されます。アカウントは必要ありません。' },
        { q: 'Gamu Nemu はADHDの集中ルーティンに使えますか？', a: '短いポモドーロインターバル、視覚的フィードバック、Gamu Nemu のような低プレッシャーなメカニクスが集中習慣の構築に役立つと感じるADHDのユーザーが多くいます。アラームや罰ではなく、やさしい感情的な合図を使います。Gamu Nemu は医療機器ではなく、ADHD やその他の医学的状態の診断、治療、緩和、予防を目的としたものではありません。' },
        { q: 'Gamu Nemu のプライバシー保護は？', a: 'Gamu Nemu はアカウント不要、個人データ収集なし、広告なし、外部サーバーへの情報送信なし。すべてデバイスに保存されます。' },
        { q: 'Gamu Nemu は勉強に使えますか？', a: 'はい。宿題、試験準備、読書、長時間のディープワークの学習タイマーとして最適です。' },
        { q: '集中をやめると猫は反応しますか？', a: 'モバイルアプリでは、タイマーを離れると起床メカニクスが発動し、集中セッションが中断されたことを視覚的に知らせます。ウェブプレビューは簡略版です。' },
        { q: '対応プラットフォームは？', a: 'Gamu Nemu はiOS（12.0以降）とAndroid（8.0以降）に対応しています。' },
      ],
    },
  },

  pt: {
    meta: {
      title: 'Gamu Nemu: Timer Pomodoro com Gato',
      description:
        'Gamu Nemu é um timer Pomodoro offline-first gratuito com gato. Sem anúncios, sem conta. Seu gato dorme quando você estuda. iOS e Android.',
    },
    snackable:
      'Gamu Nemu é um timer Pomodoro offline-first gratuito onde um gato dormindo reage às suas sessões de foco. Sem anúncios, sem conta. Disponível no iOS e Android.',
    header: { cta: 'Baixar App' },
    hero: {
      kicker: 'Gratuito para iOS e Android',
      h1: 'O Timer Pomodoro com Gatinho',
      sub: 'Foque com gentileza. Seu gato dorme enquanto você estuda, e acorda quando você vai embora.',
    },
    guiltMechanic: {
      kicker: 'Como funciona',
      title: 'Seu gato é a mecânica de foco',
      steps: [
        {
          label: 'Inicie uma sessão',
          desc: 'Seu gato se enrola e adormece. Sua sessão de foco começa.',
        },
        {
          label: 'Fique no app',
          desc: 'O gato continua dormindo tranquilamente enquanto você permanece focado.',
        },
        {
          label: 'Saia do app',
          desc: 'Gamu Nemu acorda: um lembrete gentil para você voltar.',
        },
      ],
    },
    intro: {
      kicker: 'Um timer Pomodoro mais gentil',
      title: 'A maioria dos timers de produtividade parecem ferramentas. Gamu Nemu parece um pequeno companheiro.',
      body: 'Ele dá à sua sessão de foco um ciclo emocional simples: comece, fique presente, proteja o gato dormindo, e termine com um registro mais claro do que você trabalhou.',
    },
    features: {
      kicker: 'Recursos principais',
      title: 'Feito para foco aconchegante, não pressão',
      items: [
        ['Feedback de foco com gato', 'Comece uma sessão e seu gato descansa enquanto você trabalha. Pare antes e o Munchkin acorda.'],
        ['Timer Pomodoro para estudo e trabalho', 'Use um ritmo clássico de foco para tarefas, escrita, programação, leitura ou rotinas diárias.'],
        ['Tarefas e projetos', 'Planeje o que quer terminar antes de cada sessão e mantenha sua rotina de foco organizada.'],
        ['Diário de produtividade', 'Transforme sessões concluídas em um registro pessoal do que você trabalhou.'],
        ['Aura de foco e progresso', 'Veja a consistência crescer com feedback gentil, sequências e conquistas.'],
        ['Desbloqueios fofos', 'Personalize com raças de gatos (Munchkin, Shadow Neko, Gato Laranja, Himalayan, British Shorthair) e fundos sazonais inspirados nas estações japonesas.'],
        ['Privacidade offline-first', 'Nenhuma conta é necessária. Seus dados de foco ficam no seu dispositivo.'],
        ['Experiência localizada', 'Use Gamu Nemu em inglês, japonês, português ou espanhol.'],
      ],
    },
    useCases: {
      kicker: 'Feito para foco tranquilo',
      title: 'Um timer calmo para estudo, trabalho e rotinas criativas',
      items: ['Estudar', 'Lição de casa e preparação para provas', 'Trabalho remoto', 'Escrita', 'Leitura', 'Programação', 'Prática criativa', 'Rotinas diárias de trabalho focado'],
    },
    privacy: {
      kicker: 'Privacidade por design',
      title: 'Um companheiro pessoal de foco, não um feed social',
      body: 'Gamu Nemu é projetado como um companheiro pessoal de foco, não um feed social ou plataforma de produtividade em equipe. A experiência é intencionalmente tranquila, local-first e de baixa pressão.',
    },
    mikenchiStory: {
      kicker: 'História do personagem',
      title: 'Conheça Mikenchi, um dos gatos do mundo aconchegante de Gamu Nemu',
      body: 'Mikenchi tem uma página própria com uma visão mais calma e focada no personagem deste gato de Gamu Nemu.',
      cta: 'Ver a história de Mikenchi',
    },
    comparison: {
      kicker: 'Comparação honesta',
      title: 'Por que escolher Gamu Nemu',
      headers: ['Recurso', 'Gamu Nemu', 'Timers Típicos com Anúncios', 'Apps de Assinatura Padrão'],
      rows: [
        ['Anúncios', '100% sem anúncios', 'Anúncios frequentes em vídeo e pop-up', 'Sem anúncios apenas no plano pago'],
        ['Privacidade', 'Sem conta, 100% local, sem rastreamento', 'Coleta de dados de terceiros', 'Conta na nuvem obrigatória e rastreamento de uso'],
        ['Preço', 'Gratuito, compras únicas opcionais', 'Gratuito mas com interrupções frequentes', 'Assinatura recorrente cara'],
        ['Uso offline', 'Totalmente offline, sem internet', 'Varia, frequentemente dependente de anúncios', 'Sincronização na nuvem requer conexão'],
        ['Propriedade dos dados', 'Todos os dados ficam no seu dispositivo', 'Dados compartilhados com redes de anúncios', 'Dados armazenados nos servidores do provedor'],
      ],
    },
    previewNote: {
      kicker: 'Sobre este preview',
      title: 'Um demo leve do app móvel',
      body: 'Esta página é um preview interativo leve do Gamu Nemu. Não é o app móvel completo. O timer roda em velocidade normal, enquanto telas, desbloqueios e algumas interações são simplificados para demonstração.',
    },
    store: {
      kicker: 'Baixe Gamu Nemu',
      title: 'Comece sua próxima sessão de foco com Gamu Nemu',
      body: 'Baixe Gamu Nemu para iOS ou Android e use um timer Pomodoro gentil com gato para estudar, escrever, programar, ler e trabalho focado.',
    },
    footer: 'Gamu Nemu é desenvolvido por Gamu Blocks. Este site não usa cookies nem análises.',
    faq: {
      kicker: 'Perguntas frequentes',
      title: 'Perguntas sobre Gamu Nemu',
      items: [
        { q: 'O que é Gamu Nemu?', a: 'Gamu Nemu é um companheiro de foco aconchegante que combina um timer Pomodoro com a mecânica de um gato dormindo. O gato descansa enquanto você foca e acorda se você sair.' },
        { q: 'O que é a Técnica Pomodoro?', a: 'A Técnica Pomodoro é um método de gerenciamento de tempo onde você trabalha em intervalos focados, geralmente 25 minutos, seguidos de uma pausa curta. Gamu Nemu suporta sessões de 15, 25 e 45 minutos.' },
        { q: 'Gamu Nemu é gratuito?', a: 'Sim. A experiência principal é completamente gratuita. Compras únicas opcionais desbloqueiam raças adicionais de gatos e fundos sazonais.' },
        { q: 'Gamu Nemu funciona offline?', a: 'Sim. O app móvel é projetado com foco offline-first e local-first. Nenhuma conexão com internet é necessária para qualquer recurso principal.' },
        { q: 'Meus dados são salvos na nuvem?', a: 'Não é necessária sincronização na nuvem. Todos os seus dados de foco, histórico de tarefas e registros de sessões ficam no seu dispositivo por padrão. Nenhuma conta é necessária.' },
        { q: 'Gamu Nemu funciona para rotinas de foco com TDAH?', a: 'Muitos usuários com TDAH descobrem que intervalos curtos de Pomodoro, feedback visual e uma mecânica de baixa pressão como Gamu Nemu ajudam a criar hábitos de foco. O app usa sinais emocionais gentis, não alarmes ou penalidades. Gamu Nemu não é um dispositivo médico e não se destina a diagnosticar, tratar, curar ou prevenir o TDAH ou qualquer outra condição médica.' },
        { q: 'Como Gamu Nemu protege minha privacidade?', a: 'Gamu Nemu não requer conta, não coleta dados pessoais, não exibe anúncios e não transmite informações para servidores externos. Tudo fica no seu dispositivo.' },
        { q: 'Posso usar Gamu Nemu para estudar?', a: 'Sim. Gamu Nemu funciona bem como timer de estudo para tarefas, preparação de provas, leitura e sessões longas de trabalho focado.' },
        { q: 'O gato reage quando paro de me focar?', a: 'No app móvel, sair do timer ativa a mecânica de despertar: o gato mexe, dando uma pista visual de que sua sessão foi interrompida. O preview web mostra uma versão simplificada.' },
        { q: 'Quais plataformas o Gamu Nemu suporta?', a: 'Gamu Nemu está disponível no iOS (12.0 ou posterior) e Android (8.0 ou posterior).' },
      ],
    },
  },

  es: {
    meta: {
      title: 'Gamu Nemu: Temporizador Pomodoro con Gato',
      description:
        'Gamu Nemu es un temporizador Pomodoro offline-first gratuito con gato. Sin anuncios, sin cuenta. Tu gato duerme cuando estudias. iOS y Android.',
    },
    snackable:
      'Gamu Nemu es un temporizador Pomodoro offline-first gratuito donde un gato durmiendo reacciona a tus sesiones de enfoque. Sin anuncios, sin cuenta. Disponible en iOS y Android.',
    header: { cta: 'Obtener App' },
    hero: {
      kicker: 'Gratis para iOS y Android',
      h1: 'El Temporizador Pomodoro con Gatito',
      sub: 'Enfócate con gentileza. Tu gato duerme mientras estudias, y se despierta cuando te vas.',
    },
    guiltMechanic: {
      kicker: 'Cómo funciona',
      title: 'Tu gato es la mecánica de enfoque',
      steps: [
        {
          label: 'Inicia una sesión',
          desc: 'Tu gato se acurruca y se queda dormido. Tu sesión de enfoque comienza.',
        },
        {
          label: 'Permanece en la app',
          desc: 'El gato sigue durmiendo tranquilamente mientras estás enfocado.',
        },
        {
          label: 'Sales de la app',
          desc: 'Gamu Nemu se despierta: un recordatorio gentil para que vuelvas.',
        },
      ],
    },
    intro: {
      kicker: 'Un temporizador Pomodoro más suave',
      title: 'La mayoría de los temporizadores de productividad se sienten como herramientas. Gamu Nemu se siente como un pequeño compañero.',
      body: 'Le da a tu sesión de enfoque un ciclo emocional simple: comienza, permanece presente, protege al gato durmiendo, y termina con un registro más claro de lo que trabajaste.',
    },
    features: {
      kicker: 'Características principales',
      title: 'Hecho para enfoque acogedor, no presión',
      items: [
        ['Retroalimentación de enfoque con gato', 'Inicia una sesión y tu gato descansa mientras trabajas. Detente antes y Munchkin se despierta.'],
        ['Temporizador Pomodoro para estudio y trabajo', 'Usa un ritmo clásico de enfoque para tareas, escritura, programación, lectura o rutinas diarias.'],
        ['Tareas y proyectos', 'Planifica lo que quieres terminar antes de cada sesión y mantén tu rutina de enfoque organizada.'],
        ['Diario de productividad', 'Convierte sesiones completadas en un registro personal de lo que trabajaste.'],
        ['Aura de enfoque y progreso', 'Observa la consistencia crecer con retroalimentación suave, rachas y logros.'],
        ['Desbloqueos lindos', 'Personaliza con razas de gatos (Munchkin, Shadow Neko, Gato Naranja, Himalayan, British Shorthair) y fondos estacionales inspirados en las estaciones japonesas.'],
        ['Privacidad offline-first', 'No se requiere cuenta. Tus datos de enfoque permanecen en tu dispositivo.'],
        ['Experiencia localizada', 'Usa Gamu Nemu en inglés, japonés, portugués o español.'],
      ],
    },
    useCases: {
      kicker: 'Hecho para enfoque tranquilo',
      title: 'Un temporizador tranquilo para estudio, trabajo y rutinas creativas',
      items: ['Estudiar', 'Tareas y preparación de exámenes', 'Trabajo remoto', 'Escritura', 'Lectura', 'Programación', 'Práctica creativa', 'Rutinas diarias de trabajo profundo'],
    },
    privacy: {
      kicker: 'Privacidad por diseño',
      title: 'Un compañero personal de enfoque, no un feed social',
      body: 'Gamu Nemu está diseñado como un compañero personal de enfoque, no un feed social o plataforma de productividad de equipo. La experiencia es intencionalmente tranquila, local-first y de baja presión.',
    },
    mikenchiStory: {
      kicker: 'Historia del personaje',
      title: 'Conoce a Mikenchi, uno de los gatos del mundo acogedor de Gamu Nemu',
      body: 'Mikenchi tiene una página dedicada con una mirada más tranquila y centrada en este gato de Gamu Nemu.',
      cta: 'Ver la historia de Mikenchi',
    },
    comparison: {
      kicker: 'Comparación honesta',
      title: 'Por qué elegir Gamu Nemu',
      headers: ['Característica', 'Gamu Nemu', 'Temporizadores Típicos con Anuncios', 'Apps de Suscripción Estándar'],
      rows: [
        ['Anuncios', '100% sin anuncios', 'Anuncios frecuentes en video y pop-up', 'Sin anuncios solo en el plan de pago'],
        ['Privacidad', 'Sin cuenta, 100% local, sin rastreo', 'Recopilación de datos de terceros', 'Cuenta en la nube obligatoria y rastreo de uso'],
        ['Precio', 'Gratis, compras únicas opcionales', 'Gratis pero con interrupciones frecuentes', 'Costosa suscripción recurrente'],
        ['Uso sin conexión', 'Completamente offline, sin internet', 'Varía, a menudo dependiente de anuncios', 'La sincronización en la nube requiere conexión'],
        ['Propiedad de datos', 'Todos los datos permanecen en tu dispositivo', 'Datos compartidos con redes publicitarias', 'Datos almacenados en servidores del proveedor'],
      ],
    },
    previewNote: {
      kicker: 'Sobre esta vista previa',
      title: 'Un demo ligero de la app móvil',
      body: 'Esta página es una vista previa interactiva ligera de Gamu Nemu. No es la app móvil completa. El temporizador funciona a velocidad normal, mientras que las pantallas, desbloqueos y algunas interacciones están simplificadas para demostración.',
    },
    store: {
      kicker: 'Obtén Gamu Nemu',
      title: 'Comienza tu próxima sesión de enfoque con Gamu Nemu',
      body: 'Descarga Gamu Nemu para iOS o Android y usa un temporizador Pomodoro suave con gato para estudiar, escribir, programar, leer y trabajo profundo.',
    },
    footer: 'Gamu Nemu está hecho por Gamu Blocks. Este sitio no usa cookies ni análisis.',
    faq: {
      kicker: 'Preguntas frecuentes',
      title: 'Preguntas sobre Gamu Nemu',
      items: [
        { q: '¿Qué es Gamu Nemu?', a: 'Gamu Nemu es un compañero de enfoque acogedor que combina un temporizador Pomodoro con la mecánica de un gato durmiendo. El gato descansa mientras te enfocas y se despierta si te vas.' },
        { q: '¿Qué es la Técnica Pomodoro?', a: 'La Técnica Pomodoro es un método de gestión del tiempo donde trabajas en intervalos enfocados, generalmente 25 minutos, seguidos de un descanso corto. Gamu Nemu soporta sesiones de 15, 25 y 45 minutos.' },
        { q: '¿Es Gamu Nemu gratuito?', a: 'Sí. La experiencia principal es completamente gratuita. Las compras únicas opcionales desbloquean razas adicionales de gatos y fondos estacionales.' },
        { q: '¿Gamu Nemu funciona sin conexión?', a: 'Sí. La app móvil está diseñada con enfoque offline-first y local-first. No se requiere conexión a internet para ninguna función principal.' },
        { q: '¿Mis datos se guardan en la nube?', a: 'No se requiere sincronización en la nube. Todos tus datos de enfoque, historial de tareas y registros de sesiones permanecen en tu dispositivo por defecto. No se necesita ninguna cuenta.' },
        { q: '¿Gamu Nemu funciona para rutinas de enfoque con TDAH?', a: 'Muchos usuarios con TDAH encuentran que los intervalos cortos de Pomodoro, el feedback visual y una mecánica de baja presión como Gamu Nemu ayudan a crear hábitos de enfoque. La app usa señales emocionales suaves, no alarmas ni penalizaciones. Gamu Nemu no es un dispositivo médico y no está destinado a diagnosticar, tratar, curar ni prevenir el TDAH ni ninguna otra afección médica.' },
        { q: '¿Cómo protege Gamu Nemu mi privacidad?', a: 'Gamu Nemu no requiere cuenta, no recopila datos personales, no muestra anuncios y no transmite información a servidores externos. Todo permanece en tu dispositivo.' },
        { q: '¿Puedo usar Gamu Nemu para estudiar?', a: 'Sí. Gamu Nemu funciona bien como temporizador de estudio para tareas, preparación de exámenes, lectura y sesiones largas de trabajo profundo.' },
        { q: '¿El gato reacciona cuando dejo de enfocarme?', a: 'En la app móvil, salir del temporizador activa la mecánica de despertar: el gato se mueve, dando una pista visual de que tu sesión fue interrumpida. La vista previa web muestra una versión simplificada.' },
        { q: '¿Qué plataformas soporta Gamu Nemu?', a: 'Gamu Nemu está disponible en iOS (12.0 o posterior) y Android (8.0 o posterior).' },
      ],
    },
  },
};
