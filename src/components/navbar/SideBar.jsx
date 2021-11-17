import React, { useRef } from 'react'
import './sidebar.css'
import logo from '../../assets/images/bxl-discord-alt.svg'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'


const SidebarItem = (props) => {
    const active = props.active ? 'active' : ''
    return (
        <div className='sidebar__item'>
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
            console.log('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}
const SideBar = (props) => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)
    const handleActiveNavbar = () => {
        // props.handleActiveNavbar(true)\
    }
    clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

    return (
        <> <div  className='responsive-nav'>
                    <i ref={dropdown_toggle_el} className='bx bx-menu' onClick={() => handleActiveNavbar()}></i>
                </div>
            <div ref={dropdown_content_el} className={`${props.isActive ? 'sidebar active' : 'sidebar'}`}>
                <div className='sidebar__logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='sidebar__content'>
                {sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem title={item.display_name} icon={item.icon} active={index === activeItem} />
                    </Link>
                ))}
                </div>
            </div>
            </>
    )
}

export default SideBar

