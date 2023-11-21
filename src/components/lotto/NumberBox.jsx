import { Flex } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { PositionsContext } from "./LottoTable";


export const NumberBox = ({children, ...props}) => {

    return (
        <Flex
            {...props} 
            border="1px solid grey" 
            padding="2px" 
            justifyContent="center"
            alignItems="center"  
        >
            {children}
        </Flex>
    )
}

export default NumberBox;




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
            {...props}
        >
            {value}
        </Flex>
    )
}



