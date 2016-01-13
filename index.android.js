'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Header = require('./src/header');
var Footer = require('./src/footer');

var TimerDemo = React.createClass({
    getInitialState: function () {
        return {
            laps: []
        }
    },
    render: function () {
        console.log('index rendered')
        return <View style={styles.container}>
            <Header addLap={ this.addLap } clearLaps={this.clearLaps} />
            <Footer laps={this.state.laps}/>
        </View>
    },

    addLap: function(lap) {
        this.setState({ laps: this.state.laps.concat([lap])});
    },
    clearLaps:function(){
        this.setState({laps:[]})
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,//Fill the entire screen
        alignItems: 'stretch',
        backgroundColor:'#F2F2F2'
    }
});

AppRegistry.registerComponent('timerDemo', () => TimerDemo);
