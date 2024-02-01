import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Sign Up",
          headerTitleAlign: "center",
          statusBarColor: "#D8E5D9",
          headerStyle: {
            backgroundColor: "#D8E5D9",
          },
        }}
      />
      <View style={styles.container}>
        <View style={styles.loginDiv}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              paddingVertical: 30,
            }}
          >
            Create an new account
          </Text>
          <View styles={{ padding: 10 }}>
            <Text style={{ marginHorizontal: 20, marginVertical: 5 }}>
              Full Name
            </Text>
            <TextInput
              style={{
                alignContent: "center",
                flexDirection: "row",
                backgroundColor: "#f7d9c4",
                padding: 4,
                marginHorizontal: 20,
                borderRadius: 10,
              }}
              placeholder="Full Name"
            ></TextInput>
            <Text style={{ marginHorizontal: 20, marginVertical: 5 }}>
              Image URL
            </Text>
            <TextInput
              style={{
                alignContent: "center",
                flexDirection: "row",
                backgroundColor: "#f7d9c4",
                padding: 4,
                marginHorizontal: 20,
                borderRadius: 10,
              }}
              placeholder="Photo URL"
            ></TextInput>
            <Text style={{ marginHorizontal: 20, marginVertical: 5 }}>
              User Name
            </Text>
            <TextInput
              style={{
                alignContent: "center",
                flexDirection: "row",
                backgroundColor: "#f7d9c4",
                padding: 4,
                marginHorizontal: 20,
                borderRadius: 10,
              }}
              placeholder="example@gmail.com"
            ></TextInput>
            <Text
              style={{ marginHorizontal: 20, marginVertical: 5, marginTop: 10 }}
            >
              Password
            </Text>
            <TextInput
              style={{
                alignContent: "center",
                flexDirection: "row",
                backgroundColor: "#f7d9c4",
                padding: 4,
                marginHorizontal: 20,
                borderRadius: 10,
              }}
              placeholder="******"
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{ textAlign: "center", alignItems: "center" }}
          >
            <Text
              style={{
                textAlign: "center",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "#D8E5D9",
                width: "30%",
                marginVertical: 20,
                fontWeight: "bold"
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8E5D9",
    alignItems: "center",
    justifyContent: "center",
  },
  loginDiv: {
    backgroundColor: "#fff",
    height: 500,
    width: "100%",
    borderRadius: 20,
    padding: 20,
  },
});
