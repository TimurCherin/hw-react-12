import { FormWrap, FormCloseBtn, FormText, FormImg, FormTextWrap } from "./modal.styled";
import macBook from "../images/macBook.jpg"
import React, { Component } from "react";

class ModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            timeRemaining: 3 * 24 * 60 * 60 * 1000,
            value1: 0,
            value2: 0,
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.setState({ tasks });
        this.timerID = setInterval(this.tick, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks !== this.state.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
        }
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(prevState => {
            if (prevState.timeRemaining <= 0) {
                clearInterval(this.timerID);
                return { timeRemaining: 0 };
            }
            return { timeRemaining: prevState.timeRemaining - 1000 };
        });
    }
    formatTime = (timeInMs) => {
        const totalSeconds = Math.floor(timeInMs / 1000);
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    handleValue1Change = (e) => {
        this.setState({ value1: parseInt(e.target.value) || 0 });
    }

    handleValue2Change = (e) => {
        this.setState({ value2: parseInt(e.target.value) || 0 });
    }
    handleTaskChange = (e) => {
        const newTask = e.target.value;
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, newTask]
        }));
    }

    render() {
        const { timeRemaining, value1, value2, tasks } = this.state;
        const { onClose } = this.props;

        return (
            <FormWrap>
                <FormCloseBtn onClick={onClose}>X</FormCloseBtn>
                <FormImg src={macBook} alt="macBook" />
                <FormTextWrap>
                    <FormText>Time remaining: {this.formatTime(timeRemaining)}</FormText>
                    <div>
                        <input type="number" value={value1} onChange={this.handleValue1Change} placeholder="Value 1" />
                        <input type="number" value={value2} onChange={this.handleValue2Change} placeholder="Value 2" />
                        <FormText>Sum: {value1 + value2}</FormText>
                    </div>
                    <div>
                        <input type="text" placeholder="Add a task" onBlur={this.handleTaskChange} />
                        <ul>
                            {tasks.map((task, index) => <li key={index}>{task}</li>)}
                        </ul>
                    </div>
                </FormTextWrap>
            </FormWrap>
        );
    }
}

export default ModalForm;