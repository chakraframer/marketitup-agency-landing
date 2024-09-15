import CompanyScroll from '@/components/CompanyScroll'
import Hero from '@/components/home/Hero'
import JourneyCards from '@/components/home/JourneyCards'
import PricingCards from '@/components/home/PricingCards'
import UserStories from '@/components/home/UserStories'
import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import TeamsHome from '@/components/TeamsHome'
import { Heading, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Stack
      width={'full'}
      my={10}
      gap={{
        base: 10,
        lg: 20,
      }}
    >
      <SeoMetaHead
        title={'Home'}
        description={`Welcome to ${process.env.NEXT_PUBLIC_SITENAME}, your trusted partner for digital marketing solutions. Our services are designed to help businesses thrive in the online landscape.`}
        canonical={`/`}
      />
      <MyContainer
        as={Stack}
        width={'full'}
        gap={{
          base: 10,
          lg: 20,
        }}
      >
        <Hero />
        <JourneyCards />
      </MyContainer>
      <UserStories />
      <CompanyScroll />
      <TeamsHome/>
      <MyContainer as={Stack} gap={10}>
        <Heading textAlign={'center'}>Our Pricing</Heading>
        <PricingCards />
      </MyContainer>
    </Stack>
  )
}
