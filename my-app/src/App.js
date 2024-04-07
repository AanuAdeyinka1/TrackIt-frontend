import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyForm} from "./Component/Pages/SignIn"
import  VerifyWithOTP from "./Component/Pages/Verify"
import LoginPage from "./Component/Pages/Login"


function App() {

return (
 
  // <MyForm />
  <LoginPage />

  // <VerifyWithOTP />
  
  // <Router>
  //   <Routes>
  //     <Route path="/" elememt={<MyForm />} />

  //     <Route path="/" element={<VerifyWithOTP />} />
  //   </Routes>
  // </Router>
);
}

export default App;
