'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

var Buttons = React.createClass({

    render: function () {
        return <View style={styles.buttonWrapper}>
            {this.startStopButton()}
            {this.lapButton()}
        </View>
    },
    startStopButton: function () {
        var style = this.props.running ? styles.stopButton : styles.startButton;
        return <TouchableHighlight underlayColor='#E5E5E5' onPress={this.props.handleStartPress}
                                   style={[styles.button,style]}>
            <Text>
                {this.props.running ? 'Stop' : 'Start'}
            </Text>
        </TouchableHighlight>
    },
    lapButton: function () {
        return <TouchableHighlight style={[styles.button,styles.lapButton]} underlayColor='#E5E5E5'
                                   onPress={this.props.handleLapPress}>
            <Text>
                {this.props.running ? 'Lap' : 'Reset'}
            </Text>
        </TouchableHighlight>
    }
});

var styles = StyleSheet.create({
    buttonWrapper: {
        flex: 3, //takes up 3/8 of the space
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        borderColor: '#00B26E',
        backgroundColor: '#FFF'
    },
    stopButton: {
        borderColor: '#EF000B',
        backgroundColor: '#FFF'
    },
    lapButton: {
        borderColor: '#00B26E',
        backgroundColor: '#FFF'
    }
});

module.exports = Buttons;