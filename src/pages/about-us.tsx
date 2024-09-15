import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
const sitename = process.env.NEXT_PUBLIC_SITENAME
export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'About Us'}
        description={`Welcome to ${sitename}, your dedicated partner for digital marketing excellence. Learn more about our mission, approach, and services.`}
        canonical={`/about-us`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>About Us</Heading>
        <Stack spacing={8} fontSize={'lg'}>
          <Text>
            Welcome to {sitename}, your dedicated partner for digital marketing
            excellence. At {sitename}, we are passionate about helping
            businesses achieve their online goals through innovative and
            results-driven digital marketing strategies.
          </Text>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Our Mission</Heading>
            <Text>
              Our mission at {sitename} is to empower businesses of all sizes to
              thrive in the digital landscape. We are committed to delivering
              exceptional results and exceeding our clients' expectations
              through creativity, expertise, and dedication.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Our Approach</Heading>
            <Text>
              At {sitename}, we believe in a client-centric approach that puts
              your business needs and objectives at the forefront of everything
              we do. Our team of digital marketing experts works closely with
              you to understand your unique challenges, goals, and target
              audience, ensuring that every strategy we develop is tailored to
              meet your specific requirements.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>What Sets Us Apart</Heading>

            <UnorderedList spacing={2}>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Expertise:
                </Text>{' '}
                Our team comprises of seasoned professionals with extensive
                experience in all facets of digital marketing, from SEO and PPC
                to social media and content marketing. We stay up-to-date with
                the latest industry trends and best practices to deliver
                cutting-edge solutions that drive results.
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Custom Solutions:
                </Text>{' '}
                We understand that every business is unique, which is why we
                don't believe in one-size-fits-all solutions. Whether you're a
                small startup or a large enterprise, we develop customized
                strategies that align with your business objectives and budget
                constraints.{' '}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Transparent Communication:
                </Text>{' '}
                We believe in open and transparent communication with our
                clients every step of the way. From project kickoff to campaign
                reporting, you can trust us to keep you informed and involved in
                the process, providing regular updates and insights into the
                performance of your digital marketing efforts.
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Measurable Results:
                </Text>{' '}
                We are committed to delivering measurable results that directly
                impact your bottom line. Through comprehensive analytics and
                reporting, we track the success of our campaigns, identify areas
                for improvement, and continuously optimize our strategies to
                ensure maximum ROI for your business.
              </ListItem>
            </UnorderedList>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Our Services</Heading>
            <Text>
              At {sitename}, we offer a full suite of digital marketing services
              designed to help you succeed online. From search engine
              optimization (SEO) and pay-per-click (PPC) advertising to social
              media marketing, content marketing, email marketing, and web
              design and development, we have the expertise and resources to
              elevate your brand and drive meaningful results.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Let's Work Together</Heading>
            <Text>
              Whether you're looking to increase website traffic, generate more
              leads, or boost your online sales, {sitename} is here to help you
              achieve your goals. Contact us today to learn more about our
              services and how we can help your business thrive in the digital
              age.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
