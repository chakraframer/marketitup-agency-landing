import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { Heading, Stack, Text } from '@chakra-ui/react'

export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'Privacy Policy'}
        description={`Welcome to ${process.env.NEXT_PUBLIC_SITENAME}, your trusted partner for digital marketing solutions. This Privacy Policy governs your use of our services, so please read them carefully.`}
        canonical={`/privacy-policy`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>Privacy Policy</Heading>
        <Stack spacing={8} fontSize={'lg'}>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>
              We are committed to protecting your privacy
            </Heading>
            <Text>
              We collect the minimum amount of information about you that is
              commensurate with providing you with a satisfactory service. This
              policy indicates the type of processes that may result in data
              being collected about you. Your use of this website gives us the
              right to collect that information.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Information Collected</Heading>
            <Text>
              We may collect any or all of the information that you give us
              depending on the type of transaction you enter into, including
              your name, address, telephone number, and email address, together
              with data about your use of the website. Other information that
              may be needed from time to time to process a request may also be
              collected as indicated on the website.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Information Use</Heading>
            <Text>
              We use the information collected primarily to process the task for
              which you visited the website. All reasonable precautions are
              taken to prevent unauthorised access to this information. This
              safeguard may require you to provide additional forms of identity
              should you wish to obtain information about your account details.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Cookies</Heading>
            <Text>
              Your Internet browser has the in-built facility for storing small
              files – “cookies” – that hold information which allows a website
              to recognise your account. Our website takes advantage of this
              facility to enhance your experience. You have the ability to
              prevent your computer from accepting cookies but, if you do,
              certain functionality on the website may be impaired.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Disclosing Information</Heading>
            <Text>
              We do not disclose any personal information obtained about you
              from this website to third parties unless you permit us to do so
              by ticking the relevant boxes in registration or competition
              forms. We may also use the information to keep in contact with you
              and inform you of developments associated with us. You will be
              given the opportunity to remove yourself from any mailing list or
              similar device. If at any time in the future we should wish to
              disclose information collected on this website to any third party,
              it would only be with your knowledge and consent.
              <br />
              <br />
              We may from time to time provide information of a general nature
              to third parties – for example, the number of individuals visiting
              our website or completing a registration form, but we will not use
              any information that could identify those individuals.
              <br />
              <br />
              In addition {process.env.NEXT_PUBLIC_SITENAME} may work with third
              parties for the purpose of delivering targeted behavioural
              advertising to the {process.env.NEXT_PUBLIC_SITENAME} website.
              Through the use of cookies, anonymous information about your use
              of our websites and other websites will be used to provide more
              relevant adverts about goods and services of interest to you.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Changes to this Policy</Heading>
            <Text>
              Any changes to our Privacy Policy will be placed here and will
              supersede this version of our policy. We will take reasonable
              steps to draw your attention to any changes in our policy.
              However, to be on the safe side, we suggest that you read this
              document each time you use the website to ensure that it still
              meets with your approval.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Contacting Us</Heading>
            <Text>
              If you have any questions about our Privacy Policy, or if you want
              to know what information we have collected about you, please email
              us at {process.env.NEXT_PUBLIC_CONTACT_EMAIL}. You can also
              correct any factual errors in that information or require us to
              remove your details form any list under our control.
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Third Party Processors</Heading>
            <Text>
              Our carefully selected partners and service providers may process
              personal information about you on our behalf.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MyContainer>
  )
}
