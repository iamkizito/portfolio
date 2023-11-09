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
import DrawerNavLink from './DrawerNavLink';
import { useRef } from 'react';
import { Button } from '@chakra-ui/react';
import { colorPallete as cp } from "../../variables";
import { Box } from '@chakra-ui/react';



const DrawerNav = ({handleClick, navLinksList, ...props}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
	
	const clickHandler = (id) => {
		onClose()
		handleClick(id)
	}
  
    return (
		<Box {...props}>
			<Button ref={btnRef} bg={cp.primary1} color="white" onClick={onOpen} data-testid="trigger-button">
				<FontAwesomeIcon icon={faBars}/>
			</Button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef}
				zIndex="1001"
			>
			<DrawerOverlay />
			<DrawerContent data-testid="drawer-nav">
				<DrawerCloseButton />
				<DrawerHeader>Main Menu</DrawerHeader>
	
				<DrawerBody display="block"> 
					{navLinksList.map((navLink, index) => {
						return (                          
							<DrawerNavLink key={index}
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




