import { useEffect, useState, type ChangeEvent } from 'react'

export function useDarkModeSwitch() {
  const [darkSide, setDarkSide] = useState<boolean>(false)
  
  useEffect(() => {
    const root = window.document.documentElement

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark')
      setDarkSide(true)
    } else {
      root.classList.remove('dark')
      setDarkSide(false)
    }
  }, [])

  const toggleDarkMode: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void = (event, checked) => {
    setDarkSide(checked)
    const root = window.document.documentElement

    if (checked) {
      localStorage.setItem('theme', 'dark')
      root.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      root.classList.remove('dark')
    }
  }

  return {
    darkSide,
    toggleDarkMode
  }
}
