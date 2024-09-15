import { Container, ContainerProps } from '@chakra-ui/react'
interface Props extends Omit<ContainerProps, 'children'> {
  children: React.ReactNode
  as?: React.ElementType // Allow specifying a different components type
}

export default function MyContainer({ children, as, ...props }: Props) {
  return (
    <Container
      as={as}
      px={[4, 8, 12]}
      maxW={{
        lg: 'container.xl',
        xl: 'container.xxl',
      }}
      mx={'auto'}
      {...props}
    >
      {children}
    </Container>
  )
}
