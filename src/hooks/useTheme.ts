import { useEffect, useState } from 'react'

const useTheme = (): ['light' | 'dark', Function] => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggleTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return [ theme, toggleTheme ]
}

export default useTheme