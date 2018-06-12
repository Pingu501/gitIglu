import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';

const styles = {
    wrapper: {
        marginTop: 20,
        marginBottom: 20,
        borderTopWidth: 1,
        borderColor: '#e8e8e8'
    },
    listItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#e8e8e8'
    },
    listItemText: {
        fontSize: 16
    }
}

export default class List extends React.PureComponent {
    static propTypes = {
        entries: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.string
            })
        ),
        onPress: PropTypes.func
    };

    handleItemPress = value => {
        if (this.props.onPress) {
            return () => {
                this.props.onPress(value);
            }
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                {this.props.entries.map((e, i) => (
                    <TouchableOpacity key={i} style={styles.listItem} onPress={this.handleItemPress(e.value)}>
                        <Text style={styles.listItemText}>{e.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}
