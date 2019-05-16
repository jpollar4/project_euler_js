import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class ProblemCard extends React.Component{

	constructor(props) {
		super(props);
		this.state = { answer: "?" };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {

		var date = new Date();

		var start = date.getTime();

		var answer = this.props.onSolve();

		var solve_time = ((new Date()).getTime() - start) / 1000;
		this.setState({
			answer: answer,
			solve_time: solve_time,
		})
	}

	render() {

		return (
			<Card style={{ width: '600px' }}>
				<Card.Body>
					{this.props.problem_statements.map((statement,idx) => {
						return (
							<Card.Text key={idx}>{statement}</Card.Text>
						)
					})}
					<Button key="button" onClick={this.handleClick}>Solve</Button>
					<Card.Text key="answer">
						{this.state.answer}
					</Card.Text>
					<Card.Text key="time">
						{this.state.solve_time + " secs"}
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default ProblemCard;
