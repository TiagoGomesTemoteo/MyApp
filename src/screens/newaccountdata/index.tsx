import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import logoSmall from "../../assets/app-name-small.png";
import linha from "../../assets/linha.png";
import { Button } from "../../components/Button";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export function NewAccountData() {
    const navigation = useNavigation<any>();

    const handleNavigate = () => {
      navigation.navigate('NewAccountPersonalData');
      // navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Image
                source={logoSmall}
                style={styles.imageLogo}
                resizeMode="stretch"
            />

            <View style={styles.content}>

                <Text style={styles.title}>
                    Insira os dados da sua conta {'\n'} 
                </Text>

                <Text style={styles.label}>
                    E-mail *{'\n'}
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu e-mail"
                    keyboardType='email-address'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}>
                </TextInput>

                <Text style={styles.label}>
                    Nome de usuário *{'\n'}
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu nome de usuário"
                    keyboardType='email-address'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}>
                </TextInput>

                <Text style={styles.label}>
                    Senha *{'\n'}
                </Text>
                <TextInput style={styles.input} keyboardType='number-pad'
                    placeholder="Insira sua senha"
                    maxLength={6}
                    secureTextEntry
                    placeholderTextColor={theme.colors.primary} >
                </TextInput>

                <Text style={styles.label}>
                    Confirme a senha *{'\n'}
                </Text>
                <TextInput style={styles.input} keyboardType='number-pad'
                    placeholder="Insira sua senha"
                    maxLength={6}
                    secureTextEntry
                    placeholderTextColor={theme.colors.primary} >
                </TextInput>

            </View>

            <View style={styles.controlsbutons}>
                <Button title="Continuar" onPress={handleNavigate}/>
            </View>
        </View>

    );
}