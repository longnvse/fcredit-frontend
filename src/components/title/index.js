import React from 'react';

const Title = ({content}) => {
    return (
        <div style={{
            fontSize: 32,
            fontWeight: "bold",
            fontFamily: "Open Sans"
        }}>{content}</div>
    );
};

Title.propTypes = {};

export default Title;