'use client'

import ExportedImage from 'next-image-export-optimizer'
import { StaticImageData } from 'next/image'
import {
  createContext,
  CSSProperties,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Arrow, Triangle } from '@/components/plan-svgs'
import { Cog, Pause, Play } from '@/components/icons'
import { getBoolean, getString, saveValue } from '@/utils/persistent-storage'

type EntityType =
  | 'melee'
  | 'ranged'
  | 'healer'
  | 'tank'
  | 'rect'
  | 'circle'
  | 'arrow'
  | 'triangle'
  | 'ring'
  | 'text'
  | 'checkerboard'

interface SpecialValues {
  text?: string
}

export interface WaapiEntity {
  type: EntityType
  duration: number
  specialValues?: SpecialValues
  initialValues: CSSProperties
  keyframes: Keyframe[]
}

export type Role = 'tank' | 'healer' | 'melee' | 'ranged'

export interface AnimatedSchematicState {
  role: Role | 'any'
  shouldHideOtherRoles: boolean
  shouldShowControlsOnHoverOnly: boolean
}

export type AnimatedSchematicAction =
  | { type: 'merge_state'; state: Partial<AnimatedSchematicState> }
  | { type: 'set_role'; role: Role | 'any' }
  | { type: 'toggle_should_hide_other_roles' }
  | { type: 'toggle_should_show_controls_on_hover_only' }

interface AnimatedSchematicContext {
  animatedSchematicsState: AnimatedSchematicState
  dispatch: (action: AnimatedSchematicAction) => void
}

export const animatedSchematicsInitialState: AnimatedSchematicState = {
  role: 'any',
  shouldHideOtherRoles: false,
  shouldShowControlsOnHoverOnly: false,
}

export function animatedSchematicsReducer(
  state: AnimatedSchematicState,
  action: AnimatedSchematicAction
) {
  switch (action.type) {
    case 'merge_state': {
      return { ...state, ...action.state }
    }
    case 'set_role': {
      saveValue('role', action.role)
      return { ...state, role: action.role }
    }
    case 'toggle_should_hide_other_roles': {
      saveValue('shouldHideOtherRoles', !state.shouldHideOtherRoles)
      return { ...state, shouldHideOtherRoles: !state.shouldHideOtherRoles }
    }
    case 'toggle_should_show_controls_on_hover_only': {
      saveValue('shouldShowControlsOnHoverOnly', !state.shouldShowControlsOnHoverOnly)
      return { ...state, shouldShowControlsOnHoverOnly: !state.shouldShowControlsOnHoverOnly }
    }
  }
}

export const AnimatedSchematicContext = createContext<AnimatedSchematicContext | null>(null)

export default function AnimatedSchematic({
  src,
  alt,
  waapiObj,
  className,
}: {
  src: StaticImageData
  alt: string
  waapiObj: WaapiEntity[]
  className?: string
}) {
  const waapiObjRefs = useRef<(HTMLElement | SVGElement | null)[]>([])
  const animations = useRef<Animation[]>([])
  const { animatedSchematicsState, dispatch } = useContext(AnimatedSchematicContext) ?? {}
  const [isHovered, setHovered] = useState(false)

  useEffect(() => {
    waapiObj.forEach((entity, ind) => {
      animations.current[ind] = waapiObjRefs.current![ind]!.animate(entity.keyframes, {
        duration: entity.duration,
        iterations: Infinity,
      })
    })
  }, [waapiObj])

  useEffect(() => {
    const restoredState = {
      role: getString('role'),
      shouldHideOtherRoles: getBoolean('shouldHideOtherRoles'),
      shouldShowControlsOnHoverOnly: getBoolean('shouldShowControlsOnHoverOnly'),
    } as const

    for (const key in restoredState) {
      restoredState[key as keyof AnimatedSchematicState] === null &&
        delete restoredState[key as keyof AnimatedSchematicState]
    }

    dispatch?.({ type: 'merge_state', state: restoredState as Partial<AnimatedSchematicState> })
  }, [dispatch])

  return (
    <div
      className={`relative @container animated-schematic ${className}`}
      style={useMemo(
        () => ({ width: '100%', aspectRatio: src.width / src.height }),
        [src.height, src.width]
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) =>
        ((e as unknown as PointerEvent).pointerType === 'touch' ||
          !(e as unknown as PointerEvent).pointerType) &&
        setHovered((isHovered) => !isHovered)
      }
    >
      <ExportedImage src={src} alt={alt} className='absolute' />
      {(!animatedSchematicsState?.shouldShowControlsOnHoverOnly || isHovered) && (
        <Controls
          animations={animations.current}
          dispatch={dispatch}
          animatedSchematicsState={animatedSchematicsState}
        />
      )}
      {waapiObj.map((entity, ind) => {
        switch (entity.type) {
          case 'arrow':
            return (
              <Arrow
                key={ind}
                style={entity.initialValues as CSSProperties}
                ref={(ref) => {
                  waapiObjRefs.current[ind] = ref
                }}
              />
            )
          case 'triangle':
            return (
              <Triangle
                key={ind}
                style={entity.initialValues as CSSProperties}
                ref={(ref) => {
                  waapiObjRefs.current[ind] = ref
                }}
              />
            )
          case 'text':
            return (
              <span
                key={ind}
                style={entity.initialValues as CSSProperties}
                ref={(ref) => {
                  waapiObjRefs.current[ind] = ref
                }}
              >
                {entity.specialValues!.text}
              </span>
            )
          case 'tank':
          case 'healer':
          case 'melee':
          case 'ranged':
            return (
              <ExportedImage
                src={`images/anim_${entity.type}.png`}
                width={46}
                height={46}
                alt={alt}
                className='absolute'
                key={ind}
                style={{
                  ...(entity.initialValues as CSSProperties),
                  ...(animatedSchematicsState?.role === entity.type
                    ? {
                        scale: 1.5,
                        filter: 'brightness(1.25) contrast(1.25)',
                        zIndex: 10,
                        outline: '2px solid black',
                        outlineOffset: '-2px',
                        borderRadius: '20%',
                      }
                    : animatedSchematicsState?.role !== 'any' && {
                        filter: 'grayscale(0.75)',
                        ...(animatedSchematicsState?.shouldHideOtherRoles
                          ? { display: 'none' }
                          : {}),
                      }),
                }}
                ref={(ref) => {
                  waapiObjRefs.current[ind] = ref
                }}
              />
            )
          default:
            return (
              <div
                key={ind}
                style={entity.initialValues as CSSProperties}
                ref={(ref) => {
                  waapiObjRefs.current[ind] = ref
                }}
              ></div>
            )
        }
      })}
    </div>
  )
}

