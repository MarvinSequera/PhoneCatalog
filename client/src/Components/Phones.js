import React, { Component } from 'react'
import Service from '../Service/Phone.service'
import PhoneCard from './PhoneCard' 
import {Container,Row} from 'react-bootstrap'

class Phones extends Component{
    constructor (){
        super()
        this._service = new Service()
        this.state = {phones:[]}
    }
    componentDidMount = () => this.updatePhones()

    updatePhones=()=>{
        this._service.getAllPhones()
        .then(Phones => this.setState({phones:Phones.data}))
        .catch (err => console.log("error al recobrar los telefonos",err))
    }
    render(){
        return(
            <Container>
                <h1>Aqui van todos los telefonos</h1>
                <Row>
                    {this.state.phones.map(phone => <PhoneCard key={phone._id}{...phone}/>)}
                </Row>
            </Container>
        )
    }
}
export default Phones