import { useLocale, languageNames, type Locale } from '../locale';

const headerCopy = {
  en: { cta: 'Get the App' },
  ja: { cta: 'アプリを入手' },
  pt: { cta: 'Baixar App' },
  es: { cta: 'Obtener App' },
} as const;

export function Header() {
  const { locale, setLocale } = useLocale();
  const t = headerCopy[locale];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Gamu Neko home">
        <img src="./assets/app_icon.webp" alt="" />
        <span>Gamu Neko</span>
      </a>
      <nav aria-label="Main navigation">
        <label className="lang-switcher">
          <span className="sr-only">Language</span>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
          >
            {Object.entries(languageNames).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <a className="nav-button" href="#get-the-app">
          {t.cta}
        </a>
      </nav>
    </header>
  );
}
