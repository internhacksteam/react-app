import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        seconds: 30,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const {seconds } = this.state
        return (
            <div>
                {seconds === 0
                    ? <h5>Busted!</h5>
                    : <h5>Time Remaining: {seconds < 10 ? `0${seconds}` : seconds}</h5>
                }
            </div>
        )
    }
}