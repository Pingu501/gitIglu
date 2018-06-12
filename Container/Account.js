import React from 'react';
import {ScrollView} from 'react-native';
import Heading from '../Components/Atoms/Heading';
import List from '../Components/Atoms/List';

const listEntries = [
    {
        label: 'pinguin501',
        value: 'hey'
    },
    {
        label: 'pinguin501',
        value: 'ho'
    },
    {
        label: 'pinguin501',
        value: 'lets go'
    }
]

export default class Account extends React.PureComponent {

    handleAccontClick = account => {
        console.log(account);
    }

    render() {
        return (
            <ScrollView>
                <Heading size="large">Accounts</Heading>
                <List entries={listEntries} onPress={this.handleAccontClick}/>
            </ScrollView>
        )
    }

}
