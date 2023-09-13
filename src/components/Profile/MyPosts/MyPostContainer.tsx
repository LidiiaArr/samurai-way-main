import React from "react";
import {addPostActionCreator, } from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";



// export function MyPostsContainer(props: MyPostsPropsType) {
//     return ( <StoreContext.Consumer>
//             {
//             (store) => {
//
//                 let state = store.getState().profilePage;
//
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator(state.newPostText))
//                 } //2)функция которая вызывается с кнопки, вызывает диспатч передает ему экшонкреатор(создает объект нужного типа) и
//                 //2)из пропсов в экшонкреатор содержимое инпута
//
//                 let onPostChange = (newText1) => {
//                     //const newText1 = e.currentTarget.value
//                     // 1)props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText: newText1})
//                     store.dispatch(updateNewPostTextActionCreator(newText1))
//                     //2)диспатчим с помощью экшенкреэйторов
//                 }
//
//
//                 return <MyPosts updateNewPostType={onPostChange}
//                          addPost={addPost}
//                          posts={state.posts}
//                          newPostText={state.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
type PostType = {
    id: number,
    message: string,
    likesCount: number
}

 type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type mapDispatchToPropsType = {
    // updateNewPostType:(newText1:string)=>void
    addPost:(postMessage:string)=>void
}
const mapStateToProps = (state:AppStateType):ProfilePageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

export type MyPostsPropsTypeNew = ProfilePageType & mapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (postMessage)=>{
            dispatch(addPostActionCreator(postMessage))
        }
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer


// <MyPosts updateNewPostType={onPostChange}
//          addPost={addPost} posts={props.posts}
//          newPostText={props.newPostText}/>


// type MyPostsPropsType = {
//     posts: Array<PostType>
//     newPostText: string
//     dispatch: (action: ActionsTypes) => void
// }