import { Fragment } from "react";
import PropTypes from 'prop-types';

const HelloWorld = {
    msg: 'hola mundo'
};

const App = ({tittle}) => {

    return (
        <Fragment>
            {/* <code>{ JSON.stringify(HelloWorld) }</code> */}
            {/* <h1>{ tittle }</h1> */}
            <p>This is a simple React app.</p>
        </Fragment>
    );
}

App.prototype = {
    tittle: PropTypes.string.isRequired
}

App.defaultProps = {
    tittle: 'hola mundo'
}

export default App;