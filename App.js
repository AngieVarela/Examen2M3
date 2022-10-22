import { StyleSheet, Text, Button, View, TextInput, Picker, Image, Switch } from 'react-native';
import { NavigationContainer, PreventRemoveProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import React from "react";


function UserScreen({navigation}){

  const [user, setUser] = useState('');
  const [rol, setRol] = useState('');
  const [pass, setPass] = useState('');
 
 
  const validate = () => {
    if (user == "varelaa" && pass=="Vare1010") {
      setUser("");
      setRol("")
      setPass("")
      navigation.navigate('Cuenta', { rol: rol })
    }
  }
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    

        <Picker
          selectedValue={rol}
          style={{ height: 50, width: 150, marginBottom: 5, borderRadius: 10, textAlign: 'center',}}
          onValueChange={(itemValue, itemIndex) => setRol(itemValue)}
        >
          <Picker.Item label="Seleccione su Rol" value="" />
          <Picker.Item label="Administrador" value="radmin" />
          <Picker.Item label="Usuario" value="ruser" />
        </Picker>

        <TextInput
          style={styles.inputs}
          placeholder="Usuario"
          onChangeText={value => setUser(value)}
          value={user}    
        />

        <TextInput
          style={styles.inputs}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={value => setPass(value)}
          value={pass}
        />
        <Button style={styles.colorBtn}
          title="Iniciar Sesión"
          //onPress={() => navigation.navigate('Settings')}
          onPress={validate}

        />
    </View>
    );
}


function AccountScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>Cuenta: {route.params.user}</Text>
    </View>
  
  );
}

const validate = () => {
    setCuenta("");
    setIden("")
    setTitular("")
}
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    

      <TextInput
        style={styles.inputs}
        placeholder="Usuario"
        onChangeText={value => setCuenta(value)}
        value={user}    
      />

      <TextInput
        style={styles.inputs}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={value => setIden(value)}
        value={pass}
      />

  <TextInput
        style={styles.inputs}
        placeholder="Contraseña"
        secureTextEntry={true}
        onChangeText={value => setIden(value)}
        value={pass}
      />

      <Button style={styles.colorBtn}
        title="Iniciar Sesión"
        //onPress={() => navigation.navigate('Settings')}
        onPress={validate}
      />
  </View>
  );


function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Cuentas</Text>
      <Button
        title="Cuenta"
        onPress={() => navigation.navigate('Feed')}
      />
    </View>
  );
} 

function MovScreen() {
  return (
    <View style={styles.container}>
      <Text>Movimientos</Text>
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
      <Tab.Screen name="Inicio de sesión" component={UserScreen} options={{
        tabBarStyle: { display: "none" }
      }} />
      <Tab.Screen name="Cuenta" component={AccountScreen} />
      <Tab.Screen name="Movimientos" component={MovScreen} />

    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeTabs} options={{ title: 'SISTEMA BANCARIO' }} />
      
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
  },
  formulario: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 7,
    paddingRight: 12,
  }, 
  colorBtn: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 7,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
    marginLeft: 20
  }
});

