import { ReactNode } from 'react'

export function Info({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col relative mt-5 rounded-lg ${className}`} data-theme='light'>
      <span
        className='absolute -top-4 left-4 shadow-lg font-bold text-white text-lg/5 lg:text-xl/5 px-1'
        style={{
          textShadow:
            '-1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black, 1px 1px 2px black',
          boxShadow:
            '0px 0px 6px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(0, 0, 0, 0.8), 0px 0px 20px rgba(0, 0, 0, 0.8)',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
      >
        Wuk Lamat
      </span>
      <div className='rounded-lg p-3 bg-[#e3dccd] font-bold inset-shadow-sm border-2 border-gray-500 leading-5 text-base-content text-sm/3 lg:text-base'>
        {children}
      </div>
    </div>
  )
}
