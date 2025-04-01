import { ReactNode } from 'react'

export function CoreMech({ children }: { children: ReactNode }) {
  return <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>{children}</div>
}

export function CoreMechDesc({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-row gap-1'>
      <h4 className='text-lg inline-block text-[#bbb] uppercase border-r-1 [writing-mode:_vertical-lr] [text-orientation:_upright] scale-x-[0.8]'>
        q
      </h4>
      <p className='ml-2'>{children}</p>
    </div>
  )
}

export function CoreMechStrat({ children }: { children: ReactNode }) {
  return (
    <div className='flex flex-row gap-1'>
      <h4 className='text-lg inline-block text-[#bbb] uppercase border-r-1 [writing-mode:_vertical-lr] [text-orientation:_upright] scale-x-[0.8]'>
        a
      </h4>
      <p className='font-bold ml-2'>{children}</p>
    </div>
  )
}
