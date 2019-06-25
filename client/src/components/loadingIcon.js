import React from 'react';

const LoadingIcon = (props) => {
    return (
        <div className="loading-holder" style={props.style} >
            <div className={"preloader-wrapper active " + (props.size ? props.size : '')}>
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default LoadingIcon