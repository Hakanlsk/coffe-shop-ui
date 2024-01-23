import { View, Text, StatusBar, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { AntDesign } from '@expo/vector-icons';

const ProductScreen = (props) => {
    const item = props.route.params;
    const navigation = useNavigation()
    const [size, setSize] = useState('small')

  return (
    <View className="flex-1">
      <StatusBar barStyle="light"/>
      <Image
        source={require('../assets/images/beansBackground2.png')}
        style={{height:300, borderBottomLeftRadius:50, borderBottomRightRadius:50}}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4">
        <View className="mx-4 flex-row justify-between items-center mt-4">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                <Feather name="arrow-left-circle" size={36} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity className="rounded-full border-2 border-white p-2">
                <Feather name="heart" size={24} color="white" />
            </TouchableOpacity>
        </View>

        <View 
            style={{
                shadowColor:themeColors.bgDark,
                shadowRadius:30,
                shadowOffset:{width:0, height:30},
                shadowOpacity:0.9
            }}
            className="flex-row justify-center">
            <Image source={item.image} className="h-60 w-60"/>
        </View>

        <View
            style={{ backgroundColor: themeColors.bgLight, }}
            className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90"
          >
            <AntDesign name="staro" size={24} color="white" />
            <Text className="text-base font-semibold text-white">
              {item.stars}
            </Text>
        </View>

        <View className="mx-4 flex-row justify-between items-center">
            <Text style={{color:themeColors.text}} className="text-3xl font-semibold">
                {item.name}
            </Text>
            <Text style={{color:themeColors.text}} className="text-lg font-semibold">
                ${item.price}
            </Text>
        </View>

        <View className="mx-4 space-y-2">
            <Text style={{color: themeColors.text}} className="text-lg font-bold">
                Coffee Size
            </Text>
            <View className="flex-row justify-between">
                <TouchableOpacity
                    onPress={() => setSize('small')}
                    className="px-8 p-3 rounded-full"
                    style={{backgroundColor: size == 'small'? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                    >
                    <Text className={size =='small'? 'text-white' : 'text-gray-700'}>Small</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSize('medium')}
                    className="px-8 p-3 rounded-full"
                    style={{backgroundColor: size == 'medium'? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                    >
                    <Text className={size =='medium'? 'text-white' : 'text-gray-700'}>Medium</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSize('large')}
                    className="px-8 p-3 rounded-full"
                    style={{backgroundColor: size == 'large'? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                    >
                    <Text className={size =='large'? 'text-white' : 'text-gray-700'}>Large</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className="mx-4 mt-4 h-28">
            <Text style={{color: themeColors.text}} className="text-lg font-bold">
                About
            </Text>
            <Text className="text-gray-600">
                {item.desc}
            </Text>
        </View>

        <View className="flex-row justify-between items-center mx-4">
            <View className="flex-row items-center space-x-1">
                <Text className="text-base text-gray-700 font-semibold opacity-60">
                    Volume
                </Text>
                <Text className="text-base text-black font-semibold">
                    {item.volume}
                </Text>
            </View>
            <View className="flex-row items-center space-x-4 border border-gray-500 rounded-full p-1 px-4">
                <TouchableOpacity>
                    <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{color:themeColors.text}} className="font-extrabold text-lg">2</Text>
                <TouchableOpacity>
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>

        <View className="flex-row justify-between items-center mx-4 ">
            <TouchableOpacity className="p-2 rounded-full border border-gray-400">
                <AntDesign name="shoppingcart" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:themeColors.bgLight}} className="p-3 rounded-full flex-1 ml-3">
                <Text className="text-center text-base font-semibold text-white">
                    Buy Now
                </Text>
            </TouchableOpacity>
        </View>



      </SafeAreaView>



    </View>
  )
}

export default ProductScreen