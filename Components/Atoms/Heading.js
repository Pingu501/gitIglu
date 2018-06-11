import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const styles = {
    default: {
        color: '#224870',
        fontWeight: 'bold'
    },
    small: {
        fontSize: 24
    },
    medium: {
        fontSize: 30
    },
    large: {
        fontSize: 42
    }
}

const Heading = props => {
    return (
        <Text style={{...styles.default, ...styles[props.size]}}>{props.children}</Text>
    )
}

Heading.defaultProps = {
    children: 'Heading',
    size: 'large'
}

Heading.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default Heading;
