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
      <h1>video game sales tracker</h1>
      <InstantSearch indexName = "vgSales" searchClient = {searchClient} hitsPerPage = {8}>
        <div>
          <SearchBox />
          <Hits hitComponent = {Hit}/>
          <Pagination/>
        </div>
      </InstantSearch>
    </div>
  );
}
function Hit(props) {
  console.log(props.hit.Name)
  return (
    <div className = "single-hit">
      <h3 className="hit-title">{props.hit.Name}</h3>
      <h4>Rank: {props.hit.Rank}</h4>
      <div>global sales: {props.hit.Global_Sales*1000000}</div>
      <div>Platform:{props.hit.Platform}</div>
      <div>Year: {props.hit.Year}</div>
    </div>
  );

}
Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
