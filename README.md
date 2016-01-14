# BLE Demo App
Discover &amp; Control Bluetooth Low Energy Devices

## Preamble

### What is this thing?
This is a [Cordova](https://cordova.apache.org/) project which builds a mobile application (tested on __iOS 9__, Android soon™) that allows the user to discover and write to nearby [Bluetooth low energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy) devices _en masse_. This project could serve as a starting point for individuals seeking to quickly begin developing an application to communicate with Bluetooth low energy devices.

### Why is this a thing?
Here at [Jewelbots](http://jewelbots.com/), we're developing BLE wearable devices; ones which we often find ourselves in need of a simple way to control. This application is particularly useful when demonstrating specific features of our devices in a setting where typical operation is not feasible (on stage, at trade shows, etc.). We've made it OSS because that's the right thing to do.

### How can I help?
If you find this project useful and run across any issues, please feel encouraged to [open an issue](https://github.com/Jewelbots/ble-demo-app/issues/new), or better yet — [submit a pull request](https://help.github.com/articles/using-pull-requests/) (if you can)! Feature requests that would enable this application to appeal to a broader audience are also welcome. We would also love to hear from you if you build something awesome!

## Requirements
### Operating System
Although you may develop and emulate the application in any browser, OS X is required to actually build the application for iOS. No such requirements exist for Android builds.
### System Tools
This project assumes that you will be building the application for both iOS and Android. Thus, you will need to install the build toolchains for both of these mobile environments.
#### OS X
The preferred way to install required system tools on OS X is to make use of [homebrew](http://brew.sh/). We will assume you have already installed homebrew:

* `brew install ant` — Install [Apache Ant](http://ant.apache.org/), a build tool for Java applications (Android).

If you don't already have [Node.js](https://nodejs.org/en/) installed, and don't have immediate plans to use it for any other projects, you may also install this via homebrew:

* `brew install node` — Install Node.js, a JavaScript runtime environment (used for building front-end assets).

## Installation
_Coming soon._
## Troubleshooting
_No troubleshooting information yet. Please submit a PR if you've solved an issue that you encounter with this project._
