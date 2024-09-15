import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, Stack, Text } from '@chakra-ui/react'
const sitename = process.env.NEXT_PUBLIC_SITENAME
export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'Our Story'}
        description={`Welcome to ${sitename}, your trusted partner for digital marketing solutions. Discover the journey of ${sitename} from its inception to becoming a leading digital marketing agency.`}
        canonical={`/our-story`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>Our Story</Heading>
        <Stack gap={8} fontSize={'lg'}>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>2019: The Foundation</Heading>
            <Text>
              In the vibrant heart of Mumbai, a small group of 4-5 digital
              marketing enthusiasts decided to make their mark in the vast
              digital landscape. With a shared passion for technology and
              innovation, {sitename} was born. Our humble beginnings were rooted
              in providing specialized SEO services to legal professionals and
              court clients.
            </Text>
            <Text>
              This niche focus allowed us to hone our skills, understand the
              unique challenges of the sector, and deliver tailored solutions
              that made a real difference.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>2020: Expansion and Exploration</Heading>
            <Text>
              As our reputation grew, so did our ambition. The digital world was
              evolving rapidly, and we were keen to not just keep up but lead
              the way. Our team began exploring new tools and technologies,
              expanding our expertise beyond SEO.
            </Text>
            <Text>
              This year was about laying the groundwork for the diverse array of
              services we wanted to offer. It was a year of learning,
              experimenting, and building — both our team and our capabilities.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>2021: Diversification and Growth</Heading>
            <Text>
              Our explorations led us to new horizons. We officially expanded
              our services to include a broader range of digital marketing
              solutions. From content marketing to PPC advertising, social media
              management, and web development, {sitename} transformed from a
              niche SEO service provider into a full-service digital marketing
              agency.
            </Text>
            <Text>
              This expansion was not just in services but also in our client
              base, reaching beyond the legal sector to industries like retail,
              healthcare, education, and more.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>2022: Innovation and Recognition</Heading>
            <Text>
              With a comprehensive suite of services, our focus shifted towards
              innovation. We started developing proprietary tools to enhance our
              digital marketing efforts, leveraging AI, machine learning, and
              analytics to provide smarter, more effective solutions for our
              clients.
            </Text>
            <Text>
              This year marked a significant milestone for {sitename} as we
              received industry recognition for our innovative approaches and
              results-driven strategies.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>2023: The Present and Beyond</Heading>
            <Text>
              Today, {sitename} stands as a testament to the power of youthful
              energy, passion, and relentless pursuit of excellence. Our team
              has grown, our services have evolved, but our core mission remains
              the same: to empower businesses to achieve their digital marketing
              goals with innovative, effective solutions.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
