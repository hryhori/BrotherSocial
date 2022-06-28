let initialState = {
    links: [
        {id: 1, href:'/Profile', name:'Profile', icon:'face'},
        {id: 2, href:'/Dialogs', name:'Dialogs', icon:'mail'},
        {id: 3, href:'/Friends', name:'Friends', icon:'people_outline'},
        {id: 4, href: '/Finder', name:'Finder', icon: 'search'},
      ],
      logo: 'Logo',
}

let NavMenuReducer = (state = initialState, action) =>{
  return state
}

export default NavMenuReducer;