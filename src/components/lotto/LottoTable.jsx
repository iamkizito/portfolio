import { Box, Flex } from "@chakra-ui/react";
import { generateHistoricalDraw } from "./helper";
import { useEffect, useState, useRef} from "react";
import {HeadRow, BodyRow} from './Rows';
import {Line} from './Number'


const LottoTable = () => {
    const totalSlots = 11
    const [historicalDraws, setHistoricalDraws] = useState([])
    const [cordinates, setCordinates] = useState({ 0:[], 1:[], 2:[], 3:[], 4:[]});
    const tableRef = useRef()
    
    useEffect(() => {
        const totalNumbersToBeDrawn = 5
        const totalDays = 20
        const result = generateHistoricalDraw(totalDays, totalNumbersToBeDrawn);
        setHistoricalDraws(result)
    }, [])

    const setCordinatesHandler = (position, columnIndex) => {
        setCordinates((prev) => {
            const cords = prev[columnIndex]
            if (cords.length <= 0) {
                return {...prev, [columnIndex]:[{from:position, to:position}]}
            } else {
                const lastCordinate = cords[cords.length - 1]
                return {...prev, [columnIndex]:[...cords, {from:lastCordinate.to, to:position}]}
            }   
        })         
    }


    return (
        <Flex className="container"
            width="100vw"
            height="100vh"
            overflowX="scroll"
            align="center"
        >
            <Box as="table" ref={tableRef} position="relative">
                <thead>
                    <HeadRow
                        totalSlots={totalSlots}
                    />
                </thead>
                
                <tbody>
                    {historicalDraws.map((draw, index) => {
                        return (
                            <BodyRow
                                key={index}
                                totalSlots={totalSlots}
                                draw={draw}
                                setCordinatesHandler={setCordinatesHandler}
                            />
                        )
                    })}

                </tbody>
                <Box className="box-to-box-lines">
                    {Object.values(cordinates).map((columnCordinates, index1) => {
                        return columnCordinates.map((cordinate, index2) => {
                            return (
                                <Line className="box-to-box-line" 
                                    key={`${index1}-${index2}`} 
                                    from={cordinate.from} 
                                    to={cordinate.to} 
                                    offsetTop = {tableRef.current.offsetTop}
                                />
                            )
                        })
                    })}
                </Box>
            </Box>
        </Flex>
    )
}

export default LottoTable


