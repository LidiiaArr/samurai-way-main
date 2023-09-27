import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersPage = (state: AppStateType) => {
    return state.usersPage;
}

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getUsersSuperSelectors = createSelector(getUsersSelector,(users)=> {
    return users.filter(u => true)
})
//кешируем селектор

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}