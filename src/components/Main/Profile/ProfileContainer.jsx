import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfileThunk, getStatusThunk } from '../../../redux/reducers/profile-reducer';
import {useParams} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.getProfileThunk(this.props.userId)
        this.props.getStatusThunk(this.props.userId)
    }
    componentDidUpdate(prevProps){
        if(prevProps.profile){
            if(this.props.userId!=prevProps.profile.userId) {
                this.props.getProfileThunk(this.props.userId)
                this.props.getStatusThunk(this.props.userId)
            };
        }
    }
    render () {
        return <Profile {...this.props.profile} social={this.props.social}/>
    }
}

let mapStateToProps = (state) => ({ 
    profile: state.ProfilePage.profile,
    social: state.ProfilePage.social,
    myprofile: state.auth.id,
})


let UrlProfileContainer = (props) =>{
    let params = useParams();
    let userId = params.userId;
    if(!userId)
    {
        userId = props.myprofile;
    }
    return <ProfileContainer {...props} userId={userId}/> ;
} 

export default connect(mapStateToProps, {getProfileThunk, getStatusThunk}) (UrlProfileContainer)