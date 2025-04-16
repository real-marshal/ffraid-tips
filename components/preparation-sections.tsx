import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'
import AnimatedSchematic, { WaapiEntity } from '@/components/animated-schematic'
import ExportedImage from 'next-image-export-optimizer'

export function PreparationSections({
  sections,
}: {
  sections: {
    title: string
    content: ReactNode
    image?: StaticImageData
    imageAlt?: string
    animation?: WaapiEntity[]
    imageLabel?: string
  }[]
}) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center'>
      {sections.map(({ title, content, image, imageAlt, animation, imageLabel }, ind) => (
        <div key={ind} className='max-w-[300px] lg:max-w-[90%] flex flex-col justify-between'>
          <div>
            <p className='font-bold text-lg mb-2'>{title}</p>
            {content}
          </div>
          <div>
            {imageLabel && <p className='font-bold mt-2'>{imageLabel}</p>}
            {animation && image ? (
              <AnimatedSchematic src={image} alt={imageAlt ?? title} waapiObj={animation} />
            ) : (
              image && <ExportedImage src={image} alt={imageAlt ?? title} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
