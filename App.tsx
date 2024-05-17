import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import UsersComponent from './UsersComponent';

const client = new ApolloClient({
  uri: 'https://fakestoreapi.com/products',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Navigation />
          {/* <UsersComponent/> */}
        </NavigationContainer>
      </ApolloProvider>
    </View>
  );
};

export default App;
// aap
const styles = StyleSheet.create({});
