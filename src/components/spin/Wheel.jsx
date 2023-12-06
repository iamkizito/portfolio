import {Flex, Image } from "@chakra-ui/react";
import WheelImage from '../../images/Wheel.png'


const Wheel = ({toDeg, ...props}) => {

    return (
        <Flex
            className="wheel_container"
            justify="center"
            {...props}
        >
            <Flex
                className="wheel"
                justify="center"
                alignItems="center"
                width="100%"
                height="100%"
                borderRadius="50%"
                transition="transform 2s ease-in-out"
                transform={`rotateZ(${toDeg}deg)`}
            >
                <Image width="100%" height="100%" src={WheelImage}/>
            </Flex>
        </Flex>
    )
}

export default Wheel

