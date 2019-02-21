import React, { Component ,PropTypes } from 'react';
import MainHeaderWithNavigation from './MainHeaderWithNavigation';


class MainHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
                <MainHeaderWithNavigation></MainHeaderWithNavigation>                  
        );
    };
}
module.exports = MainHeader;
