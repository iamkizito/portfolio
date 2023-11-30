import React from "react";
import { Image, Heading, VStack, Text, Box, Flex } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";
import { useState, useEffect } from "react";
import { fonts, colorPallete as cp } from "../../variables";
import passport from "../../images/passport.jpg"

const greeting = "Hello there, I'm Anthony Obiora!";
const bio1 = "A Web developer";
const bio2 = "";


const Landing = () => {

	const [typingFinished, setTypingFinished] = useState(false)

	const slideUp = `
		@keyframes slideUp {
			0% {top: 200px; opacity: 0}
			100% {top: 0; opacity: 1}
		}
	`

	const greetingText = useTypedEffect(greeting)

	useEffect(() => {
		if (greetingText === greeting) {
			setTypingFinished(prev => !prev)
		}
	}, [greetingText])

	return (

		<Flex id="home"
			justifyContent="center"
			alignItems="center"
			backgroundImage={`linear-gradient(${cp.primary1}, ${cp.primary2})`}
			fontFamily={fonts.paragrah}
			color="white"
		>
			<FullScreenSection>
				<Flex direction="column" gap="20px" align="center" justify="center" 
					style={{fontStyle:"italic", fontFamily:"Lora, cursive"}}>
					<Image position='unset' src={passport}
						width="200px" 
						height="200px" 
						objectFit="cover"
						objectPosition= "center 10%"
						borderRadius="50%"
					/>

					<Flex as="span" marginBottom={5} fontSize={{base:"1.1rem", md:"1.5rem"}} justify="center">
						{greetingText} 
						<Cursor><Box bg="black" width="3px" height="30px"></Box></Cursor>
					</Flex>
						
					<Box position="relative">
						<Box
							display={typingFinished? '' : 'none'}
							position="absolute"
							transform="translateX(-50%)"
							animation="slideUp 1s ease-out"
							css={slideUp}	
							fontStyle="italic" 
							fontFamily="Lora, cursive"						
						>
							<Heading as='h1' style={{textWrap:"nowrap"}}>{bio1}</Heading>
							<Heading as='h1' >{bio2}</Heading>
						</Box>
					</Box>
				</Flex>
			</FullScreenSection>
		</Flex>
	)
};

export default Landing;




const useTypedEffect = (text) => {
	const [greetingText, setGreetingText] = useState('')

	useEffect(() => {
		setGreetingText('')
		const typeWriter = (text) => {
			for (let i = 0; i < text.length; i++) {
				setTimeout(() => {
					setGreetingText(prev => prev + text[i])	
				}, 500 + (100 * i))		
			}
		}

		typeWriter(text)
	}, [])

	return greetingText
}


const Cursor = ({children, ...props}) => {
	const blink = `
		@keyframes blink {
			0% {opacity: 0;}
			50% {opacity: 1;}
			100% {opacity: 0;}
		}
	`
	return (
		<Box as="span" display="inline-flex"
			animation= "blink 1s linear infinite"
			css = {blink}
			alignItems="center"
			justifyContent="center"
			{...props}
		>
			{children}
		</Box>
	)
}
