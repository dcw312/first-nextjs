import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { print } from 'graphql';

class BasicLogging {
  requestDidStart({queryString, parsedQuery, variables}: any): void {
    const query = queryString || print(parsedQuery);
    console.log(query);
    console.log(variables);
  }

  willSendResponse({graphqlResponse}: any) {
    console.log(JSON.stringify(graphqlResponse, null, 2));
  }
}

const apolloServer = new ApolloServer({ 
    typeDefs, 
    resolvers,  
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], 
    extensions: [() => new BasicLogging()]
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
