// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {createStore} from "vuex";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {StoreOptions} from "vuex";
import {IProduct} from "../../interfaces/IProcuts";










const storage ={
     state:{
        loggedAccount: 0,
         cart:[] as IProduct[],
    },
    mutations:{
        SET_LOGGED_ACCOUNT(state:any,value:number){
            state.loggedAccount = value
        },

    }
    ,
    actions:{
        SET_LOGGED_ACCOUNT({commit}:unknown,value:number){
            commit('SET_LOGGED_ACCOUNT',value)
        },
    },

    getters:{

        GET_LOGGED_ACCOUNT(state:any):number{
            return state.loggedAccount
        },
    }
} as StoreOptions<unknown>

export default createStore(storage)