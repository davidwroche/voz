<p align="center" style="font-size:75px;color:#535399	">
Voz
</p>

# 

- __Lead Maintainer:__ [David Roche][Lead]


Use Voz with Vue.js to manage console.log statements throughout your entire application. You can enable or disable them from your main Vue.js file. 


- Post a [github issue][Issue],


## Install
To install via npm,

```
npm i voz
```

## Quick Example




```js
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted(){
    var example = 'Hello World'

    this.$log(example)
  }
}

```


```js

import Vue from 'vue'
import Voz from 'voz'

//Set visible to true to show console.log statements
//Set visible to false to disable console.log statements

Vue.use(Voz ,{ visible: true })

new Vue({
  el: '#app',
  render: h => h(App)
})

```

## Contributing

If you feel you can help in any way, be
it with bug reporting, documentation, examples, extra testing, or new features feel free
to [create an issue][Issue], or better yet, [submit a [Pull Request][Pull]. 




[Issue]: https://github.com/davidwroche/voz/issues
[Lead]: https://github.com/davidwroche
[Npm]: https://www.npmjs.com/package/voz
[Pull]: https://github.com/davidwroche/voz/pulls