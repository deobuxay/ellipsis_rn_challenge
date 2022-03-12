import React from 'react';
import {
  TouchableOpacity, Text, ActivityIndicator
} from "react-native";
import PropTypes from "prop-types";
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { common, colors } from '../stylesheet';

export default function Button(props) {

  return (
    <TouchableOpacity activeOpacity={0.9} disabled={props.loading}
      onPress={() => props.onPress()}
      style={[{
        ...common.flexCentered,
        width: props.width ? props.width : widthPercentageToDP("80%"),
        backgroundColor: props.bgColor ? props.bgColor : "#000",
        borderRadius: 5, marginVertical: props.marginVertical ? props.marginVertical : 10,
        height: props.height ? props.height : 50, alignSelf: 'center',
      }, props.style ? props.style : {}]}
    >
      {
        !props.loading && (
          <Text
            style={{
              color: props.color ? props.color : "#fff",
              fontFamily: colors.poppins, fontSize: 18, letterSpacing: 0.6,
              lineHeight: 20, fontWeight: "700", textTransform: 'uppercase'
            }}
          >
            {props.text}
          </Text>
        )
      }
      {
        props.loading && (
          <ActivityIndicator size="small" color={props.color ? props.color : "#000"} />
        )
      }
    </TouchableOpacity>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.object,
  marginVertical: PropTypes.number
};