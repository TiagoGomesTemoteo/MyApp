import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    width: '100%'
  },
  controlsbutons: {
    textDecorationColor: theme.colors.white,
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 35
  },
  image: {
    width: 330,
    height: 330,
  },
  imageLogo: {
    marginTop: 20,
    marginBottom: 130
  },
  content: {
    marginTop: -50,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.secondary100,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40
  },
  subtitle: {
    color: theme.colors.primary,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: theme.fonts.title500,
    lineHeight: 25
  }
});