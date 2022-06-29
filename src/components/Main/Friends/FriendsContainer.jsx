import { connect } from 'react-redux';
import Friends from './Friends';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';

let mapStateToProps = (state) =>{
    return{
        data: state.FriendsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Friends));