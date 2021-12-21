import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../common/StyleConstants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.bgDark,
  },
  errorText: {
    color: colors.textLogo,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    marginLeft: 0,
    fontFamily: fonts.NunitoSansLight,
  },
  buttonText: {
    color: colors.buttonText,
    letterSpacing: 1,
    fontFamily: fonts.NunitoSansLight,
  },
  button: {
    marginLeft: 0,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    right: 0,
    borderRadius: 3,
    backgroundColor: colors.textLogo,
  },
});

export default styles;
