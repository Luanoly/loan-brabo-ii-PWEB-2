import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

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
  return(
    <View style={styles.container} >
      <InstitutoFederal sigla="IFAL" uf="AL" />
      <Campus nome="Maceió" anoFundacao={1909} />
      <Campus nome="Rio Largo" anoFundacao={2014} />
      <Campus nome="Satuba" anoFundacao={1905} />
      <InstitutoFederal sigla="IFPE" uf="PE" />
      <Campus nome="Palmares" anoFundacao={2014} />
      <Campus nome="Garanhuns" anoFundacao={2010} />
    </View>
  );
}

export default App;