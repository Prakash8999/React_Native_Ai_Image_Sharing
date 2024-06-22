import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'



interface FormFields {
	value: string,

	placeholder?: string,
	handleChangeText: VoidFunction,
	otherStyles: string,
	title: string,
	keyboardType?: string

}
const FormFields = ({ value, title, handleChangeText, otherStyles, keyboardType, placeholder }: FormFields) => {

	const [showPassword, setShowPassword] = useState(false)
	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className='  text-base text-gray-100 font-pmedium'>{title}</Text>

			<View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
				<TextInput
					className='flex-1 text-white font-psemibold text-base'
					value={value}
					placeholder={placeholder}
					placeholderTextColor='#7b7b8b'
					onChangeText={handleChangeText}
					secureTextEntry={title === 'Password' && !showPassword}

				/>

				{
					title === 'Password' && (
						<TouchableOpacity
							onPress={() => {
								setShowPassword(!showPassword)
							}}
						>
							<Image source={!showPassword ? require('@/assets/icons/eye.png') : require('@/assets/icons/eye-hide.png')}
								className='w-6 h-6'
								resizeMode='contain'

							/>

						</TouchableOpacity>
					)
				}
			</View>


			
		</View>
	)
}

export default FormFields