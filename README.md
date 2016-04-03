React Native Cache Store
===

A `localStorage`-like wrapper around React Native's `AsyncStorage` with cache expiration.

100% inspired by @pamelafox's [lscache](https://github.com/pamelafox/lscache). Currently being used by my project, [hackerweb-ios](https://github.com/cheeaun/hackerweb-ios).

**WARNING**: The test coverage is not very high 😅

Installation
---

```
npm i react-native-cache-store
```

API Reference
---

`set` - Stores the value. Expires after specified number of **minutes**.

1. `key` (string)
2. `value` (Object | string)
3. `time` (number: optional)

---

`get` - Retrieves specified value, if not expired.

1. `key` (string)

---

`remove` - Removes a value.

1. `key` (string)

---

`isExpired` - Checks if a value has expired.

1. `key` (string)

---

`flush` - Removes all items.

---

`flushExpired` - Removes all **expired** items.

Simple Example Usage
---

``` js
import CacheStore from 'react-native-cache-store';

CacheStore.set('key', 'value', 10); // Expires in 10 minutes

CacheStore.get('key');
```

License
---

[MIT](http://cheeaun.mit-license.org/).
