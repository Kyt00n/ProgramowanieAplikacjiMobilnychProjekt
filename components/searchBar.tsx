import { View, Text, TextInput } from 'react-native'
import React from 'react'
interface Props {
    placeholder: string;
    onPress?: () => void;
    }
const SearchBar = ({placeholder, onPress}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Text className="size-5" >🔍</Text>
      <TextInput onPress={onPress} placeholder={placeholder} value='' onChangeText={()=>{}} className='flex-1 ml-2 text-white' placeholderTextColor='#a8b5db'/>
      
    </View>
  )
}

export default SearchBar