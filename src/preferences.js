export function readPreference(key, allowedValues, fallback) {
  try {
    const value = localStorage.getItem(key);
    return allowedValues.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

export function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Keep settings usable when browser storage is unavailable.
  }
}
