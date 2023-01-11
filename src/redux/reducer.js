import { combineReducers } from 'redux';
import * as types from './actionType';

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return state;
		case types.YOUTUBE.sucess:
			return { ...state, youtube: action.payload };
		case types.YOUTUBE.fail:
			return { ...state, youtube: action.payload };
		default:
			return state;
	}
};

const flickrReducer = (state = { flickr: [] }, action) => {
	switch (action.type) {
		case types.FLICKR.start:
			return state;
		case types.FLICKR.sucess:
			return { ...state, flickr: action.payload };
		case types.FLICKR.fail:
			return { ...state, flickr: action.payload };
		default:
			return state;
	}
};

const menuReducer = (state = { open: false }, action) => {
	switch (action.type) {
		case types.MENU.open:
			return { ...state, open: true };
		case types.MENU.close:
			return { ...state, open: false };
		case types.MENU.toggle:
			return { ...state, open: !state.open };
		default:
			return state;
	}
};

const reducers = combineReducers({ youtubeReducer, flickrReducer, menuReducer });
export default reducers;
