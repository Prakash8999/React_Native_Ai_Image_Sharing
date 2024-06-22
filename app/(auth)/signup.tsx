import { View, Text, ScrollView, Image, TouchableOpacity, Alert, LogBox } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFields from '@/components/FormFields'
import { AnimateStyle } from 'react-native-reanimated/lib/typescript/Animated'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'
import { Account, Client } from 'react-native-appwrite'
import { useGlobalContext } from '@/context/GlobalProvider'

const Signup = () => {
	const { setUser, setIsLogged } = useGlobalContext()
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: ''
	})

	const handleSignUp = async () => {

		if (!form.email || !form.password || !form.username) {
			console.log("Error");

			return Alert.alert("Error", "Please provide complete information")
		}
		try {
			const result = await createUser(form.email, form.password, form.username)
			setUser(result);
			setIsLogged(true);
			router.replace('/home')


		} catch (error: any) {
			console.log(error);
			Alert.alert("Error", error?.message)

		}

	}
	const client = new Client
	const account = new Account(client)
	const handlesignout = async () => {

		try {
			const session = await account.getSession('current');
			if (session) {
				await account.deleteSession('current');
				console.log('Logged out of the current session.');
			}
		} catch (error) {
			console.error('Failed to log out of the session:', error);

		}


	}
	return (
		<>
			<SafeAreaView className='bg-primary h-full'>

				<ScrollView>
					<View className='w-full justify-center min-h-[85vh] px-4 my-6'>

						<Image source={require('../../assets/images/logo.png')
						}
							resizeMode='contain'
							className='w-[115px] h-[35px]'
						/>
						<Text className='text-2xl font-psemibold text-white mt-10 fop'>
							Sign Up to Orion

						</Text>
						<FormFields
							title='Username'
							value={form.username}
							handleChangeText={(e: any) => setForm({ ...form, username: e })}
							otherStyles="mt-7"
						/>
						<FormFields
							title='Email'
							value={form.email}
							handleChangeText={(e: any) => setForm({ ...form, email: e })}
							otherStyles="mt-7"
							keyboardType="email-address"
						/>
						<FormFields
							title='Password'
							value={form.password}
							handleChangeText={(e: any) => setForm({ ...form, password: e })}
							otherStyles="mt-7"
							keyboardType="password"
						/>



						<TouchableOpacity
							onPress={handleSignUp}
							activeOpacity={0.7}

							className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center mt-7
								}`}

						>

							<Text className={`text-primary font-psemibold text-lg `}>SignUp</Text>
						</TouchableOpacity>




						<View className='flex-row justify-center pt-5 gap-2'>
							<Text className='text-lg text-gray-100 font-pregular'>
								Already have an account ?
							</Text>
							<Link href={'/signin'} className='text-lg font-psemibold text-secondary'>
								Signin
							</Link>


						</View>

						<TouchableOpacity onPress={handlesignout} className='bg-white mt-10'>
							<Text className='text-black '>
								Logout
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	)
}

export default Signup