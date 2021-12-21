import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import icons from '../../assets/icons';
import {fetchAllCoinsBasic} from '../../common/AppReducer/actions';
import AppLoader from '../../components/AppLoader';
import styles from './styles';

class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      showRetry: false,
      loading: false,
    }),
      this.proceedBasicFetch();
  }

  proceedBasicFetch() {
    this.props.fetchAllCoinsBasic({
      onSuccess: () => {
        this.proceedFetchSuccessFul();
      },
      onError: (message) => {
        setTimeout(() => {
          this.setState({showRetry: true, loading: false});
        }, 3000);
      },
    });
  }

  proceedFetchSuccessFul() {
    this.props.navigation.replace('HomeStack');
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={icons.logoTransparent}
        />
        <Text style={styles.title}>{'CALEB & BROWN'}</Text>
        <View style={styles.footerContainer}>
          {this.state.loading ? (
            <AppLoader size="large" />
          ) : this.state.showRetry ? (
            <View>
              <Text style={styles.errorText}>
                {'Please check your internet connection'}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    loading: true,
                  });
                  this.proceedBasicFetch();
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>{'RETRY'}</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    AppBasicReducer: state.AppBasicReducer,
  };
};

const mapDispatchToProps = {
  fetchAllCoinsBasic: fetchAllCoinsBasic,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingScreen);
