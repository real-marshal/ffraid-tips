'use client'

import { CopyIcon } from '@/components/icons'

const baseUrl = 'ffraid.tips/'

export function UrlBox({ href, className }: { href: string; className?: string }) {
  const link = baseUrl + href

  return (
    <div
      className={`flex flex-col border-1 rounded-lg p-2 px-3 ${className}`}
      style={{ borderColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <p className='text-sm opacity-50'>Quickly access this page using the link:</p>
      <div className='flex flex-row justify-between items-center'>
        <span className='text-xl'>{link}</span>
        <button
          className='btn btn-circle'
          onClick={() => {
            try {
              void window.navigator.clipboard.writeText(link)
            } catch (err) {
              console.error(err)
            }
          }}
        >
          <CopyIcon className='size-5' />
        </button>
      </div>
    </div>
  )
}
