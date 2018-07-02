const Voz = {

  install(Vue, options) {

    Vue.prototype.$log = function (value) {
      if (options.visible == true) {
        console.log(value)
      } else if (options.visible == false) {
        console.log = function () {}
      } else {

      }
    }
  }

};

export default Voz;
