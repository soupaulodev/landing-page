import { Container } from "./style";
import Image from "next/image";
import profileImg from '../../assets/image/logo.png';

export default function Profile() {
    return (
        <Container>
            <img src="https://avatars.githubusercontent.com/u/78260151?v=4" alt="Avatar do paulo marques" />
            <div>
                <h1>Paulo Marques</h1>
                <h2>Front-End Developer</h2>
            </div>
        </Container>
    );
};