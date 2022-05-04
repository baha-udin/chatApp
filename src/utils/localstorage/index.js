import AsyncStorage from '@react-native-async-storage/async-storage';

// save data to storage
// asyncStorage have key as name data, & value as value
export const storeData = async (key, value) => {
  try {
    // data value, must convert to JSON type
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
    console.warn('Error when save data', e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // because data type is string/JSON, to get show data to UI,
      // we must convert from JSON to object with JSON.parse
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
    console.warn('Error when save data', e);
  }
};
