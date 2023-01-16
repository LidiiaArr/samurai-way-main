import React, {ChangeEvent, LegacyRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

import store, {
    ActionsTypes,
    PostType,
} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPostsPropsTypeNew} from "./MyPostContainer";

// type MyPostsPropsType = {
//     updateNewPostType:(newText1:string)=>void
//     addPost:()=>void
//
//     posts:Array<PostType>
//     newPostText: string
// }

export function MyPosts(props:MyPostsPropsTypeNew) {

    let postsElements = props.posts.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost(props.newPostText)
    }

    let onPostChange =(e: ChangeEvent<HTMLTextAreaElement>)=>{
        const newText1 = e.currentTarget.value
        props.updateNewPostType(newText1)
    }
    //берет тексарию и вызывает колбек который передали

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange}   value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
