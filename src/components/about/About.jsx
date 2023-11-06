import { Flex, Box, Image, Grid } from "@chakra-ui/react";
import FullScreenSection from "../FullScreenSection";
import FlipOnHover from "./FlipOnHover";
import { fonts } from "../../variables";
import { useScrollSpy } from "../../context/scrollSpyContext";



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
                    About Me
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
                        <Image className="back-face" bg="blue" width="300px" height="400px" src="https://robohash.org/7.png?size=150x150"/>
                    </FlipOnHover>
                    <Box className="content" maxWidth="500px" fontFamily={fonts.paragrah} padding="20px" textAlign="justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab modi sapiente placeat asperiores, voluptatum optio ea ullam dicta accusantium deserunt quidem odit dolore officia quasi distinctio. Cum dicta veritatis ullam natus autem reiciendis nisi similique in quia quasi eligendi placeat culpa doloremque ratione, maxime cumque perferendis reprehenderit aperiam. Unde eos laudantium vel saepe mollitia quam dolores repellat sequi adipisci corporis necessitatibus blanditiis quidem totam, illo, a iste, dolorem eius qui tenetur dignissimos dolorum asperiores nesciunt vitae. Placeat libero inventore minus autem illo blanditiis aspernatur odio, hic optio sequi ad sed odit tempora deserunt, perspiciatis ipsum corrupti, ullam asperiores dolorum!
                    </Box>
                </Grid>
                <Flex flexDirection="column" align="center" justify="center">
                    <Box as="h1" className="heading" textAlign="center" margin={{base:"25px 0 10px", md:"50px 0 20px"}}
                        fontWeight="bold" 
                        fontSize="1.1rem"
                        fontFamily={fonts.heading}
                    >
                        My Skills
                    </ Box>
                    <Flex gap="15px" fontFamily={fonts.paragrah} flexWrap="wrap" padding={{base:"0 20px", md:"0px"}}>
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
