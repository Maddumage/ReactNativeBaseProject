import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { colors } from '../../utils/Colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

class OfflineModalEn extends Component {
    render() {
        return (
            <Overlay
                isVisible={this.props.isVisible}
                windowBackgroundColor={colors.modalBackground}
                overlayBackgroundColor={colors.compassLight}
                width={entireScreenWidth * 0.72}
                height={entireScreenWidth * 0.4}
            >
                <View style={{ flex: 1, borderRadius: EStyleSheet.value('8rem') }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: EStyleSheet.value('18rem'), fontWeight: 'bold', alignSelf: 'center', color: colors.white }}>
                            Connection error
                    </Text>
                    </View>
                    <View style={{ flex: 2.5, justifyContent: 'center' }}>
                        <Text style={{ fontSize: EStyleSheet.value('14rem'), alignSelf: 'center', color: colors.white, textAlign: 'center' }}>
                            Unable to connect with the server. Check your internet connection and try again.
                        </Text>
                    </View>
                    <View style={{ flex: 1.5, justifyContent: 'center' }}>
                        <Button
                            icon={
                                <Icon
                                    name='restart'
                                    size={EStyleSheet.value('14rem')}
                                    color={colors.textAsh}
                                />
                            }
                            title='Try again'
                            titleStyle={{ fontWeight: "500", fontSize: EStyleSheet.value('14rem'), color: colors.textAsh }}
                            buttonStyle={{
                                backgroundColor: colors.backgroundAsh,
                                width: entireScreenWidth * 0.4,
                                height: 'auto',
                                alignSelf: 'center'
                            }}
                            onPress={() => RNRestart.Restart()}
                        />
                    </View>
                </View>
            </Overlay>
        );
    }
}

export { OfflineModalEn };