import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from './reducers/profile-reducer';
import DialogsReducer from './reducers/dialogs-reducer';
import FriendsReducer from './reducers/friends-reducer';
import NavMenuReducer from './reducers/navmenu-reducer';
import FinderReducer from "./reducers/finder-reducer";
import AuthReducer from "./reducers/auth-reducer";
import thunkMiddleware  from "redux-thunk"; 
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    FriendsPage: FriendsReducer,
    NavMenu: NavMenuReducer,
    FinderPage: FinderReducer,
    auth: AuthReducer,
    form: formReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;