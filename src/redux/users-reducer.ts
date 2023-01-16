import {ChangeNewTextActionType, PostType, ProfilePageType} from "./store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: {city:string, country:string}
    photoUrl:string,
}
export type UsersType = {
    users: Array<UserType>
}

let initialState:UsersType = {
    users: []

    // users: [
    //     {id: 1, followed: false, fullName: "Dmitry", status:"I am boss", location: {city:"Minsk", country:"Belarus"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
    //     {id: 2, followed: true, fullName: "Sasha", status:"I am boss too", location: {city:"Moscow", country:"Russia"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
    //     {id: 3, followed: false, fullName: "Andrew", status:"I am boss too", location: {city:"Kiev", country:"Ukraine"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
    // ],
}



export type AddPostActionType = {
    type:"ADD-Post" //тип конкретная строка
    postMessage: string
}
type followACType = {
    type: "FOLLOW"
    userId: number
}

type unfollowACType = {
    type: "UNFOLLOW"
    userId: number
}

type setUsersACType = {
    type: "SET_USERS"
    users:Array<UserType>
}
export const followAC = (userId:number): followACType=> ({type: FOLLOW, userId})
export const unfollowAC = (userId:number) : unfollowACType=> ({type: UNFOLLOW, userId})
export const setUsersAC = (users:Array<UserType>):setUsersACType=> ({type: SET_USERS, users})


export const usersReducer = (state:UsersType=initialState, action:followACType | unfollowACType | setUsersACType):UsersType=> {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(u => u.id === action.userId ?  {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => u.id === action.userId ?  {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users:[...state.users, ...action.users] }
        default:
            return state;

    }

    return state;
}
