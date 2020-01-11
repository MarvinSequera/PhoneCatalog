import axios from 'axios'
export default class Services{
    constructor (){
        this._service= axios.create({
            baseURL:'http://localhost:5000/phones',
            withCredentials:true
        })
    }
    getAllPhones = () => this._service.get('')
}