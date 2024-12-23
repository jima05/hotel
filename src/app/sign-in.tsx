import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import icons from '../constants/icons'

const SignIn = () => {
  const handleLogin = () => {
    console.log("Logged In")
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to JimaMomes
          </Text>
          <Text className="text-3xl text-center font-rubik-bold text-black-300 mt-2">
            Find Your {"\n"}
            <Text className="text-primary-300">Dream Home</Text>
          </Text>
          <Text className="text-lg text-center font-rubik text-black-200 mt-12">
            Login to JimaHomes with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-900 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn