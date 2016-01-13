'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Timer = require('./timer');
var Buttons = require('./buttons');
var formatTime = require('minutes-seconds-milliseconds');

var Header = React.createClass({
    getInitialState: function () {
        return {
            timeElapsed: null,
            running: false,
            startTime: new Date(),
            isFirstAttempt:true
        }
    },
    render: function () {
        return <View style={styles.header}>
            <Timer timeElapsed={this.state.timeElapsed}/>
            <Buttons handleStartPress={this.handleStartPress}
                     running={this.state.running}
                     handleLapPress={this.handleLapPress}/>
        </View>
    },
    handleStartPress: function () {
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({running: false,isFirstAttempt:false});
            return
        }
        this.setState({startTime: new Date()});
        this.interval = setInterval(() => {
            this.setState({
                timeElapsed: new Date() - this.state.startTime,
                running: true,
                isFirstAttempt:false
            })
        }, 30);
    },
    handleLapPress: function (event) {
        if(!this.state.running){
            clearInterval(this.interval);
            this.setState({running: false,timeElapsed: null});
            const {clearLaps} = this.props;
            clearLaps();
            return
        }
        const {addLap} = this.props;
        var lap = this.state.timeElapsed;

        addLap(lap);
    }
});

var styles = StyleSheet.create({
    header: {
        flex: 1
    }

});

module.exports = Header;