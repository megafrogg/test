import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {


  render() {
    return (
        <div className='container'>
          <div className='jumbotron'>
            <h1 className='text-center'>The Life and Times of Kurt Gödel</h1>
            <img className='img-responsive center-block'  src={'https://upload.wikimedia.org/wikipedia/en/4/42/Kurt_g%C3%B6del.jpg'} alt='Kurt Godel had some baller-ass glasses.' />
            <p className='text-center'>Kurt Friedrich Godel (1906 - 1978)</p>
            <div className='row'>
              <div className='col-md-2'></div>
            </div>
            <div className='col-md-10'>
            <dl className='dl-horizontal'>
              <dt>April 28, 1906:</dt>
              <dd>Born Kurt Friedrich Gödel in Bruun, Austria-Hungary, to Rudolf and Marianne Gödel.</dd>
              <dt>1912-1916:</dt>
              <dd>Attended Evangelische Volksschule, a Lutheran school in Bruun.</dd>
              <dt>1920:</dt>
              <dd>Kurts brother Rudolf leaves for school in Vienna. Kurt begins studying mathematics.</dd>
              <dt>1923:</dt>
              <dd>Kurt joins his brother at the University of Vienna. Gets into Mathematical Logic.</dd>
              <dt>1928:</dt>
              <dd>David Hilbert publishes 'Principles of Mathematical Logic', which poses the questions 'Are the axioms of a formal system sufficient to derive every statement that is true in all models of the system?'</dd>
              <dt>1929:</dt>
              <dd>Kurt completes his doctoral dissertation, in which he establishes the completeness of the first-order predicate calculus.</dd>
              <dt>1930:</dt>
              <dd>Awarded his doctorate.</dd>
              <dt>1931:</dt>
              <dd>Publishes his incompletness theorems, which proves that for any computable axiomatic system, 1. if the system is consistent, it cannot be complete and 2. the consistency of the axioms cannot be proved within the system. This ended the search for a set of axioms sufficient for all of mathematics.</dd>
              <dt>1933:</dt>
              <dd>Becomes a privatdozent (unpaid lecturer). Travels to the Institute for Advanced Studies (IAS) at Princeton University to give an address. Meets Albert Einstein, who will later become a good friend. Developed the ideas of computability and recursive functions to the point where he was able to present a lecture on general recursive functions and the concept of truth.
              </dd>
            </dl>
            </div>
          </div>
        </div>
    );
  }
}



export default App
