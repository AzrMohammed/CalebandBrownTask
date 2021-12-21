import {StyleSheet} from 'react-native';
import {colors} from '../../common/StyleConstants';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    height: 170,
    borderRadius: 10,
    marginBottom: 10,
    padding: 16,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#DEDEDF',
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 16,
    flexDirection: 'column',
    backgroundColor: colors.itemBg,
  },
});

export default styles;
