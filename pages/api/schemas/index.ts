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
      
    type Question {
      id: String, 
      text: String, 
      answer: Boolean
  }

  type Medication {
    id: String,
    desc: String
  }

  type CarePlan {
    medications: Medication[]
    questionaire: Question[]
}

    type  Query {
        getUsers: [User]
        getUser(name: String!): User!
    }
    
    type Mutation {
        addTodo(text: String!): ToDo ,
        addBook(title: String, author: String): Book,
        updateQuestions(questions: Question[]): CarePlan
      }
    `
