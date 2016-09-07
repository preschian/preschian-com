import { observable, action } from 'mobx'

class Loading {
  @observable loading = true

  @action doneLoading() {
    this.loading = false
  }

  @action goLoading() {
    this.loading = true
  }
}

export default new Loading
