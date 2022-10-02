import  * as types from './action-types'

export const createUser = (userName) => {
    return {type: types.CREATE_USER, userName}
}