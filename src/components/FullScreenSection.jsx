import * as React from "react";
import { VStack, Flex } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor? boxProps.backgroundColor : "lightgrey"}
      backgroundImage = {boxProps.backgroundImage}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

const FullScreenSection1 = ({ children, ...props}) => {
  return (
    <Flex
		direction="column"
		justify="center"
		align="center"
		maxWidth="1280px" 
		minHeight="100vh" 
		{...props}
    >
		{children}
    </Flex>
  );
};

export default FullScreenSection1;
