import React from "react";
import {
  View,
  TouchableOpacity,
  Text
} from "react-native";
import PropTypes from "prop-types";
import IonIcon from "react-native-vector-icons/Ionicons";
import { colors } from '../stylesheet'

export default function Header(props) {

  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFF",
      height: 80,
      marginTop: 5,
      marginHorizontal: 10,
      borderRadius: 5
    }}>
      {
        props.goBack && <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => props.goBack()}
          style={{
            flex: 2,
            flexDirection: "column", alignItems: "center",
            justifyContent: 'center'
          }}
        >
          <IonIcon name="ios-arrow-back" color={colors.black} size={25} />
        </TouchableOpacity>
      }
      <View style={{
        flex: 4,
        flexDirection: "column",
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 22, lineHeight: 24,
          color: "#000",
          letterSpacing: 0.5,
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}>{props.title}</Text>
      </View>
      {
        props.goBack && (
          <View style={{
            flex: 2
          }}></View>
        )
      }
    </View>
  );
}

Header.propTypes = {
  goBack: PropTypes.func,
  title: PropTypes.string.isRequired
}