import React from 'react';
import ProblemCard from '../ProblemCard';


class Euler0006 extends React.Component{

	constructor(props) {
		super(props);
		this.state = {};
		this.onSolve = this.onSolve.bind(this);
	}

	onSolve() {
		
		return this.getSquareOfSums(100) - this.getSumOfSquares(100);
	}

	getSumOfSquares(number) {
		let sum = 0;
		for (var i = 1; i <= number ; i++)
		{
			sum += (i * i);
		}
		return sum;
	}
	getSquareOfSums(number) {
		let sum = 0;
		for (var i = 1; i <= number ; i++)
		{
			sum += i;
		}
		return (sum * sum);
	}

	render() {

		return (
			<ProblemCard
				problem_statements={["The sum of the squares of the first ten natural numbers is,",
				"1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385",
				"The square of the sum of the first ten natural numbers is,",
				"(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025",
				"Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.",
				"Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum."]}
				onSolve={this.onSolve}
			/>
		);
	}
}

export default Euler0006;

