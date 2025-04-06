'use client'

import { StaticImageData } from 'next/image'
import { slugify } from '@/utils/slugify'
import ExportedImage from 'next-image-export-optimizer'
import { createContext, ReactNode, useContext } from 'react'

const DutyNameContext = createContext('')

export function TrivialMechs({ duty, children }: { duty: string; children: ReactNode }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-center'>
      <DutyNameContext.Provider value={duty}>{children}</DutyNameContext.Provider>
    </div>
  )
}

export function TrivialMech({
  label,
  children,
  type,
  image,
  video,
}: {
  label: string
  children: ReactNode
  type?: 'tank' | 'healer'
  image?: StaticImageData
  video?: string
}) {
  const duty = useContext(DutyNameContext)

  return (
    <div
      className='flex flex-col justify-between shadow-sm rounded-md border-1 border-[rgba(0,0,0,0.1)] bg-[#f6f6f6] dark:bg-base-300'
      style={{
        borderTop:
          type === 'healer'
            ? 'solid 5px #359735'
            : type === 'tank'
              ? 'solid 5px #3971c8'
              : 'solid 1px rgba(0,0,0,0.1)',
      }}
    >
      <div className='pt-3 pb-2 grow px-5'>
        <h3 id={slugify(label)} className='uppercase'>
          {label}
        </h3>
        {children}
      </div>
      {image && (
        <ExportedImage
          src={image}
          alt={label + ' image'}
          className='rounded-b-[calc(var(--radius-md)_-_2px)]'
        />
      )}
      {video && (
        <video
          tabIndex={0}
          autoPlay
          muted
          loop
          preload='auto'
          playsInline
          className='rounded-b-[calc(var(--radius-md)_-_2px)] focus:scale-[2] focus:rounded-md focus:border-2 transition duration-300 ease-out cursor-pointer'
        >
          <source src={`./duties/${duty}/av1/${video}`} type='video/webm;codecs="av01.0.05M.08"' />
          <source src={`./duties/${duty}/vp9/${video}`} type='video/webm;codecs="vp9"' />
          <source src={video} type='video/webm' />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

export function TrivialMechDesc({ children }: { children: ReactNode }) {
  return <p>{children}</p>
}

export function TrivialMechStrat({ children }: { children: ReactNode }) {
  return <p className='font-bold mt-3'>{children}</p>
}
