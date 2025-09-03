import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // adjust path

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // nav logic handel the laptop and mobileview
  const [moreitem, setmoreitem] = useState(false)
  const [mobileview, setmobileview] = useState(false)

  const HandelclickMoreitem = () => {
    setmoreitem(!moreitem);
  };
  const HandelclickMobileview = () => {

    setmobileview(!mobileview)
  };
    const handleNavClick = () => {
    setmoreitem(false) // Hide MoreItem whenever a nav link is clicked
  }

  // login and reg state
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [toast, setToast] = useState("");

   const [login, setLogin] = useState(false);

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
        setemail(user.email); // so you know which user is logged in
      } else {
        setLogin(false);
        setemail("");
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <DataContext.Provider
      value={{
        mobileview,
        setmobileview,
        HandelclickMobileview,
        HandelclickMoreitem,
        moreitem,
        setmoreitem,
        handleNavClick,

        email,
        setemail,
        password,
        setpassword,
        name,
        setname,
        toast,
        setToast,
        login,
        setLogin
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
