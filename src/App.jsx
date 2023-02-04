import { Button } from "./components/button";
import { Text } from "./components/text";
import { Avatar } from "./components/avatar";
import { Header } from "./components/header";
import { NavItem } from "./components/nav-item";
import { Navbar } from "./components/navbar";;
import { Title } from "./components/title";

const items = [
  "Página Inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
  "Mais",
];

function App() {

    return (
      <>
        <Navbar>
          <Title />
          {items.map((item)=> (
            <NavItem key={item} text={item}/>
          ))}
        </Navbar>
        <Header>
          <Avatar />
          <Text bold={true}>@adatech</Text>
          <Button>Seguindo</Button>
          <Button>Enviar mensagem</Button>
          <Text>211 publicações</Text>
          <Text>44,2 mil seguidores</Text>
          <Text>2 seguindo</Text>
        </Header>
      </>
    );
}

export default App;
