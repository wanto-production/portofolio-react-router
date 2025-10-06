import { createContext } from "react"

export const ThemeContext = createContext<{ theme: string, setTheme: (t: string) => void }>({
  theme: "",
  setTheme: () => { }
})
