import { Container } from "./style";
import config from '../../../landing-page.config.json'
const redesList = config.redes
import Image from "next/image";
import linkedinImg from '../../assets/image/logo.svg';
import ghImg from '../../assets/image/logo.svg';
import igImg from '../../assets/image/logo.svg';
import downloadImg from '../../assets/image/logo.svg';

export default function Social() {
    return (
        <Container>
            <a key={rede.name} href={rede.link} target="_blank" rel="noreferrer">
                <Image className="ico" src={linkedinImg} alt="icone linkedin" responsive />
            </a>
            <a key={rede.name} href={rede.link} target="_blank" rel="noreferrer">
                <Image className="ico" src={ghImg} alt="icone github" responsive />
            </a>
            <a key={rede.name} href={rede.link} target="_blank" rel="noreferrer">
                <Image className="ico" src={igImg} alt="icone instagram" responsive />
            </a>
            <a key={rede.name} href={rede.link} target="_blank" rel="noreferrer">
                <Image className="ico" src={downloadImg} alt="icone de download do curriculo" responsive />
            </a>
        </Container>
    );
};
