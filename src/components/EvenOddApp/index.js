// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text1: 'Even', text2: 'Odd'}

  onInc = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {count: prevState.count + Math.random() * 100}
    })
  }

  render() {
    const {count, text1, text2} = this.state
    let increamentContainer
    if (Math.round(count) % 2 === 0) {
      increamentContainer = (
        <div>
          <h1 className="">
            Count <span>{Math.round(count)}</span>
          </h1>
          <p>
            Count is <span>{text1}</span>
          </p>
          <button className="increamentBtn" type="button" onClick={this.onInc}>
            Increment
          </button>
          <p>*Increase by random number between 0 to 100</p>
        </div>
      )
    } else {
      increamentContainer = (
        <div>
          <h1 className="">
            Count <span>{Math.round(count)}</span>
          </h1>
          <p>
            Count is <span>{text2}</span>
          </p>
          <button className="increamentBtn" type="button" onClick={this.onInc}>
            Increment
          </button>
          <p>*Increase by random number between 0 to 100</p>
        </div>
      )
    }
    return <div className="bg-Contaimer"> {increamentContainer} </div>
  }
}
export default EvenOddApp

