import { View, Text, ScrollView, Image, TouchableOpacity, Settings, ImageSourcePropType, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/src/constants/icons'
import images from '@/src/constants/images'
import { settings } from '@/src/constants/data'
import Index from '.'
import { useGlobalContext } from '@/lib/global-provider'
import { logout } from '@/lib/appwrite'


interface SettingsItemProps {
  icon:ImageSourcePropType;
  title:string;
  onPress?:()=>void;
  textStyle?:string;
  showArrow?:boolean;
}


const SettingsItem = ({icon, title, onPress, textStyle, showArrow=true} : SettingsItemProps) => (
  <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-3">
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`} >{title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
)

const Profile = () => {
  const {user, refetch} = useGlobalContext();
  const handleLogout = async() => {
    const result = await logout();

    if(result){
      Alert.alert('Success','Logged out successfully');
      refetch();
    }else{
      Alert.alert('Error','Failed to logout');
    }
    }
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex flex-row justify-between items-center mt-5">
          <Text className="font-rubik-bold text-xl ">Profile</Text>
          <Image source={icons.bell} className="size-6" />
        </View>
        <View className="flex flex-row justify-center mt-5">
          <View className="flex flex-col items-center relative mt-5">
            <Image
              source={{uri:user?.avatar}}
              className="size-44 rounded-full relative"
            />
            <TouchableOpacity className="absolute bottom-10 right-6">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="font-rubik-bold text-2xl mt-2">{user?.name}</Text>
          </View>
        </View>
        <View className="flex flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" showArrow={true} />
          <SettingsItem icon={icons.wallet} title="Payments" showArrow={true} />
        </View>
        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col items-center mt-5 border-t pt-5 border-primary-200">
          <SettingsItem icon={icons.logout} title="Logout" onPress={handleLogout} showArrow={false} textStyle='text-danger' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Profile