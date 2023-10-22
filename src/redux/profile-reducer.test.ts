import {addPostActionCreator, deletePost, ProfilePageType, profileReducer} from "./profile-reducer";

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 11},
        {id: 4, message: "Dada", likesCount: 11}
    ],
    newPostText: '',
    profile: null,
    status: ''
}
it('length of post should be incremented', () => {
    let action = addPostActionCreator('Lidia cool')

    let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(5);
})

it('message of new post should be correct', () => {
    let action = addPostActionCreator('Lidia cool')

    let newState = profileReducer(initialState, action)

    expect(newState.posts[4].message).toBe('Lidia cool')
})

it('after deleting length of message should be decrement', ()=> {
    let action = deletePost(1);
     let newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
})

it(`after deleting length of message shouldn't be decrement if id is incorrect`, ()=> {
    let action = deletePost(1000);
    let newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(4)
})