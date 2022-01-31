import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import HomePage from '../components/HomePage';
import Season from '../components/Season';
import Episode from '../components/Episode';
import Characters from '../components/Characters';
import Navbar from '../components/Navbar';

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('HomePage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage />, div);
});
it('Season renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Season />, div);
});
it('Episode renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Episode />, div);
});
it('Characters renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Characters />, div);
});
it('Navbar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
});