'use strict';

import CacheStore from '../index';
jest.unmock('../index');

describe('CacheStore', () => {
  pit('sets and gets value', () => {
    expect(CacheStore.set).toBeDefined();
    expect(CacheStore.get).toBeDefined();

    CacheStore.set('key', 'value');
    return CacheStore.get('key').then((value) => {
      expect(value).toBe('value');
    });
  });
});
