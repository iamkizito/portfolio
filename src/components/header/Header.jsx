import React, { useEffect, useRef } from "react";
import NavLink from "./NavLink";
import Socials from "./Socials";
import { Box, HStack, Flex } from "@chakra-ui/react";
import { colorPallete as cp } from "../../variables";
import DrawerNav from "./DrawerNav";
import { socialMediaList } from "./Socials";

import { 
    faHouse,
    faLaptopCode,
    faAddressCard,
    faBlog,
    faNewspaper,
} from "@fortawesome/free-solid-svg-icons"


export const navLinksList = [
    {
        name: "home",
        url: "#home",
        icon: faHouse,
    },
    {
        name: "about",
        url: "#about",
        icon: faNewspaper,
    },
    {
        name: "projects",
        url: "#projects",
        icon: faLaptopCode,
    },
    {
        name: "blog",
        url: "#blog",
        icon: faBlog,
    },
    {
        name: "contact",
        url: "#contact",
        icon: faAddressCard,
    },
]



const Header = () => {
    const headerRef = useRef();
    
    let scrollLastPosition = window.scrollY;

    const handleClick = (id) => {
        const element = document.getElementById(id);
        console.log('clicked', id, element)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
    };


    const handleScroll = () => {
        if (scrollLastPosition < window.scrollY) {
            scrollLastPosition = window.scrollY
            // console.log('going down', scrollLastPosition, window.scrollY)
            headerRef.current.style.transform = 'translateY(-200px)'
        } else {
            scrollLastPosition = window.scrollY
            // console.log('going up', scrollLastPosition, window.scrollY)
            headerRef.current.style.transform = 'translateY(0)'
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            console.log('cleanup called')
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            ref={headerRef}
            width="100vw"
            zIndex="1000"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto" fontFamily="Lora, cursive">
                <HStack
                    px="15px"
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex fontSize="1.4rem" fontWeight="bold">
                        <Box color={cp.primary1}>Anthony</Box>
                        <Box color={cp.highlight1}>.</Box>
                        <Box color={cp.secondary1}>Obiora</Box>
                    </Flex>
                    <Box as="nav" display={{base:"none", md:"flex"}}>
                        <HStack spacing={8}>
                            {navLinksList.map((navLink, index) => {
                                return (                          
                                    <NavLink key={index} data-testid={`${navLink.name}_nav`}
                                        onClick={() => handleClick(navLink.url.split('#')[1])}
                                    > 
                                        {navLink.name[0].toUpperCase() + navLink.name.slice(1).toLowerCase()}
                                    </NavLink>
                                )              
                            })}
                        </HStack>
                    </Box>


                    <DrawerNav 
                        handleClick={handleClick} 
                        display={{base:"block", md:"none"}}
                        navLinksList={navLinksList}
                    />

                    <Socials 
                        display={{base:"none", md:"flex"}} 
                        iconWidth="20px"
                        socialMediaList={socialMediaList}
                    />
                </HStack>
            </Box>
        </Box>
    )
};


export default Header;