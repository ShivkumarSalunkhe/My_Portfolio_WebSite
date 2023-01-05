import { Heading, HStack, Image, Tag, Text, VStack,TagLabel } from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc,tag,Weburl,Giturl }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      cursor="pointer"
      borderRadius="xl"
      _hover={{ transform: "scale(1.03)", }} transition={"0.2s ease-in-out"}
      boxShadow='dark-lg'
    >
      <Image borderRadius="xl" boxSize='100%' h='400px' src={imageSrc} alt={title} />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize="lg" >
          {description}
        </Text>
        <HStack alignSelf='center' > 
        <Tag borderRadius='full'
          variant='solid'
          colorScheme='green'>
          <TagLabel>{tag[0]}</TagLabel>
          </Tag>
          <Tag borderRadius='full'
          variant='solid'
          colorScheme='green'>
          <TagLabel>{tag[1]}</TagLabel>
          </Tag>
          <Tag borderRadius='full'
          variant='solid'
          colorScheme='green'>
          <TagLabel>{tag[2]}</TagLabel>
          </Tag>
          <Tag borderRadius='full'
          variant='solid'
          colorScheme='green'>
          <TagLabel>{tag[3]}</TagLabel>
          </Tag>
         </HStack>
         
        <HStack spacing={5} alignSelf='center'  >
       <h4>Click Here</h4><Image  w='20px' src={require('../images/tap.png')}/>
          <a href={Giturl}><Image w='27px' src={require('../images/github-sign.png')}/></a> 
          <a href={Weburl}><Image  w='30px' src={require('../images/computer.png')}/></a>
        </HStack>

      </VStack>
    </VStack>
  );
};

export default Card; 