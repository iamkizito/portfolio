import React from "react";
import FullScreenSection from "../FullScreenSection";
import { Box, Flex } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { fonts, colorPallete as cp } from "../../variables";

const projects = [
	{
		title: "Little Lemon",
		description:"An innovative web application designed to streamline the dining experience and allow users to effortlessly order their favorite dishes for takeout or dine-in and reserve tables in advance.",
		getImageSrc: () => require("../../images/littlelemon.jpg"),
		techStacks: ['JavaScript', 'Html5', 'CSS', 'React.js', 'Chakra UI'],
		link: "https://thelittlelemon.netlify.app",
	},
	{
		title: "Anthony Obiora",
		description:"A showcase of my professional journey, bringing together a collection of my best work and projects, skills and expertise in web development, design, and more",
		getImageSrc: () => require("../../images/anthonyobiora.jpg"),
		techStacks: ['JavaScript', 'Html5', 'CSS', 'React.js', 'Chakra UI'],
		link: "https://anthonyobiora.netlify.app",
	},
	{
		title: "Booking code converter",
		description:"All-in-one solution for effortlessly translating booking codes between various sports betting platforms. Whether you're switching platforms, comparing odds, or seeking the best value for your bets, our app simplifies the process",
		getImageSrc: () => require("../../images/photo3.jpg"),
		techStacks: ['JavaScript', 'Html5', 'CSS', 'SASS', 'Python', 'Django'],
		link: "https://",
	},
	{
		title: "OurSports",
		description:"A vibrant online hub where sports lovers and enthusiasts unite to connect, access, share, and engage in the exhilarating world of sports events and activities, and also indulge in spirited discussions and speculations surrounding the world of sports",
		getImageSrc: () => require("../../images/photo4.jpg"),
		techStacks: ['JavaScript', 'Html5', 'CSS', 'SASS', 'Python', 'Flask'],
		link: "https://youtu.be/LSqNVdzubWE",
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
