import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';

const SkeletonItem = (props) => {
  return (
    <View style={{width: '100%', flex: 1}}>
      <SkeletonPlaceholder>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, height: 60, borderRadius: 50}} />
            <View style={{marginLeft: 20}}>
              <View style={{width: 220, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
              />
            </View>
            <View></View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              flex: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'space-evenly',
            }}>
            <View style={{width: 80, height: 50, borderRadius: 4}} />
            <View style={{width: 80, height: 50, borderRadius: 4}} />
            <View style={{width: 80, height: 50, borderRadius: 4}} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, height: 60, borderRadius: 50}} />
            <View style={{marginLeft: 20}}>
              <View style={{width: 220, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
              />
            </View>
            <View></View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              flex: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'space-evenly',
            }}>
            <View style={{width: 80, height: 50, borderRadius: 4}} />
            <View style={{width: 80, height: 50, borderRadius: 4}} />
            <View style={{width: 80, height: 50, borderRadius: 4}} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, height: 60, borderRadius: 50}} />
            <View style={{marginLeft: 20}}>
              <View style={{width: 220, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
              />
            </View>
            <View></View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              flex: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'space-evenly',
            }}>
            <View style={{width: 80, height: 50, borderRadius: 4}} />
            <View style={{width: 80, height: 50, borderRadius: 4}} />
            <View style={{width: 80, height: 50, borderRadius: 4}} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, height: 60, borderRadius: 50}} />
            <View style={{marginLeft: 20}}>
              <View style={{width: 220, height: 20, borderRadius: 4}} />
              <View
                style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
              />
            </View>
            <View></View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              flex: 1,
              borderColor: '#DEDEDE',
              justifyContent: 'space-evenly',
            }}>
            <View style={{width: 80, height: 50, borderRadius: 4}} />
            <View style={{width: 80, height: 50, borderRadius: 4}} />
            <View style={{width: 80, height: 50, borderRadius: 4}} />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default SkeletonItem;
