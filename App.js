import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Firebase
import { auth } from "./firebase/firebase";

export default function App() {
	console.log(auth);

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app! Ssalkd</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
