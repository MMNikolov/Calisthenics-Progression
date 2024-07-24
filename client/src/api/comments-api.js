import requester from "./requester"

const BASE_URL = 'http://localhost:3030/jsonstore/exercises'

const buildUrl = (exerciseId) => `${BASE_URL}/${exerciseId}/comments`

const create = async (exerciseId, username, text) => {
    const result = await requester.post(buildUrl(exerciseId), {username, text})
}

const getAllComments = async (exerciseId) => {
    const result = await requester.get(buildUrl(exerciseId))
    
    const comments = Object.values(result)

    return comments
}

export default {
    create,
    getAllComments
}