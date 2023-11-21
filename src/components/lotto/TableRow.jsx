import { Box, Flex } from "@chakra-ui/react";
import {NumberBox, Number} from "./NumberBox";

export const TableHeadRow = ({totalSlots, ballColumnNames, ...props}) => {

    return (
        <Flex as="tr">
            <Box as="td" style={{textWrap:"nowrap"}} width="100px">Date</Box>  
            <Box as="td" style={{textWrap:"nowrap"}} width="100px">Results</Box> 

            {ballColumnNames.map((name, index) => {
                return (
                    <td key={index}>
                        <Box>
                            <Box>{name}</Box>
                        </Box>
                        <Flex>
                            {Array.from({length: totalSlots}, (_, index) => {
                                const slot = index + 1
                                return (
                                    <NumberBox key={index}>
                                        <Number value={slot}/>
                                    </NumberBox>
                                )
                            })}
                        </Flex>
                    </td>
                )
            })}
        </Flex>
    )
}



export const TableRow = ({totalSlots, draw, ...props}) => {
    
    return (
        <Flex as="tr" {...props}>
            <Box as="td" style={{textWrap:"nowrap"}} width="100px">{draw.date}</Box> 

            <Box as="td" style={{textWrap:"nowrap"}} width="100px">{draw.numbers}</Box>  

            <BallsRowSection 
                drawNumbers={draw.numbers} 
                totalSlots={totalSlots} 
                activeColor="red"
                bg="#fffdf3"
            />

            {draw.numbers.map((number, index) => {
                return (
                    <BallsRowSection 
                        key={index}
                        drawNumber={number} 
                        totalSlots={totalSlots} 
                        activeColor="blue"
                        bg="#f7fcff"
                        columnIndex={index}
                        drawLine={true}
                    />
                )
            })}
        </Flex>
    )
}



const BallsRowSection = ({drawNumbers, drawNumber, totalSlots, activeColor, columnIndex, drawLine, ...props}) => {
    const defaultActiveColor = activeColor ? activeColor : '';

    return (
        <Flex  
            as="td"
            padding="0px"
            {...props}
        >
            {Array.from({length: totalSlots}, (_, index) => {
                const slot = index + 1

                return (
                    <NumberBox key={index}>
                        <Number
                            value={slot}
                            isActive={drawNumbers ? drawNumbers.includes(slot) : slot === drawNumber}
                            activeColor={defaultActiveColor}
                            columnIndex={columnIndex}
                            drawLine={drawLine}
                        />
                    </NumberBox>
                )
            })}
        </Flex>
    )
}
