import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Lazy initialize state from localStorage (or fall back to initialValue)
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  // Whenever key or value changes, persist to localStorage
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}