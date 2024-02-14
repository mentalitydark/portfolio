import { usePathname as nextUsePathname } from 'next/navigation'

import type { SelectChangeEvent } from '@mui/material'

import { usePathname, useRouter } from '@/src/navigation'

export function useLanguageSelect() {
  const router = useRouter()
  const pathname = nextUsePathname()
  const currentPathName = usePathname()
  const language = pathname.includes('en-us') ? 'en-us' : 'pt-br'

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === language)
      return

    router.replace(currentPathName, { locale: event.target.value })
  }

  return {
    language,
    handleChange
  }
}
