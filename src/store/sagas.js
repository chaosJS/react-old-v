import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from './const';
import { genInitTodoAction } from './actionCreators';
function* getSagaInitList() {
	try {
		const res = yield axios.get('/api/getTodos');
		const { data } = res.data;
		yield put(genInitTodoAction(data));
	} catch (error) {
		console.log(error, 'err');
	}
}

function* mySagas() {
	yield takeEvery(actionType.INIT_SAGA_TODO, getSagaInitList);
}
export default mySagas;
