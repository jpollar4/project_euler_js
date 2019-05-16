import React from 'react';
import ProblemCard from '../ProblemCard';


class Euler0003 extends React.Component{

	constructor(props) {
		super(props);
		this.state = { 
			all_known_primes: [2, 3],
		};
		this.onSolve = this.onSolve.bind(this);
		this.getPrimeFactors = this.getPrimeFactors.bind(this);
		this.getNextPrime = this.getNextPrime.bind(this);
	}

	onSolve() {
		var our_prime_factors = this.getPrimeFactors(600851475143, {}, this.state.all_known_primes, false);
		var highest_prime = 0;
		Object.keys(our_prime_factors).forEach(value =>{
			if(parseInt(value) > parseInt(highest_prime)) {
				highest_prime = value;
			}
		})
		return highest_prime;
	}

	getPrimeFactors(number, current_prime_factors, all_primes, stop_at_self) {
		var curent_prime_factor_check_index = 0;
		var cur_check_number = all_primes[curent_prime_factor_check_index];
		var found_number = false;
		while (!found_number && cur_check_number <= number) {
			cur_check_number = all_primes[curent_prime_factor_check_index];
			if (number === cur_check_number) {
				current_prime_factors[number] = true;
				found_number=true;
			}
			else if (number % cur_check_number === 0) {
				current_prime_factors[cur_check_number] = true;
				current_prime_factors = this.getPrimeFactors((number / cur_check_number), current_prime_factors, all_primes, false);
				found_number=true;
			}
			else {
				curent_prime_factor_check_index++;
				if (curent_prime_factor_check_index >= all_primes.length){
					if (stop_at_self) {
						current_prime_factors[number] = true
						return current_prime_factors;
					}
					all_primes.push(this.getNextPrime(all_primes));
				}
			}
		}
		return current_prime_factors;
	}

	getNextPrime(all_primes){
		var last_prime = all_primes[all_primes.length-1];
		var cur_test_num = last_prime + 2;
		var found_prime = false;
		while(!found_prime) {
			var factors = this.getPrimeFactors(cur_test_num, {}, all_primes, true);
			if (factors[cur_test_num]) {
				found_prime = true;
			}
			else {
				cur_test_num = cur_test_num + 2;
			}
		}
		return cur_test_num;

	}


	render() {
		var problem_statement_1 = "The prime factors of 13195 are 5, 7, 13 and 29.";
		var problem_statement_2 ="What is the largest prime factor of the number 600851475143 ?";
		return (
			<ProblemCard
				problem_statements={[problem_statement_1, problem_statement_2]}
				onSolve={this.onSolve}
			/>
		);
	}
}

export default Euler0003;

