'use strict';
var formatTime = require('minutes-seconds-milliseconds');
import React,{
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Timer = React.createClass({
    render: function () {
        return <View style={styles.timerWrapper}>
            <Text style={styles.timer}>
                {formatTime(this.props.timeElapsed)}
            </Text>
        </View>
    }
});

var styles = StyleSheet.create({
    timerWrapper: {
        flex: 5, //takes up 5/8 of the space
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer: {
        fontSize: 60
    }
});

module.exports = Timer;