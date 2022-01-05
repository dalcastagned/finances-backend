const { ApolloServer } = require("apollo-server");
const { GraphQLScalarType } = require('graphql');
const graphql = require("./src/graphql");
const Service = require("./src/services/Service");

const dateScalar = new GraphQLScalarType({
  name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
})

const server = new ApolloServer({
  Date: dateScalar,
  ...graphql,
  context: () => ({
    service: Service,
  }),
});

server.listen().then(({ url }) => console.log(url));
