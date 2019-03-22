# Framework7
> Framework7 - is a free and open source framework to develop mobile, 
> desktop or web apps with native look and feel. 
> It is also an indispensable prototyping tool to show working app prototype as soon as possible in case you need to.

> You can use any tools you love when working with Framework7. 
> It doesn’t force you to use anything except plain HTML, CSS and JavaScript. 
> Creating apps with Framework7 is easy as creating website

### Required
* node.js
* cordova / phonegap
* Android sdk
* Java sdk

### Demo
See [app-debug.apk](https://raw.githubusercontent.com/msyamf/framwork7/master/app-debug.apk)

### Installation

Install the dependencies.
```sh
# clone the repo
$ git clone https://github.com/msyamf/framwork7.git


# install app's dependencies
$ npm install
```

### Devlopment

```sh
# add platform android
$ cordova platform add android

# dev server via phonegap with hot reload at http://localhost:3000
$ phonegap serve

# dev server via phonegap with hot reload at http://localhost:8000
$ cordova serve

# dev via Android Mobile
$ cordova run android
```

### Build

```sh
# Build Android
$ cordova build android
```

### Generate Keystores
See [README.md](https://github.com/msyamf/framwork7/tree/master/keystore)

### Build release
```sh
$ cordova run android --release -- --keystore=keystore/key.keystore --storePassword=passxsoft --alias=testcordovakeystore --password=passxsoft
```
### verifikasi
```sh
$ jarsigner -verify -verbose -certs app-release.apk
```
