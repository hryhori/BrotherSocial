import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    links: [
        {id: 1, href:'/Profile', name:'Profile', icon:'face'},
        {id: 2, href:'/Dialogs', name:'Dialogs', icon:'mail'},
        {id: 3, href:'/Friends', name:'Friends', icon:'people_outline'},
        {id: 4, href: '/Finder', name:'Finder', icon: 'search'},
      ],
      logo: 'Logo',
}

const NavSlice = createSlice({
    name: 'Nav',
    initialState,
    reducers:{
        ReturnState: (state, action) =>{
            return state
      }
    }   
})

export const {ReturnState} = NavSlice.actions;
export default NavSlice.reducer
