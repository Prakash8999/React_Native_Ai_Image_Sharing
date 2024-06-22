import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'

const Home = () => {
	const [search, setSearch] = useState();

	return (
		<>
			<SafeAreaView className='bg-primary h-full'>
				<FlatList data={[{ id: '2' }, { id: '6' }, { id: '4' }]}
					keyExtractor={(item) => item?.id}
					renderItem={({ item }) => (
						<Text className='text-3xl text-white'>
							{item?.id}
						</Text>
					)}
					ListHeaderComponent={() => (
						<View className='my-6 px-4 space-y-6'>
							<View className='justify-between items-start flex-row mb-6'>
								<View>
									<Text className='font-medium text-sm text-gray-100 '>
										Welcome Back
									</Text>

									<Text className='text-2xl font-semibold  text-white'>
										Orion
									</Text>
								</View>
								<View className='mt-1.5 '>
									<Image
										source={require('@/assets/images/logo-small.png')}
										resizeMode='contain'
										className='w-9 h-10'
									/>
								</View>

							</View>

							<View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
								<TextInput placeholder='Search Here' className='flex-1 text-white font-psemibold text-base'
									placeholderTextColor='#7b7b8b'

									onChange={(e) => {

									}}

								/>
								<TouchableOpacity

								>
									<Image
										source={require('@/assets/icons/search.png')}
										resizeMode='contain'
										className='w-5 h-5'

									/>
								</TouchableOpacity>

							</View>


							<View className='w-full flex-1 pt-5 pb-8 '>
								<Text className='text-gray-100 text-lg font-pregular mb-3'>
									Latest Videos
								</Text>

							</View>

						</View>
					)}
				>


				</FlatList>


			</SafeAreaView>



		</>
	)
}

export default Home