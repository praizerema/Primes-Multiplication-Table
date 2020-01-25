// Primes multiplication contains an input field which takes value number 
//as number of primes to be displayed. Enter any positive number and click Enter to create your primes table
import React, { Component } from "react";
class PrimeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no_of_prime: "",
      prime_count: "",
      productTable: ""
    };
  }
  handlePrime = e => this.setState({ no_of_prime: e.target.value });
  submit(e) {
    e.preventDefault();
    if (this.state.no_of_prime < 1) {
      alert("Enter any number from 1");
      return 0;
    } else {
      this.makePrimesMultTable(this.state.no_of_prime);
    }
  }

  // Store first n primes, use isPrime to determine if a given number is prime
  generatePrimesArray = n => {
    let primes = [];
    let i = 0;

    while (primes.length < n) {
      if (this.isPrime(i)) {
        primes.push(i);
      }

      i += 1;
    }

    return primes;
  };

  // Determine if a number is prime, called by generatePrimesList
  isPrime = number => {
    if (number <= 1) {
      return false;
    }

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
  multiplyPrimes = primesArray => {
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
  };

  // Display table with the values from multiplyPrimes()
  displayTable = (arraysToPrint, TableHead) => {
    delete arraysToPrint[0];
    let productTable = TableHead;
    const arrayIdx = arraysToPrint.length - 1;
    const spacesRequired = arraysToPrint[arrayIdx][arrayIdx].toString().length;
    arraysToPrint.forEach(function(array) {
      let rowString = `<tr>`;
      array.forEach(function(product) {
        if (product === null) {
          rowString = rowString.concat(" ".repeat(spacesRequired));
        } else {
          rowString = rowString.concat(`<td>${product.toString()}</td>`);
        }
      });
      rowString = rowString.concat("</tr>");
      productTable = productTable.concat(rowString);
    });
    this.setState({ productTable });
  };

  makePrimesMultTable = n => {
    let primesList = this.generatePrimesArray(n)
;
    const TableHead = this.generateTableHead(n)
;
    let multipliedPrimes = this.multiplyPrimes(primesList);
    // console.log(multipliedPrimes, TableHead);
    this.displayTable(multipliedPrimes, TableHead);
  };

  generateTableHead = n => {
    const tags = this.generatePrimesArray(n)
;
    return `<tr className="thead-light"><th>X</th>${tags
      .map(tag => `<th>${tag}</th>`)
      .toString()
      .replace(/,/g, "")}</tr>`;
  };

  render() {
    return (
      <div className="container p-3">
        <div className="row">
          {" "}
          <div className="col-sm-12 d-grid">
            <h3 className="mb-4 text-center">Primes Multiplication Table</h3>
          </div>
          <div className="col-sm-12 d-grid">
              {/* Form with an input field oftype number to take prime count and
               a button to submit the input value */}
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
              <div className="form-group">
                <button type="submit" className="btn btn-success float-right">
                  Enter
                </button>
              </div>
            </form>
          </div>
          {/*This displays the primes multiplication table */}
          <div className="col-sm-12 d-table">
            <div className="contactWrap m-4">
              <table className="table table-bordered table-striped thead-dark">
                <tbody
                  dangerouslySetInnerHTML={{ __html: this.state.productTable }}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PrimeCalculator;


