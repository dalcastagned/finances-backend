const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const Service = require("./src/services/Service");

const server = new ApolloServer({
  ...graphql,
  context: () => ({
    service: Service,
  }),
});

server.listen().then(({ url }) => console.log(url));
