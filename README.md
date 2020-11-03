# Webpack Tutorial
 - 웹팩을 배워봅시다
 - 선지식 Npm 을위해 간단한 설명 작성

# npm 

## npm 이란
패키지관리도구

## npm 용어
 - dependencies
   - 어플리케이션 로직을 직접적으로 동작 시킬때 사용
   - 배포용
 - devDependencies
   - 개발을할때 도움을 주는 개발용 라이브러리
   - 배포되지 않음
   - 개발용

## 초기화
```
npm init
```
바로 초기화
```
npm init -y
```

## install
```
npm install gulp

// 축약
npm i gulp
```
 - node_modeuls/jquery 형식으로 파일이 저장됩니다.
 - node_modeuls/jquery/dist 에 우리가 사용 할 수 있는 소스가 들어있습니다.


## install Global
```
npm install gulp --global

// 축약
npm install gulp -g
```
```
// 글로벌로 설치하면 아래의 경로에 설치가 됨
/usr/local/lib/node_modules
```
## install --save-dev(-D)
```
npm install webpack --save-dev 

// 축약
npm i webpack -D
```
```
// 글로벌로 설치하면 아래의 경로에 설치가 됨
/usr/local/lib/node_modules
```

## uninstall
```
npm uninstall jquery
```


# Webpack
 - 모듈번들러
 - 모듈번들러란 조합해서 병합된 결과물을 만드는 도구

## 실행
 ### Webpack
 ```
"scripts": "webpack
 ```
 ```
"scripts": "webpack --mode=none"
 ```

 ### 다른곳에 저장
 ```
 "scripts": "webpack --mode=none --entry=./src/index.js --output=./public/main.js
 ```
 하지만 너무 길고 힘들다

## webpack config.js
```
아래와같이 root 폴더에 생성합니다.
webpack.config.js
```

```
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
  }
}
```

## source map
```
devtool: 'source-map'
```

## 웹팩의 4가지 주요 속성
- entry
- output
- loader
- plugin


### entry
  - 진입점
  - 자바스크립 파일 경로


### output
  - 결과물
  - option
    - filename
    - path
  ```
  filename: '[name].bundle.js'
  filename: '[id].bundle.js'

  filename: '[name].[hash].bundle.js'

  // 사용자가 새로고침하지않아도 알게 할 수 있는 것????
  filename: '[chunkhash].bundle.js'

  ```
### loader
  - 웹팩이 변환될때 중간에 스크립트파일이 아닌것들을 변환할 수있도록 도와주는 속성.

### plugin
  - 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성.
  - 결과물의 형태를 바꾸는 역할.

## mode
  - production
  - development
  - none


# webpack-dev-server
  - 빌드한 결과물이 파일 탐색기나 프로젝트 폴로에 보이지 않는다.
  - 결과물은 메모리에 저장됨.

  ```
  npm i webpack-dev-server -D
  ```


# 웹팩 무지정리 잘돼있는 사이트
 - https://jeonghwan-kim.github.io/series/2019/12/10/frontend-dev-env-webpack-basic.html