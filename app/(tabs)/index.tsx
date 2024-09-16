import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor: 'blue', flex: 1}}>

      <View style={{
        backgroundColor: 'red',
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
        }}>
          <Text style={{
            fontSize: 30,
          }}>RÖD</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          flex: 0.2,
        }}>
          <View style={{
            backgroundColor: 'green',
            flex: 1,
          }}>
            <Text style={{
              fontSize: 30
            }}>GRÖN</Text>
          </View>

          <View style={{
            backgroundColor: 'yellow',
            flex: 1,
          }}>
          </View>
        </View>
      <View style={{flex: 0.1, flexDirection: 'row'}}>
      <View style={{backgroundColor: 'red', flex: 3}}></View>
      <View style={{backgroundColor: 'black', flex: 1}}></View>
      </View>

      <View style={{flex: 0.5}}></View>
      <View style={{flexDirection: 'row', backgroundColor: 'orange', flex: 0.1, justifyContent: 'flex-end'}}>
        <Text style={{fontSize: 30}}>ORANGE</Text>
      </View>

          
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
