import React from 'react';
import ProblemCard from '../ProblemCard';


class Euler0005 extends React.Component{

	constructor(props) {
		super(props);
		this.state = { 
			all_known_primes: [2, 3],
		};
		this.onSolve = this.onSolve.bind(this);
	}

	onSolve() {
		

		for (var i = 20; i < 100000000000000; i+=20)
		{
			var correct = true;
			for (var p = 19; p >= 2; p--)
			{
				if (i%p !== 0) {
					correct = false;
					break;
				}
			}
			if(correct) {
				return i;
			}
		}

		return "??";
	}

	render() {
		var problem_statement_1 = "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.";
		var problem_statement_2 = "What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?";
		return (
			<ProblemCard
				problem_statements={[problem_statement_1, problem_statement_2]}
				onSolve={this.onSolve}
			/>
		);
	}
}

export default Euler0005;

