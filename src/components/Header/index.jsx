import React from'react';
import logo from '../../assets/img/image.png';
import { Button } from '../Button';

import {
    ResearchInputContainer,
    Container,// conteudo do cabeçalho
    Input,
    Menu,
    MenuRight,
    Row,//por utilizar linha
    Wrapper //background do cabeçalho


} from './styles';

const Header = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO"/>
                    <ResearchInputContainer>
                        <Input placeholder ='Research...'/>
                    </ResearchInputContainer>
                    <Menu>Live code</Menu>
                    <Menu>Global</Menu>
            
                </Row>
                <Row>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Login"/>
                    <Button title="Register"/>
            
                </Row>
            </Container>
        </Wrapper>
    )

}

export {Header}