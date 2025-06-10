import React from 'react'
import tooth from '../assets/images/tooth.png'
import bicep from '../assets/images/biceps.png'
import injection from '../assets/images/injection.png'
import eye from '../assets/images/eye.png'
import heartIcon from '../assets/images/heart-icon.png'
import doctor from '../assets/images/doctor.png'

function SubDashBoard() {
  return (
    <div className='subDashboard-container'>
      <div className="subDashboard">
        {/* -----------subDashboard Top------------ */}
        <div className="subDashboard-top">
          <h1 className='subDashboard-title'>October 2021</h1>
          <div className="subDashboard-arrow">
            <i class="fa-solid fa-arrow-left first-arrow"></i>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        {/* -----------End subDashboard Top------------ */}

        {/* -----------Calender----------- */}
        <div className="calendar">
          <div className="day">
            <div className="day-in-day">Mon</div>
            <div className="calendar-date">25</div>
            <p>10:00</p>
            <p>11:00</p>
            <p>12:00</p>
          </div>
          <div className="day day-2">
            <div className="day-in-day">Tues</div>
            <div className="calendar-date">26</div>
            <p>08:00</p>
            <p className='time-slot'>09:00</p>
            <p className='last-time'>10:00</p>
          </div>
          <div className="day">
            <div className="day-in-day">Wed</div>
            <div className="calendar-date">27</div>
            <p>12:00</p>
            <p><i class="fa-solid fa-minus"></i></p>
            <p>13:00</p>
          </div>
          <div className="day">
            <div className="day-in-day">Thurs</div>
            <div className="calendar-date">28</div>
            <p>10:00</p>
            <p className='sp-time-slot'>
              11:00
              <div className='dot'></div>
            </p>
            <p className='last-time'><i class="fa-solid fa-minus"></i></p>
          </div>
          <div className="day">
            <div className="day-in-day">Fri</div>
            <div className="calendar-date">29</div>
            <p><i class="fa-solid fa-minus"></i></p>
            <p>14:00</p>
            <p>16:00</p>
          </div>
          <div className="day sat">
            <div className="day-in-day">Sat</div>
            <div className="calendar-date">30</div>
            <p className='wide-time-slot'>12:00
              <div className='dot'></div></p>
            <p>14:00</p>
            <p>15:00</p>
          </div>
          <div className="day sun">
            <div className="day-in-day">Sun</div>
            <div className="calendar-date">31</div>
            <p className='wide-time-slot'>09:00
              <div className='dot'></div>
            </p>
            <p>10:00</p>
            <p>11:00</p>
          </div>
          <div className='join-box'></div>
        </div>
        {/* -----------End Calender----------- */}

        {/* -------------Dr Schedule---------- */}

        <div className='dr-schedule'>
          <div className="dentist">
            <div className="dr-name">
              <div className='dr-title'>Dentist</div>
              <img src={tooth} alt="" height={"32px"} width={"32px"} />
            </div>
            <div>09:00-11:00</div>
            <div className='cameron'>Dr. Cameron Williamson</div>
          </div>
          <div className="physiotherapy">
            <div className="dr-name">
              <div className='dr-title'>Physiotherapy Appoinment</div>
              <img src={bicep} alt="" height={"32px"} width={"32px"} />
            </div>
            <div>11:00-12:00</div>
            <div>Dr. Cameron Williamson</div>
          </div>
        </div>

        {/* -------------End Dr Schedule---------- */}

        {/* -------------Upcoming Schedule---------- */}

        <div className='upcoming-schdule'>
          <h2>The Upcoming Schedule</h2>
        </div>
        <div className='OnDay'>On Thursday</div>
        <div className="schedules">
          <div className="schedule-1">
            <div className="checkup">
              <div>Health checkup complete</div>
              <img src={injection} alt="" height={"30px"} width={"30px"} />
            </div>
            <div className='chackup-time'>11:00 AM</div>
          </div>
          <div className="schedule-2">
            <div className="opthalmologist">
                <div className="opthamolo">
                  <div>Opthalmologist</div>
                  <img src={eye} alt="" height={"35px"} width={"30px"} />
                </div>
            <div className='chackup-time'>14:00 AM</div>
            </div>
          </div>
        </div>
        <div className='OnDay onDay-2'>On Saturday</div>
        <div className="schedules">
          <div className="schedule-1 schedule-3-4">
              <div className="cardio">
                <div>Cardiologist</div>
                <img src={heartIcon} alt="" height={"30px"} width={"25px"}/>
              </div>
              <div className='chackup-time'>12:00 AM</div>
          </div>
          <div className="schedule-1 schedule-3-4">
              <div className="cardio">
                <div>Neurologist</div>
                <img src={doctor} alt="" height={"30px"} width={"30px"}/>
              </div>
              <div className='chackup-time'>12:00 AM</div>
          </div>
        </div>

      {/* -------------End Upcoming Schedule---------- */}

      </div>
    </div>
  )
}

export default SubDashBoard;