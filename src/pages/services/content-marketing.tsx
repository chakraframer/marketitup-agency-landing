import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, Stack, Text } from '@chakra-ui/react'

export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'Content Marketing Services'}
        description={`Welcome to ${process.env.NEXT_PUBLIC_SITENAME}, your trusted partner for digital marketing solutions. Our content marketing services are designed to help you create compelling content that engages your audience and drives results.`}
        canonical={`/services/content-marketing`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>
          Our Content Marketing Services Includes
        </Heading>
        <Stack gap={8} fontSize={'lg'}>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Content Strategy Development</Heading>
            <Text>
              Successful content marketing begins with a robust strategy. We
              collaborate with you to understand your business goals, target
              audience, and competitive landscape, crafting a personalized
              content strategy that aligns with your objectives and sets you
              apart from competitors.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Content Creation</Heading>
            <Text>
              Quality content is the cornerstone of every successful marketing
              campaign. Our team of skilled writers, designers, and video
              producers create compelling, high-quality content tailored to
              engage your audience, including blog posts, articles, white
              papers, infographics, and video content.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>
              Content Distribution and Promotion
            </Heading>
            <Text>
              Creating great content is just the beginning. We ensure your
              content reaches your target audience through strategic
              distribution and promotion across the right channels, including
              social media, email marketing, and your website, maximizing
              visibility and engagement.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>SEO Content Writing</Heading>
            <Text>
              Optimize your online presence with SEO-friendly content that
              enhances your visibility in search engine results. We integrate
              targeted keywords seamlessly into your content, ensuring it not
              only engages readers but also ranks well on Google, driving
              organic traffic to your site.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Social Media Content</Heading>
            <Text>
              Amplify your brand's voice with engaging social media content
              designed to captivate your audience on platforms where they spend
              their time. From creating regular posts to managing full-scale
              campaigns, we help you build a strong social media presence that
              fosters community and engagement.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>
              Performance Measurement and Analytics
            </Heading>
            <Text>
              We believe in the power of data to inform and drive content
              strategy. By continuously monitoring and analyzing the performance
              of your content, we provide insights and make data-driven
              adjustments to enhance its effectiveness and ensure your marketing
              goals are met.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
