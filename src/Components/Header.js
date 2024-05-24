import React, { useEffect, useState } from 'react'
import './Style/Header.css'
import Logo from './assets/NxtWave TM_Coloured logo 1Logo.png'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
    const [buttonVisible, setbuttonVisible] = useState(false)
    useEffect(() => {
        const isvisible = localStorage.getItem('headButton')
        setbuttonVisible(isvisible)
    },[])
    return (
        <div className='header-main'>
            <div className='header-left'>
                <img src={Logo} width={"82px"} height={"40px"} />
            </div>
            <div className='header-right'>
                {
                    buttonVisible ?
                        <Button variant='contained'><a href='/addResource' style={{ color: 'white', textDecoration: 'none' }}>+ ADD</a></Button>
                        : ''
                }
                <img src={'https://s3-alpha-sig.figma.com/img/cf4d/3d9d/645049d8ead249354c5100844f0ee7bb?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INwB~ujhSZAfwEqKNaDHlWSGLcS6h9079YGW6WVXzQl9kikr1i2uqOP70LCx53QHcDfb-RSo81BxRgdH6ZNTOqIdY1G54B-A4Ss5A9yRUjnie-EMgqDvOX~bjkkP2rylZNz8Uevhm14EQiDt9g~8gjJgVKITNFJTHIvT~teVb-QA9oUjwPFcvJiVXe9iaH0qbyMSYXBr2EtlaG1zP2C1VYX~Oa1jC04LiEg8Qx6EU6xFcVr1z8HzitSM14U0~1UbrtTlU6Ia8qdKfNtbYx4hUWudyj7hXpLyxh~cjxQETnWAVNNVjfnrED0lcq4bQ9BR5nGOMlnrRS~athgSiGrvAA__'} alt="image" />
            </div>
        </div>
    )
}

export default Header