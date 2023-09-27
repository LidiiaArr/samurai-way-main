import React, {ChangeEvent, useEffect, useState} from 'react';

type StatusFunctionalPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<StatusFunctionalPropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    //destructuring assignment - Деструктурирующее присваивание

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    };

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    };

    const activateEditMode = () => {
        setEditMode(true)
    };

    return (
        <div>{editMode
            ? <div>
                <input
                    type="text"
                    value={status}
                    onChange={onStatusChange}
                    onBlur={deActivateEditMode}
                    autoFocus
                />
            </div>
            : <div
                onDoubleClick={activateEditMode}
                style={{fontWeight: 'bold'}}
            >Статус : <span style={{fontWeight: 'normal'}}> {status}</span>
            </div>}
        </div>
    )
}