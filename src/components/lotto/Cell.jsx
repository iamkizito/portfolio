import { Box, Flex } from "@chakra-ui/react"


export const Cell = ({children, ...props}) => {
    return (
        <Flex
            as="td"
            className="cell"
            justify="center"
            border="1px solid black"
            {...props}

        >
            {children}
        </Flex>  
    )
}

export const DateCell = ({children, ...props}) => {
    return (
        <Cell 
            className="date-cell"
            width="100px"
            {...props}
        >
            {children}
        </Cell>  
    )
}

export const ResultCell = ({children, ...props}) => {
    return (
        <Cell 
            className="result-cell"
            width="100px"
            {...props}
        >
            {children}
        </Cell>  
    )
}

export const NumberBoxesCell = ({children, ...props}) => {
    return (
        <Cell className="number-boxes-cell"
            {...props}
        >
            {children}
        </Cell>  
    )
}

export const FirstNumberBoxesCell = ({children}) => {
    return (
        <NumberBoxesCell
            className="first-number-boxes-cell"
        >
            {children}
        </NumberBoxesCell>  
    )
}

export const OtherNumberBoxesCell = ({children}) => {
    return (
        <NumberBoxesCell
            className="other-number-boxes-cell"
        >
            {children}
        </NumberBoxesCell>  
    )
}