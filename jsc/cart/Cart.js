import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import { common, colors } from '../stylesheet';
import { cart, getCart } from './_cart';
import Feather from "react-native-vector-icons/Feather";

export default function Cart({ navigation }) {

  let [userCart, setUserCart] = useState({
    items: []
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUserCart({ ...userCart, products: cart });
    });
    return unsubscribe;
  }, [navigation]);



  return (
    <SafeAreaView style={[common.verticalContainer, { backgroundColor: colors.gray }]}>
      <StatusBar backgroundColor={colors.gray} barStyle="dark-content" />
      <ScrollView style={{ marginHorizontal: 10 }}>
        {
          cart.length === 0 && (
            <Text style={{
              fontFamily: "Arial",
              fontSize: 18,
              lineHeight: 22,
              marginVertical: 40,
              color: 'red',
              fontWeight: "bold",
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>You have no items in your cart!</Text>
          )
        }
        {
          cart.length > 0 && cart.map((_item, _index) => {
            return (
              <TouchableOpacity activeOpacity={0.9}
                key={_index}
                style={{
                  flexDirection: "row",
                  paddingVertical: 5,
                  marginVertical: 10,
                  backgroundColor: colors.white,
                  borderRadius: 5
                }}>
                <View style={{
                  alignItems: 'center', justifyContent: "center",
                  marginHorizontal: 5
                }}>
                  <Image source={{ uri: _item.image }} style={{
                    resizeMode: 'cover', height: 100, width: 120
                  }} />
                </View>
                <View style={{
                  justifyContent: "center",
                  marginHorizontal: 5
                }}>
                  <Text style={{
                    fontFamily: "Arial",
                    fontSize: 18,
                    lineHeight: 22,
                    marginVertical: 5,
                    color: colors.black,
                    fontWeight: "bold",
                    textTransform: 'uppercase'
                  }}>{_item.name}</Text>
                  <Text style={{
                    fontFamily: "Arial",
                    fontSize: 17,
                    lineHeight: 20,
                    marginVertical: 5,
                    fontWeight: '500'
                  }}>{_item.detail}</Text>
                </View>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
      <TouchableOpacity activeOpacity={0.8}
        onPress={() => { }}
        style={{
          position: 'absolute',
          bottom: 10, right: 10,
          backgroundColor: "#0640A5",
          height: 55,
          paddingHorizontal: 20,
          flexDirection: 'row', justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10
        }}
      >
        <Text style={{
          fontFamily: "Arial",
          fontSize: 18,
          lineHeight: 22,
          color: colors.white,
          marginRight: 20,
          fontWeight: '600'
        }}>Checkout</Text>
        <Feather name='arrow-right' color={colors.white} size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}