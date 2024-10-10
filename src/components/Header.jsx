import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, TextInput } from "react-native";

const Header = () => {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
        colors={["#88dae0", "#98e1d6", "#9ee4d4"]}
      >
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Ionicons name="search" size={22} color="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon"
              placeholderTextColor={"#848484"}
              style={styles.textInput}
            />
          </View>
          <AntDesign name="scan1" size={22} color="#909594" />
        </View>
        <Feather name="mic" size={22} color="#000000" />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#a1bcc0",
    borderWidth: 1,
    width: "90%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    padding: 8,
  },
});

export default Header;