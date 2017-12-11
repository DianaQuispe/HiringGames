import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export const Menu = () => {
    return (
        <Grid fluid className="text-center">
            <h1 className="Text-capitalize">Créalo tu mismo</h1>
            <p>Costumiza camisetas en 3 simples pasos</p>
            <SelectGender />
        </Grid>
    );
} 

const SelectGender = () => {
    return (
        <Row>
            <h2>Selecciona tu sexo</h2>
            <Col md={6}>
                <div className="selectGender-gender" onClick={()=>{console.log("male")}}>
                    <i class="fa fa-mars" aria-hidden="true"></i>
                </div>
                 
            </Col>
            <Col md={6}>
                <div onClick={()=>{console.log("female")}}>
                    <i class="fa fa-venus" aria-hidden="true"></i>
                </div>
                
            </Col>
        </Row>
    );
    
}