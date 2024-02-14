'use client'

import { FormControl, MenuItem, Select } from '@mui/material'

import { useLanguageSelect } from './use-language-select'

export const LanguageSelect = () => {
  const { language, handleChange } = useLanguageSelect()

  return (
    <FormControl size='small'>
      <Select
        value={language}
        onChange={handleChange}
        variant='standard'
        IconComponent={() => null}
        inputProps={{ sx: { padding: '0 !important' } }}
        className='text-slate-900 dark:text-slate-300'
      >
        <MenuItem value='en-us'>en-US</MenuItem>
        <MenuItem value='pt-br'>pt-BR</MenuItem>
      </Select>
    </FormControl>
  )
}
