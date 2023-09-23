import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://winchendon.stepzen.net/api/wintering-molly/__graphql',
  headers: {
    Authorization:
      'apikey winchendon::stepzen.io+1000::ffc08a53bd732ed8ddb2e31d1ba85d170f3fe50c0263e69fa5ef00399057b209',
  },
  cache: new InMemoryCache(),
});

export default client;
