import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");
  const [imagemAtual, setImagemAtual] = useState(0);
  const [modoEscuro, setModoEscuro] = useState(false);

  const imagens = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  ];

  const noticias = [
    "Painel do elevador em atualização.",
    "Correção visual aplicada no sistema.",
    "Modo escuro disponível para teste.",
    "Notícias agora podem ser roladas na tela.",
    "Atualização rápida feita com suporte OTA.",
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
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: modoEscuro ? "#222" : "#f2f2f2" },
      ]}
    >
      <Text style={[styles.titulo, { color: modoEscuro ? "#fff" : "#000" }]}>
        Perfil Rápido
      </Text>

      <Image
        source={{ uri: imagens[imagemAtual] }}
        style={styles.imagem}
        resizeMode="cover"
      />

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: modoEscuro ? "#333" : "#fff",
            color: modoEscuro ? "#fff" : "#000",
            borderColor: modoEscuro ? "#888" : "#999",
          },
        ]}
        placeholder="Digite seu nome"
        placeholderTextColor={modoEscuro ? "#ccc" : "#666"}
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.botao}>
        <Button title="Trocar foto" onPress={trocarImagem} color="#6c63ff" />
      </View>

      <View style={styles.botao}>
        <Button title="Salvar" onPress={salvarPerfil} color="#2e86de" />
      </View>

      <Text style={[styles.titulo, { color: modoEscuro ? "#fff" : "#000" }]}>
        Atualização em Andamento
      </Text>

      <View style={styles.switchArea}>
        <Text style={{ color: modoEscuro ? "#fff" : "#000" }}>
          Modo escuro
        </Text>
        <Switch value={modoEscuro} onValueChange={setModoEscuro} />
      </View>

      {noticias.map((noticia, index) => (
        <View key={index} style={styles.noticia}>
          <Text style={{ color: modoEscuro ? "#fff" : "#000" }}>
            {noticia}
          </Text>
        </View>
      ))}

      <Text style={{ color: modoEscuro ? "#fff" : "#000", marginTop: 10 }}>
        OTA usada para corrigir pequenos bugs visuais rapidamente.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
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
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  botao: {
    width: "100%",
    maxWidth: 300,
    marginBottom: 15,
  },
  switchArea: {
    width: "100%",
    maxWidth: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  noticia: {
    width: "100%",
    maxWidth: 300,
    padding: 12,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    marginBottom: 10,
  },
});
