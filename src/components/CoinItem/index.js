import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../assets/icons';
import {
  getNumberDispalywithMetrics,
  getPriceDisplay,
  limitDecimal,
} from '../../common/DisplayUtils';
import {colors} from '../../common/StyleConstants';
import styles from './styles';
import CoinItemStyles from './styles';

const CoinItem = (props) => {
  const {item, index} = props.item;

  const {isFromFavorites = false} = props;

  return (
    <View style={CoinItemStyles.container}>
      <TouchableOpacity
        style={{
          ...styles.favIcon,
          tintColor: props.isFavorite ? colors.favDefault : colors.favDefault,
        }}
        onPress={() => {
          props.addFavorites(item, !props.isFavorite);
        }}>
        <Image
          style={{
            right: 0,
            tintColor: props.isFavorite
              ? colors.favSelected
              : colors.favDefault,
            height: isFromFavorites ? 14 : 22,
            width: isFromFavorites ? 14 : 22,
          }}
          source={isFromFavorites ? icons.close : icons.heart}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Image
          style={{height: 40, width: 40}}
          source={{
            uri: item.image,
          }}
        />
        <View style={CoinItemStyles.containerDetails}>
          <Text style={CoinItemStyles.headerText}>
            {item.name}
            {item?.market_cap_rank ? ' #' + item.market_cap_rank : ''}
          </Text>
          <Text style={CoinItemStyles.subText}>{item.symbol}</Text>
        </View>
      </View>

      <View style={CoinItemStyles.containerDetailsSection}>
        <View style={CoinItemStyles.containerDetailsSectionItem}>
          <Text style={CoinItemStyles.sectionHeaderText}>
            {getPriceDisplay(item.current_price)}
          </Text>
          <Text style={CoinItemStyles.sectionSubText}>{'Price'}</Text>
        </View>
        <View style={CoinItemStyles.containerDetailsSectionItem}>
          <Text
            style={{
              ...CoinItemStyles.sectionHeaderText,
              color:
                item.price_change_percentage_24h > 0
                  ? colors.success
                  : colors.failure,
            }}>
            {limitDecimal(item.price_change_24h)}
            {' ('}
            {limitDecimal(Math.abs(item.price_change_percentage_24h))}
            {'%)'}
          </Text>
          <Text style={CoinItemStyles.sectionSubText}>{'Change(24hrs)'}</Text>
        </View>
        <View style={CoinItemStyles.containerDetailsSectionItem}>
          <Text style={CoinItemStyles.sectionHeaderText}>
            {getNumberDispalywithMetrics(item.total_volume)}
          </Text>
          <Text style={CoinItemStyles.sectionSubText}>{'Volume'}</Text>
        </View>
      </View>

      <View style={CoinItemStyles.containerDetailsSection}>
        <View style={CoinItemStyles.containerDetailsSectionItem}>
          <Text style={CoinItemStyles.sectionHeaderText}>
            {getNumberDispalywithMetrics(item.ath)}
          </Text>
          <Text style={CoinItemStyles.sectionSubText}>{'AllTImeHigh'}</Text>
        </View>
        <View style={CoinItemStyles.containerDetailsSectionItem}>
          <Text style={CoinItemStyles.sectionHeaderText}>
            {getNumberDispalywithMetrics(item.atl)}
          </Text>
          <Text style={CoinItemStyles.sectionSubText}>{'AllTimeLow'}</Text>
        </View>
        <View style={CoinItemStyles.containerDetailsSectionItem}>
          <Text style={CoinItemStyles.sectionHeaderText}>
            {getNumberDispalywithMetrics(item.market_cap)}
          </Text>
          <Text style={CoinItemStyles.sectionSubText}>{'Marketcap'}</Text>
        </View>
      </View>
    </View>
  );
};

export default CoinItem;
