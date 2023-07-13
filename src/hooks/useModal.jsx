import { useState } from 'react'

export default function useModal (){
    
    const [ isOpen, setIsOpen ] = useState( false );
    
    function toogleModal (){
        setIsOpen(!isOpen)
    }

    return { isOpen, toogleModal }
}