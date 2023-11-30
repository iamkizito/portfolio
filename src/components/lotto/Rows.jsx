import { Box, Flex } from "@chakra-ui/react";
import {NumberBox, Number} from "./Number";
import { DateCell, ResultCell, NumberBoxesCell, FirstNumberBoxesCell, OtherNumberBoxesCell } from "./Cell";



export const HeadRow = ({totalSlots}) => {
    const ballColumnNames = ['First Number', "second Number", "Third Number", "Fourth Number", "Fifth Number"]

    return (
        <Flex as="tr">
            <DateCell>Date</DateCell>  
            
            <ResultCell>Results</ResultCell> 

            <FirstNumberBoxesCell>
                <Box>
                    <Box textAlign="center">Number category</Box>
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
                </Box>
            </FirstNumberBoxesCell>

            
            {ballColumnNames.map((name, index) => {
                return (
                    <OtherNumberBoxesCell>
                        <Box key={index}>
                            <Box textAlign="center">{name}</Box>
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
                        </Box>
                    </OtherNumberBoxesCell>
                )
            })}
        </Flex>
    )
}




export const BodyRow = ({totalSlots, draw, setCordinatesHandler, ...props}) => {
    const totalNumbers = draw.numbers.length
    return (
        <Flex as="tr" {...props}>
            <DateCell>{draw.date}</DateCell> 
            <ResultCell>
                {draw.numbers.map((number, index) => {
                    return <Box>{number}{index == totalNumbers - 1 ? "" : "-"} </Box>
                })}
            </ResultCell>  

            <FirstNumberBoxesCell>
                <NumberBoxes 
                    drawNumbers={draw.numbers} 
                    totalSlots={totalSlots} 
                    activeColor="red"
                    bg="#fffdf3"
                />
            </FirstNumberBoxesCell>


            {draw.numbers.map((number, index) => {
                return (
                    <OtherNumberBoxesCell key={index}>
                        <NumberBoxes 
                            drawNumber={number} 
                            totalSlots={totalSlots} 
                            activeColor="blue"
                            bg="#f7fcff"
                            columnIndex={index}
                            setCordinatesHandler={setCordinatesHandler}
                        />
                    </OtherNumberBoxesCell>
                )
            })}
        </Flex>
    )
}





const NumberBoxes = ({drawNumbers, drawNumber, totalSlots, activeColor, columnIndex, setCordinatesHandler, ...props}) => {
    const defaultActiveColor = activeColor ? activeColor : '';

    return (
        <Flex 
            className="number-boxes"
        >
            {Array.from({length: totalSlots}, (_, index) => {
                const slot = index + 1

                return (
                    <NumberBox key={index}
                        setCordinatesHandler={drawNumber && slot === drawNumber ? setCordinatesHandler: null}
                        columnIndex={columnIndex}
                    >
                        <Number
                            value={slot}
                            isActive={drawNumbers ? drawNumbers.includes(slot) : slot === drawNumber}
                            activeColor={defaultActiveColor} 
                        />
                    </NumberBox>
                )
            })}
        </Flex>
    )
}

