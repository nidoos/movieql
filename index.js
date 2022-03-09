import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers.js"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql", //모든 type에 대한 정의
    resolvers
});

server.start(()=> console.log("Graphql Server Running!"));