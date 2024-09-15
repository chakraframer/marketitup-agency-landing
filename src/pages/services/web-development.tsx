import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, Stack, Text } from '@chakra-ui/react'

export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'Web Development Services'}
        description={`Welcome to ${process.env.NEXT_PUBLIC_SITENAME}, your trusted partner for digital marketing solutions. Our web development services are designed to help businesses thrive in the online landscape.`}
        canonical="/services/web-development"
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>
          Our Web Development Services Includes
        </Heading>
        <Stack gap={8} fontSize={'lg'}>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Custom Web Development</Heading>
            <Text>
              We specialize in creating custom websites that are tailored to
              your brand's specific needs and goals. From initial concept to
              final launch, we work closely with you to develop a website that
              is both visually appealing and functionally robust.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Responsive Web Design</Heading>
            <Text>
              With the increasing use of smartphones and tablets, a responsive
              website is no longer optional. Our web development team ensures
              your site looks and works perfectly on all devices, providing an
              optimal user experience for everyone.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>eCommerce Solutions</Heading>
            <Text>
              Maximize your online sales with our eCommerce development
              services. We create user-friendly shopping experiences that make
              it easy for customers to browse, select, and purchase your
              products or services online.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Content Management Systems (CMS)</Heading>
            <Text>
              Gain control over your website content with a custom CMS. We
              provide solutions that make it simple for you to update and manage
              content on your website, ensuring it remains fresh and relevant.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Web Application Development</Heading>
            <Text>
              Beyond traditional websites, we also develop custom web
              applications that offer interactive and dynamic user experiences.
              From internal business tools to customer-facing applications, we
              have the expertise to bring your ideas to life.
            </Text>
          </Stack>
          <Stack gap={4}>
            <Heading fontSize={'2xl'}>Website Maintenance and Support</Heading>
            <Text>
              Our relationship doesn't end with your website's launch. We offer
              ongoing maintenance and support services to ensure your website
              continues to perform well and evolve with your business.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
