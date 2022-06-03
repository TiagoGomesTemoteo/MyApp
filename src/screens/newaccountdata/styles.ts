import { StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  input: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    textAlign: 'left',
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  content: {
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 35
  },
  controlsbutons: {
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 35,
    borderRadius: 100,
  },
  controls: {
    marginTop: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 5
  },
  title: {
    color: theme.colors.text,
    textAlign: 'left',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  imageLogo: {
    marginTop: 0,
    marginBottom: 15
  },
  linha: {
    marginTop: 15,
    marginBottom: 15
  },
  subtitle: {
    color: theme.colors.overlay,
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 10,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }

});