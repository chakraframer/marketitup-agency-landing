import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, Stack, Text } from '@chakra-ui/react'

export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'Social Media Marketing'}
        description={`Welcome to ${process.env.NEXT_PUBLIC_SITENAME}, your trusted partner for digital marketing solutions. Our social media marketing services are designed to help businesses build a strong online presence and engage with their target audience effectively.`}
        canonical={`/services/social-media-marketing`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>
          Our Social Media Marketing Services Includes
        </Heading>
        <Stack gap={8}>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>
              Social Media Strategy Development
            </Heading>
            <Text>
              Success in social media marketing begins with a solid strategy. We
              work closely with you to understand your business goals, target
              audience, and competitive landscape, crafting a tailored social
              media strategy that aligns with your brand identity and
              objectives.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Content Creation and Curation</Heading>
            <Text>
              Content is king on social media. Our team produces and curates
              high-quality, engaging content tailored to each social media
              platform. From captivating posts and stories to informative videos
              and infographics, we ensure your content resonates with your
              audience and reflects your brand's voice.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Community Management</Heading>
            <Text>
              Building and maintaining a vibrant community is essential. We
              manage your social media profiles, engaging with followers,
              responding to comments, and moderating discussions to foster a
              positive community around your brand.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Social Media Advertising</Heading>
            <Text>
              Amplify your reach with targeted social media advertising. We
              design, implement, and manage ad campaigns across platforms like
              Facebook, Instagram, LinkedIn, and Twitter, focusing on maximizing
              your ROI through detailed targeting and optimization.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Analytics and Reporting</Heading>
            <Text>
              Data-driven insights are vital for refining strategy and proving
              ROI. We provide comprehensive analytics and reporting, giving you
              a clear view of your social media performance, audience
              engagement, and campaign results.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
