// This component handles the App template used on every page.
import React from 'react';
import Routes from '../routes';
import MainFooter from './common/footer/MainFooter';


const App = () => (    
    <div>  
        <Routes />
       <MainFooter></MainFooter>

    </div> 
   );

function mapStateToProps(state) {
    return {

    };
}
export default App;
