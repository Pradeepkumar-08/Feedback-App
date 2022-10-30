import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card-container">
        <h1 className="question">
          How satisfied are you with our
          <br />
          customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(eachItem => (
            <li className="emoji-container" key={eachItem.id}>
              <button
                type="button"
                onClick={this.onClickEmoji}
                className="emoji-btn"
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji"
                />
                <p>{eachItem.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="card-container">
        <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
        <h1>Thank You</h1>
        <p>
          we will use your feed back to improve our
          <br />
          customer performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackSelected
            ? this.renderThankyouFeedback()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
