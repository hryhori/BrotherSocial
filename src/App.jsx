import s from "./App.module.css";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import DialogsConteiner from './components/Main/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import FriendsContainer from './components/Main/Friends/FriendsContainer';
import FinderContainer from "./components/Main/Finder/FinderContainer"
import UrlProfileContainer from './components/Main/Profile/ProfileContainer';
import Login from "./components/Main/LoginPage/Login"

function App(props) {
  return (
      <div className={s.app_wrapper}>
        <NavContainer />
        <Routes>
          <Route
            path="/Profile"
            element={<UrlProfileContainer/>}
          />
          <Route
            path="/Profile/:userId"
            element={<UrlProfileContainer/>}
          />
          <Route
            path="/Dialogs"
            element={<DialogsConteiner/>}
          />
          <Route path="/Friends" element={<FriendsContainer />} />
          <Route path="/Finder" element={<FinderContainer/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
