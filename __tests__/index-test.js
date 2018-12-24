'use strict';

import CacheStore from '../index';
jest.unmock('../index');

describe('CacheStore', () => {
  test('sets and gets value', () => {
    expect(CacheStore.set).toBeDefined();
    expect(CacheStore.get).toBeDefined();

    CacheStore.set('key', 'value');
    return CacheStore.get('key').then((value) => {
      expect(value).toBe('value');
    });
  });

  test('test remove', async () => {
    expect(CacheStore.remove).toBeDefined();
    await CacheStore.remove('key');
    CacheStore.get('key').catch((value) => {
      expect(value).toBeNull();
    });
  });

  test('test isExpired', async () => {
    expect(CacheStore.isExpired).toBeDefined();
    CacheStore.set('isExpired', 'expiredValue', 2).then(() => {
      CacheStore.isExpired('isExpired').catch(() => {
        CacheStore.get('isExpired').then((value) => {
          expect(value).toBe('expiredValue');
        });
      });
    });
  });

  test('test flush', async () => {
    await CacheStore.set('flushBefore', 'exists');
    expect(CacheStore.flush).toBeDefined();
    await CacheStore.flush();
    CacheStore.get('flushBefore').then((value) => {
      expect(value).toBeNull();
    });
  });

  test('test flushExpired', () => {
    expect(CacheStore.flushExpired).toBeDefined();
  });

});