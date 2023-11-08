import {
    Drawer,
    DrawerBody,
    // DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navLinks } from './Header';
import DrawerNavLink from './DrawerNavLink';
import { useRef } from 'react';
import { Button } from '@chakra-ui/react';
import { colorPallete as cp } from "../../variables";
import { Box } from '@chakra-ui/react';



const DrawerNav = ({handleClick, ...props}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
	
	const clickHandler = (id) => {
		onClose()
		handleClick(id)
	}
  
    return (
		<Box {...props}>
			<Button ref={btnRef} bg={cp.primary1} color="white" onClick={onOpen}>
				<FontAwesomeIcon icon={faBars}/>
			</Button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Main Menu</DrawerHeader>
	
				<DrawerBody display="block"> 
					{navLinks.map((navLink, index) => {
						return (                          
							<DrawerNavLink key={index} data-testid={`${navLink.name}_nav`}
								onClick={() => clickHandler(navLink.url.split('#')[1])}
							> 
								<FontAwesomeIcon style={{marginRight:"10px"}} icon={navLink.icon}/>
								{navLink.name[0].toUpperCase() + navLink.name.slice(1).toLowerCase()}
							</DrawerNavLink>
						)              
					})}
				</DrawerBody>
			</DrawerContent>
			</Drawer>
		</Box>
    )
}

export default DrawerNav;




