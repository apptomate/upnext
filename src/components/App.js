// This component handles the App template used on every page.
import React from 'react';
import Routes from '../routes';
import MainFooter from './common/footer/MainFooter';
import Alert from 'react-s-alert';


const App = () => (
    <div>
        <Alert stack={{ limit: 2 }} />
        <Routes />
        <MainFooter></MainFooter>

    </div>
);

// function mapStateToProps(state) {
//     return {

//     };
// }
export default App;
