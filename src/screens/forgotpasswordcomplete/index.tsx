import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import emailConfirmado from "../../assets/EmailConfirmado.png";
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";


import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function ForgotPasswordComplete() {
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
          source={emailConfirmado}
          style={styles.image}
          resizeMode="stretch"
        />

        <Text style={styles.title}>
          Confira seu e-mail {"\n"}
        </Text>
        
        <View style={styles.content}>
          <Text style={styles.subtitle}>
            Enviamos as instruções em seu e-mail {"\n"}
          </Text>
        </View>

        <View style={styles.controlsbutons}>
          <Button title="Entrar" onPress={handleNavigate} />
        </View>
      </View>
  );
}
