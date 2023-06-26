import React from 'react';
import './PageWrapper.scss';

const PageWrapper = ({children}) => {
    return (
        <div className='page-wrapper'>
            {children}
        </div>
    );
};

PageWrapper.propTypes = {
    children: React.Children
}

export default PageWrapper;
