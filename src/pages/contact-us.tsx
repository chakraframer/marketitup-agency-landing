import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Divider, Heading, Stack, Text } from '@chakra-ui/react'
const sitename = process.env.NEXT_PUBLIC_SITENAME
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL
export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'Contact Us'}
        description={`Welcome to ${sitename}, your trusted partner for digital marketing solutions. Get in touch with us to discuss your project requirements, ask questions, or just say hello.`}
        canonical={`/contact-us`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        {/* <Heading>Got An Idea? Get in Touch. </Heading> */}
        <Heading textAlign={'center'}>Ready to Grow? Get in Touch.</Heading>
        <Stack spacing={4} fontSize={'lg'}>
          <Text>
            Whether you have a question about our services, want to discuss a
            potential project, or just want to say hello, we'd love to hear from
            you.
          </Text>
          <Text>
            Please drop an email with your details & requirements to{' '}
            {contactEmail}
          </Text>
          <Divider />
          <Text>
            At {sitename}, we believe that communication is key to building
            successful relationships. Whether you're a potential client, an
            existing customer, or a valued partner, we welcome the opportunity
            to connect with you. Our team is dedicated to providing exceptional
            service and support, and we're here to assist you with any
            questions, requests, or feedback you may have. Feel free to reach
            out to us via phone, email, or the contact form below, and we'll
            respond promptly to address your needs and ensure your satisfaction.
          </Text>
          <Text>
            Your success is our top priority, and we're committed to delivering
            results that exceed your expectations. Whether you're looking to
            elevate your online presence, generate more leads, or increase your
            sales, {sitename} is here to help you achieve your goals.
          </Text>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
