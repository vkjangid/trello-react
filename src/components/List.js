import React from 'react';
import Card from "./Card"
import '../css/List.css'
import Form from './FormComponent.js';

class List extends React.Component {
    constructor(props) {
        super();
        this.state = {
            key: '0b976e865cae745a12972bf3d0768956',
            token: '8cbf78caedfda0f7e1c5d804bbe37fbf1d00ff33b028911f0044dec14bbcf6ba',
            listId: '5e85881493b5e94ca79e76d7',
            addCardBtn: true,
            clickedAddCard: false,
            inputBoxValue: '',
            CardsFetched: false,
            cards: []
        }
    }

    componentDidMount = () => {
        fetch(`https://api.trello.com/1/lists/${this.state.listId}/cards?key=${this.state.key}&token=${this.state.token}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cards: res,
                    CardsFetched: true
                });
            })
    }

    handleAddCard = () => {
        this.setState({
            clickedAddCard: true,
            addCardBtn: false
        })
    }

    handleCancel = () => {
        this.setState({
            clickedAddCard: false,
            addCardBtn: true
        })
    }

    handleForm = (e) => {
        e.preventDefault();
        fetch(`https://api.trello.com/1/cards?idList=${this.state.listId}&key=${this.state.key}&token=${this.state.token}&name=${this.state.inputBoxValue}`,{
            method: "POST",
        })
            .then(res => res.json())
            .then(res => {
                this.setState(prevState => {
                    let cards = [...prevState.cards, res]
                    return {
                        cards: cards,
                        addCardBtn: true,
                        clickedAddCard: false
                    }
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            inputBoxValue: e.target.value
        })
    }

    deleteCard = (cardId) => {
        fetch(`https://api.trello.com/1/cards/${cardId}?key=;${this.state.key}&token=${this.state.token}`, {method: 'DELETE'})
        // .catch(err => {
        //     fetch(`https://api.trello.com/1/lists/${this.state.listId}/cards?key=${this.state.key}&token=${this.state.token}`)
        //         .then(res => res.json())
        //         .then(res => {
        //             this.setState({
        //                 cards: res,
        //                 CardsFetched: true
        //             });
        //         })
        // });
        const cards = this.state.cards.filter(obj => obj.id !== cardId)
        this.setState({cards: cards})
    }

    render() {
        console.log(this.state.cards)
        return (
            <div className="rounded p-2 mr-2" style={{fontSize: "1.25em", backgroundColor:"lightgrey", width:"15%"}}> 
                <p className="px-2">list-1</p>
                {this.state.CardsFetched ? this.state.cards.map(cardDetails => <Card key={cardDetails.id} details={cardDetails} deleteCard={this.deleteCard} />) : null}
                {
                    this.state.addCardBtn ? 
                        <button className="btn px-2 d-flex add-card" onClick={this.handleAddCard}>
                            + Add another card
                        </button> :
                    null
                }
                {this.state.clickedAddCard ? <Form handleForm={this.handleForm} handleChange={this.handleChange} handleCancel={this.handleCancel} /> : null}
            </div>
        )
    }
}

export default List