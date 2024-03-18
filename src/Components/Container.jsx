import React from 'react';

const Container = ({children}) => {
    return (
        <div className='px-4 md:px-16  lg:px-20 py-1 lg:py-3'>
            {children}
        </div>
    );
};

export default Container;