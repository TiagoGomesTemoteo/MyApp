import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import imagemPerfil from "../../assets/ImagemPerfil.png";
import logoSmall from "../../assets/app-name-small.png";
import { Button } from "../../components/Button";
import { ButtonWhite } from "../../components/ButtonWhite";


import { useNavigation, useFocusEffect } from "@react-navigation/native";


export function NewAccountProfilePicture() {
  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate('ProfileCreatedSuccessfully');
    // navigation.goBack();
  }
  const handleNavigateContinue = () => {
    navigation.navigate('ProfileCreatedSuccessfully');
    // navigation.goBack();
  }
  return (
      <View style={styles.container}>
        <Image
          source={logoSmall}
          style={styles.imageLogo}
          resizeMode="stretch"
        />
        <Text style={styles.title}>
          Para finalizar, insira uma foto de perfil {"\n"}
        </Text>
        <Image
          source={imagemPerfil}
          style={styles.image}
          resizeMode="stretch"
        />

        <Text style={styles.subtitle}>
          Selecionar foto de perfil {"\n"}
        </Text>

        <View style={styles.controlsbutons}>
          <ButtonWhite title="Pular esta estapa" onPress={handleNavigate} />
        </View>

        <View style={styles.controlsbutons}>
          <Button title="Continuar" onPress={handleNavigateContinue} />
        </View>
      </View>
  );
}
