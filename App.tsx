/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AppNavigation from './src/navigation/AppNavigation';
import HomeScreen from './src/screens/HomeScreen';
import {ApolloProvider} from '@apollo/client';
import client from './src/apollo/Client';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <AppNavigation />
    </ApolloProvider>
  );
}

export default App;
