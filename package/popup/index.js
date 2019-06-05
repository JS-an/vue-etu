import etuPopup from './src/popup'

const install = (Vue) => {
  const Component = Vue.extend(etuPopup)
  
  Vue.prototype.$etuPopup = (msg, cb) => {
    let data = {
      msg,
      cb
    }

    const instance = new Component({ data })

    const vm = instance.$mount()

    vm.show = true

    return vm
  }
}

export default install
