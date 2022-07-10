import Nav from "./Nav";
import React from "react";
import { connect } from 'react-redux';
import { LogoutThunk } from '../../redux/reducers/auth-reducer';

class NavContainer extends React.Component{
    componentDidMount(){
    }

    render(){
        return <Nav {...this.props}/>
    }
}

let mapStateToProps = (state) =>{
    return{
        info: state.NavMenu,
        about_user: state.auth,
    }
}

export default connect(mapStateToProps, { LogoutThunk})(NavContainer);