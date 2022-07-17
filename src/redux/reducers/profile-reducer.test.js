import ProfileReducer, { AddPostActionCreator } from './profile-reducer';

let state = {
    posts: [
        { id: 1, text: "Hey, im here!", likescount: 20 },
        { id: 2, text: "Hello world!", likescount: 10 },
        { id: 3, text: "Hello!", likescount: 10 },
        { id: 4, text: "world!", likescount: 10 },
      ] ,
      profile: null,
      status: '',
}

it('length of post should be incremented', ()=>{

    // test data
    let action = AddPostActionCreator('Lol');

    // Action
    let newState = ProfileReducer(state, action);

    // expect
    expect(newState.posts.length).toBe(5);
    expect(newState.posts[4].text).toBe('Lol');

});