import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/GlobalStyles';

const ButtonPrincipal = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btnContent}>
                <Text style={styles.btnTextStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ButtonPrincipal;