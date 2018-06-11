import React from 'react';
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

const menuEntries = ['Account']

const MainMenu = () => {
    return (
        <View style={style}>
            {menuEntries.map((e, k) => <MenuIcon name={e} key={k} onClick={() => {}}/>)}
        </View>
    );
};

export default MainMenu;
