import {Flex, Image} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RingLightOnImage from '../../images/Border-on.png'
import RingLightOffImage from '../../images/Border-off.png'


const RingLight = ({radius, children, ...props}) => {
    const [lightOn, setLightOn] = useState(false)

    useEffect(() => {
        setInterval(() => {
            setLightOn(prev => !prev)
        }, 300)
    }, [])

    return (
        <Flex
            className="ring_light"
            justify="center"
            width={radius * 2}
            height={radius * 2}
            {...props}
        >
            <Image 
                width="100%" 
                height="100%" 
                src={lightOn ? RingLightOnImage : RingLightOffImage}
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
            />
                {children}
        </Flex>
    )
}

export default RingLight
