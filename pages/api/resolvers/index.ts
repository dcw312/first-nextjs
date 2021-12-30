

const newLocal = {
    id: "1",
    login: "dwilso88",
    name: "Joe",
    avatar_url: "http://example.com"
};

export const resolvers = {
    Query: {
        getUsers: () => {
            [newLocal]
        },
        getUser: (_: any, args: any) => {
            console.log(args)
            return newLocal
        }
    }
};