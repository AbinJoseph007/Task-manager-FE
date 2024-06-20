import { Base_url } from "./BaseURL"
import { commonAPI } from "./CommonAPI"



export const userRegisterAPI = async(user)=>{
    return await commonAPI("POST",`${Base_url}/user/register`,user,"")
}

export const userLoginApi = async (user) =>{
    return await commonAPI("POST", `${Base_url}/user/login`,user,"")
}

export const addtaskApi = async (reqBody)=>{
    return await commonAPI ("POST" , `${Base_url}/user/task/add`,reqBody, "")
}

export const gettaskApi = async ()=>{
    return await commonAPI('GET',`${Base_url}/user/alltask`)
}

export const edittaskApi = async (taskId,reqBody,)=>{
    return await commonAPI('PUT',`${Base_url}/task/update/${taskId}`,reqBody)
}

export const deleteTaskApi = async (taskId)=>{
    // project id passed as path parameter
    return await commonAPI('DELETE',`${Base_url}/task/delete/${taskId}`,{}, )
}