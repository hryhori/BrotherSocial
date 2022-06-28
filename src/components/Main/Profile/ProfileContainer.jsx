import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { setProfile } from '../../../redux/reducers/profile-reducer';
import * as axios from 'axios';
import {useParams} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount(){
        if(!this.props.profile){
            axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then((response)=>{
                this.props.setProfile(response.data)
            })
    }
    }
    render () {
        return <Profile {...this.props.profile} social={this.props.social}/>
    }
}

let mapStateToProps = (state) => ({ 
    profile: state.ProfilePage.profile,
    social: state.ProfilePage.social,
})


let UrlProfileContainer = (props) =>{
    let params = useParams();
    if(!params.userId){
        params.userId = 2;
    }
    if(props.profile){
        if(params.userId!=props.profile.userId){
            axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/'+ params.userId)
            .then((response)=>{
                props.setProfile(response.data)
            })
        }
    }
    return <ProfileContainer {...props}/> ;
} 

export default connect(mapStateToProps, {setProfile}) (UrlProfileContainer)