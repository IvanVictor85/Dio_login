import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api'
import { Column, Container, CriarText, JaTenho, Row, SubtitleLogin, Title, TitleLogin, Wrapper, Icon, TextBottom } from './styles'
import { IformData } from "./types";

const schema = yup.object({
    nome: yup.string().required('Campo obrigatório'),
    email: yup.string().email('email não é valido').required('Campo obrigatório'),
    password: yup.string().min(3, 'Min 3 caracteres').required('Campo obrigatório'),
  }).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }


    const { control, handleSubmit, formState: { errors } } = useForm<IformData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IformData) => { //async pois a função é assicrona
        try{ //             await para esperar a resposta
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if (data.length === 1){
                navigate('/feed')
            } else {
                alert('Email ou senha inválido')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };


    return (<>
        <Header />
        <Container>
            <Column>
                <Title>                    
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>                
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Icon>
                        <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock />}/>
                        </Icon>
                        <Button title="Criar minha conta" variant="secondary" type='submit'/>
                    </form>
                    <TextBottom>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </TextBottom>
                    <Row>
                        <JaTenho>Já tenho conta.</JaTenho>
                        <CriarText onClick={handleClickSignIn} >Fazer login</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>       
    </>)
}

export { Cadastro }