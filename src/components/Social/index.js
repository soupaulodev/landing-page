import { Container } from "./style";
import config from '../../../landing-page.config.json'
const redesList = config.redes

export default function Social() {
    return (
        <Container>
            {redesList.map((rede) => {
                return <a key={rede.name} href={rede.link} target="_blank" rel="noreferrer">{rede.name}</a>
            })}
        </Container>
    );
};
