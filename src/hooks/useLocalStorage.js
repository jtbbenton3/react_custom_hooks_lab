import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}