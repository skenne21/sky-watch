// import { call, put, takeLatest } from 'redux-saga/effects';
// import * as API from '../helpers/apiCalls';
// import * as actions from '../actions/index.js';

// export function* addCompanyBioSaga(action) {
//   try {
//     const bio = yield call(API.fetchBio);
//     yield put(action.addCompanyBio(bio))
//   } catch (error) {
//     yield put(action.companyError(error.message))
//   }
// }

// export function* listenForCompanyBio() {
//   yield takeLatest('ADD_COMPANY_BIO', addCompanyBioSaga)
// }