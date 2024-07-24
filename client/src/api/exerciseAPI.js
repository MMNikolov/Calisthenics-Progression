import * as request from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/exercises'

export const getALL = async () => {
    const result = await request.get(BASE_URL)

    const exercises = Object.values(result)

    return exercises
}
