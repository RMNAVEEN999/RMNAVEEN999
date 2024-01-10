// Write your code here

import {Components} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TALLS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Components {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let tossImage = ''
    let lastesHeadsCount = headsCount
    let lastestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEADS_IMG_URL
      lastesHeadsCount += 1
    } else {
      tossImage = TALLS_IMG_URL
      lastestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: lastesHeadsCount,
      tailsCount: lastestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-container">
          <div className="toss-container">
            <h1 className="heading">Coin Toss Game</h1>
            <p className="paragraph">Heads (or) Tails</p>
            <img
              src={tossResultImage}
              alt="toss result"
              className="toss-result-img"
            />
            <button type="button" className="button" onClick={this.onTossCoin}>
              Toss Coin
            </button>
            <div className="button-container">
              <p className="count">Total: {totalCount}</p>
              <p className="count">Heads: {headsCount}</p>
              <p className="count">Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
