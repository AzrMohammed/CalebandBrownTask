import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts';
import {colors} from '../../common/StyleConstants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 16,
    flexDirection: 'column',
    backgroundColor: colors.itemBg,
  },
  containerDetails: {
    paddingLeft: 10,
    flexDirection: 'column',
  },
  containerDetailsSection: {
    marginTop: 20,
    flexDirection: 'row',
    borderColor: '#DEDEDE',
    justifyContent: 'space-evenly',
  },
  favIcon: {
    position: 'absolute',
    right: 0,
    marginTop: 10,
    alignItems: 'flex-end',
    marginRight: 10,
    height: 40,
    width: 40,
  },
  containerDetailsSectionItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeaderText: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: 13,
    color: colors.sectionItemHeader,
  },
  sectionSubText: {
    fontSize: 10,
    marginTop: 0,
    color: colors.sectionItemSubText,
    fontFamily: fonts.NunitoSansBold,
  },

  headerText: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: 17,
    marginRight: 80,
    color: colors.itemHeader,
  },
  subText: {
    fontSize: 13,
    color: colors.itemSubText,
    fontFamily: fonts.NunitoSansRegular,
  },
});

export default styles;
