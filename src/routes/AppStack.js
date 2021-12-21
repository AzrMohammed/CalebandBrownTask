import React from 'react';
import {Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import icons from '../assets/icons';
import {colors} from '../common/StyleConstants';
import TabFooterItem from '../components/TabFooterItem';
import DetailsScreen from '../screens/Details';
import FeedsScreen from '../screens/Feeds';
import LandingScreen from '../screens/Landing';
import SearchScreen from '../screens/Search';
import TrendingScreen from '../screens/Trending';
import WishlistScreen from '../screens/Wishlist';
const {width, height} = Dimensions.get('window');

const FeedsStack = createStackNavigator(
  {
    FeedsScreen: {
      screen: FeedsScreen,

      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailsScreen: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'FeedsScreen',
  },
);

const WishlistStack = createStackNavigator(
  {
    WishlistScreen: {
      screen: WishlistScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailsScreen: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'WishlistScreen',
  },
);

const TrendingStack = createStackNavigator(
  {
    TrendingScreen: {
      screen: TrendingScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailsScreen: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'TrendingScreen',
  },
);
const SearchStack = createStackNavigator(
  {
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    DetailsScreen: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'SearchScreen',
  },
);

const tabBarOptions = {
  safeAreaInset: {bottom: 'always', top: 'always'},
  showLabel: false,
  labelPosition: 'below-icon',
  style: {
    height: 65,
  },
  tabStyle: {
    backgroundColor: colors.bgDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
};
const BottomTabNavigators = createBottomTabNavigator(
  {
    FeedsStack: {
      screen: FeedsStack,
      tabBarOptions: () => {
        return null;
      },

      navigationOptions: ({screenProps}) => ({
        gesturesEnabled: false,
        tabBarIcon: ({focused}) => (
          <TabFooterItem
            name={'Home'}
            icon={icons.ic_footer_home}
            focused={focused}
          />
        ),
        tabBarOptions: tabBarOptions,
      }),
    },
    SearchStack: {
      screen: SearchStack,
      navigationOptions: ({screenProps}) => ({
        gesturesEnabled: false,
        tabBarIcon: ({focused}) => (
          <TabFooterItem
            name={'Search'}
            icon={icons.ic_footer_search}
            focused={focused}
          />
        ),
        tabBarOptions: tabBarOptions,
      }),
    },
    TrendingStack: {
      screen: TrendingStack,
      navigationOptions: ({screenProps}) => ({
        gesturesEnabled: false,
        tabBarIcon: ({focused}) => (
          <TabFooterItem
            name={'Trending'}
            icon={icons.ic_footer_trending}
            focused={focused}
          />
        ),
        tabBarOptions: tabBarOptions,
      }),
    },
    WishlistStack: {
      screen: WishlistStack,
      navigationOptions: ({screenProps}) => ({
        gesturesEnabled: false,
        tabBarIcon: ({focused}) => (
          <TabFooterItem
            name={'Favorites'}
            icon={icons.ic_footer_favorite}
            focused={focused}
          />
        ),
        tabBarOptions: tabBarOptions,
      }),
    },
  },
  {
    initialRouteName: 'FeedsStack',
    navigationOptions: {},
  },
);

const AppStack = createStackNavigator(
  {
    HomeStack: {
      screen: BottomTabNavigators,
      navigationOptions: () => ({
        header: null,
      }),
    },
    LandingScreen: {
      screen: LandingScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'LandingScreen',
  },
);

const RouteContainer = createAppContainer(AppStack);

export default RouteContainer;
