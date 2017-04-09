import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Radio, Text } from 'native-base';

let model;
let block;
let questao;

export default class RadioButton extends Component {
    constructor(props) {
        super(props);

        model = this.props.model;
        block = this.props.block;
        questao = this.props.questao;

        this.state = {
            radioSelected: model.quiz['questao_' + questao.id]
        }
    }

    render() {
        let radioSelected = this.state.radioSelected;

        onSelect = (value) => {
            this.setState({
                radioSelected: value
            });
            model.quiz['questao_' + questao.id] = value;

            let numeroQuestao = Number(questao.id.replace(/\D/g,''));
            model.maxQuestion = numeroQuestao + 1;

            for(key in block){
                let item = block[key];
                if(item){
                    if(numeroQuestao == item.questao){
                        if(item.opcao.indexOf(value) >= 0){
                            model.maxQuestion = item.passe;
                        }
                    }
                }
            }
        }

        return (
            <View>
                {questao.opcoes.map(function(object, i){
                    return(
                        <ListItem key={object.value}>
                            <Radio selected={radioSelected === object.value} onPress={() => {
                                this.onSelect(object.value);
                            }} />
                            <Text onPress={() => {
                                this.onSelect(object.value);
                            }}>
                                {object.label}
                            </Text>
                            <Text style={styles.note}>
                                {object.observacao}
                            </Text>
                        </ListItem>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        fontSize: 14,
        color: 'gray',
    },
});
