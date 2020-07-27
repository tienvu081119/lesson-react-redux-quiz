import * as types from './../constants/ActionType'

export const resUser = (userName,email) =>{
    return {
        type: types.RES_USER,
        userName,
        email
    }
}

export const nextBtn = (number)=>{
    return {
        type: types.NEXT_BTN,
        number
    }
}

export const load = ()=>{
    return {
        type: types.LOAD
    }
}

export const showQuestion = (id) =>{
    return {
        type: types.SHOW_QUESTION,
        id
    }
}