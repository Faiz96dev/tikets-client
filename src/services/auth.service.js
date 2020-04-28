import axios from "axios";
import {authAPI} from "../utils/api";

export const LogIn = async (data) => {
    let response = await authAPI.login(data.email, data.password)
        if (response.data === 'User does not exist!') {
            throw new Error('User does not exist!')
        }
        if (response.data === 'Invalid user pass') {
            throw new Error('Invalid user or pass')
        }
        if (response.data !== 'Invalid user pass' || 'User does not exist!' && response.status === 200) {
            return response.data
        }
}
