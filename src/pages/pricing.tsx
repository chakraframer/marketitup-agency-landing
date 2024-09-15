import PricingCards from '@/components/home/PricingCards'
import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, Stack, Text } from '@chakra-ui/react'
export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'Pricing'}
        description={`Welcome to ${process.env.NEXT_PUBLIC_SITENAME}, your trusted partner for digital marketing solutions. Our pricing plans are designed to deliver exceptional value and results for your business. Whether you're a small business or a large enterprise, we have a plan that's right for you.`}
        canonical={`/pricing`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>
          Your business deserves the{' '}
          <Text as={'span'} layerStyle={'textYellowOrangeGradient'}>
            best pricing plans
          </Text>
        </Heading>
        <Stack spacing={4} fontSize={'lg'} textAlign={'center'}>
          <Text>
            Pink a plan that suits your business needs and budget. Our pricing
            plans are designed to deliver exceptional value and results for your
            business. Whether you're a small business or a large enterprise, we
            have a plan that's right for you.
          </Text>
          <Text>
            Join 2.1k businesses that trust us to drive their online success.
          </Text>
        </Stack>
        <PricingCards />
      </Stack>
    </MyContainer>
  )
}
