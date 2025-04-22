import { HTMLAttributes, ReactNode } from 'react'

// const bgColor = '#301f07'
// const borderColor = '#cd8203'

export function CastBar({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <div className='relative w-100 h-5 bg-[#301f07] border-2 border-[#cd8203] [box-shadow:_0px_-1px_3px_1px_#cd8203] mb-5 scale-[0.7] xl:scale-[1.2]'>
      <div className='absolute w-35 h-4 bg-white'></div>
      <h3
        className='absolute left-[100%] top-[-50%] -translate-x-full text-white text-nowrap [text-shadow:_0px_0px_0px_#cd8203,_0px_0px_3px_#cd8203] text-3xl [line-height:_unset]'
        {...props}
      >
        {children}
      </h3>
    </div>
  )
}
