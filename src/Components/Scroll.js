import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{ margin: 'auto', overflowY: 'scroll', border: '3px solid black', height: '500px', width: '90vw' }}>
            {props.children}
        </div>
    )
}

export default Scroll;