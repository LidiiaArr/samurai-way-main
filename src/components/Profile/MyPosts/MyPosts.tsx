import React, {ChangeEvent, LegacyRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsTypeNew} from "./MyPostContainer";
import {Field, reduxForm} from "redux-form";


export function MyPosts(props:MyPostsPropsTypeNew) {

    let postsElements = props.posts.map(p=> <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = (values) => {
        props.addPost(values.newPostText)
    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {/*<form>*/}
            {/*    <div><textarea onChange={onPostChange}   value={props.newPostText}/></div>*/}
            {/*    <div>*/}
            {/*        <button onClick={onAddPost}>Add post</button>*/}
            {/*    </div>*/}
            {/*</form>*/}
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={'textarea'}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);