let initialState ={
    friends: [
        { id: 1, name: "Alex", photo: "" },
        { id: 2, name: "Vasya", photo: ""},
        { id: 3, name: "Petya", photo: ""},
        { id: 4, name: "Kolya", photo: "" },
        { id: 5, name: "Ivan", photo: "" }
      ]
}

let FriendsReducer = (state = initialState, action) => {
    return state;
}

export default FriendsReducer;