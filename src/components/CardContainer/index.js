import {Component} from 'react'

import TextItems from '../TextItems'
import './index.css'

class CardContainer extends Component {
  state = {textInput: '', listOfText: []}

  onStatusText = event => {
    this.setState({textInput: event.target.value})
  }

  addText = event => {
    event.preventDefault()
    const {textInput} = this.state

    const newText = {
      name: textInput,
    }

    this.setState(prevState => ({
      listOfText: [...prevState.listOfText, newText],
      textInput: '',
    }))
  }

  render() {
    const {textInput, listOfText} = this.state
    return (
      <div>
        <form onSubmit={this.addText}>
          <h1>Character Counter</h1>
          <input
            value={textInput}
            onChange={this.onStatusText}
            placeholder="Enter the Characters here"
            type="text"
          />
          <button type="submit">Add</button>
        </form>
        <h1>Count the characters like a Boss</h1>
        {listOfText.length < 1 ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
            alt="no user inputs"
          />
        ) : (
          <ul>
            {listOfText.map(each => (
              <TextItems key={each.id} itemsDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default CardContainer
