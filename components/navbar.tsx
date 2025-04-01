'use client'

import Link from 'next/link'
import ExportedImage from 'next-image-export-optimizer'
import { StaticImageData } from 'next/image'

export interface NavbarLink {
  label: string
  longLabel?: string
  chips?: string[]
  href: string
}

export interface NavbarSubmenuSection {
  label: string
  items: NavbarLink[]
}

export interface NavbarSubmenu {
  sections?: NavbarSubmenuSection[]
  items?: NavbarLink[]
  backgroundImage: StaticImageData
}

export interface NavbarSubmenuItem {
  label: string
  submenu: NavbarSubmenu
}

export interface NavbarProps {
  items: (NavbarLink | NavbarSubmenuItem)[]
  className?: string
}

export function Navbar({ items, className }: NavbarProps) {
  return (
    <nav className={`navbar shadow-sm z-100 ${className}`}>
      <div className='navbar-start'>
        <MobileNavbar items={items} />
        <Link href='/' className='btn btn-ghost text-3xl hidden lg:inline'>
          FFraid.tips
        </Link>
      </div>
      <div className='navbar-center'>
        <Link href='/' className='btn btn-ghost text-3xl lg:hidden'>
          FFraid.tips
        </Link>
        <DesktopNavbar items={items} />
      </div>
      <div className='navbar-end'></div>
    </nav>
  )
}

function MobileNavbar({ items }: NavbarProps) {
  return (
    <div className='dropdown'>
      <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h8m-8 6h16'
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className='menu flex-nowrap menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow overflow-auto bg-base-300'
        style={{
          height: 'calc(100svh - 64px)',
        }}
      >
        {items.map((item, ind) => (
          <li key={ind}>
            <span className='text-base font-bold'>{item.label}</span>
            {'submenu' in item && (
              <ul className='p-1'>
                {item.submenu.sections
                  ? item.submenu.sections.map((section, ind) => (
                      <li key={ind}>
                        <span className='menu-title uppercase'>{section.label}</span>
                        <ul className='p-1'>
                          {section.items?.map(({ href, label, longLabel, chips }, ind) => (
                            <li
                              key={ind}
                              onClick={() => (document.activeElement as HTMLElement).blur()}
                            >
                              <Link href={href} key={ind} className='inline-block'>
                                <div className='flex flex-col'>
                                  <div className='flex items-center justify-between grow font-bold'>
                                    <span className='text-base'>{label}</span>
                                    {chips?.map((chip, ind) => (
                                      <span key={ind} className='uppercase'>
                                        {chip}
                                      </span>
                                    ))}
                                  </div>
                                  <span className='text-nowrap text-neutral-content font-normal'>
                                    {longLabel}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))
                  : item.submenu.items?.map(({ href, label }, ind) => (
                      <li key={ind} onClick={() => (document.activeElement as HTMLElement).blur()}>
                        <Link href={href} key={ind}>
                          {label}
                        </Link>
                      </li>
                    ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DesktopNavbar({ items }: NavbarProps) {
  return (
    <ul className='menu menu-horizontal px-1 hidden lg:flex'>
      {items.map((item, ind) => (
        <li key={ind} className='*:border-l-2 last:*:border-r-2'>
          {'submenu' in item ? (
            <div className='dropdown dropdown-center text-2xl font-bold p-0 -skew-x-10 rounded-none'>
              <div tabIndex={0} role='button' className='px-6 py-3'>
                {item.label}
              </div>
              <div
                className='dropdown-content cursor-default h-130 relative w-auto grow'
                tabIndex={0}
              >
                <ExportedImage
                  src={item.submenu.backgroundImage}
                  alt='bg image'
                  className='w-full h-full absolute z-0 brightness-20 object-cover'
                  priority
                />
                <div className='w-full flex flex-row bg-[rgba(0,0,0,0.8)] z-2 bg-whtie'>
                  {item.submenu.sections
                    ? item.submenu.sections.map((section, ind) => (
                        <ul key={ind} className='menu ms-0 text-nowrap flex-nowrap overflow-auto'>
                          <span className='menu-title uppercase text-xl'>{section.label}</span>
                          {section.items?.map(({ href, label, longLabel, chips }, ind) => (
                            <li
                              key={ind}
                              onClick={() => (document.activeElement as HTMLElement).blur()}
                            >
                              <Link href={href} key={ind} className='px-5 inline-block'>
                                <div className='flex flex-col [min-width:_200px]'>
                                  <div className='flex items-center justify-between'>
                                    <span className='text-xl'>{label}</span>
                                    {chips?.map((chip, ind) => (
                                      <span key={ind} className='uppercase'>
                                        {chip}
                                      </span>
                                    ))}
                                  </div>
                                  <span className='text-base text-nowrap text-neutral-content font-normal'>
                                    {longLabel}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))
                    : item.submenu.items?.map(({ href, label }, ind) => (
                        <li
                          key={ind}
                          onClick={() => (document.activeElement as HTMLElement).blur()}
                        >
                          <Link href={href} key={ind}>
                            {label}
                          </Link>
                        </li>
                      ))}
                </div>
              </div>
            </div>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </li>
      ))}
    </ul>
  )
}
