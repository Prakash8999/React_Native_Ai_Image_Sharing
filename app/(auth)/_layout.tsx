import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen name='signin'
					options={{
						headerShown: false
					}}

				/>
				<Stack.Screen name='signup' options={{
					headerShown: false
				}}
				/>
			</Stack>
			<StatusBar style='light' backgroundColor='#161622' />
		</>
	)
}

export default _layout