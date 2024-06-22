import { View, Text, GestureResponderEvent } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
interface CustomButton {
	title: string,
	containerStyles: string,
	handlePress: VoidFunction;
	textStyles?: string,
	isLoading?: boolean

}
const CustomButton = ({ title, containerStyles, handlePress, textStyles, isLoading }: CustomButton) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}

			className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50 ' : ''
				}`}
			disabled={isLoading}
		>

			<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
		</TouchableOpacity>
	)
}

export default CustomButton