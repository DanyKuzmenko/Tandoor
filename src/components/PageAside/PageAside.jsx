import React from 'react';
import './PageAside.scss';

const PageAside = () => {
    return (
        <aside className='aside'>
            <div className='aside__top-block'>
                <button className='aside__menu' />
                <nav>
                    <ul className='aside__navigation'>
                        <li className='aside__navigation-element'></li>
                        <li className='aside__navigation-element'></li>
                        <li className='aside__navigation-element'></li>
                        <li className='aside__navigation-element'></li>
                    </ul>
                </nav>
            </div>
            <div className='aside__partners'>

            </div>
        </aside>
    );
};

export default PageAside;
