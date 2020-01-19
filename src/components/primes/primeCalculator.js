import React, { Component } from "react";

class PrimeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no_of_prime: "",
      prime_count:""

    };
  }
  handlePrime = e => this.setState({ no_of_prime: e.target.value });
submit(e){
    e.preventDefault();
    if (this.state.no_of_prime < 1) {
        alert("Enter any number from 1");
        return 0;
    }
    else{
        this.PrimeMultiple();

    }
}

PrimeMultiple(){
// alert("success") 
 let n = this.state.no_of_prime
const primesArray = n =>{
    let primes = []
    let i = 0

    while (primes.length < n) {
      if (this.isPrime(i)) {
        primes.push(i);
      }

      i += 1;
    }
    return primes;
  };
  console.log(primesArray);

   // Determine if a number is prime, called by generatePrimesList
   const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    //Defining a prime number..
    const numberSqrt = Math.floor(Math.sqrt(number));
    let i = 2;
    while (i <= numberSqrt) {
      if (number % i === 0) {
        return false;
      }

      i += 1;
    }

    return true;
  };
  // Complete multiplication of primes to fill table
  const multiplyPrimes = (primesArray) => {
    if (primesArray.length === 0) {
      return null;
    }

    let firstArray = [null].concat(primesArray);
    let multipliedPrimes = [firstArray];

    primesArray.forEach(function(prime) {
      let newRow = [prime];
      primesArray.forEach(function(primeToMultiplyBy) {
        newRow.push(prime * primeToMultiplyBy);
      });

      multipliedPrimes.push(newRow);
    });

    return multipliedPrimes;
  }
  // Display table with the values from multiplyPrimes()
  const displayTable = (arraysToPrint) => {
    if (arraysToPrint === null) {
      console.log("Oops, you told me you wanted zero primes! So here's a nonexistent table.");
      return;
    }
    const arrayIdx = arraysToPrint.length - 1;
    const spacesRequired = arraysToPrint[arrayIdx][arrayIdx].toString().length + 1;

    arraysToPrint.forEach(function(array) {
      let rowString = '';
      array.forEach(function(product) {
        if (product === null) {
          rowString = rowString.concat(' '.repeat(spacesRequired));
        } 
        else {
         let productLength = product.toString().length;
          rowString = rowString.concat(' '.repeat(spacesRequired - productLength));
          rowString = rowString.concat(product.toString());
        }
      });

      console.log(rowString);
    });
  }
const primesMultTable = n => {
    let primesList = this.generatePrimesArray(n);
    let multipliedPrimes = this.multiplyPrimes(primesList);
    this.displayTable(multipliedPrimes);
    // return primesMultTable;
  }
  let primes = this.PrimeMultiple;
  primes.primesMultTable(3);
}


//  primes = primes.primesMultTable(22);

  render() {
  
    return (
      <div className="row">
        <div className="col-sm-4">
          <form
            action="post"
            onSubmit={e => {
              this.submit(e);
            }}
          >
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter the number of primes"
                onChange={this.handlePrime.bind(this)}
                value={this.state.no_of_prime}
                required
              />
            </div>
            <div className="btn btn-success">
              <button>Enter</button>
            </div>
          </form>
        </div>
        <div className="col-sm-8">
          <div className="contactWrap m-4">
            <h3 className="mb-4 text-center">Primes Multiplication Table</h3>
            <table className="table table-bordered table-striped thead-dark">
              <tbody>
                <tr className="thead-light">
                  <th>X</th> <th>2</th> <th>3</th>
                  <th>5</th>
                  <th>7</th>
                  <th>11</th>
                  <th>13</th>
                  <th>17</th>
                  <th>19</th>
                  <th>23</th>
                  <th>29</th>
                </tr>
                <tr>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                </tr>
                <tr>
                  <td>5</td>
                </tr>
                <tr>
                  <td>7</td>
                </tr>
                <tr>
                  <td>11</td>
                </tr>
                <tr>
                  <td>13</td>
                </tr>
                <tr>
                  <td>19</td>
                </tr>
                <tr>
                  <td>23</td>
                </tr>
                <tr>
                  <td>29</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default PrimeCalculator;
