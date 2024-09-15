import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, Stack, Text } from '@chakra-ui/react'

export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'SEO Services'}
        description={`Welcome to ${process.env.NEXT_PUBLIC_SITENAME}, your trusted partner for digital marketing solutions. Our SEO services are designed to help businesses improve their online visibility and drive organic traffic.`}
        canonical={`/services/seo`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>Our SEO Services Includes</Heading>
        <Stack gap={8} fontSize={'lg'}>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Comprehensive SEO Audit</Heading>
            <Text>
              Unlock the full potential of your website with our in-depth SEO
              audits. We meticulously analyze your site's structure, content,
              and backlink profile to identify areas of improvement and devise a
              customized strategy that aligns with your business goals.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Keyword Research & Strategy</Heading>
            <Text>
              Stay ahead of the competition with our strategic keyword research
              services. We identify high-value keywords and phrases that your
              target audience is searching for, ensuring your content ranks
              where it matters most.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>On-Page SEO Optimization</Heading>
            <Text>
              Enhance your website’s performance and user experience with our
              on-page SEO services. From optimizing meta tags and images to
              improving content readability and site structure, we ensure every
              page of your website is fully optimized.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Link Building Services</Heading>
            <Text>
              Elevate your site's authority and search engine ranking with our
              ethical link-building strategies. We focus on acquiring
              high-quality backlinks from reputable sources in your industry,
              boosting your site's credibility and visibility.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Content Marketing & SEO</Heading>
            <Text>
              Drive traffic and engage your audience with SEO-optimized content
              that resonates. Our content marketing services include blog posts,
              articles, infographics, and more, all tailored to highlight your
              brand’s expertise and value.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Local SEO Services</Heading>
            <Text>
              Dominate local search results and attract more customers to your
              doorstep with our local SEO strategies. We optimize your Google My
              Business listing, manage local citations, and create
              location-based content to increase your visibility in local
              searches.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>SEO Reporting & Analytics</Heading>
            <Text>
              Make informed decisions with comprehensive SEO reporting and
              analytics. We provide detailed reports on your website's
              performance, keyword rankings, and ROI, offering insights and
              recommendations for continuous improvement.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
