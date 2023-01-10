import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getYoutube, getFlickr } from './api';
import * as types from './actionType';

function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}
function* returnYoutube() {
	try {
		const response = yield call(getYoutube);
		yield put({ type: types.YOUTUBE.sucess, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.fail, payload: err });
	}
}

function* callFlickr() {
	yield takeLatest(types.FLICKR.start, returnFlickr);
}
function* returnFlickr(action) {
	try {
		const response = yield call(getFlickr, action.Opt);
		yield put({ type: types.FLICKR.sucess, payload: response.data.photos.photo });
	} catch (err) {
		yield put({ type: types.FLICKR.fail, payload: err });
	}
}

export default function* rootSaga() {
	yield all([fork(callYoutube), fork(callFlickr)]);
}
