import React from 'react'
import {Col} from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

const PhoneCard =({_id,name,manufacturer,price,imageFileName})=>{
    return (
        <Col md='4'>
            <Link>
                <img src={imageFileName} alt='phone'/>
                <h3>{name}</h3>
                <h4>{manufacturer}</h4>
                <h4>{price}</h4>
            </Link>
        </Col>
    )
}
export default PhoneCard
