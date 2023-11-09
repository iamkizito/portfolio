import { Flex, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fonts, colorPallete as cp} from "../../variables";
import { useState } from "react";


const ContactCard = ({icon, name, values}) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Flex 
            minWidth="250px"
			borderRadius={20}
            backgroundImage={`linear-gradient(${cp.primary1}, ${cp.primary2})`}
			color='white'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			height="300px"
			justify="center"
			align="center"
            fontFamily={fonts.heading}
            role="contact-card"
		>
			<Flex direction="column" align="center" gap="15px">
                <Box
                    width="60px"
                    height="60px"
                    padding={isHovered ? "0px": "15px"}
                    transition="padding 0.2s ease-out"
                    data-testid="icon-box" 
                >
                    <FontAwesomeIcon icon={icon}              
                        style={{width:"100%",height:"100%", objectFit:"cover"}}
                    />
                </Box>

                <Box fontWeight="bold">{name}</Box>

                <Flex gap="5px" flexWrap="wrap" direction="column" >
                    {values.map((value, index) => {
                        return (
                            <Box key={index} fontFamily={fonts.paragrah}>{value}</Box>
                        )
                    })}
                </Flex>
            </Flex>
			
		</Flex>
	)
};

export default ContactCard;




