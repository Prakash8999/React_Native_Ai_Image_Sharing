import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFields from '@/components/FormFields'
import { AnimateStyle } from 'react-native-reanimated/lib/typescript/Animated'
import { Link, router } from 'expo-router'
import { signIn } from '@/lib/appwrite'

const Signin = () => {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const handleSignin = async () => {

		if (!form.email || !form.password) {
			console.log("Error");

			return Alert.alert("Error", "Please provide complete information")
		}
		try {
			await signIn(form.email, form.password,)

return			router.replace('/home')

		} catch (error: any) {
			console.log(error);
			Alert.alert("Error", error?.message)

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
							Sign In to Orion

						</Text>
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
							onPress={handleSignin}
							activeOpacity={0.7}

							className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center mt-7
								}`}

						>

							<Text className={`text-primary font-psemibold text-lg `}>SignIn</Text>
						</TouchableOpacity>


						<View className='flex-row justify-center pt-5 gap-2'>
							<Text className='text-lg text-gray-100 font-pregular'>
								Don't have an account ?
							</Text>
							<Link href={'/signup'} className='text-lg font-psemibold text-secondary'>
								Signup
							</Link>


						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	)
}

export default Signin