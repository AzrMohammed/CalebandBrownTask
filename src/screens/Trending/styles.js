import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../common/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  emptyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyIconBg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    borderRadius: 200,
    backgroundColor: '#EDEDED',
    height: 200,
  },
  emptyIcon: {
    width: 50,
    height: 50,
    tintColor: colors.textLogo,
  },
  emptyText: {
    color: colors.textLogo,
    fontFamily: fonts.NunitoSansLight,
    fontSize: 20,
    marginTop: 20,
  },
  title: {
    color: colors.textLogo,
    fontFamily: fonts.NunitoSansLight,
    marginTop: 20,
    fontSize: 33,
  },
  footerContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.textLogo,
    marginBottom: 10,
    marginLeft: 20,
    fontFamily: fonts.NunitoSansLight,
  },
  button: {
    marginLeft: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    right: 0,
    borderRadius: 3,
    backgroundColor: colors.textLogo,
  },
  buttonText: {
    color: colors.buttonText,
    letterSpacing: 1,
    fontFamily: fonts.NunitoSansLight,
  },
});

export default styles;
