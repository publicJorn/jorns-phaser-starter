import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded
    this.add.text(100, 100, 'loading fonts...')

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })
  }

  update () {
    if (this.fontsReady) {
      setTimeout(() => this.scene.start('SplashScene'), 500)
    }
  }

  fontsLoaded = () => {
    this.fontsReady = true
  }
}
