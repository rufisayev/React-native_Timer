'use strict';
var formatTime = require('minutes-seconds-milliseconds');
import React,{
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var Footer = React.createClass({

    render: function () {
        return <View style={styles.footer}>
            {this.laps()}
        </View>
    },
    laps: function () {
        return this.props.laps.map(function (time, index) {
            return <View key={index} style={styles.lap}>
                <Text style={styles.lapText}>
                    Lap #{index + 1}
                </Text>
                <Text style={styles.lapText}>
                    {formatTime(time)}
                </Text>
            </View>
        })
    }
});

var styles = StyleSheet.create({
    footer: {
        flex: 1
    },
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    lapText: {
        fontSize: 30
    }
});

module.exports = Footer;