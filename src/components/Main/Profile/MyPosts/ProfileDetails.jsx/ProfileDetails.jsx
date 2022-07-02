import s from "./ProfileDetails.module.css"
import React from "react"
import Preloader from '../../../../common/Preloader/Preloader';

class ProfileDetails extends React.Component{

    state = {
        statusEditMode: false,
        status: this.props.status,
      }

    toggleEditMode = () =>{
        this.setState({
            statusEditMode: !this.state.statusEditMode
        })
        if(this.state.statusEditMode){
          this.props.updateStatusThunk(this.state.status);
        }
    }

    componentDidUpdate(prevProps, prevState){
      if(prevProps.status!==this.props.status)
      {
        this.setState({
          status: this.props.status
        })
      }
    }

    render(){
        return this.props.profile ? (
          <>
            <h3>{this.props.profile.fullName}</h3>
            <div className={s.user_status}>
              {!this.state.statusEditMode && (
                <span onDoubleClick={this.toggleEditMode}>
                  Status: {this.props.status || '-------'}
                </span>
              )}
              {this.state.statusEditMode && (
                <input onChange={(e)=>{this.setState({status: e.currentTarget.value})}} autoFocus={true} value={this.state.status} onBlur={this.toggleEditMode}/>
              )}
            </div>
          </>
        ) : (
          <Preloader />
        );
        
    }
}

export default ProfileDetails;