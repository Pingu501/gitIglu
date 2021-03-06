import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import MenuIcon from '../Components/Molekuls/MenuIcon';

const style = {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    height: 62,
    borderTopWidth: 1,
    backgroundColor: '#e8e8e8',
    borderColor: '#e8e8e8'
};

const menuEntries = ['Start', 'Account']

export default class MainMenu extends React.PureComponent {
    static propTypes = {
        handleScreenChange: PropTypes.func.isRequired
    }

    render() {
        return (
            <View style={style}>
                {menuEntries.map((e, k) => <MenuIcon name={e} key={k} onClick={this.handleIconClick(e)}/>)}
            </View>
        );
    }

    handleIconClick = name => {
        return () => {
            this.props.handleScreenChange(name);
        }
    }
}
