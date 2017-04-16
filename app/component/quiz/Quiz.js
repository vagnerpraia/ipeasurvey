import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, Text, Icon, Title } from 'native-base';

import AdminData from './../../data/AdminData';
import QuizData from './../../data/QuizData';
import { styles } from './../../Styles';

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: null,
            quiz: null
        };
    }

    componentWillMount(){
        if(this.props.quiz === null){
            this.state.admin = new AdminData(new Date().getTime());
            this.state.quiz = new QuizData();
        }else{
            this.state.admin = AdminData.object(this.props.admin);
        }
    }

    popScreen(){
        this.props.navigator.replacePreviousAndPop({
            name: 'home'
        });
    }

    pushScreen(route){
        this.props.navigator.push({
            name: route,
            admin: this.state.admin,
            quiz: this.state.quiz
        });
    }

    voltar(){
        /*
         *  ====================================================================================================
         *  TODO: Adicionar popup informando se deseja cancelar ou não o questionário
         *  ====================================================================================================
         */
        this.popScreen();
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => {this.voltar()}}>
                            <Text>Voltar</Text>
                        </Button>
                    </Left>
                    <Body style={styles.bodyHeader}>
                        <View>
                            <Title>Questionário</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.viewContentQuestionario}>
                        <Text style={styles.texLabeltViewContent}>Número do questionário:</Text>
                        <Text style={styles.textContentViewContent}>123456789</Text>
                    </View>
                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('identificacao')}}>
                        <Icon name='md-finger-print' />
                        <Text style={styles.textButtonContent}>Identificação</Text>
                    </Button>

                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('domicilio')}}>
                        <Icon name='md-home' />
                        <Text style={styles.textButtonContent}>Domicílio</Text>
                    </Button>

                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('morador')}}>
                        <Icon name='md-contacts' />
                        <Text style={styles.textButtonContent}>Moradores</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
