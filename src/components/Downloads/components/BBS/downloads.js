export const version = 'v4.1.0';
export const downloads = [{
  platform: 'downloads.wallet.macos',
  icon: 'macos',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '',
      download: 'https://downloads.skycoin.net/bbs/skycoin_bbs_4.1_osx_amd64.zip',
      filetype: '.zip',
      filesize: '5.5mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.windows',
  icon: 'windows',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://downloads.skycoin.net/bbs/skycoin_bbs_4.1_windows_amd64.zip',
      filetype: '.zip',
      filesize: '5.5mb',
    }],
  }],
}, {
  platform: 'downloads.wallet.linux',
  icon: 'linux',
  builds: [{
    name: 'downloads.wallet.withElectron',
    architectures: [{
      name: '64bit',
      download: 'https://downloads.skycoin.net/bbs/skycoin_bbs_4.1_linux_amd64.zip',
      filetype: '.zip',
      filesize: '5.5mb',
    }],
  }],
}];
