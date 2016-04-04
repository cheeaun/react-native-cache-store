React Native Cache Store [![npm version](https://img.shields.io/npm/v/react-native-cache-store.svg?style=flat)](https://www.npmjs.com/package/react-native-cache-store)
===

A `localStorage`-like wrapper around React Native's `AsyncStorage` with cache expiration.

100% inspired by @pamelafox's [lscache](https://github.com/pamelafox/lscache). Currently being used by my project, [hackerweb-ios](https://github.com/cheeaun/hackerweb-ios).

**WARNING**: The test coverage is not very high 😅

Installation
---

```
npm i --save react-native-cache-store
```

API Reference
---

- `set(key, value, [time])` - Stores the value. Expires after specified number of **minutes**.

  1. `key` (string)
  2. `value` (Object | string)
  3. `time` (number: optional)

- `get(key)` - Retrieves specified value, if not expired.

  1. `key` (string)

- `remove(key)` - Removes a value.

  1. `key` (string)

- `isExpired(key)` - Checks if a value has expired.

  1. `key` (string)

- `flush()` - Removes all items.

- `flushExpired()` - Removes all **expired** items. This method runs every time this code is initalized.

Example Usage
---

``` js
import CacheStore from 'react-native-cache-store';

CacheStore.set('key', 'value', 10); // Expires in 10 minutes

CacheStore.get('key').then((value) => {
  // Do something with value
});

CacheStore.isExpired('key')
  .then(() => {/* true */ })
  .catch(() => {/* false */})
```

Contribute
---

Of course, contributions welcomed! 🙌

License
---

[MIT](http://cheeaun.mit-license.org/).
