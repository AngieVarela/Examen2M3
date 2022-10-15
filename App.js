import { StyleSheet, Text, Button, View, TextInput, Picker, Switch } from 'react-native';
import { NavigationContainer, PreventRemoveProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

function UserScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [rol, setRol] = useState('');
  const [pass, setPass] = useState('');
  

  const validate = () => {
    if (user == " m") {
      setUser("");
      setRol("")
      setPass("")
      navigation.navigate('Profile', { rol: rol }, { pass: pass })
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.inputs}
	      placeholder="Usuario"
        onChangeText={value => setUser(value)}
        value={user}    
    />

    <View style={styles.container}>
      <Text>Rol</Text>
      <Picker
        selectedValue={accounttype}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setRol(itemValue)}
      >
        <Picker.Item label="Seleccione su Rol" value="" />
        <Picker.Item label="Administrador" value="radmin" />
        <Picker.Item label="Usuario" value="ruser" />
      </Picker>

      <TextInput
        style={styles.inputs}
	      placeholder="Contraseña"
        onChangeText={value => setPass(value)}
        value={pass}
      />
      <Button
        title="Iniciar Sesión"
        //onPress={() => navigation.navigate('Settings')}
        //onPress={validate}
        onPress={() => {
          if (user == "Varelaa") {
            setUser("");
            setRol("")
            setPass("")
            navigation.navigate('Profile', { rol: rol} , { pass: pass }
        }};
      />
    </View>
  );
}

function ProfileScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>Cuenta: {route.params.user}</Text>
    </View>
  );
}


<Button title="Chequear"
  onPress={()=>{
    alert(`Topi cuenta: ${accounttype}, exenta`)
  }}/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Configuración</Text>
      <Button
        title="Cuenta"
        onPress={() => navigation.navigate('Feed')}
      />
    </View>
  );
}

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Configuración</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {/* tabBarStyle: desactiva el menú bottom */}
      <Tab.Screen name="User" component={UserScreen} options={{
        tabBarStyle: { display: "none" }
      }} />
      <Tab.Screen name="Cuenta" component={AccountScreen} />
      <Tab.Screen name="Moviemientos" component={MovimientoScreen} />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} options={{ title: 'Sistema Bancario' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    marginBottom: 5
  }
});

