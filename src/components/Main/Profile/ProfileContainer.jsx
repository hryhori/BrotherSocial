import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfileThunk } from '../../../redux/reducers/profile-reducer';
import {useParams} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount(){
        if(!this.props.profile) {
            this.props.getProfileThunk(2)
        };
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
        if(params.userId!=props.profile.userId) {
            props.getProfileThunk(params.userId)
        };
    }
    return <ProfileContainer {...props}/> ;
} 

export default connect(mapStateToProps, {getProfileThunk}) (UrlProfileContainer)