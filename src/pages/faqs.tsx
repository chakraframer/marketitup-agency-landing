import MyContainer from '@/components/layouts/MyContainer'
import SeoMetaHead from '@/components/layouts/SeoMetaHead'
import { generalFaqs } from '@/data/faqs.data'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Icon,
  Stack,
} from '@chakra-ui/react'
import { FaTimes, FaPlus } from 'react-icons/fa'

export default function Page() {
  return (
    <MyContainer>
      <SeoMetaHead
        title={'FAQs'}
        description={`Welcome to ${process.env.NEXT_PUBLIC_SITENAME}, your trusted partner for digital marketing solutions. Get answers to frequently asked questions about our services and offerings.`}
        canonical={`/faqs`}
      />
      <Stack
        width={'full'}
        my={10}
        gap={{ base: 10, lg: 20 }}
      >
        <Heading textAlign={'center'}>FAQs</Heading>
        <Accordion allowToggle defaultIndex={[0]}>
          {generalFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              border={'none'}
              borderBottom={'0.5px solid'}
              borderColor={'gray.700'}
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton px={0} py={3}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight={'medium'}
                    >
                      {faq.question}
                    </Box>
                    {isExpanded ? (
                      <Icon fontSize="12px" as={FaTimes} color={'orange.300'} />
                    ) : (
                      <Icon fontSize="12px" as={FaPlus} />
                    )}
                  </AccordionButton>

                  <AccordionPanel px={0} color={'gray.300'}>
                    {faq.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </MyContainer>
  )
}
