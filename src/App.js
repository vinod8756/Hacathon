import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./Components/Login/Login";
import LandingPage from "./Components/Pages/LandingPage";
import {  createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./Components/Signup/Signup";
import FilteredCourses from "./Components/Pages/FilteredCourses";
import MediaPlayer from "./Components/Pages/MediaPlayer";
import './i18n';
import AboutUs from "./Components/Pages/About";
import ContactUs from "./Components/Pages/Contact";


function App() {


  return (
    <div className="App">
      <ThemeProvider theme={createTheme()}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path="/courses/:fieldTag" component={FilteredCourses} />
        <Route path="/view/:courseTag/:videoId" element={<MediaPlayer />} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
