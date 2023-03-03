import { Link } from "react-router-dom";

import bannerImage from '../../assets/img/image.png'; // para importar a imagem
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighLight  } from "./styles"; // importar o que fizemos em styles

const Home = () => {
    return ( <>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                    Implemente 
                    <br />
                    </TitleHighLight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" varinat="secondary" onClick={() => null}/>

            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal" />
            </div>
        </Container>
      
    </>)
}

export { Home }