import React from "react";
import FullScreenSection from "../FullScreenSection";
import { Box, Flex } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { fonts, colorPallete as cp } from "../../variables";

const projects = [
	{
		title: "React Space",
		description:"Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
		getImageSrc: () => require("../../images/photo1.jpg"),
		techStacks: ['JavaScript', 'Html5', 'CSS', 'React.js', 'Chakra UI'],
		link: "https://",
	},
	{
		title: "React Infinite Scroll",
		description:"A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
		getImageSrc: () => require("../../images/photo2.jpg"),
		techStacks: ['JavaScript', 'Html5', 'CSS', 'React.js', 'Chakra UI'],
		link: "https://",
	},
	{
		title: "Photo Gallery",
		description:"A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
		getImageSrc: () => require("../../images/photo3.jpg"),
		techStacks: ['JavaScript', 'Html5', 'CSS', 'React.js', 'Chakra UI'],
		link: "https://",
	},
	{
		title: "Event planner",
		description:"A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
		getImageSrc: () => require("../../images/photo4.jpg"),
		techStacks: ['JavaScript', 'Html5', 'CSS', 'React.js', 'Chakra UI'],
		link: "https://",
	},
];


const Projects = () => {
	return (
		<Flex id="projects"
            justify="center"
            align="center"
			backgroundImage={`linear-gradient(${cp.primary2}, ${cp.primary1})`}
			padding={{base: "25px 20px", md:"50px 20px"}}
        >
			<FullScreenSection>
				<Box as="h1" id="projects-section" fontFamily={fonts.heading} fontSize="1.7rem" 
					fontWeight="bold" 
					textAlign="center"
					marginBottom={{base:"25px", md:"50px"}}
				>
					Projects
				</Box>
				<Box
					display="grid"
					gridTemplateColumns={{base:"repeat(1, minmax(0,1fr))", md:"repeat(3, minmax(0,1fr))"}}
					gridGap={8}
				>
					{projects.map((project) => (
						<ProjectCard
							key={project.title}
							title={project.title}
							description={project.description}
							imageSrc={project.getImageSrc()}
							techStacks={project.techStacks}
							link={project.link}
						/>
					))}
				</Box>
			</FullScreenSection>
		</Flex>
	);
};

export default Projects;
