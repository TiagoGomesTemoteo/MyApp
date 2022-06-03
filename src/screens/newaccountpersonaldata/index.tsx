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

export function NewAccountPersonalData() {
    const navigation = useNavigation<any>();

    const handleNavigate = () => {
      navigation.navigate('NewAccountAddress');
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
                   Insira seus dados pessoais {'\n'} 
                </Text>

                <Text style={styles.label}>
                    Nome *{'\n'}
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu nome"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}>
                </TextInput>

                <Text style={styles.label}>
                    Sobrenome *{'\n'}
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu sobrenome"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}>
                </TextInput>

                <Text style={styles.label}>
                    Celular *{'\n'}
                </Text>
                <TextInput style={styles.input} keyboardType='number-pad'
                    placeholder="Insira seu celular"
                    placeholderTextColor={theme.colors.primary} >
                </TextInput>

                <Text style={styles.label}>
                    Telefone *{'\n'}
                </Text>
                <TextInput style={styles.input} keyboardType='number-pad'
                    placeholder="Insira seu telefone"
                    placeholderTextColor={theme.colors.primary} >
                </TextInput>

            </View>

            <View style={styles.controlsbutons}>
                <Button title="Continuar" onPress={handleNavigate}/>
            </View>
        </View>

    );
}