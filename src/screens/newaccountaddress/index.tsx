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

export function NewAccountAddress() {
    const navigation = useNavigation<any>();

    const handleNavigate = () => {
      navigation.navigate('NewAccountProfilePicture');
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

                <Text style={styles.subtitle}>
                   Para começar, insira seu endereço {'\n'} 
                </Text>

                <Text style={styles.label}>
                    CEP *{'\n'}
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu CEP"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}>
                </TextInput>

                <Text style={styles.label}>
                    Endereço *{'\n'}
                </Text>
                <TextInput style={styles.input} placeholder="Insira seu enderço"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={50}>
                </TextInput>

                <Text style={styles.label}>
                    Número *{'\n'}
                </Text>
                <TextInput style={styles.input} keyboardType='number-pad'
                    placeholder="Insira seu número"
                    placeholderTextColor={theme.colors.primary} >
                </TextInput>

                <Text style={styles.label}>
                    Complemento *{'\n'}
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu complemento"
                    placeholderTextColor={theme.colors.primary} >
                </TextInput>

            </View>

            <View style={styles.controlsbutons}>
                <Button title="Continuar" onPress={handleNavigate}/>
            </View>
        </View>

    );
}