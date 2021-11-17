import React, { useEffect, useState } from 'react'
import SideBar from '../navbar/SideBar'
import Routes from '../Routes'
import './layout.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TopNav from '../topnav/TopNav'

import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'

const Layout = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)
    const dispatch = useDispatch()
const [isActiveNav, setIsActiveNav] = useState(false)
const handleActiveNavbar =(is)=>{
    setIsActiveNav(!isActiveNav)
}

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode',
            'theme-mode-light')
        const colorClass = localStorage.getItem('colorMode',
            'theme-mode-light')

            dispatch(ThemeAction.setMode(themeClass))
            dispatch(ThemeAction.setColor(colorClass))
    }, [])


    return (
        <Router>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode}  ${themeReducer.color} `}>
                    <SideBar {...props} isActive={isActiveNav} handleActiveNavbar={(is)=>handleActiveNavbar(is)} />
                    <div className='layout__content'>
                        <TopNav  />
                        <div className='layout__content-main'>
                            <Routes />
                        </div>
                    </div>
                </div>
            )} />
        </Router>
    )
}

export default Layout
