import React from 'react';
import { View, Text, Image } from 'react-native';

import { CountryDropDown, TextButton } from '../../components';
import { FONTS, icons, images, theme } from '../../constants';

const BUTTON_SOCIAL = {
    height: 48,
    borderWidth: 0.5,
    borderColor: '#f1f1f1',
    backgroundColor: 'white',
    borderRadius: theme.SIZES.radius,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    marginTop: 10,
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
};

const AuthMain = ({ navigation }) => {
    // Country
    const [countries, setCountries] = React.useState([]);
    const [showCountryModal, setShowCountryModal] = React.useState(false);

    React.useEffect(() => {
        // Fetch countires
        fetch('https://restcountries.com/v2/all')
            .then((response) => response.json())
            .then((data) => {
                let countryData = data.map((item) => {
                    return {
                        code: item.alpha2Code,
                        name: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://countryflagsapi.com/png/${item.alpha2Code}`,
                    };
                });

                setCountries(countryData);
            });
    }, []);

    // Render

    return (
        <View style={{ flex: 1, padding: 26, backgroundColor: '#FCFCFC', justifyContent: 'center' }}>
            <Text style={{ ...FONTS.h2, textAlign: 'center' }}>Let’s Get Started 😁</Text>
            <Text style={{ ...FONTS.body5, textAlign: 'center', marginTop: 20 }}>
                Sign up or login into to have a full digital experience in our restaurant
            </Text>

            <View>
                <TextButton
                    label="ĐĂNG NHẬP"
                    contentContainerStyle={{ height: 48, borderRadius: theme.SIZES.radius, marginTop: 50 }}
                    onPress={() => navigation.navigate('AuthEmail')}
                />
            </View>
            <View style={{ position: 'relative' }}>
                <Text
                    style={{
                        position: 'absolute',
                        left: '43%',
                        bottom: 0,
                        backgroundColor: 'white',
                        paddingHorizontal: 20,
                        zIndex: 1,
                    }}
                >
                    OR
                </Text>
                <Text style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginVertical: 8 }} />
            </View>
            <View>
                <TextButton
                    label={
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ height: 20, width: 20, marginRight: 10 }} source={icons.google} />
                            <Text>Kết nối với Facebook</Text>
                        </View>
                    }
                    contentContainerStyle={BUTTON_SOCIAL}
                />
            </View>
            <View>
                <TextButton
                    label={
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ height: 20, width: 20, marginRight: 10 }} source={icons.google} />
                            <Text>Kết nối với Gmail</Text>
                        </View>
                    }
                    contentContainerStyle={BUTTON_SOCIAL}
                />
            </View>
        </View>
    );
};

export default AuthMain;
