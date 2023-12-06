import { Box, Image } from "@chakra-ui/react"
import PointerImage from "../../images/Pointer.png"

const Pointer = ({...props}) => {
    return (
        <Box className="pointer" {...props}>
            <Image src={PointerImage}/>
        </Box>
    )
}


export default Pointer;