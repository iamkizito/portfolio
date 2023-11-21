import { Box, Flex, position } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";





export const Test = () => {
    // const [position, setPosition] = useState(null)

    const [positions, setPosition] = useState([])
    // const [prevPos, setPrevPos] = useState(null)
    // const [LineCordinate, setLineCordinate] = useState(null)

    // const getAndSetPosition = (element) => {
    //     const client = element.getBoundingClient()
    //     setPositions(prev => ([
    //         ...prev,
    //         {x: client.x, y: client.y}
    //     ]))
    // }

    // const getAndSetPosition1 = (element) => {
    //     if (prevPos === null) {
    //         return
    //     }
    //     const prevPosCopy = {...prevPos}

    //     const client = element.getBoundingClient()
    //     setPrevPos(prev => ([
    //         ...prev,
    //         {x: client.x, y: client.y}
    //     ]))
    // }

    return (
        <Box>    
            <NumberBox 
                marginBottom="100px"
                setPosition={setPosition}
            >
                <Number
                    value={2}
                    isActive={true}
                    activeColor="red"
                />
            </NumberBox>

            <NumberBox
                setPosition={setPosition}
            >
                <Number
                    value={2}
                    isActive={true}
                    activeColor="red"
                />
            </NumberBox>
        </Box>

    )
}





export const NumberBox = ({children, lineCordinateTo, setPosition, ...props}) => {
    const boxRef = useRef(null)
    console.log("lineto", lineCordinateTo)
    
    useEffect(() => {
        const getPosition = () => {
            const client = boxRef.current.getBoundingClientRect()
            return {x: client.x, y: window.scrollY + client.y}
        }
        setPosition(prev => [...prev, getPosition()])
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
        {/* {from && to && <Line from={from} to={to}/>}
        {ownPosition && <Line from={ownPosition} to={{x:100, y:100}}/>} */}
        <Box className="line1"/>
        </>
    )
}



export const Line = ({from, to}) => {

    return (
        <svg style={{position:"absolute"}}>
            <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="black" strokeWidth={10}/>
        </svg>
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
            {...props}
        >
            {value}
        </Flex>
    )
}



