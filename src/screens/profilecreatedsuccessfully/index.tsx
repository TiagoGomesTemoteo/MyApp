import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import cadastroConfirmado from "../../assets/CadastroConfirmado.png";
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";


import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function ProfileCreatedSuccessfully() {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('SignIn');
    // navigation.goBack();
  }

  return (
      <View style={styles.container}>
        <Image
          source={logoSmall}
          style={styles.imageLogo}
          resizeMode="stretch"
        />
        <Image
          source={cadastroConfirmado}
          style={styles.image}
          resizeMode="stretch"
        />

        <Text style={styles.title}>
          Seu perfil foi criado com sucesso {"\n"}
        </Text>
        
        <View style={styles.content}>
          <Text style={styles.subtitle}>
            Realize o login com as credenciais inseridas nos campos {"\n"}
          </Text>
        </View>

        <View style={styles.controlsbutons}>
          <Button title="Entrar" onPress={handleNavigate} />
        </View>
      </View>
  );
}
