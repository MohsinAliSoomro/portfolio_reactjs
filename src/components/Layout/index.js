import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../Header'
export default function index(props) {
    return (
         <Container>
             <Header/>
                {props.children}
         </Container>
        
    )
}
