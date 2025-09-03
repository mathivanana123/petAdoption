import { useContext, useEffect, useState } from 'react'
import { DataContext } from './Context/DataContext'
import speking from './assets/speking.jpg'
import dogface from './assets/adopt pet.jpg'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./FireBase";
import dogfullface from "./assets/dog full face.jpg"
import { FaInstagram, FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";

const Home = () => {


  const { login, setLogin } = useContext(DataContext);
  const [userDatadb, setUserDatadb] = useState(null);


  useEffect(() => {
    async function FetchdataDataBase() {
      const user = auth.currentUser;
      if (!user) {
        console.log("⚠️ No user logged in");
        return;
      }
      try {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDatadb(docSnap.data())
        }
      }
      catch (error) {
        console.log('no user found');
      }
    }
    FetchdataDataBase();
  }, [])

  return (
    <div className='home'>

      {/* section part 1 */}

      <div className="section">
        <div className="text-content">
          <h1 className='section-title'>  <span>{userDatadb?.name ? `!${userDatadb.name}` : ".."}</span>
            ..Every Heart <br />Deserves a Home</h1>
          <p>Adopt a pet and write the next chapter of their story—with love, warmth, and forever</p>
          <div className='nav-right2'>
            {!login && (<>
              <Link to={"/login"} >
                <button className='log2'>LOGIN</button>
              </Link>
              <Link to={"/register"} >
                <button className='reg2'>REGISTER</button>
              </Link>
            </>
            )}
          </div>
          <button className='expbtn'>Explore Now</button>
        </div>
        <div className="image-content">
          <img src={dogface} style={{ loading: "lazy" }} alt="Pet" />
        </div>
      </div>


      {/*  section part 2 */}

      <div className='home2'>
        <div className='textcontent-2'>
          <div className='textmain-2' >
            <p>DISCOVER</p>
            <h1>YOUR PERFECTPET AWAITS YOU HERE</h1>
            <p>Explore a wide range of pets ready for adoption. Ours userfriendly plateform makes finding ypurs new companion easy and enjoyable</p>
          </div>
          <div className='textcontentsmall-2'>
            <div>
              <h3>PET BROWSING</h3>
              <p>Easily search and filter pets breed siz and  age to find your match.</p>
            </div>
            <div>
              <h3>ADOPTION PROCESS</h3>
              <p>Simple steps guide you through the adoption journey,enusring a smooth experience.</p>
            </div>
          </div>
          <div className='box-expbtn2'>
            <button className='expbtn-2'>Explore Now <span style={{ fontSize: "15px" }}>
              <MdKeyboardArrowRight />
            </span></button>
          </div>
        </div>
        <div className='image-content-2'>
          <img src={speking} style={{ loading: "lazy" }} />
        </div>
      </div>

      {/* section part 3 */}

      <div className='box-adop-3'>
        <div className='textcontent-3'>
          <p>ADOP</p>
          <h1>
            DISCOVER YOUR PERFECT <br></br> PET TODAY!
          </h1>
        </div>
        <div className='stepbox'>
          <div className='steps'>
            <h1><BiCategory /></h1>
            <h2>STEP 1: BROWSE <br></br> AVAILABLE PETS</h2>
            <p>Explore our extensive dtabase of pets waitinf for adoption</p>
          </div>
          <div className='steps'>
            <h1><MdOutlinePets /></h1>
            <h2>STEP 2: VIEW PET <br></br> DETAILS</h2>
            <p>Click on a pet to learn more about their story and needs.</p>
          </div>
          <div className='steps'>
            <h1><FaRegPenToSquare /></h1>
            <h2>STEP 3: SUMBMIT AN <br></br> ADOPTION REQUEST</h2>
            <p>Fill out adoption request form to get start</p>
          </div>
        </div>
        <div className='buttons-3'>
          <Link to={"/adoppets"}>
            <button className='expbtn-3'>Adopt Now</button>
          </Link>
          {!login && (<> <Link to={"/login"}>
            <button className='login-3'>Login <span style={{ fontSize: "15px" }}>

              <MdKeyboardArrowRight />
            </span>
            </button>
          </Link>
          </>)}
        </div>
      </div>


      {/* section 4 */}

      <div className='joy-pets'>
        <div>
          <h1>Discover the Joys of Adopting a Pet Today!</h1>
          <p>“Adopting a pet is more than bringing home an animal — it’s welcoming a new friend into your family.
            Each wag, purr, and playful moment brings happiness to your everyday life.
            Pets give unconditional love and teach us kindness and responsibility.
            By choosing adoption, you give a pet a second chance at life.
            Together, you create a bond that lasts forever.</p>

          { !login && <Link to={"/Register"}>
             <button className='join-btn'>Join <MdKeyboardArrowRight /></button>
           </Link>}
        </div>
        <div>
          <img src={dogfullface} />
        </div>
      </div>




        <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Joy Pets — Bringing pets and people together.
      </p>

      <div className="footer-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={22} /> <span>Instagram</span>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={22} /> <span>Facebook</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={22} /> <span>Twitter</span>
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
          <FaDiscord size={22} /> <span>Discord</span>
        </a>
      </div>
    </footer>
    </div>
  )
}

export default Home

