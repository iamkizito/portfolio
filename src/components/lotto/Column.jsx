import { Box, Flex } from "@chakra-ui/react";
import {NumberBox, Number} from "./NumberBox";

export const OtherBallColumn = ({title, totalSlots, historicalResults, activeColor, isFirstBallColumn, ...props}) => {

    const [ActivePos, setActivePos] = useState(null)
    
    return (
        <Box 
            {...props}
        >
            <BallColumnHeading
                title={title}
                totalSlots={totalSlots}
            />

            <Box className="ball-column-content">
                {historicalResults.map((drawResults, index1) => {

                    {Array.from({length: totalSlots}, (_, index2) => {
                        return (
                            <BallColumnRow
                                key={`${index1}${index2}`}
                                drawNumber={isFirstBallColumn ? null : number} 
                                totalSlots={totalSlots} 
                                activeColor="blue"
                                bg="#f7fcff"
                                setActivePos={setActivePos}
                            />
                        )
                    })}
                })}
            </Box>
        </Box>
    )
}


export const FirstBallColumn = ({title, totalSlots, historicalResults, activeColor, ...props}) => {
    
    return (
        <Box 
            {...props}
        >
            <BallColumnHeading
                title={title}
                totalSlots={totalSlots}
            />

            <Box className="ball-column-content">
                {historicalResults.map((drawNumbers, index1) => {

                    {Array.from({length: totalSlots}, (_, index2) => {
                        return (
                            <BallColumnRow
                                key={`${index1}${index2}`}
                                drawNumbers={drawNumbers} 
                                totalSlots={totalSlots} 
                                activeColor="blue"
                                bg="#f7fcff"
                            />
                        )
                    })}
                })}
            </Box>
        </Box>
    )
}


const BallColumnHeading = ({title, totalSlots, ...props}) => {
    return (
        <Box className="heading" {...props}>
            <Box className="column-heading">{title}</Box>

            <Box className="slot-headings">
                {Array.from({length: totalSlots}, (_, index) => {
                    const slot = index + 1

                    return (
                        <NumberBox key={index}>
                            <Number
                                value={slot}
                            />
                        </NumberBox>
                    )
                })}
            </Box>
        </Box>
    )
}



const BallColumnRow = ({drawNumbers, numberPosition, totalSlots, activeColor, setActivePos, ...props}) => {
    const defaultActiveColor = activeColor ? activeColor : '';
    const ActivePosRef = useRef()

    const setPos = () => {
        const pos = ActivePosRef.current.getBoundingClient()
        setActivePos(prev => ({
            ...prev,

        }))
    }

    return (
        <Flex 
            {...props}
        >
            {Array.from({length: totalSlots}, (_, index) => {
                const slot = index + 1

                return (
                    <Box ref={ActivePosRef}>
                        <NumberBox>
                            <Number
                                value={number}
                                isActive={numberPosition ? slot === numberPosition : drawNumbers.includes(slot) }
                                activeColor={defaultActiveColor}
                            />
                        </NumberBox>
                    </Box>
                )
            })}
        </Flex>
    )
}



const DrawLine = ({from, to}) => {
    return (
        <svg
            style={{position:"absolute"}}
        >
            <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="black" />
        </svg>
    )
}