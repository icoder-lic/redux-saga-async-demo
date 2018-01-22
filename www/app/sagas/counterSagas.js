import {takeEvery, put} from "redux-saga/effects";
//worker saga
function* addServer(){
    //请求服务器接口上面的值
    const {result} = yield fetch("/api").then(data=>data.json());
    //转为发布同步的action
    yield put({"type":"ADD",n:result});
}
//watchsaga
export function* watchAddServer(){
    //监听ADDSERVER的action，如果一旦有type为ADDSERVER的action
	//就执行addServer函数
    yield takeEvery("ADDSERVER",addServer);
}