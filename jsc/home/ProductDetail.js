import React from 'react';
import {
  View,
  Image,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { common, colors } from '../stylesheet';
import { addToCart } from '../cart/_cart';

export default function ProductDetail(props) {

  const { selectedProduct } = props.route.params;

  return (
    <View style={[common.verticalContainer]}>
      <StatusBar backgroundColor={colors.gray} barStyle="dark-content" />
      <View style={{ ...common.verticalContainer, backgroundColor: colors.gray }}>
        <ScrollView style={{ paddingVertical: 20 }}>
          <View style={{
            alignItems: "center"
          }}>
            <Image source={{ uri: selectedProduct.image }}
              style={{
                width: wp("90%"),
                height: 250,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View style={{
            paddingHorizontal: wp('5%')
          }}>
            <Text style={{
              fontFamily: "Arial",
              fontSize: 22,
              lineHeight: 26,
              marginVertical: 5,
              color: colors.black,
              fontWeight: "bold",
              textTransform: 'uppercase'
            }}>{selectedProduct.name}</Text>
            <Text style={{
              fontFamily: "Arial",
              fontSize: 20,
              lineHeight: 22,
              marginVertical: 5,
              fontWeight: '500'
            }}>{selectedProduct.detail}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8}
            style={{
              backgroundColor: "#0640A5",
              width: wp("90%"), height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              alignSelf: 'center',
              marginTop: 50
            }}
            onPress={() => {
              //add to cart
              addToCart(selectedProduct);
            }}
          >
            <Feather name='plus' size={25} color={colors.white} />
            <Text style={{
              fontFamily: "Arial",
              fontSize: 18,
              lineHeight: 26,
              marginVertical: 5,
              color: colors.white,
              fontWeight: "bold",
              textTransform: 'uppercase',
              marginLeft: 30
            }}>Add to cart</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}