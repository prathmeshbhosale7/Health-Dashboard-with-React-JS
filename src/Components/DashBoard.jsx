import React from 'react'
import heroImg from '../assets/images/human-body.png'
import legIcon from '../assets/images/leg-icon.png'
import heartIcon from '../assets/images/heart-icon.png'
import lung from '../assets/images/lungs.png'
import tooth from '../assets/images/tooth.png'
import bone from '../assets/images/bone.png'

function DashBoard() {
    return (
        <div>
            <div className="dashboard">

                {/* ------------Dashboard Top------------- */}

                <div className="dashboard-top">
                    <h1 className='dashboard-title'>Dashboard</h1>
                    <select name="" id="" className='dashboard-select'>
                        <option value="This Week">This Week</option>
                        <option value="This Month">This Month</option>
                        <option value="This Year">This Year</option>
                    </select>
                </div>
                <div className="dashboard-middle">
                    <div className="middle-left">
                        <img src={heroImg} alt="" height={"400px"} width={"200px"} className='heroImg' />
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                        <div className="healthy-leg">
                            <img src={legIcon} alt="" height={"20px"} width={"20px"} />
                            <span>Healthy Leg</span>
                        </div>
                        <div className="healthy-heart">
                            <img src={heartIcon} alt="" height={"20px"} width={"20px"} />
                            <span className='heart-label'>Healthy Heart</span>
                        </div>
                    </div>
                    <div className="middle-right">
                        <div className="organs">
                            <div className="lungs-title">
                                <img src={lung} alt="" height={"35px"} width={"35px"} />
                                <h3>Lungs</h3>
                            </div>
                            <div className='date'>Date: 26 Oct 2021</div>
                            <div className="progress-contain">
                                <div className="progress-bar"></div>
                            </div>
                        </div>
                        <div className="organs">
                            <div className="lungs-title">
                                <img src={tooth} alt="" height={"40px"} width={"40px"} />
                                <h3>Teeth</h3>
                            </div>
                            <div className='date'>Date: 26 Oct 2021</div>
                            <div className="progress-contain">
                                <div className="progress-bar progress-bar-2"></div>
                            </div>
                        </div>
                        <div className="organs">
                            <div className="lungs-title">
                                <img src={bone} alt="" height={"45px"} width={"45px"} />
                                <h3>Bone</h3>
                            </div>
                            <div className='date'>Date: 26 Oct 2021</div>
                            <div className="progress-contain">
                                <div className="progress-bar progress-bar-3"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="details">
                    <h3>Details</h3>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="dashboard-bottom">
                    <div className="bottom-header">
                        <h2 className="title">Activity</h2>
                        <span className='appointment'>3 appointments on this week</span>
                    </div>
                    <div className="activity-bar">
                        <div className="bar-group">
                                <div className="bar-1"></div>
                                <div className="bar-2"></div>
                                <div className="bar-3">
                                    <div className="bar-3-1"></div>
                                    <div className="bar-3-2"></div>
                                </div>
                                <div className="bar-4"></div>
                                <div className="bar-5">
                                    <div className="bar-5-1"></div>
                                    <div className="bar-5-2"></div>
                                </div>
                                <div className="bar-6 bar-2"></div>
                                <div className="bar-7 bar-3">
                                    <div className="bar-3-1"></div>
                                    <div className="bar-3-2"></div>
                                </div>
                                <div className="bar-8 bar-4"></div>


                                <div className="bar-9 bar-1"></div>
                                <div className="bar-10 bar-2"></div>
                                <div className="bar-11 bar-3">
                                    <div className="bar-11-1"></div>
                                    <div className="bar-11-2"></div>
                                </div>
                                <div className="bar-12 bar-4"></div>
                                <div className="bar-13 bar-5">
                                    <div className="bar-13-1 bar-5-1"></div>
                                    <div className="bar-13-2 bar-5-2"></div>
                                </div>
                                <div className="bar-14 bar-2"></div>
                                <div className="bar-15 bar-3">
                                    <div className="bar-15-1"></div>
                                    <div className="bar-15-2"></div>
                                </div>
                                <div className="bar-16 bar-4"></div>


                                <div className="bar-17 bar-1"></div>
                                <div className="bar-18 bar-2"></div>
                                <div className="bar-19 bar-3">
                                    <div className="bar-19 bar-3-1"></div>
                                    <div className="bar-19 bar-3-2"></div>
                                </div>
                                <div className="bar-20 bar-4"></div>
                                <div className="bar-21 bar-5">
                                    <div className="bar-21 bar-5-1"></div>
                                    <div className="bar-21 bar-5-2"></div>
                                </div>
                                <div className="bar-22 bar-2"></div>
                                <div className="bar-23 bar-3">
                                    <div className="bar-23 bar-3-1"></div>
                                    <div className="bar-23 bar-3-2"></div>
                                </div>
                                <div className="bar-24 bar-4"></div>


                                <div className="bar-25 bar-1"></div>
                                <div className="bar-26 bar-2"></div>
                                <div className="bar-27 bar-3">
                                    <div className="bar-27-1"></div>
                                    <div className="bar-27-2"></div>
                                </div>
                                <div className="bar-28 bar-4"></div>
                                <div className="bar-29 bar-5">
                                    <div className="bar-29-1 bar-5-1"></div>
                                    <div className="bar-29-2 bar-5-2"></div>
                                </div>
                                <div className="bar-30 bar-2"></div>
                                <div className="bar-31 bar-3">
                                    <div className="bar-31 bar-3-1"></div>
                                    <div className="bar-31 bar-3-2"></div>
                                </div>
                                <div className="bar-32 bar-4"></div>
                        </div>
                    </div>
                    <div className="weekday">
                        <span className='monday'>Mon</span>
                        <span>Tues</span>
                        <span>Wed</span>
                        <span>Thurs</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DashBoard