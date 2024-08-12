import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import colors from '../../../styles/colors';
import {styles} from "./styles";

export const Input = ({
    value,
    setValue,
    placeholder,
    mask,
    label,
    disabled = false,
    error,
    errorMessage,
    type,
    className,
    lines = 1,
    maxLength,
}) => {
    const maskOptions = {
        datetime: {
            format: 'DD/MM/YYYY',
        },
        'cel-phone': {
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
        },
    };

    const selectedMaskOption = (mask && maskOptions[mask]) || {};

    const style = disabled ? styles.disabledInput : styles.enabledInput;

    const inputProps = {
        value: value,
        onChangeText: setValue,
        placeholder: placeholder,
        editable: !disabled,
        placeholderTextColor: colors.black[300],
        style: [style, { textAlignVertical: 'top' }],
    };

    return (
        <View style={className}>
            <Text style={styles.label}>
                {label}
            </Text>
            {mask ? (
                <TextInputMask
                    type={mask}
                    options={selectedMaskOption}
                    {...inputProps}
                />
            ) : (
                <TextInput
                    keyboardType={type}
                    numberOfLines={lines}
                    multiline={lines > 1}
                    maxLength={maxLength}
                    {...inputProps}
                />
            )}
            {!error && maxLength && (
                <Text style={styles.maxLength}>
                    {value.length}/{maxLength}
                </Text>
            )}
            {error && (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
        </View>
    );
};