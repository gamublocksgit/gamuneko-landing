import { createContext, useContext, useState, type ReactNode } from 'react';

export type Locale = 'en' | 'ja' | 'pt' | 'es';

export const languageNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  pt: 'Português',
  es: 'Español',
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
