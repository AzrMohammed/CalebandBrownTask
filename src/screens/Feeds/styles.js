import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../common/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  headerContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignContent: 'flex-start',
    marginRight: 20,
  },
  logo: {height: 70, width: 200},
  search: {
    height: 20,
    tintColor: colors.textLogo,
    width: 20,
  },
  emptyContainer: {
    position: 'absolute',
    top: 70,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
    flexDirection: 'row',
    marginLeft: 0,
    fontFamily: fonts.NunitoSansLight,
  },
  sortHeader: {
    color: colors.bgDark,
    fontSize: 13,
    fontFamily: fonts.NunitoSansBold,
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
  buttonText: {
    color: colors.buttonText,
    letterSpacing: 1,
    fontFamily: fonts.NunitoSansLight,
  },
});

export default styles;
