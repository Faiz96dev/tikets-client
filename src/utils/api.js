import * as axios from "axios";


const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:8081/',
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data
            });
    },
    follow(id) {
        return instance.post(`follow/${id}`)

    },
    unFollow(id) {
        return instance.delete(`follow/${id}`)

    }

}

export const profileAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data
            });
    },
    getStatus(id) {
        return instance.get(`profile/status/` + id)

    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})

    }
}

export const authAPI ={
    me(){
        return instance.get(`auth/me`)
    },

    login(email, password){
        return instance.post(`auth/login`, {email, password })
    },

    logOut(){
        return instance.delete(`auth/login`)
    }
}
