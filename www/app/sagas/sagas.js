import {all} from "redux-saga/effects";
//引入计数器的监听saga
import {watchAddServer} from "./counterSagas";
import { watchloadServerData,watchToupiao } from "./researchSagas";
//根saga
export default function* rootSaga(){
    yield all([
        watchAddServer(),
        watchloadServerData(),
        watchToupiao()
    ])
}