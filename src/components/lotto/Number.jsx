import { Box, Flex } from "@chakra-ui/react";
import {useEffect, useRef} from "react";


export const NumberBox = ({children, setCordinatesHandler, columnIndex, ...props}) => {
    const boxRef = useRef(null)
    
    useEffect(() => {
        if (setCordinatesHandler == null) {
            return
        }

        const getPosition = () => {
            const rect = boxRef.current.getBoundingClientRect()
            const centerX = rect.x + rect.width / 2;
            const centerY = rect.y + rect.height / 2;
            return {x: window.scrollX + centerX, y: window.scrollY + centerY}
        }

        setCordinatesHandler(getPosition(), columnIndex)
    }, [])

    return (
        <>        
        <Flex
            ref={boxRef}
            border="1px solid grey"
            padding="2px" 
            justifyContent="center"
            alignItems="center"  
            {...props} 
        >
            {children}
        </Flex>
        </>
    )
}



export const Number = ({value, isActive, activeColor, ...props}) => {

    const defaultWidth = "20px";

    return (
        <Flex
            width={defaultWidth}
            height={defaultWidth}
            padding="1px"
            borderRadius={isActive ? "50%" : ''}
            bg={isActive ? activeColor : props.bg}
            justifyContent="center"
            alignItems="center"
            color={isActive ? 'white' : 'black'}
            zIndex="1"
            {...props}
        >
            {value}
        </Flex>
    )
}



export const Line = ({from, to, offsetTop, ...props}) => {
    const left = Math.min(from.x, to.x);
    const right = Math.max(from.x, to.x);
  
    return (
        <Box
            as="svg"
            position="absolute"
            top={from.y - offsetTop}
            bottom={`calc(100% - ${to.y}px)`}
            left={left}
            right={`calc(100% - ${right}px)`}
            width={`${right - left}px`}
            height={`${to.y - from.y}px`}
            zIndex="0"
            {...props}
        >
            <line
                x1={from.x - left}
                y1={0}
                x2={to.x - left}
                y2={to.y - from.y}
                stroke="black"
                strokeWidth="1.5px"
            />
        </Box>
    );
};