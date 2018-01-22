import {takeEvery,put,call,fork} from "redux-saga/effects";
//引入fetchapi
import {load,toupiao} from "./researchFetch";
//worker saga
//直接fetch(与下面的call的方式二选一)
// function* loadServerData(){
//     const {A,B,C,D,E} = yield fetch("/jieguo").then(data=>data.json());
//     yield put({"type":"LOAD",A,B,C,D,E});
// }
//用call的方式(与上面的直接fetch的方式二选一)
function* loadServerData(){
    const {A,B,C,D,E} = yield call(load);
    yield put({"type":"LOAD",A,B,C,D,E});
}

//worker saga
//fork方式(与下面的call的方式二选一)
// function* toupiao({n}){
//     yield fetch("/change/"+n).then(data=>data.json());
//     yield call(loadServerData);
// }
//用call的方式(与上面的直接fetch的方式二选一)
function* tp({n}){
    yield call(toupiao,n);
    yield call(loadServerData);
}

//监听 saga
export function* watchloadServerData(){
    //监听LOAD action 并拦截
    //调用loadServerData函数
    yield takeEvery("LOADSERVERDATA",loadServerData);
}

//监听 saga
export function* watchToupiao(){
    //监听LOAD action 并拦截
    //调用loadServerData函数
    yield takeEvery("TOUPIAO",tp);
}