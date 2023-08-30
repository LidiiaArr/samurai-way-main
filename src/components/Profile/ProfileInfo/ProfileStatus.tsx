import React, {InputHTMLAttributes, LegacyRef, RefObject, useState} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({ //setState асинхронен
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

//prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props.status )
        this.setState({
            status: this.props.status
        })
    }
    //вызывается каждый раз когда меняются пропсы или локальный стейт

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status" }</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus


//statusInputRef = React.createRef<any>()
//ref={this.statusInputRef}