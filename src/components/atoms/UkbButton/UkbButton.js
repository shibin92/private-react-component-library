import React, { useState, useEffect } from 'react';
const UkbButton = (props) => {
    const [isLoading, setLoading] = useState(false);
    let classNames = `${props.className}`;
    useEffect((test) => {
        console.log('test======', test);
        if (isLoading) {
            props.onClick('hellow').finally(() => {
            // props.onClick('hellow');
            setLoading(false);
          });
        }
      }, [isLoading]);
    const handleClick = (event) => {
        setLoading(true);
    }
    return (
        <button className={classNames} onClick={!isLoading ? handleClick : null} disabled={props.disabled}>{isLoading ? 'Loading…' : props.children}</button>
    );
}

export default UkbButton;