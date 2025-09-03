
import { useContext } from 'react';
import {DataContext} from './Context/DataContext';
import dogface from './assets/login page dog.jpg';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './FireBase'; 
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate,Link } from 'react-router-dom';

const Register = () => {

  const navigation = useNavigate();
  const { email, setemail, password, setpassword, name, setname, toast, setToast, login, setLogin } = useContext(DataContext);
  const { phone, setphone } = useContext(DataContext);

async function HandleOfRegisterForm(e) {
  e.preventDefault();

  console.log("Registering:", { name, email, password }); 

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;

    if (user) {
      await setDoc(doc(db, "Users", user.uid), {
        name: name,
        email: email,
        phone: phone,
      });
    }

    setLogin(true);
    setToast("✅ Registration Successful!");
    setTimeout(() => setToast(""), 3000);
    navigation("/login");
  } catch (error) {
    console.log(error.message);
    setToast(`❌ ${error.message}`);
    setTimeout(() => setToast(""), 3000);
    setLogin(false);
  }
}



  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${dogface})` }}
    >
      <form method="post" className="login-form" onSubmit={HandleOfRegisterForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={name}
          placeholder='YOUR NAME'
          onChange={(e) => setname(e.target.value)}
          required
           minLength={3}
          maxLength={15}
        />


         <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          value={phone}
          placeholder='YOUR PHONE NUMBER'
          onChange={(e) => setphone(e.target.value)}
          required
           minLength={10}
          maxLength={15}
        />


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
           minLength={6}
          maxLength={20}   

        />
      <p className='want-login'>YOU WANT &nbsp; <Link to="/login"><span>Login ?</span></Link></p>
        <button className='login-formButton' type="submit">Register</button>
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
  );
};

export default Register;