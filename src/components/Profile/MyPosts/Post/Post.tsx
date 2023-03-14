import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string;
    likesCount: number
}

export function Post(props:PostPropsType) {
    return (
                <div className={s.item}>
                    <img src='https://games.mail.ru/hotbox/content_files/news/2021/12/09/da11fab296d549999fa36b968a0333cc.jpg'/>
                    {props.message}
                    <div>
                        <span>like {props.likesCount}</span>
                    </div>
                </div>
)
}
