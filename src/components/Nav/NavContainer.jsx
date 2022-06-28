import Nav from "./Nav";
import React from "react";
import { connect } from 'react-redux';
import * as axios from "axios";
import { setData, setUserInfo } from '../../redux/reducers/auth-reducer';

class NavContainer extends React.Component{
    componentDidMount(){
        axios
        .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
        .then((response) => {
            if(response.data.resultCode === 0){
                let data = response.data.data;
                this.props.setData(data)
                axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ data.id)
                    .then((second_response)=> {this.props.setUserInfo(second_response.data)})
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