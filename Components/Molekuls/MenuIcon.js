import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';

const icons = {
    Account: require('../../Icons/PNG/Account.png')
}

const style = {
    wrapper: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 1,
    },
    icon: {
        width: 35,
        height: 35
    },
    text: {
        marginTop: 2,
        fontSize: 9
    }
};

const MenuIcon = props => {
    return (
        <View style={style.wrapper}>
            <Image source={icons[props.name]} style={style.icon}/>
            <Text style={style.text}>{props.name}</Text>
        </View>
    );
};

MenuIcon.propTypes = {
    name: PropTypes.oneOf(['Account', 'Klaus']),
    onClick: PropTypes.func.isRequired
};
 
export default MenuIcon;
