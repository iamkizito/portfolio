import { Box, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import Wheel from "./Wheel";
import RingLight from "./RingLight";
import Pointer from "./Pointer";


const LuckySpin = () => {
    const [luckySpinsCount, setLuckySpinsCount] = useState(5)
    const [spinnerPosition, setSpinnerPosition] = useState(1000)
    const radius = 200

    const handleSpin = () => {
        console.log(spinnerPosition)
        if (luckySpinsCount > 0) {
            setLuckySpinsCount(prev => prev - 1)
            const nextPosition = 1000 + Math.floor(Math.random() * 2001);
            setSpinnerPosition(prev => prev + nextPosition)
        }
    }

    return (
        <Flex
            width="100vw"
            height="100vh"
            justify="center"
            align="center"
        >
            <Box>
                <RingLight 
                    radius={radius} 
                    position="relative"
                    display="flex"
                    justify="center"
                >
                    <Wheel 
                        toDeg={spinnerPosition}
                        position="absolute"
                        width="316px"
                        top="42px"
                    />
                    <Pointer
                        position="absolute"
                        width="62px"
                        top="160px"
                    />
                </RingLight>

                <Box className="spin_count_remaining">Remaining Spin: {luckySpinsCount}</Box>
                <Button onClick={handleSpin}>Spin</Button>
            </Box>
        </Flex>

    )
}

export default LuckySpin;