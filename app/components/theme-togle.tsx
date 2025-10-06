import { useContext } from "react"
import { Button } from "~/components/ui/button"
import { Icon } from "~/components/icons"
import { ThemeContext } from "~/lib/theme-context"

export const ThemeToggle = () => {

  const { theme, setTheme } = useContext(ThemeContext);



  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Icon name="lu:sun" className="h-4 w-4" />
      case 'dark':
        return <Icon name="lu:moon" className="h-4 w-4" />
      case 'system':
        return <Icon name="lu:monitor" className="h-4 w-4" />
      default:
        return <Icon name="lu:sun" className="h-4 w-4" />
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
    >
      {getIcon()}
    </Button>
  )
}
