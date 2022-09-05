// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 100}

  onInc = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {count: Math.random() * 100}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-Contaimer">
        <h1 className="">
          Count <span>0</span>
        </h1>
        <p>
          Count is <span>0</span>
        </p>
        <button className="increamentBtn" type="button" onClick={this.onInc}>
          Increament
        </button>
        <p>*Increase by random number between 0 to 100</p>
      </div>
    )
  }
}
export default EvenOddApp
