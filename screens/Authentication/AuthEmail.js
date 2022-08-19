import React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { FormInput, TextButton } from '../../components';
import { FONTS, SIZES, theme } from '../../constants';

const AuthEmail = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 24,
                backgroundColor: '#fcfcfc',
                justifyContent: 'space-between',
            }}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible>
                <View>
                    <Text style={{ ...FONTS.h2, textAlign: 'center', marginTop: 72 }}>What’s your email? 📨</Text>
                    <Text style={{ ...FONTS.body4, textAlign: 'center', marginBottom: 72 }}>
                        We need it to search after your account or create a new one
                    </Text>
                    <FormInput
                        value=""
                        inputContainerStyle={{ backgroundColor: 'white', borderWidth: 0.5, borderColor: '#ccc' }}
                        placeholder="Nhập địa chỉ email"
                    />
                </View>
                <View style={{ flex: 1, backgroundColor: 'red' }} />
            </TouchableWithoutFeedback>
            <TextButton
                label="TIẾP THEO"
                contentContainerStyle={{ height: 48, borderRadius: theme.SIZES.radius, marginTop: 50 }}
                onPress={() => navigation.navigate('AuthEmail')}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default AuthEmail;
