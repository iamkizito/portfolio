import { Flex, Box, Image, Grid } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";
import FlipOnHover from "./FlipOnHover";
import { fonts } from "../../variables";
import { useScrollSpy } from "../../context/scrollSpyContext";
import gradImage from '../../images/grad-image.jpg'



const skills = ['JavaScript', 'Html5', 'CSS', 'React', 'Python', 'Django', 'Flask', 'Pandas', 'SQL', 'Git']


const About = () => {

    const {actives, addNewSpy} = useScrollSpy()

    return (
        <Flex id="about"
            justify="center"
            align="center"
        >
            <FullScreenSection>
                <Box as="h1" className="heading" fontSize="1.5rem" fontWeight="bold" padding={{base:"20px 0", md:"50px 0"}}
                    fontFamily={fonts.heading}
                >
                    About
                </ Box>
                <Grid className="details"
                    gridTemplateColumns={{base:"1fr", md:"1fr 1fr"}}
                    gridTemplateRows={{base:"auto", md:"500px"}}
                    justifyItems="center"
                    alignItems="center"
                    gap={{base:"0px", md:"100px"}}
                >
                    <FlipOnHover className="flip_on_hover" width="300px" height="400px">
                        <Flex className="front-face" bg="white" width="300px" height="400px"
                            border="1px dotted green"
                            justify="center"
                            align="center"
                        >
                            Hover Me !
                        </Flex>
                        <Image className="back-face" bg="blue" width="300px" height="400px" objectFit="cover" src={gradImage}/>
                    </FlipOnHover>
                    <Box className="content" maxWidth="500px" fontFamily={fonts.paragrah} padding="20px" textAlign="justify">
                        <Box as="p" marginBottom="20px">
                            Welcome to my portfolio app, a dynamic platform that offers an in-depth glimpse into my creative and technical journey. As a web developer and designer, I've harnessed my skills to craft this space, where you'll find a curated selection of my most impactful projects, each a testament to my commitment to excellence and innovation.
                        </Box>
                        <Box as="p" marginBottom="20px">
                            Explore a diverse range of work that spans web development, design, and more. Whether it's crafting intuitive user interfaces, building robust web applications, or designing visually captivating experiences, I've left no stone unturned in my quest to create meaningful and impactful digital solutions.
                        </Box>
                        <Box as="p">
                            Through this app, I invite you to delve into my world, where passion meets precision, creativity blends with functionality, and every project tells a unique story. Join me on this journey as we navigate the art and science of the digital realm, and discover how I can bring value to your next project.
                        </Box>
                    </Box>
                </Grid>
                <Flex flexDirection="column" align="center" justify="center">
                    <Box as="h1" className="heading" textAlign="center" margin={{base:"25px 0 10px", md:"50px 0 20px"}}
                        fontWeight="bold" 
                        fontSize="1.1rem"
                        fontFamily={fonts.heading}
                    >
                        Skills
                    </ Box>
                    <Flex gap="15px" fontFamily={fonts.paragrah} flexWrap="wrap" padding={{base:"0 20px 30px", md:"0px"}}>
                        {skills.map((skill, index) => {
                            return (
                                <Box key={index} className="skill">※ {skill}</Box>
                            )
                        })}
                    </Flex>
                </Flex>
            </FullScreenSection>
        </Flex>
    )
}

export default About;
