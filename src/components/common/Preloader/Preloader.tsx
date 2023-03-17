import React from 'react';
import preloader from "../../../assets/images/364.gif";

const Preloader = (props) => {
    return (
        <div style={{backgroundColor: "white"}}>
            <img src={ preloader}/>
        </div>
    );
};

export default Preloader;