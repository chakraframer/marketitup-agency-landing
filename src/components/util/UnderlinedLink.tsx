import { ChakraStyledOptions, Link, LinkProps } from '@chakra-ui/react'

interface Props extends Omit<LinkProps, 'children'> {
  href: string
  label: string
  underlineColor?: ChakraStyledOptions['color']
}

export default function UnderlinedLink({
  href,
  label,
  underlineColor = 'white',
  ...props
}: Props) {
  return (
    <>
      <Link
        href={href}
        display={'inline-block'}
        _after={{
          content: '""',
          display: 'block',
          height: '1.5px',
          background: underlineColor,
          bottom: 0,
          left: 0,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'all 0.3s ease',
        }}
        _hover={{
          _after: {
            transform: 'scaleX(1)',
          },
        }}
        {...props}
      >
        {label}
      </Link>
    </>
  )
}
