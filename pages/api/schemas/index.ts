import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type  User {
        id: ID
        login: String
        name: String
        avatar_url: String
    }

    type Book {
        title: String
      
        author: String
      }
      
    type Author {
        name: String
      
        books: [Book]
    }

    type ToDo {
        id: String
        text: String
    }
      

    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }
    
    type Mutation {
        addTodo(text: String!): ToDo 
      }

    type Mutation {
        addBook(title: String, author: String): Book
      }
    `
