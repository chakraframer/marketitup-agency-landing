import { Box } from '@chakra-ui/react'
import React, { createContext, useEffect, useRef, useState } from 'react'

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect()
    const x = (event.clientX - left - width / 2) / 25
    const y = (event.clientY - top - height / 2) / 25
    containerRef.current.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true)
    if (!containerRef.current) return
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <Box
        style={{
          perspective: '500px',
        }}
      >
        <Box
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: 'preserve-3d',
            transition: 'all 0.1s linear',
          }}
        >
          {children}
        </Box>
      </Box>
    </MouseEnterContext.Provider>
  )
}

// export const CardBody = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div
//       style={{
//         transformStyle: 'preserve-3d',
//       }}
//     >
//       {children}
//     </div>
//   )
// }

// export const CardItem = ({
//   as: Tag = 'div',
//   children,
//   className,
//   translateX = 0,
//   translateY = 0,
//   translateZ = 0,
//   rotateX = 0,
//   rotateY = 0,
//   rotateZ = 0,
//   ...rest
// }: {
//   as?: React.ElementType
//   children: React.ReactNode
//   className?: string
//   translateX?: number | string
//   translateY?: number | string
//   translateZ?: number | string
//   rotateX?: number | string
//   rotateY?: number | string
//   rotateZ?: number | string
//   [key: string]: any
// }) => {
//   const ref = useRef<HTMLDivElement>(null)
//   const [isMouseEntered] = useMouseEnter()

//   useEffect(() => {
//     handleAnimations()
//   }, [isMouseEntered])

//   const handleAnimations = () => {
//     if (!ref.current) return
//     if (isMouseEntered) {
//       ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
//     } else {
//       ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
//     }
//   }

//   return (
//     <Tag
//       ref={ref}
//       style={{
//         transition: 'transform 0.2s linear',
//       }}
//       {...rest}
//     >
//       {children}
//     </Tag>
//   )
// }

export const useMouseEnter = () => {
  const context = React.useContext(MouseEnterContext)
  if (!context) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return context
}
