import  { useContext } from 'react'
import pawpal from './assets/pawpal.jpg'
import { signOut } from 'firebase/auth';
import { auth } from "./FireBase";

import { MdPets } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiNovu } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { MdEmojiEvents } from "react-icons/md";
import { MdVolunteerActivism } from "react-icons/md";
import { TiHeartHalfOutline } from "react-icons/ti";
import { BsNewspaper } from "react-icons/bs";
import { FaHandFist } from "react-icons/fa6";
import { CgCommunity } from "react-icons/cg";
import { TiArrowSortedDown } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbXboxX } from "react-icons/tb";

import { DataContext } from './Context/DataContext'
import { Link } from 'react-router-dom';
import VolunteerNow from './Volunteernow';
const Nav = () => {

  const { HandelclickMoreitem, moreitem, setmoreitem ,mobileview,HandelclickMobileview,handleNavClick,login,setLogin} = useContext(DataContext)
 

async function handlelogout() {
    try {
      await signOut(auth);
      setLogin(false);
      navigate("/login"); 
      console.log("✅ Logged out successfully");
    } catch (error) {
      console.log("❌ Logout failed:", error.message);
    }
  }

  return (
    <>
      <div className='nav'>
        
        <div>
          <img src={pawpal} className="nav-logo" alt='pawpal' loading='lazy' />
        </div>
        <ul>
        <Link to={"/"}  onClick={handleNavClick}>
         
          <li >HOME</li>
        </Link>
          <Link to={"/adoppets"}>
          <li>ADOPT A PET</li>
        </Link>

          <Link to={"/rehome"} >
            <li>REHOME A PET</li>
          </Link>
         <Link to={"/VolunteerNow"}>
               <li>VOLUNTEER NOW</li>
          
         </Link> 
          <li onClick={HandelclickMoreitem}>MORE INFO <TiArrowSortedDown /></li>
        </ul>
        <div className='nav-right'>
              {!login &&  (  <>

                
              <Link to={"/login"} onClick={handleNavClick}>
                <button className='log'>LOGIN</button> 
                 </Link>
                 <Link to={"/register"} onClick={handleNavClick}> 
                <button className='reg'>REGISTER</button>
                  </Link>
              </>
              )}
            
            {login && (
                <button onClick={handlelogout} className='log-out'>
                         LOGOUT
                </button>
                          )}


        </div>

      </div>


      {/* mobile menu */}
      <div className='mobilevew'>

        <div className='hamburger'>
          <div>
            <img   src={pawpal} className="nav-logom" alt='pawpal' loading='lazy' />
          </div>
          <div className='h-icon' onClick={HandelclickMobileview} >
            <RxHamburgerMenu />
          </div>
        </div>

        <div className={`mobilevewItem ${mobileview ? 'show' : ''}`} >
          <ul >
             <div className='h-icon'  onClick={HandelclickMobileview} style={{display:mobileview?'block':'none' }} >
            <TbXboxX />
          </div>
           <Link to={"/"} onClick={handleNavClick}>
           <li>HOME</li>
        </Link>
              <Link to={"/adoppets"}>
          <li>ADOPT A PET</li>
        </Link>
          <Link to={"/rehome"} >
            <li>REHOME A PET</li>
          </Link>
          <Link to={"/VolunteerNow"}>
               <li>VOLUNTEER NOW</li>
          
         </Link>
          <li onClick={HandelclickMoreitem}>MORE INFO <TiArrowSortedDown /></li>
            { login &&(
                <>
                     <button onClick={handlelogout}  className='log-out'>LOGOUT</button>
                </>
              )}
          </ul>

        </div>
      </div>
    
          {/* common list both view */}
      
      <div className='more-list'>

        <div className="parent" style={{ display: moreitem ? "grid" : "none" }} >
          <div className="div1"><h3>EXPLORE OUR SERVICES</h3></div>
          <div className="div2"><h3>COMUNITY ENGAGEMENT</h3></div>
          <div className="div3"><h3>LATEST UPDATE</h3></div>
          <div className="div6">
            <h4> <MdPets /> &nbsp;ADOPTION PROCESS</h4>
            <p>LEARN HOW TO ADOPT <br></br> YOUR NEW FRIEND</p>
          </div>
          <div className="div7">
            <h4><MdOutlineHealthAndSafety />&nbsp;&nbsp;PET HEALTH</h4>
            <p>THIS TIP KEEPING <br></br> YOUR PET HEALTHY</p>
          </div>
          <div className="div8">
            <h4><SiNovu />&nbsp;&nbsp;GET INVOLVED</h4>
            <p>JOIN US IN MAKING <br></br>DIFFERENCE TODAY</p>
          </div>
          <div className="div9"><h4><MdPets />&nbsp;&nbsp;SUCCESS STORIES</h4>
            <p>READ ABOUT OUR HAPPY<br></br> PET ADOPTIONS</p></div>
          <div className="div10"> <h4><SlCalender />&nbsp;&nbsp;EVENTS CALENDER</h4>
            <p>FIND OUT WHAT'S <br></br>HAPPENING IN OUR COMMUNITY</p></div>
          <div className="div11"><h4><MdEmojiEvents />&nbsp;&nbsp;FUNDRAISING EVENTS</h4>
            <p>SUPPORT OUR CAUSE <br></br>THROUGH VARIOUS EVENTS</p></div>
          <div className="div12"><h4><MdVolunteerActivism />&nbsp;&nbsp;VOLUNTEER OPPORTUNITIES </h4>
            <p>JOIN OUR TEAM AND <br></br>HELP ANIMAS IN NEED</p></div>
          <div className="div13"><h4><TiHeartHalfOutline />&nbsp;&nbsp;PET ADOPTION</h4>
            <p>FIND YOUR PERFECT<br></br> COMPANION TODAY!</p></div>
          <div className="div14"><h4><BsNewspaper />&nbsp;&nbsp;NEWS ARTICLES</h4>
            <p>STAY INFORMATIOND <br></br> ABOUT OUR LATEST NEWS</p></div>
          <div className="div15"><h4><MdPets />PET CARE</h4>
            <p>ESSENTIAL INFORMATION <br></br> TO OWNERS</p></div>
          <div className="div16"><h4><FaHandFist />&nbsp;&nbsp;SUCESS STORIES</h4>
            <p>READ INSTRODUCTORY<br></br> ARTICLE</p></div>
          <div className="div17"><h4><CgCommunity />&nbsp;&nbsp;COMUNITY EVENTS</h4>
            <p>JOIN US  FOR FUND AND <br></br> FUNDRAISING ACTIVITES</p></div>
        </div>


      </div>
    </>
  )
}


export default Nav ;
