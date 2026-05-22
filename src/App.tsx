import { AppPreview } from './components/AppPreview';
import { Header } from './components/Header';
import { SeoSections } from './components/SeoSections';
import { StoreButtons } from './components/StoreButtons';
import { LocaleProvider, useLocale } from './locale';

const pageCopy = {
  en: {
    h1: 'Gamu Neko - Cute Cat Pomodoro Focus Timer',
    storeKicker: 'Get Gamu Neko',
    storeTitle: 'Start your next focus session with Gamu Neko',
    storeBody: 'Download Gamu Neko for iOS or Android and use a gentle cat Pomodoro timer for studying, writing, coding, reading, and daily deep work.',
    footer: 'Gamu Neko is built by Gamu Blocks. This site uses no cookies or analytics.',
  },
  ja: {
    h1: 'Gamu Neko - かわいい猫のポモドーロ集中タイマー',
    storeKicker: 'Gamu Neko を入手',
    storeTitle: 'Gamu Neko で次の集中セッションを始めよう',
    storeBody: 'Gamu Neko を iOS または Android でダウンロード。勉強、執筆、コーディング、読書、日々のディープワークに優しい猫のポモドーロタイマーを。',
    footer: 'Gamu Neko は Gamu Blocks が開発しています。このサイトは Cookie や解析ツールを使用していません。',
  },
  pt: {
    h1: 'Gamu Neko - Timer Pomodoro Fofo com Gato',
    storeKicker: 'Baixe Gamu Neko',
    storeTitle: 'Comece sua próxima sessão de foco com Gamu Neko',
    storeBody: 'Baixe Gamu Neko para iOS ou Android e use um timer Pomodoro gentil com gato para estudar, escrever, programar, ler e trabalho focado.',
    footer: 'Gamu Neko é desenvolvido por Gamu Blocks. Este site não usa cookies nem análises.',
  },
  es: {
    h1: 'Gamu Neko - Temporizador Pomodoro con Gato',
    storeKicker: 'Obtén Gamu Neko',
    storeTitle: 'Comienza tu próxima sesión de enfoque con Gamu Neko',
    storeBody: 'Descarga Gamu Neko para iOS o Android y usa un temporizador Pomodoro suave con gato para estudiar, escribir, programar, leer y trabajo profundo.',
    footer: 'Gamu Neko está hecho por Gamu Blocks. Este sitio no usa cookies ni análisis.',
  },
} as const;

function AppContent() {
  const { locale } = useLocale();
  const t = pageCopy[locale];
  return (
    <>
      <Header />
      <main>
        <section className="app-first" id="preview" aria-labelledby="page-title">
          <h1 className="sr-only" id="page-title">
            {t.h1}
          </h1>
          <AppPreview />
        </section>
        <SeoSections />
        <section className="store-section" id="get-the-app" aria-labelledby="store-title">
          <div>
            <p className="section-kicker">{t.storeKicker}</p>
            <h2 id="store-title">{t.storeTitle}</h2>
            <p>{t.storeBody}</p>
          </div>
          <StoreButtons />
        </section>
      </main>
      <footer className="site-footer">
        <a href="https://www.gamublocks.com/" rel="noreferrer">
          <img src="./assets/GamuBlocks.png" alt="Gamu Blocks" />
        </a>
        <p>{t.footer}</p>
      </footer>
    </>
  );
}

function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
}

export default App;
