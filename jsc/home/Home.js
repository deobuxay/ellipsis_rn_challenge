import React from 'react';
import {
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { addToCart } from '../cart/_cart';
import { common, colors } from '../stylesheet';
import { products } from './products';


export default function Home(props) {

  return (
    <View style={[common.verticalContainer, { backgroundColor: colors.gray }]}>
      <StatusBar backgroundColor={colors.gray} barStyle="dark-content" />
      <View style={{
        flex: 1, flexDirection: 'column'
      }}>
        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {
              products.map((_product, _index) => {
                return (
                  <View
                    key={_product.name}
                    style={{
                      width: 180,
                      backgroundColor: colors.white,
                      borderRadius: 10,
                      borderColor: "rgba(0,0,0,0.3)",
                      borderWidth: 1,
                      marginVertical: 10,
                      marginHorizontal: 10
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        props.navigation.navigate("ProductDetail", { selectedProduct: _product });
                      }}
                      activeOpacity={0.8}
                      style={{

                      }}
                    >
                      <Image source={{ uri: _product.image }}
                        style={{
                          width: 180,
                          height: 150,
                          resizeMode: 'cover',
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10
                        }}
                      />
                      <View style={{
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        borderBottomColor: "rgba(0,0,0,0.4)",
                        borderBottomWidth: 1
                      }}>
                        <Text style={{
                          fontFamily: "Arial",
                          fontSize: 18,
                          lineHeight: 22,
                          marginVertical: 5,
                          color: colors.black,
                          fontWeight: "800"
                        }}>{_product.name}</Text>
                        <Text style={{
                          fontFamily: "Arial",
                          fontSize: 18,
                          lineHeight: 22,
                          marginVertical: 5
                        }}>{_product.detail}</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={{
                      height: 60,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 15
                    }}>
                      <Text style={{
                        fontSize: 20, lineHeight: 25,
                        color: colors.black,
                        fontWeight: 'bold'
                      }}>${_product.price}</Text>
                      <TouchableOpacity activeOpacity={0.8}
                        onPress={() => {
                          addToCart(_product);
                        }}
                        style={{
                          backgroundColor: "#0640A5",
                          height: 40, width: 40,
                          borderRadius: 5,
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Feather name='shopping-cart' size={30} color={colors.white} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  );
}