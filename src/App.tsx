import { AppPreview } from './components/AppPreview';
import { Header } from './components/Header';
import { SeoSections } from './components/SeoSections';
import { StoreButtons } from './components/StoreButtons';

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="app-first" id="preview" aria-labelledby="page-title">
          <h1 className="sr-only" id="page-title">
            Gamu Neko - Cute Cat Pomodoro Focus Timer
          </h1>
          <AppPreview />
        </section>
        <SeoSections />
        <section className="store-section" id="get-the-app" aria-labelledby="store-title">
          <div>
            <p className="section-kicker">Get Gamu Neko</p>
            <h2 id="store-title">Start your next focus session with Gamu Neko</h2>
            <p>
              Download Gamu Neko for iOS or Android and use a gentle cat Pomodoro
              timer for studying, writing, coding, reading, and daily deep work.
            </p>
          </div>
          <StoreButtons />
        </section>
      </main>
      <footer className="site-footer">
        <a href="https://www.gamublocks.com/" rel="noreferrer">
          <img src="./assets/GamuBlocks.png" alt="Gamu Blocks" />
        </a>
        <p>Gamu Neko is built by Gamu Blocks. This site uses no cookies or analytics.</p>
      </footer>
    </>
  );
}

export default App;
