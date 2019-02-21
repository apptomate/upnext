// This component handles the App template used on every page.
import React from 'react';
import Routes from '../routes';


const App = () => (    
    <div>  
        <Routes />
    </div> 
   );

function mapStateToProps(state, ownProps) {
    return {

    };
}
export default App;
