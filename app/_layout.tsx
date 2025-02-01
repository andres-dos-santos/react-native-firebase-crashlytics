import { Crashlytics } from '@/components/crashlytics'
import { Text, View } from 'react-native'

export default function RootLayout() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Hello Firebase</Text>

			<Crashlytics />
		</View>
	)
}
