import { StaticImageData } from 'next/image'
import { slugify } from '@/utils/slugify'
import ExportedImage from 'next-image-export-optimizer'

export interface TrivialMechsMap {
  [key: string]: {
    label: string
    description: string
    strategy: string
    type?: 'tank' | 'healer'
    image?: StaticImageData
    video?: string
  }
}

export function TrivialMechs({ duty, mechs }: { duty: string; mechs: TrivialMechsMap }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-center'>
      {Object.values(mechs).map((mech, ind) => (
        <div
          key={ind}
          className='flex flex-col justify-between shadow-sm rounded-md border-1 border-[rgba(0,0,0,0.1)] bg-[#f6f6f6] dark:bg-base-300'
          style={{
            borderTop:
              mech.type === 'healer'
                ? 'solid 5px #359735'
                : mech.type === 'tank'
                  ? 'solid 5px #3971c8'
                  : 'solid 1px rgba(0,0,0,0.1)',
          }}
        >
          <div className='pt-3 pb-2 grow'>
            <h3 id={slugify(mech.label)} className='uppercase'>
              {mech.label}
            </h3>
            <p>{mech.description}</p>
            <p className='font-bold mt-3'>{mech.strategy}</p>
          </div>
          {mech.image && (
            <ExportedImage
              src={mech.image}
              alt={mech.label + ' image'}
              className='rounded-b-[calc(var(--radius-md)_-_2px)]'
            />
          )}
          {mech.video && (
            <video
              tabIndex={0}
              autoPlay
              muted
              loop
              preload='auto'
              playsInline
              className='rounded-b-[calc(var(--radius-md)_-_2px)] focus:scale-[2] focus:rounded-md focus:border-2 transition duration-300 ease-out cursor-pointer'
            >
              <source
                src={`./duties/${duty}/av1/${mech.video}`}
                type='video/webm;codecs="av01.0.05M.08"'
              />
              <source src={`./duties/${duty}/vp9/${mech.video}`} type='video/webm;codecs="vp9"' />
              <source src={mech.video} type='video/webm' />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  )
}
