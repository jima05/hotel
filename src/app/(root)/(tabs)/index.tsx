import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { Card, FeaturedCard } from "@/src/components/Cards";
import Filters from "@/src/components/Filters";
import Search from "@/src/components/Search";
import icons from "@/src/constants/icons";
import images from "@/src/constants/images";
import { Link } from "expo-router";
import { Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {

const { user } = useGlobalContext();


  return (
    <SafeAreaView className="bg-white h-full">
      <Button title="Seed" onPress={seed} />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row justify-between items-center mt-5">
              <View className="flex flex-row">
                <Image
                  source={{uri: user?.avatar}}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />

            <View className="my-5">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-xl font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-bold text-primary-300">
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList data={[1, 2, 3]} 
              renderItem={({item}) => <FeaturedCard />} 
              keyExtractor={(item)=> item.toString()} 
              horizontal 
              bounces={false} 
              showsHorizontalScrollIndicator={false} 
              contentContainerClassName="flex gap-5 mt-5" 
               />

            </View>
            <View className="flex flex-row justify-between items-center">
              <Text className="text-xl font-rubik-bold text-black-300">
                Our Recommendations
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <Filters />

          </View>
        }
      />
    </SafeAreaView>
  );
}
