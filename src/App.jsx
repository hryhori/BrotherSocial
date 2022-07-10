import s from "./App.module.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import DialogsConteiner from './components/Main/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import FriendsContainer from './components/Main/Friends/FriendsContainer';
import FinderContainer from "./components/Main/Finder/FinderContainer"
import UrlProfileContainer from './components/Main/Profile/ProfileContainer';
import Login from "./components/Main/LoginPage/Login"
import SignUp from './components/Main/SignUpPage/SignUpPage';
import { connect } from 'react-redux';
import { Initialize } from './redux/reducers/auth-reducer';
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
  componentDidMount(){
    this.props.Initialize();
  }

  render(){
    if(!this.props.isInitialized) return <Preloader/>
    else return (
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
          <Route path="/signup" element={<SignUp/>}/>         
        </Routes>
        <Footer />
      </div>
  );
}}

let mapStateToProps = (state) => ({isInitialized: state.auth.initialized})

export default connect(mapStateToProps, {Initialize})(App);
