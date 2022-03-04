import AnimatedLottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen() {
    return(
        <View style={styles.homeContainer}>
            <AnimatedLottieView source={require("../assets/82708-welcome.json")} autoPlay loop={false}/>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default HomeScreen;