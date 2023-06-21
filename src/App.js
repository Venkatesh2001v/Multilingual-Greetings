import {Component} from 'react'

import Buttons from './components/Buttons'
import Greetings from './components/Greetings'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeBtnId: languageGreetingsList[0].id}

  clickBtn = activeId => {
    this.setState({activeBtnId: activeId})
  }

  getFilteredImage = () => {
    const {activeBtnId} = this.state
    const filteredGreeting = languageGreetingsList.filter(
      eachItem => activeBtnId === eachItem.id,
    )

    return filteredGreeting
  }

  render() {
    const {activeBtnId} = this.state
    const activeLanguageGreeting = this.getFilteredImage()

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="btn-container">
          {languageGreetingsList.map(eachItem => (
            <Buttons
              key={eachItem.id}
              isActive={activeBtnId === eachItem.id}
              itemDetails={eachItem}
              clickBtn={this.clickBtn}
            />
          ))}
        </ul>
        {activeLanguageGreeting.map(eachItem => (
          <Greetings key={eachItem.id} itemDetails={eachItem} />
        ))}
      </div>
    )
  }
}

export default App
