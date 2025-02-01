import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'
import crashlytics from '@react-native-firebase/crashlytics'

export function Crashlytics() {
	const [enabled, setEnabled] = useState(
		crashlytics().isCrashlyticsCollectionEnabled,
	)

	async function onToggleCrashlytics() {
		await crashlytics()
			.setCrashlyticsCollectionEnabled(!enabled)
			.then(() => {
				setEnabled(crashlytics().isCrashlyticsCollectionEnabled)
			})
	}

	return (
		<View>
			<Button title="Toggle Crashlytics" onPress={onToggleCrashlytics} />
			<Button title="Crash" onPress={() => crashlytics().crash()} />
			<Text>Enabled {String(enabled)}.</Text>
		</View>
	)
}
