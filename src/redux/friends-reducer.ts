const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    location: { city: string, country: string }
    photos: { small: string | null, large: string | null }
    status: string
}
export type FriendsType = {
    users: Array<UserType>
    status: any
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}

const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR'
}

let initialState: FriendsType = {
    users: [],
    status: statuses.NOT_INITIALIZED,
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
    // users: [
    //     {id: 1, followed: false, fullName: "Dmitry", status:"I am boss", location: {city:"Minsk", country:"Belarus"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
    //     {id: 2, followed: true, fullName: "Sasha", status:"I am boss too", location: {city:"Moscow", country:"Russia"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
    //     {id: 3, followed: false, fullName: "Andrew", status:"I am boss too", location: {city:"Kiev", country:"Ukraine"},photoUrl:"https://www.vokrug.tv/pic/person/6/d/b/4/6db489c474b8cdef6c848333ae885d48.jpeg"},
    // ],
}


export type AddPostActionType = {
    type: "ADD-Post" //тип конкретная строка
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
    users: Array<UserType>
}

type setCurrentPageACType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
type setUsersTotalCountACType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}
type setIsFetchingACType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
type setIsFollowingProgressACType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    isFetching: boolean
    userId: number
}
//Экшонкриэйторы
export const follow = (userId: number): followACType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): unfollowACType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): setUsersACType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setCurrentPageACType => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})
export const setUsersTotalCount = (totalUsersCount: number): setUsersTotalCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): setIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: number): setIsFollowingProgressACType => ({
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
})


export const friendsReducer = (state: FriendsType = initialState, action: followACType | unfollowACType | setUsersACType | setCurrentPageACType | setUsersTotalCountACType | setIsFetchingACType | setIsFollowingProgressACType): FriendsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUserCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;

    }
    return state;
}