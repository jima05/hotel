import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import icons from '../constants/icons'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'

const SignIn = () => {

  const { refetch, loading, isLogged} = useGlobalContext();

  if(!loading && isLogged ) {
    return <Redirect href="/"/>;
  }

  const handleLogin = async() => {
    const result = await login();
    if(result) {
      refetch();
    }else{
      Alert.alert('Error','failed to log in')
    }
  }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="h-full" contentContainerStyle={{ flexGrow: 1 }}>
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

export default SignIn;