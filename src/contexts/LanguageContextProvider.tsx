import { useState, createContext } from "react";

type LanguageContextProps = {
  language: string;
  setLanguage: (language: string) => void;
};
export const LanguageContext = createContext<LanguageContextProps | null>(null);

export default function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState("de");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
