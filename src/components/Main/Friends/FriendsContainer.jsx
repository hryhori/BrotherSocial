import { connect } from 'react-redux';
import Friends from './Friends';

let mapStateToProps = (state) =>{
    return{
        data: state.FriendsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{

    }
}

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;