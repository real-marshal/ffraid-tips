'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export function CoreMechVideo({
  duty,
  filename,
  note,
}: {
  duty: string
  filename: string
  note?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const { inView, ref: wrapperRef } = useInView({
    onChange: (inView) => {
      if (!ref.current) return

      if (inView) {
        if (ref.current.readyState !== HTMLMediaElement.HAVE_ENOUGH_DATA) {
          console.log(`loading ${ref.current.currentSrc}`)
          ref.current.load()
        } else {
          console.log(`playing ${ref.current.currentSrc}`)
          void ref.current.play()
        }
      } else {
        console.log(`pausing ${ref.current.currentSrc}`)
        ref.current.pause()
      }
    },
  })

  useEffect(() => {
    setTimeout(() => {
      if (ref.current && !ref.current.autoplay) {
        console.log(`deferred loading of ${ref.current.currentSrc}`)
        ref.current.load()
      }
    }, 3000)
  }, [])

  return (
    <div ref={wrapperRef}>
      <video
        ref={ref}
        tabIndex={0}
        muted
        loop
        preload='metadata'
        playsInline
        className='rounded-md focus:scale-[1.2] focus:rounded-md transition duration-300 ease-out cursor-pointer'
        onLoadedData={() => {
          if (!ref.current) return

          if (inView) {
            void ref.current.play()
          }
        }}
      >
        <source src={`./duties/${duty}/av1/${filename}`} type='video/webm;codecs="av01.0.05M.08"' />
        <source src={`./duties/${duty}/vp9/${filename}`} type='video/webm;codecs="vp9"' />
        Your browser does not support the video tag.
      </video>
      {note && <p className='italic text-center'>{note}</p>}
    </div>
  )
}
