import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004';

export const getAllMenuItems = async ()=>{
    try{
        const response = await axios.get('/menu')
        return response.data
    }catch(error){return error}
}

export const getCategories = async ()=>{
    try{
        const response= await axios.get('/categories')
        return response.data
    }catch(error){return error}
}

export const getAllOrders = async ()=>{
    try{
        const response = await axios.get('./order')
        return response.data
    }catch(error){return error}
}

export const getItemsById = async (id)=>{
    try{
        const response = await axios.get(`/menu/${id}`)
        return response.data
    }catch(error){return error}

}


