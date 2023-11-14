import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Firebase
import { auth } from "./firebase/firebase";

//Components
import Header from "./Components/Header/Header";

export default function App() {
	console.log(auth);

	return (
		<View style={styles.container}>
			<Header />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "flex-start",
		// justifyContent: "center",
	},
});
