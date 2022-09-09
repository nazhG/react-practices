import{ useState } from 'react'
import { PropTypes } from 'prop-types'


const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState(value);

    const handleAdd = ( event ) => {
        setCounter( counter + 1 );
    }
    
    return (
        <>
            <h1>Counter App</h1>
            <button onClick={ handleAdd }>{ counter }</button>
        </>
    )
}

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;