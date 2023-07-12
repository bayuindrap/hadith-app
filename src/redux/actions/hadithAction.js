import axios from "axios";
import { API_URL } from "../../../api";



export const hadithAction = () => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}`)
            dispatch({
                type: "GET_HADITH",
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}