import type { MDXComponents } from 'mdx/types'
import { slugify } from '@/utils/slugify'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <span className='relative before:absolute before:-inset-1 before:block before:-skew-x-20 before:bg-rose-800 text-white w-max ml-5 my-2 before:border-l-7 before:border-black'>
        <h2 id={slugify(children)} className='relative mx-[20px]'>
          {children}
        </h2>
      </span>
    ),
    h3: ({ children }) => <h3 id={slugify(children)}>{children}</h3>,
    ...components,
  }
}
