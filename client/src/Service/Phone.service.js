import axios from 'axios'
export default class Services{
    constructor (){
        this._service= axios.create({
            baseURL:'http://localhost:5000/api',
            withCredentials:true
        })
    }
}