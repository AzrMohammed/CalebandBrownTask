import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {connect} from 'react-redux';
import icons from '../../assets/icons';
import {addFavorites, removeFavorites} from '../../common/AppReducer/actions';
import CoinItem from '../../components/CoinItem';
import {fetchCoinListById} from '../Feeds/actions';
import styles from './styles';

class WishlistScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favItems: [],
    };
  }

  componentDidUpdate() {}

  proceedAddFavourites = (item, isAdd) => {
    this.props.removeFavorites({obj: item});
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.CoinListReducer.favoriteListbyIds.length > 0 ? (
          <FlatList
            style={{marginBottom: 0}}
            data={this.props.CoinListReducer.favoriteListbyIds}
            renderItem={(item) => {
              return (
                <CoinItem
                  isFromFavorites={true}
                  addFavorites={this.proceedAddFavourites}
                  isFavorite={true}
                  item={item}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
            onEndReachedThreshold={0.5}
            extraData={this.props.AppBasicReducer.favorites}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconBg}>
              <Image
                style={styles.emptyIcon}
                resizeMode="contain"
                source={icons.ic_footer_favorite}
              />
            </View>
            <Text style={styles.emptyText}>{'Favorite List is Empty'}</Text>
          </View>
        )}
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
export default connect(mapStateToProps, mapDispatchToProps)(WishlistScreen);
