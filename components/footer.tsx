'use client'

import { LetterIcon, RedditIcon } from '@/components/icons'
import { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='footer footer-center bg-neutral text-neutral-content p-5 gap-7'>
      <div>
        <nav>
          <div className='flex gap-4 align-center justify-center'>
            <div className={`dropdown dropdown-top`}>
              <div
                tabIndex={0}
                role='button'
                className='flex items-center gap-2 hover:text-red-500 cursor-pointer'
              >
                <RedditIcon />
                <p className='font-bold'>reddit</p>
              </div>
              <div
                tabIndex={0}
                className='dropdown-content bg-base-300 rounded-box z-1 p-3 shadow-sm w-[200px]'
              >
                <BotCheckForm obfuscatedValue='YUhSMGNITTZMeTl5WldSa2FYUXVZMjl0TDNVdmNtVmhiRjl0WVhKemFHRnM='>
                  {(actualValue) => (
                    <Link href={actualValue} className='font-bold underline'>
                      link
                    </Link>
                  )}
                </BotCheckForm>
              </div>
            </div>
            <div className={`dropdown dropdown-top`}>
              <div
                tabIndex={0}
                role='button'
                className='flex items-center gap-2 hover:text-indigo-500 cursor-pointer'
              >
                <LetterIcon />
                <p className='font-bold'>email</p>
              </div>
              <div
                tabIndex={0}
                className='dropdown-content bg-base-300 rounded-box z-1 p-3 shadow-sm w-[200px]'
              >
                <BotCheckForm obfuscatedValue='Y21WdFlYSnphR0ZzUUhCeWIzUnZibTFoYVd3dVkyOXQ'>
                  {(actualValue) => <p className='font-bold'>{actualValue}</p>}
                </BotCheckForm>
              </div>
            </div>
          </div>
        </nav>
        <p>© {new Date().getFullYear()} FFraid.tips</p>
        <p className='text-xs/1 opacity-25'>Dawntrail is better than Endwalker</p>
      </div>
    </footer>
  )
}

function BotCheckForm({
  obfuscatedValue,
  children,
}: {
  obfuscatedValue: string
  children: (actualValue: string) => ReactNode
}) {
  const [input, setInput] = useState('')
  const [actualValue, setActualValue] = useState('')

  useEffect(() => {
    if (input.toLowerCase() === window.atob('d3VrIGxhbWF0')) {
      setActualValue(window.atob(window.atob(obfuscatedValue)))
    }
  }, [input, obfuscatedValue])

  return actualValue ? (
    children(actualValue)
  ) : (
    <fieldset className='fieldset py-0'>
      <legend className='fieldset-legend pt-0'> Who is called lamaty'i?</legend>
      <input
        type='text'
        className='input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='bot check'
      />
    </fieldset>
  )
}
