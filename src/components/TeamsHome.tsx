import { AspectRatio, Box, Card, Flex, Heading, Image, Stack } from '@chakra-ui/react'
import React from 'react'

export default function TeamsHome() {
  return (
    <Stack >
      <Heading textAlign={'center'}>Our Team</Heading>
      <Flex gap={5}>
        {team.map((member) => (
          <Card key={member.name} gap={2} >
           <AspectRatio ratio={4/3}>
           <Image src={member.imgae} alt={member.name} />
           </AspectRatio>
            <h2>{member.name}</h2>
            <p>{member.position}</p>
            <p>{member.description}</p>
          </Card>
        ))}
      </Flex>
    </Stack>
  )
}



const team = [
    {
        name : "Sohail",
        imgae : "https://img.izismile.com/img/img3/20100428/640/she_makes_random_640_03.jpg",
        position : "Founder & CEO",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod neque non arcu vestibulum, vel dignissim turpis fermentum. "
    },
    {
        name : "Rahul",
        imgae : "https://th.bing.com/th/id/OIP.rDx1klniDH6vMtLMg7-NBQHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        position : "Founder & CEO",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod neque non arcu vestibulum, vel dignissim turpis fermentum. "
    },
    {
        name : "Sahil",
        imgae : "https://th.bing.com/th/id/OIP.NE6BDulxRlj0ftWouaY34AHaE7?w=306&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        position : "Founder & CEO",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod neque non arcu vestibulum, vel dignissim turpis fermentum. "
    },
    {
        name : "Ashfak",
        imgae : "https://th.bing.com/th/id/OIP.nRzRscHtOSvu5hsfyGb0bAHaEK?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        position : "Founder & CEO",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod neque non arcu vestibulum, vel dignissim turpis fermentum. "
    },
]