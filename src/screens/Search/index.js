import React from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import icons from '../../assets/icons';
import {coinSearchLimit} from '../../common/AppConstants';
import {addFavorites, removeFavorites} from '../../common/AppReducer/actions';
import CoinItem from '../../components/CoinItem';
import NetworkFailure from '../../components/NetworkFailure';
import SkeletonItem from '../../components/SkeletonItem';
import {fetchCoinListById} from '../Feeds/actions';
import styles from './styles';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      suggestionList: [],
      showCross: false,
      searchText: '',
      error: false,
      keyboardVisible: false,
    };

    this.getSuggestionList(true);
  }

  handleChange(text) {
    this.setState({
      searchText: text,
      showCross: text === '' ? false : true,
    });
  }

  getSuggestionList = (isFirst = false) => {
    Keyboard.dismiss();

    if (!isFirst)
      this.setState({
        loading: true,
        error: false,
      });

    let searchKey = this.state.searchText;
    let filteredlist = [];
    if (this.props.AppBasicReducer?.allCoins.length > coinSearchLimit)
      if (searchKey == '') {
        filteredlist = this.props.AppBasicReducer.allCoins.slice(
          0,
          coinSearchLimit,
        );
      } else {
        let searchKeyLower = searchKey.toLowerCase();
        this.count = 0;
        filteredlist = [];
        let filteredlistsymbol = this.props.AppBasicReducer.allCoins.filter(
          (item) => {
            if (
              this.count < coinSearchLimit &&
              item.symbol.toLowerCase().includes(searchKeyLower)
            ) {
              this.count++;
              return true;
            }
            return false;
          },
        );

        let filteredlistName = this.props.AppBasicReducer.allCoins.filter(
          (item) => {
            if (
              this.count < coinSearchLimit &&
              item.name.toLowerCase().includes(searchKeyLower) &&
              filteredlistsymbol.some((fitem) => fitem.id != item.id)
            ) {
              this.count++;
              return true;
            }
            return false;
          },
        );
        filteredlist = [...filteredlistsymbol, ...filteredlistName];
      }

    let ids = filteredlist.map((item) => item.id).toString();

    this.props.fetchCoinListById({
      sourcetype: 'search',
      ids: ids,
      onSuccess: () => {
        this.setState({
          loading: false,
        });
      },
      onError: () => {
        this.setState({
          loading: false,
          error: true,
        });
      },
    });
  };

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
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              this.getSuggestionList();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>{'SEARCH'}</Text>
          </TouchableOpacity>

          <View style={styles.searchBg}>
            <TextInput
              style={{flex: 1, marginRight: 10}}
              placeholder={'Search Name/Symbol'}
              onChangeText={(text) => this.handleChange(text)}
              value={this.state.searchText}
            />

            {this.state.showCross ? (
              <TouchableOpacity
                style={styles.crossContainer}
                onPress={() => {
                  this.setState({searchText: '', showCross: false}, () => {
                    this.getSuggestionList();
                  });
                }}>
                <Image
                  style={styles.cross}
                  resizeMode="contain"
                  source={icons.close}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        {this.state.error ? (
          <NetworkFailure retry={this.getSuggestionList} />
        ) : this.state.loading ? (
          <View style={styles.emptyContainer}>
            <ScrollView style={{width: '100%'}}>
              <SkeletonItem />
            </ScrollView>
          </View>
        ) : this.props.CoinListReducer.searchListbyIds.length == 0 &&
          this.state.searchText != '' ? (
          <View style={styles.emptyContainerFailure}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.emptyIconBg}>
                <Image
                  style={styles.emptyIcon}
                  resizeMode="contain"
                  source={icons.warning}
                />
              </View>
              <Text style={styles.emptyText}>
                {
                  "Can't find matching coins with given keywork. Please try some other name or symbol"
                }
              </Text>
            </View>
          </View>
        ) : (
          <FlatList
            style={{marginBottom: 0}}
            data={this.props.CoinListReducer.searchListbyIds}
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
            // onEndReached={() => this.proceedNext()}
            onEndReachedThreshold={0.5}
            // ListFooterComponent={this.renderFooter()}
            extraData={this.props.AppBasicReducer.favorites}
          />
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