function Controls({
  animations,
  dispatch,
  animatedSchematicsState,
}: {
  animations: Animation[] | null
  dispatch?: (action: AnimatedSchematicAction) => void
  animatedSchematicsState?: AnimatedSchematicState
}) {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className='absolute left-[1%] top-[99%] -translate-y-full flex flex-row justify-between w-[98%] align-end z-[1]'>
      {isPlaying ? (
        <button
          onClick={() => {
            setIsPlaying(false)
            animations?.forEach((anim) => anim.pause())
            console.log(animations?.[0].currentTime)
          }}
          className='cursor-pointer bg-[#00000080] hover:bg-[#000000a0] rounded-md p-1'
        >
          <Pause className='size-6' />
        </button>
      ) : (
        <button
          onClick={() => {
            setIsPlaying(true)
            animations?.forEach((anim) => anim.play())
          }}
          className='cursor-pointer bg-[#00000080] hover:bg-[#000000a0] rounded-md p-1'
        >
          <Play className='size-6' />
        </button>
      )}
      <div className='flex flex-row items-center gap-1'>
        <div className='bg-[#00000080] p-1 px-2 rounded-md h-[100%] flex flex-row items-center'>
          <span>role:</span>
          <div className='dropdown dropdown-top dropdown-hover leading-3' data-theme='dark'>
            <span tabIndex={0} role='button' className='cursor-pointer ml-2'>
              {animatedSchematicsState?.role ?? 'any'}
            </span>
            <div
              tabIndex={0}
              className='menu dropdown-content bg-base-300 rounded-box z-1 shadow-sm leading-5'
            >
              <ul className='flex flex-col font-bold'>
                {(['any', 'tank', 'healer', 'melee', 'ranged'] as const)
                  .filter((r) => r !== animatedSchematicsState?.role)
                  .map((roleName, ind) => (
                    <li
                      key={ind}
                      className=''
                      onClick={() => dispatch?.({ type: 'set_role', role: roleName })}
                    >
                      <span>{roleName}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className='dropdown max-sm:dropdown-left dropdown-top! lg:dropdown-center dropdown-hover leading-3 cursor-pointer bg-[#00000080] hover:bg-[#000000a0] rounded-md p-1'
          data-theme='dark'
        >
          <div tabIndex={0}>
            <Cog className='size-6' />
          </div>
          <div
            tabIndex={0}
            className='dropdown-content bg-base-300 rounded-box z-1 shadow-sm leading-5 w-[200px]'
          >
            <ul className='menu flex flex-col font-bold'>
              <li onClick={() => dispatch?.({ type: 'toggle_should_hide_other_roles' })}>
                <span className='flex flex-row items-center flex-nowrap justify-between'>
                  Hide other roles
                  <input
                    type='checkbox'
                    className='checkbox'
                    checked={animatedSchematicsState?.shouldHideOtherRoles}
                    readOnly
                  />
                </span>
              </li>
              <li onClick={() => dispatch?.({ type: 'toggle_should_show_controls_on_hover_only' })}>
                <span className='flex flex-row items-center flex-nowrap justify-between'>
                  Show controls on hover/tap only
                  <input
                    type='checkbox'
                    className='checkbox'
                    checked={animatedSchematicsState?.shouldShowControlsOnHoverOnly}
                    readOnly
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
