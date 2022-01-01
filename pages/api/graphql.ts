import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { print } from 'graphql';

const myPlugin = {
    // Fires whenever a GraphQL request is received from a client.
    async requestDidStart(requestContext: { request: { query: string; }; }) {
      console.log('Request started! Query:\n' +
        requestContext.request.query);
  
      return {
        // Fires whenever Apollo Server will parse a GraphQL
        // request to create its associated document AST.
        async parsingDidStart(_requestContext: any) {
          console.log('Parsing started!');
        },
  
        // Fires whenever Apollo Server will validate a
        // request's document AST against your GraphQL schema.
        async validationDidStart(_requestContext: any) {
          console.log('Validation started!');
        },
  
      }
    },
  };

const apolloServer = new ApolloServer({ 
    typeDefs, 
    resolvers,  
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground(), myPlugin]
});

export const config = {
    api: {
        bodyParser: false
    }
};

const startServer = apolloServer.start();

export default async function handler(req: MicroRequest, res: ServerResponse) {
    await startServer;
    console.log("server started")
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}
