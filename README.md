## CorrectCode Front

코렉트 코드 프론트 서버입니당.

## 개발 스택

**기본환경**

- react
- typescript
-

**라우팅**

- react-router
-

**상태 관리**

- redux
- redux-saga

**스타일**

- 미정

## 상태관리

redux-saga를 이용해서 상태를 관리.

**액션**
액션은 일단 enum으로 했는데, const으로 여러개 쓰는 방식이 편하면 바꿔도 됨.

**saga**
`dispatch(action) -> saga -> service 호출 -> api 호출 -> store 반영`

`utils/redux` 에 있는 `createEntity`와 `utils/saga`에 있는 `fetchEntity` 를 이용하면 요 위 플로우를 쉽게 사용 가능함.

ex)

```ts
// redux
// actions는 saga,request,success,failure로 이루어진 enum 또는 객체
// 단, 객체면 as const를 붙여서 상수 typing이 되도록 합시다.
// service는 api와 saga 사이에서 데이터 조작할 수 있는 함수.
// 따로 필요없으면 바로 api 넣어줘도 됨.
const loginEntity = createEntity(loginActions, loginService);
/*
entity는
{
  action: { ...request,success,failure의 action creator},
  service: service
} 
형태를 가짐
*/

// saga
const fetchLogin = fetchEntity(loginEntity);

function* watchLogin() {
  // saga 액션을 따로 만들면 편함. service에 넣어줄 변수들을 saga에서 처리해주면 됨.
  const payload = yield take(loginActions.saga);
  yield call(fetchLogin, payload);
}
```

비동기로직은 이런식으로 관리해주고, 동기로직은 고냥 짜던대로 하면 될듯합니다.
`utils/redux`의 `createReducer` 는 쓰려면 쓰고, 안써도 무방.

## 서버
서버는 일단 간편하게 netlify 를 사용하고 있습니다.
`netlify.toml` 에 세팅을 할 수 있는데,
```
[[redirects]]
  from = "/api/*"
  to = "https://api.correctcode.dev/:splat"
  status = 200
  force = false
```
이 설정은 모든 `/api` 하위의 서브 라우트들을 우리 api 서버로 프록시 해주는 설정이고,

```
[[redirects]]
  from ="/*"
  to = "/index.html"
  status = 200
  force = false
```
이 설정은 일반적인 CSR 설정으로, 모든 라우트에 대해서 `index.html` 을 반환해주는 설정입니다.

서버는 계속 netlify 쓸지, 다른 클라우드 플랫폼 쓸지 나중에 결정해봅시다.

## 참고사항

- 커밋시 린트 훅 걸어놨음.
- 절대경로 이용합시다! 1depth 면 상대경로도 괜춘
