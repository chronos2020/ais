import React, { useState } from 'react';

import Logo from './akademis.png'

const Footer = (props) => {
    let [menuOpened, setMenuOpened] = useState(false)

    const clickHandler = () => {
        setMenuOpened(!menuOpened)
    }

    const darkHandler = () => {
        props.darkHandler[0](!props.darkHandler[1])
        localStorage.setItem('darkMode', !props.darkHandler[1])
    }
 
}

export default Footer
