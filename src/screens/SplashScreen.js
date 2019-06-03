import React, { Component } from 'react';
import {
    View,
    Image,
    Dimensions,
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';

import logo from '../utils/images/react_n_logo.png'
import { OfflineModalEn } from '../components/OfflineModal';
import { colors } from '../../config/Colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class Splash extends Component {
    constructor(props) {
        super(props);
        this.isConnected = true;
        this.state = {
            isModalVisible: false,
        };
        NetInfo.isConnected.fetch().then(isConnected => {
            this.isConnected = isConnected;
        });
    }

    componentDidMount() {
        // ---> Please uncomment this when app goes live with app ids
        this.checkVersions();
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this.handleConnectivityChange
        );
        this.timeOut();
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this.handleConnectivityChange
        );
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            this.isConnected = isConnected;
        } else {
            this.isConnected = isConnected;
        }
    };

    timeOut() {
        setTimeout(() => {
            this.props.navigation.navigate('HomeScreen');
        }, 500);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image
                    source={logo}
                    resizeMode={'contain'}
                    style={{ height: entireScreenWidth * 0.5, width: entireScreenWidth * 0.5 }}
                />
                <OfflineModalEn
                    isVisible={!this.isConnected}
                />
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});


export default Splash;



