import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


// só pode ter 1 export

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Espaço de trabalho!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App1 = () => {
  const [cliques, setCliques] = useState(0);

  return(
    <View style={styles.container}>
      <Button title='OK' onPress={() => {
        setCliques(cliques + 1);
      }}/>
      <Text>Quantidade de cliques: {cliques}</Text>
    </View>
  )
}

export default App1;