import React from 'react';
import logo from './mintbean.png';
import algoliasearch from 'algoliasearch'
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './styles/index.css';

const searchClient = algoliasearch('OEELBRLG33','8e0eb8dd3c6e31c8b34141178ad4f89a')

function App() {
  return (
    <div className="App">
      <h1>big search type stuff</h1>
      <InstantSearch indexName = "vgSales" searchClient = {searchClient}>
        <div>
          <SearchBox />
          <Hits hitComponent = {Hit}/>
        </div>
      </InstantSearch>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>HAPPY HACKING!</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}
function Hit(props) {
  console.log(props.hit.Name)
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-price">{props.hit.Name}</div>
    </div>
  );

}
Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
