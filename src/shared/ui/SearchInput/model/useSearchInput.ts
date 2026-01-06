import type { ChangeEvent } from 'react';

export const useSearchInput = (onChange: (value: string) => void) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange('');
  };

  return {
    handleChange,
    handleClear
  };
};
