import { Box, Flex } from "@chakra-ui/react";
import {NumberBox, Number} from "./NumberBox";
import { generateHistoricalDraw } from "./helper";
import { useEffect, useState, createContext} from "react";
import {TableRow, TableHeadRow} from "./TableRow";

export const PositionsContext = createContext();


const LottoTable = () => {
    const ballColumnNames = ["Number category", 'First Number', "second Number", "Third Number", "Fourth Number", "Fifth Number"]
    const totalSlots = 11
    const [historicalDraws, setHistoricalDraws] = useState([])
    const [positions, setPositions] = useState({ 0:[], 1:[], 2:[], 3:[], 4:[]});
    
    useEffect(() => {
        const totalNumbersToBeDrawn = 5
        const totalDays = 20
        const result = generateHistoricalDraw(totalDays, totalNumbersToBeDrawn);
        setHistoricalDraws(result)
    }, [])


    const drawConnectionLines = (positions) => {
        Object.values(positions).map((points, index1) => {
            let cordinate = []

            return points.map((point, index2) => {
                if (cordinate.length != 2) {
                    cordinate.push(point)
                    return
                }

                console.log(cordinate)
                const [from, to] = cordinate;
                cordinate = []
                return (
                    <Line
                        key={`${index1}${index2}`}
                        from={from}
                        to={to}
                    />
                )
            })
        })
    }

    useEffect(() => {
        console.log(positions)
    }, [positions])


    return (

        <PositionsContext.Provider value={{positions, setPositions}}>
            <Box as="table">
                <thead>
                    <TableHeadRow
                        ballColumnNames={ballColumnNames}
                        totalSlots={totalSlots}
                    />
                </thead>
                
                <tbody>
                    {historicalDraws.map((draw, index) => {
                        return (
                            <TableRow
                                key={index}
                                totalSlots={totalSlots}
                                draw={draw}
                            />
                        )
                    })}
                </tbody>
            </Box>
            {drawConnectionLines(positions)}
        </PositionsContext.Provider>

    )
}

export default LottoTable



const Line = ({from, to}) => {
    return (
        <svg
            style={{position:"absolute"}}
        >
            <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="black" />
        </svg>
    )
}

