import React from 'react';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {addFavorites, removeFavorites} from '../../common/AppReducer/actions';
import CoinItem from '../../components/CoinItem';
import {fetchCoinListById} from '../Feeds/actions';
import styles from './styles';

class TrendingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  proceedAddFavourites = (item, isAdd) => {
    if (isAdd) {
      this.props.addFavorites({obj: item});
    } else {
      this.props.removeFavorites({obj: item});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{marginBottom: 0}}
          data={this.props.CoinListReducer.trendingListbyIds}
          renderItem={(item) => {
            let isFavorite = this.props.AppBasicReducer.favorites.some(
              (eitem) => {
                return item.item.id == eitem.id;
              },
            );

            return (
              <CoinItem
                addFavorites={this.proceedAddFavourites}
                isFavorite={isFavorite}
                item={item}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
          onEndReachedThreshold={0.5}
          extraData={this.props.AppBasicReducer.favorites}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    CoinListReducer: state.CoinListReducer,
    AppBasicReducer: state.AppBasicReducer,
  };
};

const mapDispatchToProps = {
  fetchCoinListById: fetchCoinListById,
  addFavorites: addFavorites,
  removeFavorites: removeFavorites,
};
export default connect(mapStateToProps, mapDispatchToProps)(TrendingScreen);
