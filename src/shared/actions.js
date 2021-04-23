function emptyActions () {
  console.wran('current execute is empty')
}

class Action {
  constructor() {
    this.actions = {
      onGlobalStateChange: emptyActions,
      setGlobalState: emptyActions,
      offGlobalStateChange: emptyActions
    }
  }
  setActions(actions) {
    this.actions = actions
  }
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args)
  }
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args)
  }
  offGlobalStateChange() {
    return this.actions.offGlobalStateChange()
  }
}

const actions = new Action()

export default actions;