'use strict';

import CacheStore from '../index';
jest.unmock('../index');

let cache = {};
jest.setMock('react-native', {
  AsyncStorage: {
    setItem: jest.genMockFunction().mockImplementation((key, value) => {
      return new Promise((resolve, reject) => {
        if(typeof key !== 'string' || typeof value !== 'string'){
          reject(new Error('key and value must be string'));
        }
        resolve(cache[key] = value);
      });
    }),
  }
});

describe('CacheStore', () => {
  it('calls into AsyncStorage.setItem with the correct params', () => {
    // I have no idea what I'm doing here
    console.log(CacheStore);
    const {AsyncStorage} = require('react-native');

    expect(CacheStore.set).toBeDefined();

    CacheStore.set('key', 'value');
    expect(AsyncStorage.setItem).toBeCalled();
  });
});
