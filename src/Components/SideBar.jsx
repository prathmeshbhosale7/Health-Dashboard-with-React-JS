import React from 'react'
import { navItems, navTool, setting } from '../Data/NavItems';
import { Link } from 'react-router-dom';
// import '../styles/Main.css'

function SideBar() {
    return (
        <>
            <div className="sidebar">

                {/* ----------------Top Sidebar----------------- */}

                <div className="top-sidebar">
                    <h3 className='sidebar-title'>General</h3>
                    <ul>
                        {
                            navItems.map((item, index) => {
                                return (
                                    <li>
                                        <Link to={item.route} className='nav-link'>
                                            <img src={item.src} alt={item.alt} className='nav-icon' />
                                            <span className='nav-item'>{item.label}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* ----------------Middle Sidebar----------------- */}

                <div className="middle-sidebar">
                    <h3 className='sidebar-title tools'>Tools</h3>
                    <ul>
                        {
                            navTool.map((item, index) => {
                                return (
                                    <li>
                                        <Link className='nav-link'>
                                            <li className='nav-li' >
                                                <img src={item.src} alt={item.alt} />
                                                <span className='nav-item tool-item'>{item.label}</span>
                                            </li>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* ----------------Bottom Sidebar----------------- */}

                <div className="bottom-sidebar">
                    <ul>
                        {
                            setting.map((item, index) => {
                                return (
                                    <li>
                                        <Link className='nav-link'>
                                            <li className='nav-li' >
                                                <img src={item.src} alt={item.alt} />
                                                <span className='nav-item tool-item'>{item.label}</span>
                                            </li>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </>
    )
}

export default SideBar;