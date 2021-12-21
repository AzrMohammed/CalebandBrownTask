import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import icons from '../../assets/icons';
import {coinListpaginationSize} from '../../common/AppConstants';
import {addFavorites, removeFavorites} from '../../common/AppReducer/actions';
import {colors} from '../../common/StyleConstants';
import AppLoader from '../../components/AppLoader';
import CoinItem from '../../components/CoinItem';
import NetworkFailure from '../../components/NetworkFailure';
import SkeletonItem from '../../components/SkeletonItem';
import SortItem from '../../components/SortItem';
import {fetchCoinList, resetCoinList} from './actions';
import styles from './styles';

class FeedsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: '',
      showSortOptions: false,
    };
    this.proceedFetch();
  }

  proceedFetch = () => {
    this.props.fetchCoinList({
      pageno: this.props.CoinListReducer.pageno,
      onSuccess: () => {},
      onError: (message) => {},
    });
  };

  proceedAddFavourites = (item, isAdd) => {
    if (isAdd) {
      this.props.addFavorites({obj: item});
    } else {
      this.props.removeFavorites({obj: item});
    }
  };

  proceedPagination = () => {
    let current_page = this.props.CoinListReducer.pageno - 1;

    if (
      current_page ==
      this.props.CoinListReducer.list.length / coinListpaginationSize
    ) {
      if (!this.props.CoinListReducer.loading) this.proceedFetch();
    }
  };

  renderFooter = () => {
    return (
      <View>
        {this.props.CoinListReducer.loading ? <AppLoader size="large" /> : null}
      </View>
    );
  };

  proceedReorderRefresh = (type) => {
    this.setState({
      showSortOptions: false,
    });
    this.props.resetCoinList({
      data: type,
      onSuccess: () => {
        alert('Camm');
      },
      onError: (message) => {},
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={icons.logoHorizontal}
          />
          <View
            style={{
              flexDirection: 'row',
              right: 0,
              position: 'absolute',
              alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                let val = this.state.showSortOptions;
                this.setState({
                  showSortOptions: !val,
                });
              }}>
              <Image
                style={styles.search}
                resizeMode="contain"
                source={icons.sort}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SearchStack');
              }}
              style={{marginLeft: 10}}>
              <Image
                style={styles.search}
                resizeMode="contain"
                source={icons.ic_footer_search}
              />
            </TouchableOpacity>
          </View>
        </View>

        {this.state.showSortOptions ? (
          <View
            style={{
              borderColor: colors.textLogo,
              borderWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              paddingHorizontal: 10,
              marginBottom: 10,
              height: 45,
              borderRadius: 3,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.sortHeader}>{'SORT BY'}</Text>
            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                right: 0,
                marginRight: 10,
              }}>
              <SortItem
                title={'ID'}
                orderKey={'id_asc'}
                selectedkey={this.props.AppBasicReducer.sortTypeDefault}
                proceedSort={this.proceedReorderRefresh}
              />

              <SortItem
                title={'Volume'}
                orderKey={'volume_desc'}
                selectedkey={this.props.AppBasicReducer.sortTypeDefault}
                proceedSort={this.proceedReorderRefresh}
              />
              <SortItem
                title={'Market Cap'}
                orderKey={'market_cap_desc'}
                selectedkey={this.props.AppBasicReducer.sortTypeDefault}
                proceedSort={this.proceedReorderRefresh}
              />
            </View>
          </View>
        ) : null}

        {this.props.CoinListReducer.loading &&
        this.props.CoinListReducer.list.length == 0 ? (
          <View style={styles.emptyContainer}>
            <SkeletonItem />
          </View>
        ) : (
          <FlatList
            style={{marginBottom: 0}}
            data={this.props.CoinListReducer.list}
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
            onEndReached={() => this.proceedPagination()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this.renderFooter()}
            extraData={[
              this.props.AppBasicReducer.favorites,
              this.props.CoinListReducer.loading,
            ]}
          />
        )}

        {this.props.CoinListReducer.error !== '' ? (
          <NetworkFailure retry={this.proceedFetch} />
        ) : null}
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
  fetchCoinList: fetchCoinList,
  addFavorites: addFavorites,
  resetCoinList: resetCoinList,
  removeFavorites: removeFavorites,
};
export default connect(mapStateToProps, mapDispatchToProps)(FeedsScreen);
