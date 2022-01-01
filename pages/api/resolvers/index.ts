

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

const medications = [{id: "med1", desc: "Insulin"}, {id: "med2", desc: "Trulicity"}]
const questions = [{id: "A1C", text: "Hight A1C?", answer: false}, {id: "TrulicityAlrg", text: "Alergic to Trulicity?", answer: false}]


const carePlan = {
    medications: medications,
    questionaire: questions
}
  

export const resolvers = {
    Query: {
        getUsers: () => {
            [newLocal]
        },
        getUser: (_: any, args: any) => {
            console.log(args)
            return newLocal
        },
        getCarePlan: (_: any, args: any) => {
            console.log(args)
            return carePlan
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
        },
        updateQuestions: (_: any, args: any) => {
            console.log(args)
            return carePlan
        }
    }
};