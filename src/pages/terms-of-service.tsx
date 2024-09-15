import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
const sitename = process.env.NEXT_PUBLIC_SITENAME
export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'Terms of Service'}
        description={`Welcome to ${sitename}, your trusted partner for digital marketing solutions. These Terms of Service ("Terms") govern your use of our services, so please read them carefully.`}
        canonical={`/terms-of-service`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>Terms of Service</Heading>
        <Stack spacing={8} fontSize={'lg'}>
          <Text>
            Welcome to {sitename}, your trusted partner for digital marketing
            solutions. These Terms of Service ("Terms") govern your use of our
            services, so please read them carefully.
          </Text>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Introduction</Heading>
            <Text>
              By accessing or using the services provided by {sitename}, you
              agree to be bound by these Terms. If you do not agree to these
              Terms, please refrain from using our services.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Services Offered</Heading>
            <Text>
              {sitename} provides a comprehensive range of digital marketing
              services to help businesses thrive in the online landscape. Our
              services include but are not limited to:
            </Text>

            <UnorderedList spacing={2}>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Search Engine Optimization (SEO):
                </Text>{' '}
                We employ advanced strategies and techniques to optimize your
                website's visibility in search engine results, driving organic
                traffic and improving search engine rankings.
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Pay-Per-Click (PPC) Advertising:
                </Text>{' '}
                Our PPC advertising campaigns are designed to target specific
                keywords and demographics, maximizing your return on investment
                (ROI) and driving relevant traffic to your website.{' '}
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Social Media Marketing:
                </Text>{' '}
                We craft tailored social media strategies to engage your
                audience, build brand awareness, and foster meaningful
                connections across various platforms including Facebook,
                Instagram, Twitter, LinkedIn, and more.
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Content Marketing:
                </Text>{' '}
                Our content marketing services focus on creating compelling,
                valuable content that resonates with your target audience,
                driving engagement, and establishing your brand as an authority
                in your industry.
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Email Marketing:
                </Text>{' '}
                We develop personalized email marketing campaigns to nurture
                leads, drive conversions, and foster long-term relationships
                with your customers through targeted and relevant communication.
              </ListItem>
              <ListItem>
                <Text as={'span'} fontWeight={'600'}>
                  {' '}
                  Web Design and Development:
                </Text>{' '}
                Our experienced team specializes in designing and developing
                custom websites that are visually stunning, user-friendly, and
                optimized for performance, ensuring a seamless browsing
                experience for your visitors.
              </ListItem>
            </UnorderedList>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Client Responsibilities</Heading>
            <Text>
              To ensure the success of our partnership, clients are expected to:
            </Text>
            <UnorderedList spacing={2}>
              <ListItem>
                Provide accurate and up-to-date information regarding their
                business objectives, target audience, and industry.
              </ListItem>
              <ListItem>
                Collaborate with {sitename} in the development and execution of
                marketing strategies, providing feedback and insights as
                necessary.
              </ListItem>
              <ListItem>
                Grant necessary access to relevant platforms and resources
                required for service delivery.
              </ListItem>
            </UnorderedList>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Fees and Payments</Heading>
            <Text>
              Our fees for services rendered are outlined in the agreement
              between {sitename} and the client. Payment terms, schedules, and
              methods will be specified in the agreement.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Confidentiality</Heading>
            <Text>
              {sitename} respects the confidentiality of client information and
              agrees not to disclose any proprietary or confidential information
              without prior consent.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Termination</Heading>
            <Text>
              Either party may terminate the agreement upon written notice if
              the other party breaches any material provision of these Terms.
              Termination terms will be outlined in the agreement between
              {sitename} and the client.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Limitation of Liability</Heading>
            <Text>
              {sitename} shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or
              related to the services provided, regardless of the cause of
              action.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Indemnification</Heading>
            <Text>
              You agree to indemnify and hold harmless {sitename}, its
              affiliates, officers, employees, and agents from and against any
              and all claims, liabilities, damages, losses, or expenses arising
              out of or related to your use of our services.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Modifications to Terms</Heading>
            <Text>
              {sitename} reserves the right to modify or update these Terms at
              any time without prior notice. Your continued use of our services
              after any such changes constitutes your acceptance of the new
              Terms.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
