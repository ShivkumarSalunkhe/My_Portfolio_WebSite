import React from "react"; 
import { Image, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Shivkumar!"; 
const bio1 = "A Full Stack Web Developer and Web Designer. An Open Source enthusiast and a B.Tech student from India."; 
const bio2 = "I love working on new and exciting technologies emerging nowadays. I have good experience as a MERN Stack Developer and UI/UX Designs where I gained core knowledge of web development and build some projects."; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#0f292a" 
 > 
   <VStack spacing={10} > 
     <VStack spacing={5} alignItems="center"> 
       <Image 
         src={require('../images/myimg1.png')} 
         borderRadius='full'
         boxSize='200px'
       /> 
     </VStack> 
     <VStack spacing={5} alignItems="center">
      <Heading fontSize='4xl' as='em' color="white" noOfLines={1}> 
         {greeting} 
       </Heading> 
      </VStack>
     <VStack spacing={5}> 
       <Heading  fontSize='xl' as='i' color="beige" textAlign="center" w="700px" noOfLines={3} > 
         {bio1} 
       </Heading> 
       <Heading fontSize='xl' as='i'  color="beige" textAlign="center" w="700px" noOfLines={4}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;