//it is a root reducer as in a react js project only one store can be push that's why we need only one reducer that's why to merge all reducer into one reducer we need a root reducer.

//for merging we need a combineReducers from redux..

import {combineReducers} from 'redux';

import cardItems from './reducer';

//in combine reducer put all the components

export default combineReducers({
    cardItems
});