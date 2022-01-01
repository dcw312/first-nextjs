

const newLocal = {
    id: "1",
    login: "dwilso88",
    name: "Joe",
    avatar_url: "http://example.com"
};

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const todos = [
    {
        id: "1",
        text: 'Hi Dave'
    }
]
  

export const resolvers = {
    Query: {
        getUsers: () => {
            [newLocal]
        },
        getUser: (_: any, args: any) => {
            console.log(args)
            return newLocal
        }
    },
    Mutation: {
        addBook: (_: any, args: any) => {
            console.log(args)
            return books[0]
        },
        addTodo: (_: any, args: any) => {
            console.log(args)
            return todos[0]
        }
    }
};