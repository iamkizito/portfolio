import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";


const FlipOnHover = ({children, ...props}) => {
    const [isHovered, setIsHovered] = useState(false)

    const childrenArray = React.Children.toArray(children);
    const front = childrenArray[0];
    const back = childrenArray[1];
    console.log(front)
    console.log(back)


    return (
        <>
        <Box 
            width="300px"
            height="400px"
            perspective="1000px"
            {...props}
            display={{base:"none", md:"block"}}
        >
            <Box
                position="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{transformStyle: 'preserve-3d'}}
                transform={isHovered ? "rotateY(180deg)" : "rotateY(0deg)"}
                transition="transform 0.5s linear" 
                width="100%"   
                height="100%"   
            >
                <Face>{back}</Face>
                <Face style = {{backfaceVisibility: "hidden"}} transform="rotateY(360deg)">{front}</Face>
            </Box>
        </Box>

        <Box display={{base:"block", md:"none"}}>
            {back}
        </Box>
        </>
    )
}


export default FlipOnHover;


const Face = ({children, ...props}) => {
    return (
        <Box className="face"
            position="absolute"
            width="100%"
            height="100%"
            {...props}
        >
            {children}
        </Box>
    )
}