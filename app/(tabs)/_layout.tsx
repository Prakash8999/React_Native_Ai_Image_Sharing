import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '@/constants'

interface TabIconDatatypes {
	icon: any,
	color: string,
	name: string,
	focused: boolean,
	size: number
}

const TabIcon = ({ icon, color, name, focused, size }: TabIconDatatypes) => {
	return (
		<>
			<View className='flex-1 items-center justify-center gap-2'>

				<Image
					source={icon}
					resizeMode='contain'
					tintColor={color}
					className='w-6 h-6'
				/>
			</View>

			<Text className={`${focused ? 'font-psemibold' : 'font-pregular'}  text-xs`} style={{color:color}}>
				{name}
			</Text>
		</>
	)
}


const TabsLayout = () => {

	return (
		<>
			<Tabs

				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor:'#ffa001',
					tabBarInactiveTintColor:'#cdcde0',
					tabBarStyle:{
						backgroundColor:'#161622',
						borderTopWidth:5,
						borderTopColor:'#232533',
						

					}
				}}
			>
				<Tabs.Screen name='home' options={

					{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused, size }) => {

							return (


								<TabIcon
									color={color}
									size={size}
									focused={focused}
									icon={require('@/assets/icons/home.png')}
									name={"Home"}
								/>
							)
						}
					}
				} />

				<Tabs.Screen name='create' options={

					{
						title: "Create",
						headerShown: false,
						tabBarIcon: ({ color, focused, size }) => {

							return (


								<TabIcon
									color={color}
									size={size}
									focused={focused}
									icon={require('@/assets/icons/plus.png')}
									name={"Create"}
								/> 
							)
						}
					}
				} />


				<Tabs.Screen name='profile' options={

					{
						title: "Profile",
						headerShown: false,
						tabBarIcon: ({ color, focused, size }) => {

							return (


								<TabIcon
									color={color}
									size={size}
									focused={focused}
									icon={require('@/assets/icons/profile.png')}
									name={"Profile"}
								/>
							)
						}
					}
				} />


				<Tabs.Screen name='bookmark' options={

					{
						title: "Bookmark'",
						headerShown: false,
						tabBarIcon: ({ color, focused, size }) => {

							return (


								<TabIcon
									color={color}
									size={size}
									focused={focused}
									icon={require('@/assets/icons/bookmark.png')}
									name={"Bookmark"}
								/>
							)
						}
					}
				} />
			</Tabs>
		</>
	)
}

export default TabsLayout