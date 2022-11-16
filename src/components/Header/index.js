import { Container } from "./style";
import Image from "next/image";
import logoImg from '../../assets/image/logo.png';

export default function Header() {
    return (
        <Container>
            <Image className="img" src={logoImg} alt="Logo paulo marques dev" responsive />
        </Container>
    );
};