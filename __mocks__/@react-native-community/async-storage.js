// Some code here is inspired by https://github.com/lelandrichardson/react-native-mock/

function wrap(value){
  return Promise.resolve(value);
};

let db = {};

const AsyncStorage = {
  getItem(key, callback){
    return wrap(db[key]);
  },

  setItem(key, value, callback){
    db[key] = value;
    return wrap(null);
  },

  removeItem(key, callback){
    delete db[key];
    return wrap(null);
  },

  mergeItem(key, value, callback){
    db[key] = Object.assign({}, db[key] || {}, value);
    return wrap(null);
  },

  clear(callback){
    db = {};
    return wrap(null);
  },

  getAllKeys(callback){
    return wrap(Object.keys(db));
  },

  multiGet(keys, callback){
    return wrap(keys.map(k => [k, db[k]]));
  },

  multiSet(keyValuePairs, callback){
    keyValuePairs.forEach(([key, value]) => {
      db[key] = value;
    });
    return wrap(null);
  },

  multiRemove(keys, callback){
    keys.forEach(key => delete db[key]);
    return wrap(null);
  },

  multiMerge(keyValuePairs, callback){
    keyValuePairs.forEach(([key, value]) => {
      db[key] = Object.asign({}, db[key] || {}, value);
    });
    return wrap(null);
  },
};

export default AsyncStorage;
