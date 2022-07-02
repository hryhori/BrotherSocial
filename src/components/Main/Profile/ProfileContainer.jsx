import React from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getProfileThunk, getStatusThunk } from '../../../redux/reducers/profile-reducer';
import {useParams} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.getProfileThunk(this.props.userId)
    }
    componentDidUpdate(update){
        let previous = update.profile;
        if(previous){
            if(this.props.userId!=previous.userId) {
                this.props.getProfileThunk(this.props.userId)
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
})


let UrlProfileContainer = (props) =>{
    let params = useParams();
    let userId = params.userId;
    if(!userId)
    {
        userId = 2;
    }
    return <ProfileContainer {...props} userId={userId}/> ;
} 

export default connect(mapStateToProps, {getProfileThunk, getStatusThunk}) (UrlProfileContainer)