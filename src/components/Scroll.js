import React, { Fragment } from 'react';

const Scroll = (props) => {
    return(
        <Fragment>
            <div style={{
                overflowY: "scroll",
                border: "3px solid black",
                height: "395px"
            }}>
                { props.children }
            </div>
        </Fragment> 
    )
}
export default Scroll;