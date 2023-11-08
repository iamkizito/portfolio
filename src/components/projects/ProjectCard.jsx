import { Heading, HStack, Image, Text, VStack, Flex, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CardLink from "./CardLink";
import { fonts } from "../../variables";
import { useState } from "react";

const ProjectCard = ({ imageSrc, title, description, techStacks, link}) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<VStack 
			borderRadius={20}
			backgroundColor='white'
			color='black'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			height="550px"
			justify="space-between"
		>
			<Box>
				<Box className="image"
					width='100%' 
					height="250px"
					transition="padding 0.2s ease-out"	
					paddingBottom={isHovered? "0px": "25px"}
				>
					<Image src={imageSrc} borderRadius={20} 
						width='100%' 
						height="100%"
						objectFit="cover"
						borderBottom="1px solid grey"
					/>
				</Box>
				<VStack padding={3} alignItems="flex-start" spacing="15px">
					<Heading as='h6' fontSize='1.3rem' fontFamily={fonts.heading}>{title}</Heading>

					<Text color='grey' fontFamily={fonts.paragrah} fontSize='0.9rem' >{description}</Text>

					<Flex gap="5px" flexWrap="wrap">
						{techStacks.map((techStack, index) => {
							return (
								<Box fontFamily={fonts.heading}>{index == 0 ? "" : "-"} {techStack}</Box>
							)
						})}
					</Flex>
				</VStack>
			</Box>
			<Flex justifyContent="end" paddingBottom="20px" justifyself="end">				
				<CardLink url={link}>
					{'Visit site '}
					<FontAwesomeIcon icon={faArrowRight} size="1x"/>
				</CardLink>
			</Flex>
		</VStack>
	)
};

export default ProjectCard;




