import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  TypePolicies,
} from '@apollo/client';

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      postPaginatedList: {
        keyArgs: ['id'],
        merge(existing = [], incoming) {
          return [...existing, ...incoming];
        },
      },
    },
  },
};
const client = new ApolloClient({
  uri: 'https://winchendon.stepzen.net/api/wintering-molly/__graphql',
  headers: {
    Authorization:
      'apikey winchendon::stepzen.io+1000::ffc08a53bd732ed8ddb2e31d1ba85d170f3fe50c0263e69fa5ef00399057b209',
  },
  cache: new InMemoryCache({typePolicies}),
});

export default client;
