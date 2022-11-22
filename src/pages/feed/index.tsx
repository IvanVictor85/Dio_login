import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles' 

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/84158615?v=4"/>
                <UserInfo percentual={30} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/84158615?v=4"/>
                <UserInfo percentual={70} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/84158615?v=4"/>
                <UserInfo percentual={22} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/84158615?v=4"/>
                <UserInfo percentual={54} nome="Ivan Oliveira" image="https://avatars.githubusercontent.com/u/84158615?v=4"/>
            </Column>           
        </Container>       
    </>)
}

export { Feed }