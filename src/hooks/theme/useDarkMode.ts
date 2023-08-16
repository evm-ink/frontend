import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const prefersDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    if (!prefersDarkMode) {
      localStorage.setItem('theme', 'light')
    }
    return prefersDarkMode
  })

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return [isDarkMode, toggleDarkMode] as const
}

export default useDarkMode
