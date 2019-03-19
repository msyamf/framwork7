# fremwork7
> Framework7 - is a free and open source framework to develop mobile, 
> desktop or web apps with native look and feel. 
> It is also an indispensable prototyping tool to show working app prototype as soon as possible in case you need to.

### Required
* node.js
* cordova / phonegap
* Android sdk
* Java sdk

### Installation

Install the dependencies and devDependencies and start the server.
```sh
# clone the repo
$ git clone https://github.com/msyamf/fremwork7.git


# install app's dependencies
$ npm install
```

### Devlopment

```sh
# dev server via phonegap with hot reload at http://localhost:3000
$ phonegap serve

# dev server via phonegap with hot reload at http://localhost:8000
$ cordova serve

# dev server via Android Mobile
$ cordova run android
```

### Build

```sh
# Build Android
$ cordova build android
```
