import Nav from "./Nav";
import React from "react";
import { connect } from 'react-redux';
import { setData, setUserInfo } from '../../redux/reducers/auth-reducer';
import { getProfile, authentication } from "../../API/api";

class NavContainer extends React.Component{
    componentDidMount(){
        authentication()
        .then((response) => {
            if(response.data.resultCode === 0){
                let data = response.data.data;
                this.props.setData(data)
                    getProfile(data.id).then((second_response)=> {this.props.setUserInfo(second_response.data)})
            }
        })
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

export default connect(mapStateToProps, {setData, setUserInfo})(NavContainer);