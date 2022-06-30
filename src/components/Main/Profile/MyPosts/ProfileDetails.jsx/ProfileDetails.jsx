import s from "./ProfileDetails.module.css"
import React from "react"
import Preloader from '../../../../common/Preloader/Preloader';

class ProfileDetails extends React.Component{

    state = {
        statusEditMode: false,
      }

    toggleEditMode(){
        this.setState({
            statusEditMode: !this.state.statusEditMode
        })
    }

    render(){
        return this.props.profile ? (
          <>
            <h3>{this.props.profile.fullName}</h3>
            <div className={s.user_status}>
              {!this.state.statusEditMode && (
                <span onDoubleClick={this.toggleEditMode.bind(this)}>
                  Status: {this.props.profile.aboutMe}
                </span>
              )}
              {this.state.statusEditMode && (
                <input autoFocus={true} value={this.props.profile.aboutMe} onBlur={this.toggleEditMode.bind(this)}/>
              )}
            </div>
          </>
        ) : (
          <Preloader />
        );
        
    }
}

export default ProfileDetails;