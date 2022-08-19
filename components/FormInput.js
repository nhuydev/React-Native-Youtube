import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    placeholder,
    inputStyle,
    value = '',
    prependComponent,
    appendComponent,
    onChange,
    onPress,
    editable,
    secureTextEntry,
    keyboardType = 'default',
    autoCompleteType = 'off',
    autoCapitalize = 'none',
    maxLength,
    placeholderTextColor = COLORS.grey60,
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    backgroundColor: COLORS.lightGrey,
                    ...inputContainerStyle,
                }}
            >
                {prependComponent}
                <TextInput
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 0,
                        ...FONTS.body4,
                        lineHeight: 50,
                        ...inputStyle,
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChange={(text) => onChange(text)}
                    onPressIn={onPress}
                    editable={editable}
                />
            </View>
            {appendComponent}
        </View>
    );
};

const styles = StyleSheet.create({});

export default FormInput;
