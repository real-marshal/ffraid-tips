'use client'

export function saveValue(key: string, value: string | boolean) {
  window.localStorage.setItem(key, value.toString())
}

export function getString(key: string): string | null {
  return window.localStorage.getItem(key)
}

export function getBoolean(key: string): boolean | null {
  const value = window.localStorage.getItem(key)

  if (!value) return null

  if (value !== 'true' && value !== 'false') {
    throw new Error(`${key} is not a boolean`)
  }

  return value === 'true'
}
