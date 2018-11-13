import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBookQuery = gql`
    {
        books {
            name
            id
        }
    }
`

class BookList extends Component {
    displayBooks() {
        let data = this.props.data;
        if(data.loading){
            return(
                <div>Loading Books</div>
            )
        } else {
            return data.books.map(book => ( 
                <li key={book.id}>{book.name}</li>
                )
            )}
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="book_list">
                    <li>{this.displayBooks()}</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getBookQuery)(BookList);