import React from 'react';
import classNames from 'classnames';

function Button({ className, outline, children, onClick }) {

    const toggleActiveButton = onClick;

    return (
        <button
            onClick={toggleActiveButton}
            className={classNames('button', className, {
                'button-outline': outline,
            })}>
            <span>{children}</span>
        </button>
    )
}

export default Button
