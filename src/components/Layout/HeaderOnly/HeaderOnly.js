import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header/Header';

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
