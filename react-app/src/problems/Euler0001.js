import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Euler0001 extends React.Component{

	constructor(props) {
		super(props);
		this.state = { answer: "?" };
		this.handleClick = this.handleClick.bind(this);
		this.getAllMultiplesOfNumbers = this.getAllMultiplesOfNumbers.bind(this);
	}

	handleClick() {

		var multiples = this.getAllMultiplesOfNumbers([3,5], 1000);
		var total = 0;
		multiples.forEach(num => {
			total += num;
		})

		this.setState({
			answer: total,
		})
	}

	getAllMultiplesOfNumbers(number_array, max_number) {
		var multiples = [];
		var seen_digits = {};
		
		number_array.forEach(num => {

			var i = num;
			while (i < max_number) {
				if (!seen_digits[i]) {
					multiples.push(i);
					seen_digits[i] = 1;
				}
				i+=num;
			}
		});
		return multiples;
	}


	render() {

		var problem_statement = "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000."
		return (

			<Card style={{ width: '600px' }}>
				<Card.Body>
					<Card.Text>
						{problem_statement}
					</Card.Text>
					<Button onClick={this.handleClick}>Solve</Button>
					<Card.Text>
						{this.state.answer}
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default Euler0001;
