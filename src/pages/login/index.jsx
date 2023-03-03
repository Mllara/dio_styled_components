import { MdEmail, MdLock  } from "react-icons/md";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Column, Container, BuildText, ForgetText, Row, SubtitleLogin, Title, TitleLogin, Wrapper  } from "./styles"; // importar o que fizemos em styles

const Login = () => {
    return ( <>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu Login e make the change._</SubtitleLogin>
                    <form>
                        <Input placeholder="Email" leftIcon={<MdEmail />} />
                        <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" />
                    </form>
                    <Row>
                        <ForgetText>Esqueci minha senha</ForgetText>
                        <BuildText>Criar conta</BuildText>
                    </Row>
                </Wrapper>
                <Input placeholder="email"/>
            </Column>
        </Container>
      
    </>)
}

export { Login }