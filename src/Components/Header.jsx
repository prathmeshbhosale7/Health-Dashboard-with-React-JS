import React from 'react'
import profileIcon from '../assets/images/Profile-icon.png'

function Header() {
    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <h1 className='brandname'>
                        Health
                        <span>care.</span>
                    </h1>
                    <div className="header-center">
                        <div className="search-bar">
                            <div className="searchbar-left">
                                <i class="fa-solid fa-magnifying-glass searchbar-left-icon"></i>
                                <input type="text" className='search' placeholder='Search' />
                            </div>
                            <div className="searchbar-right">
                                <button className='searchbar-right-icon'><i class="fa-solid fa-bell"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="header-right">
                    <div className="user-btn profile-btn">
                        <img src={profileIcon} alt="" height={"40px"} width={"40px"} />
                    </div>
                    <div className="user-btn add-btn">
                        <i class="fa-solid fa-plus" ></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;