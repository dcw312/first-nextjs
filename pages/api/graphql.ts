import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { print } from 'graphql';

const apolloServer = new ApolloServer({ 
    typeDefs, 
    resolvers,  
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
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
