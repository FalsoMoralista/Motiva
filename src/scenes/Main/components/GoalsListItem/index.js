import React from 'react';
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Text, StyleSheet, View, Image, Slider } from 'react-native';
import { Header as HeaderBase, Icon } from 'react-native-elements';

// Constants
import COLORS from '@constants/colors';

GoalsListItem = ({ name, score, complete, ...props }) => {

    return (
        <View
            style={{
                borderRadius: 10,
                flex: 1,
                paddingHorizontal: 12,
                paddingVertical: 20,
                backgroundColor: '#fff',
                justifyContent: 'space-evenly',
                shadowColor: '#455B63',
                shadowRadius: 5,
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',

                }}
            >

                <View
                    style={{
                        flex: 8,
                        justifyContent: 'center',
                        paddingLeft: 16
                    }}
                >
                    <Text
                        style={{
                            paddingBottom: 8,
                            fontSize: 17,
                            fontWeight: '400'
                        }}
                    >
                        {name}

                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            fontWeight: '400',
                            color: 'rgba(0,0,0,0.5)'
                        }}
                    >
                        {`${score} pontos`}

                    </Text>

                </View>

                <View
                    style={{
                        marginBottom: -8,
                        flex: 2,
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end'
                    }}
                >
                    {
                        (complete) && (
                            <Icon
                                type='font-awesome'
                                name='check'
                                size={20}
                                color='green'
                            />

                        )
                    }

                </View>
            </View>


        </View>
    )
}

export default withNavigation(GoalsListItem)
