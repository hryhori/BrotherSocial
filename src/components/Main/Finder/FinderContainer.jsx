import { connect } from 'react-redux';
import { getUsersThunk , followThunk, expandPageThunk } from '../../../redux/reducers/finder-reducer';
import React from "react";
import Finder from "./Finder";

class FinderContainer extends React.Component {

    componentDidMount(){
        this.props.getUsersThunk(this.props.pageSize);
    }
  
    onPageChanged = (pageSize) => {
      this.props.expandPageThunk(this.props.pageSize);
    }
  
    render() {
      return (
      <>
          <Finder
            follow={this.props.followThunk}
            onPageChanged={this.onPageChanged}
            pageSize={this.props.pageSize}
            users={this.props.users}
            isFollowingInProgress={this.props.isFollowingInProgress}
          />
      </>
    );
}
  }

let mapStateToProps = (state) =>{
    return{
        users: state.FinderPage.users,
        pageSize: state.FinderPage.pageSize,
        isFollowingInProgress: state.FinderPage.isFollowingInProgress,
    }
} 


export default connect(mapStateToProps, {followThunk, getUsersThunk, expandPageThunk})(FinderContainer);
