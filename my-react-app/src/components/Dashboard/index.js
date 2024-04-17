import './index.css'
import {RiDashboard2Fill} from 'react-icons/ri'
import {FaTags} from 'react-icons/fa'
import {RiCalendarScheduleFill} from 'react-icons/ri'
import {TbUserSquareRounded} from 'react-icons/tb'
import {IoIosSettings} from 'react-icons/io'
import {FaBell} from 'react-icons/fa'
import {IoPerson} from 'react-icons/io5'
import PureComponent from '../PureComponent'
import {FaMoneyBill1Wave} from 'react-icons/fa6'
import {AiOutlineLike} from 'react-icons/ai'
import {PiUsers} from 'react-icons/pi'
import LineChart from '../LineChart'

const Dashboard = () => {
  return (
    <div className="bgi">
      <div className="box3">
        <div>
          <h1 className="h2">Board.</h1>
          <div className="card1">
            <RiDashboard2Fill className="icons" />
            <p className="name">Dashboard</p>
          </div>
          <div className="card1">
            <FaTags className="icons" />
            <p className="name">Transactions</p>
          </div>
          <div className="card1">
            <RiCalendarScheduleFill className="icons" />
            <p className="name">Schedules</p>
          </div>
          <div className="card1">
            <TbUserSquareRounded className="icons" />
            <p className="name">Users</p>
          </div>
          <div className="card1">
            <IoIosSettings className="icons" />
            <p className="name">Settings</p>
          </div>
        </div>
        <div>
          <p className="name">Help</p>
          <p className="name">Contact Us</p>
        </div>
      </div>
      <div className="box4">
        <div className="card2">
          <div>
            <h1 className="h11">Dashboard</h1>
          </div>
          <div className="card3">
            <input placeholder="Search..." className="ins" />
            <FaBell className="bell" />
            <IoPerson className="bell" />
          </div>
        </div>
        <div className="box5">
          <div className="card4">
            <FaMoneyBill1Wave className="icon2" />
            <p className="p2">Total Revenues</p>
            <h1 className="h3">$2,129,430</h1>
          </div>
          <div className="card5">
            <FaTags className="icon2" />
            <p className="p2">Total Transactions</p>
            <h1 className="h3">1,520</h1>
          </div>
          <div className="card6">
            <AiOutlineLike className="icon2" />
            <p className="p2">Total Likes</p>
            <h1 className="h3">9,721</h1>
          </div>
          <div className="card7">
            <PiUsers className="icon2" />
            <p className="p2">Total Users</p>
            <h1 className="h3">892</h1>
          </div>
        </div>
        <h1 className="h3">Activities</h1>

        <LineChart />

        <PureComponent />
      </div>
    </div>
  )
}

export default Dashboard
