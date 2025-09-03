
import { DataProvider,DataContext } from "./Context/DataContext";
import { useContext } from "react";
import Home from "./Home";
import Nav from "./Nav";
import Login from "./Login";
import Register from "./Register";
import Adoppets from "./Adoppets";
import NotFound from "./NotFound";
import Rehome from "./Rehome";
import VolunteerNow from "./Volunteernow";
import { Route, Routes,Navigate } from "react-router-dom";

function App() {

  const { login } = useContext(DataContext);

  return (
    <DataProvider>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={login ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={login ? <Navigate to="/" /> : <Register />} />
        <Route path="/adoppets" element={<Adoppets />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/rehome" element={<Rehome />} />
        <Route path="/VolunteerNow" element={<VolunteerNow />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

