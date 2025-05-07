import SearchBar from "@/components/searchBar";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  
  return (
    <View className="flex-1 bg-primary">
      <ScrollView className="flex-1 px-5" 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={{minHeight: "100%", paddingBottom: 10}}>
        <Text className="w-12 h-10 mt-20 mb-5 mx-auto text-center text-4xl">📚</Text>

        <View className="flex-1 mt-5">
          <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
