import React, { useState } from 'react';
import { Keyboard, ScrollView } from 'react-native';
import {
  View,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import IonIcon from "react-native-vector-icons/Ionicons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, common } from '../stylesheet';
import Button from '../components/button';

export default function Login(props) {
  let compRefs = [];
  let [user, setUser] = useState({
    loading: false,
    email: null,
    password: null,
    errorMessage: null
  });

  const login = async () => {
    props.navigation.replace('PostAuth');
  }

  return (
    <SafeAreaView style={[common.verticalContainer, { backgroundColor: "#000" }]}>
      <StatusBar backgroundColor={colors.black} barStyle="light-content" />
      <View style={{ ...common.verticalContainer, paddingHorizontal: wp('5%') }}>
        <View style={{
          flex: -1, flexDirection: "row",
          justifyContent: 'space-between',
          marginVertical: 60
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: "bold",
            color: colors.white
          }}> SIGN IN</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => { }}
            style={{
              flexDirection: 'row', alignItems: "center",
              justifyContent: 'flex-end', height: 25
            }}>
            <Text style={{
              fontSize: 20,
              lineHeight: 25,
              fontWeight: "normal",
              color: colors.white,
              marginRight: 20
            }}>Sign up</Text>
            <IonIcon name='ios-arrow-forward' color={colors.white} size={20} />
          </TouchableOpacity>
        </View>

        <View style={{
        }}>
          <Text style={common.label}>EMAIL</Text>
          <TextInput
            style={[common.input, { width: wp("90%") }]}
            value={user.email}
            onChangeText={v => { setUser({ ...user, email: v }) }}
            placeholder="Email"
            placeholderTextColor={colors.lightgray}
          />

          <Text style={common.label}>PASSWORD</Text>
          <TextInput
            style={{ ...common.input, width: wp('90%') }}
            value={user.password}
            onChangeText={v => { setUser({ ...user, password: v }) }}
            placeholder="Password"
            placeholderTextColor={colors.lightgray}
          />
          <Text style={[common.label, { textAlign: "right" }]}>Forgot your password?</Text>
        </View>

        <View style={{
          position: "absolute",
          bottom: 10,
          left: wp("5%")
        }}>
          <Button
            loading={user.loading}
            bgColor={'rgba(255,255,255,1)'}
            text={"SIGN IN"}
            color={colors.black}
            onPress={login}
            width={wp('90%')}
          />
          <Text style={[common.label, { textAlign: "center", marginVertical: 20 }]}>Sign in with a social account?</Text>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10
          }}>
            <IonIcon name='logo-google' color={colors.white} size={30} />
            <IonIcon name='logo-facebook' color={colors.white} size={30} />
            <IonIcon name='logo-twitter' color={colors.white} size={30} />
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}