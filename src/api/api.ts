 import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "9a08c01f-a212-42b6-bf00-f90c2da32f6e"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId){
        //console.warn('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile){
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
        //возвращает промис потом в компоненте мы подпишемся на промис then
    },
    login(email: string, password: string, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
     getCaptchaUrl(){
         return instance.get(`security/get-captcha-url`)
     }
}