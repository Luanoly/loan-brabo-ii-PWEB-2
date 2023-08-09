import { Text, View, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';

const Campus = (props) => {
  return(
    <Text>O campus {props.nome} foi fundado em {props.anoFundacao}.</Text>
  );
}

const InstitutoFederal = (props) => {
  return(
    <Text>{props.sigla} - {props.uf}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


const App = () => {
  const [cliques, setCliques] = useState(0);
  return(
    <View style={styles.container} >
      <Text>Vote no melhor Instituto Federal:</Text>

      <InstitutoFederal sigla="IFAL" uf="AL" />
      <Campus nome="Maceió" anoFundacao={1909} />
        <Button title='VOTAR' onPress={() => {
          setCliques(cliques + 1);}}>
          </Button>

          <Text>VOTOS: {cliques}</Text>

      <Campus nome="Rio Largo" anoFundacao={2014} />
      <Button title='VOTAR' onPress={() => {
          setCliques(cliques + 1);}}></Button>
          <Text>VOTOS: {cliques}</Text>
      <Campus nome="Satuba" anoFundacao={1905} />
      <Button title='VOTAR' onPress={() => {
          setCliques(cliques + 1);}}></Button>
          <Text>VOTOS: {cliques}</Text>
      <InstitutoFederal sigla="IFPE" uf="PE" />
      <Campus nome="Palmares" anoFundacao={2014} />
      <Button title='VOTAR' onPress={() => {
          setCliques(cliques + 1);}}></Button>
          <Text>VOTOS: {cliques}</Text>
      <Campus nome="Garanhuns" anoFundacao={2010} />
      <Button title='VOTAR' onPress={() => {
          setCliques(cliques + 1);}}></Button>
          <Text>VOTOS: {cliques}</Text>
    </View>
  );
}

export default App;