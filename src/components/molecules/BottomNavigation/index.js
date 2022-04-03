import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import TabBar from '../../atoms/TabBar';
import {resHeight, resWidth, Colors} from '../../../utils';

const BottomNavigation = ({state, descriptors, navigation}) => {
  return (
    <SafeAreaView style={styles.wrapBottomNavigation}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        // Ketika index aktif, berarti isFocused == true
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBar
            key={index}
            title={label}
            active={isFocused} // isFocused digunakan sbg logic u/ mengetahui state mana yg aktif, ketika state active, maka ditangkap oleh isFocused, kemudian dikirimkan ke props active untuk memunculkan Icon mana yg ditampilkan, dan title mana yang ditampilkan
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  wrapBottomNavigation: {
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: resHeight(8),
    alignItems: 'center',
    paddingHorizontal: resWidth(20),
  },
});
