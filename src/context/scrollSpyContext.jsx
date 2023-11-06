import { useState, useEffect, useContext, createContext } from "react";


const ScrollSpyContext = createContext()

export const ScrollSpyProvider = ({children}) => {

    const [spys, setSpys] = useState({default: '[data-spy]'})
    const [actives, setActives] = useState({default: null})

    const addNewSpy = (name, selector) =>{
        if (Object.keys(spys).includes(name)) {
            throw new Error("name already exists")
        }
        if (Object.keys(spys).includes(selector)) {
            throw new Error("name already exists")
        }

        setSpys({...spys, [name]:selector})
        setActives({...actives, [name]:null})
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            Object.entries(spys).forEach((spy) => {
                const elements = document.querySelectorAll(spy[1])
                elements.forEach((element) => {
                    const elementOffset = element.offsetTop;
                    const elementHeight = element.offsetHeight;
    
                    if (scrollPosition >= elementOffset && scrollPosition < elementOffset + elementHeight) {
                        setActives(prev => ({...prev, [spy[0]]: element.getAttribute(spy[1]) }))
                        console.log("inside:", element.getAtribute('data-spy'))
                    }
                })
            })
        }

        window.addEventListener('scroll', handleScroll);
        console.log("scroll listener added")

        return () => {
            window.removeEventListener('scroll', handleScroll);
            console.log("scroll listener removed")
        }
        
    }, [spys])

    return (
        <ScrollSpyContext.Provider
            value={{actives, addNewSpy}}
        >
            {children}
        </ScrollSpyContext.Provider>
    )
}


export const useScrollSpy = () => useContext(ScrollSpyContext)