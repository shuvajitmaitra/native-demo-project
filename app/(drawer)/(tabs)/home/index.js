import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
   <>
   <Stack.Screen options={{ headerShown: false, title: "Home",  headerTitleAlign: 'center',}} />
    <View style={styles.container}>
      <Text  style={{fontSize: 20, fontWeight: "bold"}}>Index home Tab</Text>
      <StatusBar style="auto" />
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});