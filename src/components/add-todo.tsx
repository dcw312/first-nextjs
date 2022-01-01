import React from 'react'
import { gql, useMutation } from '@apollo/client'

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`

function AddTodo() {
    var input: any
    const [addTodo, { data, loading, error }] = useMutation(ADD_TODO)
  
    if (loading) return <div>'Submitting...'</div>;
    if (error) return <div>{`Submission error! ${error.message}`}</div>;
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { text: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
}

export default AddTodo
