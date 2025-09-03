import  {useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {DataContext} from './Context/DataContext'
import dogface from './assets/login page dog.jpg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FireBase'; 

import { sendPasswordResetEmail } from "firebase/auth";




const Login = () => {

  const navigation = useNavigate();
 const { email, setemail, password, setpassword, toast, setToast, login, setLogin } = useContext(DataContext);


  async function HandleOfloginForm(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setToast("✅ Login Successful!");
      setTimeout(() => setToast(""), 3000);
      setLogin(true);
      navigation("/");

    } catch (error) {
      console.log(error.message);
      setToast("❌ Login Failed!");
      setTimeout(() => setToast(""), 3000);
      setLogin(false);
    }

    console.log(name, email, password);
  }

async function handleForgotPassword(email) {
  if (!email) {
    alert("⚠️ Please enter your registered email first.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    alert("📩 Password reset email sent! Check your inbox.");
  } catch (error) {
    console.error("Error resetting password:", error.message);
    alert("❌ " + error.message);
  }
}



  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${dogface})` }}
    >
      <form method="post" className="login-form" onSubmit={HandleOfloginForm}>
       

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          placeholder='ENTER YOUR EMAIL'
          onChange={(e) => setemail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          placeholder='ENTER YOUR PASSWORD'
          onChange={(e) => setpassword(e.target.value)}
          required
        />

        <p className='want-login'>YOU WANT &nbsp; <Link to="/register"><span>Register ?</span></Link></p>
        <p className="forgot-password">
   Enter the email next  Forgot Password?{" "}
  <span
    style={{ color: "blue", cursor: "pointer" }}
    onClick={() => handleForgotPassword(email)}  // <- use the entered email
  >
    Reset here
  </span>
</p>


        <button className='login-formButton' type="submit">Login</button>
      </form>

            {/* ✅ Toast message at top center */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "90px",
            left: "50%",
            transform: "translateX(-50%)",
            background: toast.includes("✅") ? "green" : "red",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
            fontWeight: "bold",
            zIndex: 1000
          }}
        >
          {toast}
        </div>
      )}
  
    </div>
  )
}
export default Login;
