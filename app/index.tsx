import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");
  const [imagemAtual, setImagemAtual] = useState(0);

  const imagens = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  ];

  function salvarPerfil() {
    Alert.alert("Perfil salvo", `Nome: ${nome}`);
  }

  function trocarImagem() {
    if (imagemAtual === 0) {
      setImagemAtual(1);
    } else {
      setImagemAtual(0);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imagens[imagemAtual] }}
        style={styles.imagem}
        resizeMode="cover"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.botao}>
        <Button title="Trocar foto" onPress={trocarImagem} color="#6c63ff" />
      </View>

      <View style={styles.botao}>
        <Button title="Salvar" onPress={salvarPerfil} color="#2e86de" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    maxWidth: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  botao: {
    width: "100%",
    maxWidth: 300,
    marginBottom: 15,
  },
});
