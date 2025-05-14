## 1. 기초 상식

- HTML5 : 웹브라우저에 데이터를 보여주는 형식을 지정한 문법구조
- CSS3 : 데이터를 잘보여주기 위해서 꾸며주는 용도의 문법
- js

```
1. css 제어 : 레이아웃 변경 하도록 지시
2. html 제어 : 데이터의 결과를 CRUD 하도록 지시
3. Server, DB, 데스크탑 Application 을 를 제어 : Node.js 로 가능함.
```

## 2. js의 종류는 2가지

### 2.1. 웹브라우저용 js(web API)

- web API 는 웹브라우저에 미리 기능이 만들어져 있는 js 기능
- 주로 직접 코딩하는 것이 아니고 미리 만들어진 기능을 사용하는 것을 학습하면 됨.

### 2.2. 데이터 관리 js(ES6)

- 이전에 js는 웹브라우저 마다 모두 달랐다.
- 이에 대한 불편함을 해소하기 위해서 js의 문법을 통일하였다.
- 기준이 ECMAScript 라고 하며 ES6가 가장 기준이 된다.

## 3. 실습

- 웹브라우저에서 js 실행하기

### 3.1. 웹브라우저에서 js 실행하기

- `F12` 실행 > `Console 탭`을 선택 : console 탭은 js의 `결과, 오류`를 보는 곳

```js
console.log("안녕");
```

```js
console.clear();
```

```js
alert("안녕");
```

- 1 줄 이상 작성하는 경우는 `shift + Enter` 키를 입력하여야 함.

### 3.2. html에서 js 실행하기

- index.html 파일을 생성합니다.

## 4. `JS 작성 위치` 고민하기

- `<script></script>` 태그를 지원합니다.

### 4.1. 3번자리 즉 html의 끝이 좋다.

- 일반적으로 css 와 html 을 제어하는 것이 js의 목적이다.
- `웹브라우저가 css 와 html 을 모두 읽고 난 후의 자리`

### 4.2. 1번자리 즉 head 자리는 `기능`의 정의

- 내가 즉, 개발자가 만든 많은 `기능`들을 코딩하기 좋은 자리
- 다른 개발자가 만든 많은 `기능들`을 불러와서 사용하기 좋은 자리

## 5. js 도 외부에 파일로 만들어서 관리하자.

- js 폴더 생성
- js 폴더에 `lib.js` 파일 생성

# JavaScript 문법

## 1. 변수(Variables)

- 웹브라우저에 `값 보관시 사용할 공간`

### 1.1. 필요로 한 항목들을 파악하기

- 나는 `사용자 정보`를 입력 받아서 `DB에 보관`하고 싶다.
- 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶다.

#### 1.1.1. 단계 1(필요로 한 기능에 대해서 서술 - 피그마, UI 다이어그램)

- 나는 `사용자 정보`를 입력 받아서 `DB에 보관`하고 싶다.
- 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶다.

#### 1.1.2 단계 2 (어떤 정보를 보관할지 결정한다. - 요구사항명세서)

```
이름, 주민번호, 전화번호, 주소(우편번호, 상세주소), 이메일, 아이디, 비밀번호, 동의체크
```

#### 1.1.3. 단계 3 (각각의 정보를 보관할 공간을 마련)

```
이름 : 글자 20자 제한
주민번호 : 글자 13자 제한
전화번호 : 글자 11자 제한
우편번호 : 글자 5자 제한
상세주소 : 글자 50자 제한
이메일 : 글자 20자 제한
아이디 : 글자 16자 제한
비밀번호 : 글자 16자 제한
동의체크 : 참/거짓 숫자 1자 제한
```

### 1.2. 각 항목에 대해서 웹브라우저에서 임시로 보관하는 작업

### 1.2.1. 단계 1

- 웹브라우저 메모리 `빈 공간` 요청

```js
var
let
const
```

- 자바스크립트에서 변수 선언 시 브라우저는 메모리에 공간을 확보합니다.
- 선언 방식에 따라 메모리 확보 방식과 시점이 다릅니다.

- `var` 라고 작성을 하면 : `hoisting`으로 오류가 발생 할 소지가 높음.

### 1.2.2. `var` 라고 작성 하면 `변수`로 인정

- `hoisting`으로 오류가 발생할 소지가 높음
- 미리 만들지 않고 사용해도 되는 문제
- 이건 옛날 JS 버전에서만 씁니다.

```
무조건 공간에다가 undfined 라는 값을 넣어버린다.
호이스팅의 대상이 된다.
```

#### 1.2.3. `let` 라고 작성 하면 `변수`로 인정

- `hoisting`의 문제를 사전에 차단한다.
- `let` 으로 작성시 미리 사용하면 오류로 알려준다.
- 수시로 내용이 바뀐다.

#### 1.2.4. `const` 라고 작성 하면 `상수`로 인정

- `hoisting`의 문제를 사전에 차단한다.
- `const` 으로 작성시 미리 사용하면 오류로 알려준다.
- 절대로 내용이 변하지 않는다.

### 1.2.5. 실제로 var, let, const 중에 선택합니다.

- 값이 사용자 마다 변할 것이다. 그래서 `let` 선택했어요.

```js
let 이름 : 글자 20자 제한
let 주민번호 : 글자 13자 제한
let 전화번호 : 글자 11자 제한
let 우편번호 : 글자 5자 제한
let 상세주소 : 글자 50자 제한
let 이메일 : 글자 20자 제한
let 아이디 : 글자 16자 제한
let 비밀번호 : 글자 16자 제한
let 동의체크 : 참/거짓 숫자 1자 제한
```

### 1.3. 메모리 공간에 이름 짓는 법(명명법)

- 정말 중요합니다. 이름을 잘못 지으면 다른 개발자에게 혼란을 줌.
- 개발자들은 코딩 컨벤션이 있습니다.
- 변수의 철자는 `명사+명사` `영어`로 하셔야 합니다.
- 숫자 및 공백 및 특수기호는 절대 안돼요.
- 허용되는 특수기호는 오로지 `_` , `$` 는 허용.

#### 1.3.1. Camel Case

- 반드시 소문자로 시작하고 새로운 명사는 대문자로 시작함.
- 많은 프로그래머들이 변수하고 생각합니다.

#### 1.3.2. Snake Case

- 변수를 모두 소문자로 작성하고 `_`로 연결한 이름

#### 1.3.3. Kebab Case

- 이름를 소문자로 작성하고 `-` 로 연결한 것.
- 파일 또는 css 파일에서는 사용합니다.
- 예) Next.js 의 파일명은 kebab 이 표준입니다.

#### 1.3.4. Pascal Case

- 이름을 대문자로 작성하고 새로운 단어는 대문자로 시작
- 혹시 객체 변수 아닌가?
- 혹시 클래스 정의 아닌가?

#### 1.3.5. 대문자

- 상수명으로 판단함.

#### 1.3.6. 적용하기

```js
let userName : 글자 20자 제한
let userNum : 글자 13자 제한
let userPhone : 글자 11자 제한
let userPost : 글자 5자 제한
let userAddress : 글자 50자 제한
let userEmail : 글자 20자 제한
let userId : 글자 16자 제한
let userPassword : 글자 16자 제한
let userAgree : 참/거짓 숫자 1자 제한
```

### 1.4. 기본 데이터 종류 (원시데이터 : Primitive Data Type)

- number : 숫자
- string : 글자 (문자, 문자열로 구분)
- boolean: true/false (나중에 falshy 한 것 알아야 함)
- undfined: 값이 없어요. (변수 초기값으로 자동 셋팅)
- null: 개발자가 값이 없다고 지정함. (값이 비었다로 셋팅하라)
- symbol: 절대로 겹치지 않는 변수이다.

```js
let userName = ""; // 20자 제한
let userNum = ""; // 13자 제한
let userPhone = ""; // 11자 제한
let userPost = ""; // 5자 제한
let userAddress = ""; // 50자 제한
let userEmail = ""; // 20자 제한
let userId = ""; // 16자 제한
let userPassword = ""; // 16자 제한
let userAgree = false; // 숫자 1자 제한
```

#### var, let, const 정확히 제약사항 파악하기

- 웹브라우저에 저장할 내용, 즉 변수가 있다면 아래를 고민하자.

#### 1.5.1. `1순위는 const` 입니다.

- 변수를 만든다면 나는 var, let, const 중에 무엇을 선택할까?
- const 는 변하지 않을 것이다라는 작성법.
- 필요하면 즉, 값이 코딩하다 보니 바뀌어야 하는 경우에 let 으로 변경한다.
- const 의 특징
  - 만들기 전에 사용할 수 없다. (호이스팅 문제 해결됨!)

```js
console.log(userName); // Error
const userName = "홍길동";
```

    - 동일한 이름으로 변수를 또 생성할 수 없다. (변수생성 중복 방지)

```js
const userAge = 10;
const userAge = 40; // Error
```

    - 값을 변경할 수 없다.

```js
const userCity = "대구";
userCity = "서울"; // Error
```

#### 1.5.2. `2순위는 let` 입니다.

- 만들기 전에 사용할 수 없다. (호이스팅 오류문제 해결! : const 와 동일)

```js
console.log(userName);
let userName = "홍길동";
```

- 동일한 이름으로 중복 생성할 수 없다. (중복 에러 생성 : const 와 동일)

```js
let userAge = 20;
let userAge = 30; // Error
```

- 값을 나중에 변경할 수 있다. (const 와의 유일한 차이점)

```js
let userCity = "대구";
userCity = "서울"; // 괜찮다.
```

#### 1.5.3. `var는 사용하지 않는다`

- 호이스팅 통과되어 버림. (추후 오류의 원인)
- 동일한 이름으로도 중복 생성가능. (추후 오류의 원인)
- 값도 변경이 가능하다.
- 기존 코드에서 var 를 사용한 케이스가 있으면 그냥 유지한다.

### 1.6 참조형 데이터 종류(Reference Data Type)

- 만약 Interpark 사이트의 Banner 영역의 데이터를 js 에서 관리하려고 한다.
- 배너는 `링크 주소, 이미지주소, 고유한 ID` 가 있다.
- 하나의 배너는 변수 3개씩 가지고 있다.
- 총 5개의 배너가 있다.

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = "1";
// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = "2";
// 셋 번째 배너
const bannerUrl_3 = "https://~";
const bannerImg_3 = "https://~";
const bannerId_3 = "3";
// 넷 번째 배너
const bannerUrl_4 = "https://~";
const bannerImg_4 = "https://~";
const bannerId_4 = "4";
// 닷 번째 배너
const bannerUrl_5 = "https://~";
const bannerImg_5 = "https://~";
const bannerId_5 = "5";
```

#### 1.6.1. 관련 있는 기본형 데이터들을 `묶어서 하나로` 만들기

```js
const 객체명 = {}; // 1단계

// 2단계
const 객체명 = {
  이름(key Name 키명, Property 속성명): 값(key Value, Value), // , 로 연결
  이름: 값,
  이름: 값,
};
```

```js
// 첫 번째 배너
const bannerUrl_1 = "https://~";
const bannerImg_1 = "https://~";
const bannerId_1 = "1";

const banner_1 = {
  url: "https://~",
  img: "https://~",
  id: "1",
};

// 두 번째 배너
const bannerUrl_2 = "https://~";
const bannerImg_2 = "https://~";
const bannerId_2 = "2";

const banner_2 = {
  url: "https://~",
  img: "https://~",
  id: "2",
};
```

- 객체 변수 정보에 담겨진 속성 즉, 키명을 통한 값 사용(호출)

```js
객체명.키명;
banner_1.url;

["객체명"].키명;
["banner_1"].url;
```

#### 1.6.2. 배열

- 하나의 이름으로 여러개의 데이터를 묶어서 관리

```js
const userArray = [1, 2, 3, "안녕", false, null, undefined];
const userId = ["1", "2", "3"];
```

- userArray는 다양한 타입의 값(숫자, 문자열, 불린, null, undefined)을 담고 있는 배열
- userId는 문자열 "1", "2", "3"을 담고 있는 배열

- 배열의 요소에 값 사용(호출)

```js
배열명[인덱스번호];
banner[0];
banner[1];
```

- const bannerId = []; // 배열 // 리스트 (순서 있는 데이터)
- const bannerId = {}; // 객체 // key-value 형태 데이터 저장
- const banner = [{...}] // 배열+객체 // 객체 여러 개를 리스트로 관리

### 1.7 변수 종합 예제

- 인터파크 티켓 랭킹 작업

```js
//섹션의 타이틀
const sectionTitle = "티켓 랭킹";
console.log(sectionTitle);

//섹션의 설명글
const sectionDesc = "~~~";
console.log(sectionDesc);

// 섹션의 카테고리
const sectionCategory = ["뮤지컬", "콘서트", "스포츠"];
sectionCategory[0];
sectionCategory[1];
sectionCategory[2];

// 티켓의 타이틀 정보
const ticketTitleArr = [
  "팬텀 10주년 기념 공연",
  "뮤지컬 <메디슨 카운티의 다리>",
  "뮤지컬 <라이카>",
];
console.log(ticketTitleArr[0]);
console.log(ticketTitleArr[1]);
console.log(ticketTitleArr[2]);

// 티켓의 이미지 경로
const ticketImgArr = ["https://a.jpg", "https://b.jpg", "https://c.jpg"];

// 티켓의 링크 경로
const ticketImgArr = ["https://a.jpg", "https://b.jpg", "https://c.jpg"];

// 티켓의 순위
const ticketImgArr = [1, 2, 3];

// 티켓의 공연장소
const ticketPlaceArr = ["대구", "서울", "제주"];

// 티켓의 공연일시
const ticketDayArr = ["05/07", "05/09", "05/04"];

// 위의 사항을 효율적으로 관리하기 위한 작업
const ticket_1 = {
  title: "팬텀 10주년 기념 공연",
  img: "https://a.jpg",
  url: "https://a.html",
  rank: 1,
  place: "대구",
  day: "05/07",
};
console.log(ticket_1);
console.log(ticket_1.title);
console.log(ticket_1.img);
console.log(ticket_1.url);
console.log(ticket_1.rank);
console.log(ticket_1.place);
console.log(ticket_1.day);

const ticket_2 = {
  title: "뮤지컬 <메디슨 카운티의 다리>",
  img: "https://b.jpg",
  url: "https://b.html",
  rank: 2,
  place: "서울",
  day: "05/09",
};
console.log(ticket_2);
console.log(ticket_1.["title"]);
console.log(ticket_1.["img"]);
console.log(ticket_1.["url"]);
console.log(ticket_1.["rank"]);
console.log(ticket_1.["place"]);
console.log(ticket_1.["day"]);

const ticket_3 = {
  title: "뮤지컬 <라이카>",
  img: "https://c.jpg",
  url: "https://c.html",
  rank: 3,
  place: "제주",
  day: "05/04",
};

const ticketInfoArr = [ticket_1, ticket_2, ticket_3];
```

```js
// 보통 아래의 형태로 데이터가 들어오는 것을 JavaScript Object Notation 즉, JSON 이라고 합니다.
const ticket_1 = {
  title: "팬텀 10주년 기념 공연",
  img: "https://a.jpg",
  url: "https://a.html",
  rank: 1,
  place: "대구",
  day: "05/07",
};
const ticket_2 = {
  title: "뮤지컬 <메디슨 카운티의 다리>",
  img: "https://b.jpg",
  url: "https://b.html",
  rank: 2,
  place: "서울",
  day: "05/09",
};
const ticket_3 = {
  title: "뮤지컬 <라이카>",
  img: "https://c.jpg",
  url: "https://c.html",
  rank: 3,
  place: "제주",
  day: "05/04",
};
```

```js
ticketInfoJosonArr[0].title;
ticketInfoJosonArr[1].title;
ticketInfoJosonArr[2].title;
```

## 2. 연산자(Operator)

- 연산을 해서 결과값을 만드는 `기호`
- 연산자에 의한 새로운 `결과값이 나오는 것을 연산식`

### 2.1. 사칙연산(`+ - * /`)

```js
const numA = 0;
const numB = 1;
const result = numA + numB;
```

```js
const numA = "안녕";
const numB = "hello";
const result = strA + strB;
```

````js
const a = 1; // number
const b = "1"; // string
const result = a + b; // number + string ==> string

- `-연산자`

```js
const numA = 100;
const numB = 10;
const result = numA - numB;
````

```js
const numA = "100";
const numB = 10;
const result = numA - numB;
```

⚠️ 참고: + 연산자는 문자열 연결이 우선이지만, -, \*, / 등의 산술 연산자는 문자열을 숫자로 변환하려고 시도합니다.

### 2.2. 나머지 연산 (`%`)

- 총 게시글 52개
- 한 페이지당 5개 목록
- 몇 페이지가 필요한가?
- 마지막 페이지에서 보여주어야 하는 게시글 수?

```js
const total = 52;
const count = 5;
const totalpage = total / count; // 10.5
const totalPageNumber = Math.ceil(totalPage); // 11
const lastCount = total % count; // 2
```

### 2.4. 증감연산자 ( ++ -- )

- 개발자는 타이핑 수를 줄이려고 노력합니다.

```js
let num = 5;
num = num + 1;
num += 1;
num--; // 6
```

num++; // 계산 후에 증가
num--; // 계산 후에 증감
++num;
--num;

### 2.5. 논리연산자

- `falsy` 한 값의 종류 (js 에서 false 라고 판단하는 값)

```js
"";
0;
undefinde;
null;
NaN;
false;
```

` 최종 결과가 참/거짓 인지 결과를 변수에 저장

#### 2.5.1. OR 연산자

- 2개 중 1개만 true 이면 true, 나머지 false

```js
let result = true || true; // true
result = false || false; // false
result = false || true; // true
result = "" || true; // true
```

```js
let userPass; // 값이 없거나 undefined일 때
let result = userPass || "비밀번호 넣으세요.";
```

### 2.5.2. AND 연산자

- 둘 다 true 면 true, 아니면 false
- 변수에 결과값은 true, flase 가 담겨진다.

```js
let result = true && true;
result = false && true;
```

### 2.5.3. Not 연산자 (반대)

```js
let result = !true;
result = !false;
```

### 2.5.4. 실습 예제

```js
let nickName = "";
let displayName = nickName || "Guest";
console.log(displayName); // Guest
```

```js
let title = null;
let result = title || "제목 없음";
console.log(result); // 제목 없음
```

```js
let totalMoney = 0;
let result = totalMoney || "장바구니가 비었습니다.";
console.Log(result);
```

```js
let isLogin = true;
let result = isLogin && "환영합니다.";
console.log(result);
```

```js
let isAdmin = false;
let result = isAdmin && "관리자 메뉴 표시";
console.log(result);
```

```js
let config = {};
config.theme = config.theme || "light";
console.log(config);
```

```js
let options = {
  lang: null,
  fontSize: 0,
};
let lang = options.lang || "ko";
let fontSize = options.fontSize || 20;
```

### 2.6. 비교연산자

```js
let result = "1" == 1; // true  (값은 같음, 타입은 무시)
let result = "1" === 1; // false (타입이 다름)
```

### 🔍 차이점 요약

// == 느슨한 동등 : 값만 비교, 필요하면 형 변환
// === 엄격한 일치 : 값과 타입 모두 같아야 true

```js
let resultD = 1 < 2; // true
let resultE = 1 <= 2; // true
let resultA = 1 !== 2; // true
```

### 2.7. 병합연산자

- 일반적으로 기본값 셋팅에서 활용
- falsy 가 아니라 `null, undefined` 일 때만 값을 비교할 경우

```js
let userName = null;
let displayName = userName ?? "Guest";
```

- `??` 연산자는 null 과 undefined 만 비교한다.
- 나머지는 '||' 과 같다.

```js
let formInput = {
  name: "",
  email: null,
  phone: undefined,
};

const name = formInput.name ?? "이름 없음";
const email = formInput.email ?? "이메일 없음";
const phone = formInput.phone ?? "전화 없음";
```

### 2.8. 옵셔널체이닝

- 대상은 객체의 존재 여부에 따라 코드 진행.
- `{ 속성:값, }`

```js
const user = {
  profile: { name: "홍길동" },
};
const age = user.profile?.age ?? "정보가 없어서 나이정보를 몰라요";
```

- `?`
  객체나 배열에서 **null 또는 undefied**일 경우,
  오류를 발생시키지 않고 undefied를 반환한느 연산자.

- `??`
  **null 또는 undefined**인 값에 대해서만,
  기본값을 제공하는 연산자 **다른 falsy 값(예: false, 0, NaN, "")**에는 기본값을 제공하지 않음.

### 2.9. 3항 연산자

- 연산자가 3개라서 3항 연산자라고 합니다 / 조건에 따라 두 가지 값 중 하나를 선택하는 간단한 조건문
- `결과 = 조건식 ? 참일때 결과 : 거짓일때 결과`

```js
const userRole = "ADMIN";
// const url = 조건 ? 참 : 거짓;
const url = userRole === "ADMIN" ? "admin.html" : "guest.html"; // admin.html
```

```js
const user = {
  islogin: true,
  name: "아이유",
};
const result = user.islogin
  ? `${user.name || "사용자"}님 반가워요.`
  : "로그인 해주세요.";
```

## 3. 조건문(Condition)

### 3.1. if문

- `참/거짓`을 판단하여 코드 분기 실행함.

```js
if(조건1) {
  조건1이 참이면 실행;
} else if(조건2){
  조건2이 참이면 실행;
  } else if(조건3){
  조건3이 참이면 실행;
  } else{
  모든 조건에 거짓이면 실행;
}
```

- 예제) 로그인이 된 경우에 메세지 출력하기

````js
const islogin = true;
if (isLogin === true) {
  console.log("로그인하셨네요. 반갑습니다.");
}

// 아래처럼 하시면 코드 가독성 떨어짐.
```

if (isLogin) console.log("로그인하셨네요. 반갑습니다.");
- 예제) 로그인 된경우의 메시지와 로그인 안된 경우의 메시지 출력하기.

```js
const islogin = true;
if(islogin) {
  console.log("어서오세요")
}else {
  console.log("로그인 하셔야 합니다.")
}
````

- 예제) 나이에 따라서 다른 메시지 출력하기 (조건이 2개이상인 경우)

```js
const age = 200;
if (age >= 30) {
  console.og("20대시네요.");
} else if (age >= 29) {
  console.log("30대시네요.");
} else {
  console.log("미성년 이시네요.");
}
```

- 예제) 사용자가 입력한 항목이 값이 `없을 경우` 메시지 보내기 (필수 입력 사항)

```js
const name = "홍길동";
const pass = "1234";
const useInfoCheck = false; // 사용자 정보 활용 동의
const useEmailCheck = false; // 이메일 수신 동의
if (name.trim() === "" || !name) {
  alert("이름을 입력하세요.");
  return;
}
if (!useInfoCheck) {
  alert("사용자 정보 동의를 체크해주세요.");
  return;
}
if (!useEmailCheck) {
  alert("이메일 수신 동의를 체크해주세요.");
  return;
}
console.log("저희 서비스를 자유롭게 활용하세요.");
```

### 3.2. switch문

- `여러 개의 값` 중 하나의 `값`이 같은지 판단 후 실행 (값을 비교)

```js
switch (값) {
  case 비교값1:
    // 실행 코드
    break;
  case 비교값2:
    // 실행 코드
    break;
  case 비교값3:
    // 실행 코드
    break;
  default:
    // 기본 실행 코드
    break;
}
```

```js
const layer = 5;
switch (layer) {
  case 1:
    console.log("1층 내리세요.");
    break;

  case 2:
    console.log("2층 내리세요.");
    break;

  case 3:
    console.log("3층 내리세요.");
    break;

  case 4:
    console.log("4층 내리세요.");
    break;

  case 5:
    console.log("5층 내리세요.");
    break;
}
```

- if와 switch 종합예제

```js
const userRole = "ADMIN";
if (userRole === "MEMBER") {
  console.log("회원");
} else if (userRole === "ADMIN") {
  console.log("관리자");
} else {
  console.log("비회원");
}
```

```js
const userRole = "ADMIN";

switch (true) {
  case userRole === "ADMIN":
    console.log("관리자");
    break;

  case userRole !== "ADMIN":
    console.log("비회원");
    break;

  default:
    console.log("다시 써주세요.");
}
```

## 4. 반복문(Loop)

- 동일한 실행을 반복하는 문법.

### 4.1. for 구문

- 주어진 횟수만큼 반복 실행 (`개발자가 반복횟수를 아는 경우`)

```js
for(초기값은 단 한번만 실행; 조건식의 결과가 true/false; 증감식은 조건식을 false 로 만들기) {
  할일 코드 작성
}
```

```js
const total = 10; // 총 반복횟수

for (let i = 0; i < total; i++) {
  console.log(`현재 ${i} 입니다`);
}
```

- 예제) 총 합계 값 알아내기

```js
// 장바구니 담긴 제품 가격 모음.
const bucketsArr = [1000, 500, 700, 400];
// 반복횟수
const total = bucketsArr.length;
// 반복문 없다면
let totalPrice = buckestsArr[0] + bucketsArr[1] + bucketsArr[2] + bucketsArr[3];
// 반복문을 활용한다면
let totalPriceFor = 0;
for (let i = 0; 1 < 4; i++) {
  totalPriceFor = TotalPriceFor + bucketsArr[i];
  // totalPriceFor += bucketsArr[i];
}
```

- 예제) 제품의 이름과 가격 및 재고를 html 태그로 출력하는 예제
- (가정)백엔드에서 제품의 목록은 json 으로 주어진다.

```js
const goodData = [
  { id: 542, name: "사과", price: 1000, stock: 10 },
  { id: 5557, name: "딸기", price: 200, stock: 5 },
  { id: 2147, name: "키위", price: 5000, stock: 5000 },
];

for (let i = 0, i < total; i++){
// 제품 1개를 뽑아서 보관한다.
cost good = goodData[i];

// html 만들기
const tag= `<div id="${good.id}">
<p>제품명 : ${good.name}</p>
<p>제품가격 : ${good.price}</p>
<p>재고수량 : ${good.stock}</p>
</div>`;
 // 결과 출력
  console.log(tag);
}
```

- 예제) 구구단
- 가까운 for 문에서 `break`는 반복문 빠져나오고 종료됨.
- 가까운 for 문에서 `continue`는 반복문 실행 건너띄고 계속 실행.

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  console.log(i + "단");
  for (let j = 1; j <= total; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  if (i % 3 === 0) {
    // 건너띄기
    continue;
  }

  if (i === 6) {
    //종료하기
    break;
  }
  console.log(i);
}
```

```js
const total = 9;
for (let i = 1; i <= total; i++) {
  if (i % 3 === 0) {
    // 3의 배수인 구구단은 건너뜁니다.
    continue;
  }

  if (i === 6) {
    // 6단 구구단은 출력하지 않고 종료합니다.
    break;
  }

  console.log(`${i}단`);
  for (let j = 1; j <= total; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

### 4.2. for in 구문

- for 문으로 모두 가능하다.
- for 를 `객체를 대상`으로 편리하게 사용하도록 지원하는 문법.

### 4.3. for of 구문

- for 문으로 모두 가능하다.
- for 를 `배열, 문자열등을 대상`으로
- for 를 `배열, 문자열 등을 대상`으로 편리하게 사용하도록 지원하는 문법
- `iterator` 즉, `순서가 있는 데이터형`에서 사용

```js
const citiesArr = ["대구", "부산", "서울"];
for (let city of citiesArr) {
  console.log(city);
}

const words = "안녕하세요. 반가워요.";
for (let i of words) {
  console.log(i);
}
```

### 4.4. while 구문

- 조건이 참인 동안 무한히 반복함.
- 반복에 횟수를 모르는 경우

```js
while (조건) {
  할일;
  // 반드시 거짓으로 만들어야 합니다.
}
```

```js
let count = 0;

while (count < 5) {
  // 거짓을 만들기 위한 조건을 작성함.
  count = count + 1;
  console.log(count);
}
```

### 4.5. do while 구문

- while 과 다르게 일단 실행하고 조건 검사

```js
do {
  할일;
} while (조건);
```

```js
let count = 0;

do {
  // 거짓을 만들기 위한 조건을 작성함.
  count = count + 1;
  console.log(count);
} while (count < 5);
```

## 5. 함수(Function)

- 독립된 역할별 기능을 `{}` 묶고 `funciton 함수명()` 를 주어서 관리
- 여러번 재활용한다.
- 문서 즉 설명서(JSDoc)가 잘 만들어져야 함.
- 기능 예외처리를 잘 해야 한다.

### 5.1. 함수가 왜 필요하지?

- 반복되는 1줄 이상의 코드가 있다면 함수라는 것을 만들 생각 해보자.
- 코드에 대한 가독성이 필요하면 함수라는 것을 만들 생각해 보자.
- 한번에 코드를 수정하여 다양한 곳에 동시에 반여오디는 것을 원하면 함수라는 것을 만들 생각해 보자.
- 코드엥 안정성을 생각한다면 함수라는 것을 만들 생각해 보자.
- 협업을 한다면 기능을 만들어서 재활용하여야 하며 이때 함수라는 것을 만들 생각해 보자.

```js
// 아래는 사용자의 명단과 반가워요라는 메세지를 출력하는 기능이다.
let user_1 = "홍길동";
let user_2 = "김길동";
let user_3 = "박길동";
let user_4 = "고길동";
let user_5 = "정길동";
console.log(user_1 + "님 반가워요.");
console.log(user_2 + "님 반가워요.");
console.log(user_3 + "님 반가워요.");
console.log(user_4 + "님 반가워요.");
console.log(user_5 + "님 반가워요.");
```

- 기능을 구분해서 관리하고 싶다. (여기서는 회원명단 및 인사 기능)

```js
function userMember() {
  let users = ["홍길동", "김길동", "박길동", "고길동", "정길동"];
  users.forEach(function (user) {
    console.log(user + "님 반가워요.");
  });
}
```

// 함수활용, 함수호출, 함수 call
useMember();
useMember();
useMember();
useMember();
useMember();

### 5.2. 함수 만들기

// 함수 이름은 동사로 짓는다.

```js
function 함수명(){
  기능1;
  기능2;
  기능3;
}

function 함수명(재료1, 재료2, 재료3){
  재료1 처리 기능1;
  재료2 처리 기능2;
  재료3 처리 기능3;
}
```

### 5.3. 계산기 만들기

- 단계 1.

```js
// 계산기 만들기
const result_1 = 5 + 4;
const result_2 = 8 + 3;
const result_3 = 7 + 2;
const result_4 = 6 + 1;
```

- 단계 2.

```js
function result_1() {
  5 + 4;
}
function result_2() {
  8 + 3;
}
function result_3() {
  7 + 2;
}
function result_4() {
  6 + 1;
}
```

- 단계 3.

```js
function add(재료1, 재료2) {
  재료1 + 재료2;
}
add(5, 4);
add(8, 3);
add(7, 2);
add(6, 1);
```

- 단계 4. minus 기능 만들기

```js
function minus(매개변수1, 매개변수2) {
  매개변수1 - 매개변수2;
}
minus(5, 4);
```

- 단계 5. 기능에 예외처리(오류 처리) 적용하기
- 오류 : 원하지 않는 결과, error도 모두 포함해서 오류라 생각합니다.

```js
function add(매개변수1, 매개변수2) {
  // 방어코드 (예외처리)
  if (매개변수1 === undefined) {
    return alert("매개변수 1을 입력하세요.");
    매개변수1 + 매개변수2;
  }
}
function add(매개변수1, 매개변수2) {
  // 방어코드 (예외처리)
  if (매개변수2 === undefined) {
    return alert("매개변수 1을 입력하세요.");
    매개변수1 + 매개변수2;
  }
}
```

### 5.4. JSDoc 으로 함수 사용에 대해서 안내(설명서) 하기

- jsDoc 기본 이해

```js
/**
 *  두개의 변수를 받아서 덧셈하는 기능
 *  @param {number} numA - 첫번째 숫자
 *  @param {number} numA - 두번째 숫자
 * @returns {number} 두 숫자의 덧셈결과
 **/

function add(numA, numB) {
  if (numA === undefined) {
    return alert("첫번째 매개변수 입력해주세요.");
  }
  if (numA === undefined) {
    return alert("두번째 매개변수 입력해주세요.");
  }
  return numA + numB;
}

console.log(add(5, 4)); // 9
console.log(add(5)); // alert: 두번째 매개변수를 입력해주세요.
```

### 5.5. JsDoc 을 이용한 계산기 함수 만들어보기

- lib.js에 있음

### 5.6. 다양한 함수 예제

- 메시지를 콘솔에 출력하기
- @param {string} message // 출력할 메시지

```js
function showMessage(message) {
  console.log(message);
}
showMessage("안녕");
showMessage("홍길동 반가워");
```

```js
/**
 * 배열을 받아서 요소를 출력하는 함수
 * @param { number[] } arr - 숫자모음 배열
 */
function showArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

```js
/**
 * 객체의 속성 값을 출력하는 기능
 * @param { { id: number, nicName:string, age:number } } user - 사용자 객체
 * /

function showUser(user){
console.log(user.id);
console.log(user.nickName);
console.log(user.age);
}
```

### 5.7. 함수의 기본 값 설정하기

````js
/**
 * @param {number} age - 현재 나이
 * ```javascript
 * const result = showAge(10); // 20
 * ```
 */

 function showAge(age): {}
 return age + 10;
 }
````

### 5.8. 매개변수의 총 개수 자동으로 알아내기

- Rest 파라메터는 전달된 매개변수에 `정확한 값만 배열`로 만든다.

```js
/**
 * 입력된 매개 변수 만큼 총합 계산하기
 * Rest 파라메터 이용하기
 * @param {...number} numbers - 숫자 값
 */

function showTotal(a, b) {
  return a + b;
}
showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
```

```js
function showTotal() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
console.log(result);
```

```js
function showTotal(...rest) {
  console.log(rest);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += rest[i];
  }
  return total;
}

const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
```

- Rest 파라메터는 기본 매개변수 적용 후, `나머지를 배열로 추출`한다.

```js
function showTotal(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += rest[i];
  }
  return total;
}

const result = showTotal(4, 5, 6, 7, 8, 9, 1, 2, 0);
```

## 6. 함수 선언법을 꼭 이해하자.

- 1. 일반적 함수 만드는 법

```js
function 함수명(매개변수) {
  return 결과값;
}
함수명(매개변수);
```

- 2. `변수의 값`으로 함수 만든느 법

```js
const 변수명 = function (매개변수) {
  return 결과값;
};
변수명(매개변수);
```

- 3. `왜 변수명 = function 형태`가 필요하지?

```js
// 함수 선언은 코드가 실행되기 전에 미리 메모리에 등록됩니다
function add() {
  return 1 + 2;
}
add();

// 함수를 선언한 이후에만 호출할 수 있습니다.
const addFun = function () {
  return 1 + 2;
};
addFun();

function test(addFun) {
  addFun();
}

function test(_func) {
  _func();
}

test(addFun);
```

```js
// 버튼예시
bt.addEventListener("click", function () {});
```

- 아래 코드는 특히 위치를 살펴보자 : 완성하고 사용하자.

```js
add(); // 호이스팅이 되므로 괜찮다.
addFN(); // 호이스팅 에러 발생한다.
function add() {}
const addFN = function () {};
```

## 7. 함수 추가 정리

### 7.1. 함수를 만들 시점 (언제 함수를 만들까에 대한 안내)

#### 7.1.1. 코드가 너무 긴 경우(`하나의 결과를 만들기 위해서 작성시`)

- 코드 가독성이 너무 떨어져서 추후 분석이 곤란할 때
- 하나의 결과를 만들기 위한 과정을 작성중 너무 많은 코드가 작성될때
- 여러 줄이 작성되어서 한개의 결과를 만든다면 함수로 묶어서 만들까? 고민하자.

#### 7.1.2. 동일한 기능이 여러 번 사용될때

- 2번이상 동일한 기능이라면 함수를 만들까? 고민
- 2번이상 동일한 기능인데 재료만 다르다? 함수만들까?

#### 7.1.3. 코드를 누군가에게 주어야 할 때

-코드를 공유할 때 함수만들까? 고민

### 7.2. 함수 만드는 법

- `{}` 로 코드 블럭을 이용해서 묶어준다.
- 이름을 짓는데, `동사`로 지어준다. (기본: Camel, 생성자함수: Pascal)
- 이름 뒤에 `()` 를 작성한다.
- 이름 뒤에 `(재료, 재료)` 를 작성한다.
- 이름 뒤에 `(매개변수, 매개변수)` 를 작성한다.
- 이름 뒤에 `(parameter, parameter)` 를 작성한다.
- function 키워드를 작성해 준다.
- `JSDoc` 으로 사용설명서를 작성해 주면 좋겠다.

### 7.3. 함수 사용법(`호출, call` 등으로 명칭함)

- 함수명();
- 함수를 호출했다.
- 함수를 call 했다.

### 7.4. 함수 샘플

- 넓이를 계산하는 기능, 그런데 2번이상 사용, 누군가에게 공유

```js
/**
 * 너비를 계산해 주는 함수
*/
@param {number} _width
@param {number} _height
@returns {number}

function calcRect(_width, _height){
 return _width * _height;
}
// 함수 호출
const result = calcRect(5,4);
console.log(result); // 20
```

### 7.5. 함수에 추가 내용

- 매개변수에 기본값을 지정할 수 있다.

```js
function 함수명(매개변수 = 기본값) {}
```

- 매개변수 개수에는 제한이 없다.

```js
function 함수명(매개변수1, 매개변수2, ...rest) {
  const prams = rest; // 배열로 접근 가능
}
함수명(1, 2, 3, 4, 5);
```

- 기본 함수 작성법 2가지

```js
// 기본 함수 정의
function 함수명() {}

// 함수 표현식 정의
const 함수명 = function () {};
```

```js
// 콜백 함수 정의
const add = function () {
  console.log("콜백 함수가 호출되었습니다!");
};

// 콜백을 실행하는 함수
function calcFunc(_fn) {
  _fn(); // 전달받은 함수 호출
}

// 함수 호출
calcFunc(add);

// 출력: 콜백 함수가 호출되었습니다!
```

## 8. 화살표 함수(Arrow Function)

- FE 에서 함수 작성시 많이 볼 수 있는 형태
- 활용 비율이 높다. 반드시 이해해 보자.
- this 의 범위가 고정됩니다.
- new 를 사용 못 합니다.

### 8.2. 화살표 함수 작성법

- 매개변수 없는 경우

```js
const 함수이름 = (매개변수) => {
  실행문;
};
// 기본 함수
function say() {
  console.log("안녕");
}
// 표현식 함수
const say = function () {
  console.log("안녕");
};
// 화살표 함수
const sayArrow = () => {
  console.log("안녕");
};
// 실행코드가 한 줄이면 `{} 블럭`생략 가능
const sayAArow2 = () => console.log("안녕");
```

- `매개변수`가 오로지 `1개 있을 때`

```js
// 기본 함수
function say(_word) {
  console.log(_word);
}
// 표현식 함수
const say = function (_word) {
  console.log(_word);
};
// 화살표 함수
const sayArrow = (_word) => {
  console.log(_word);
};
// 매개변수가 1개일 땐 소괄호 생략 가능
const sayAArow2 = `(_word)` => console.log(_word);
```

- 매개변수가 2개 이상일 때

```js
function say(_word, _name) {
  console.log _word + _name;
}
// 표현식 함수
const say = function (_word, _name) {
  console.log _word + _name;
};
// 화살표 함수
const sayArrow = (_word, _name) => {
  console.log _word + _name;
};
// console.log ()로 없애고 +로 가능
const sayAArow2 = (_word, _name) => console.log _word + _name;
```

## 9. 스코프의 이해

- 변수의 활용 가능한 범위
- 제일 중요한것은 `{}` 입니다.

## 9.1. Scope 의 종류 2가지

- 전역 범위 : Global Scope
- 지역 범위 : Local Scope

## 9.2. 전역 범위

- 프로그램 어디서든 마음대로 접근해서 활용

```js
// 어디서든 접근 가능한 변수 → 프로그램 전체(모든 함수, 블록)에서 사용할 수 있는 변수.
let globalVar = "나는 전역 변수야!";

function show() {
  console.log(globalVar); // 함수 안에서도 사용 가능
}

show(); // 출력: 나는 전역 변수야!
console.log(globalVar); // 출력: 나는 전역 변수야!
```

## 9.3. 지역범위

- `{}` 블록 안쪽을 `지역범위`라고 합니다.

```js
// 지역변수
// 지역 안
fuction say() {
  let appName = "안녕";
console.log(appName);
}
say();
// 지역 밖
console.log(appName);
```

```js
// 전체
let appName = "안녕"; // 전역 변수 선언

function say() {
  console.log(appName); // 전역 변수에 접근
}

say(); // "안녕"
console.log(appName); // "안녕" - 전역 변수에 접근

// 지역
function say() {
  let appName = "안녕"; // 지역 변수 선언
  console.log(appName); // 지역 변수에 접근
}

say(); // "안녕"
```

- function 은 전역에 등록되므로 예측 곤란
- 전역O 지역은 되도록 안 함.

## 10. `this` 라는 키워드가 위를 괴롭힐 겁니다.

- this가 스코프와 연결되면서 혼란스럽다.

## 10.1 전역 스코프의 this는 `window` 이다.

```js
console.log(this); //window{...
```

### 10.2. function 의 this 는 `window` 이다.

```js
function say() {
  console.log(this);
  function hi() {
    console.log(this);
  }
  hi();
}
say();
```

```js
const say = () => {
  console.log(this);
};
say();
```

### 10.3. function 또는 표현식 함수는 this 사용시 위험한 코드이다.

- this 는 동일한 스코프를 가르쳐서 값이 변할 위험 존재
- this 는 물어보지도 않고 let 변수를 만들고 window 변수에 등록
- 즉 function에 this 넣지 말기

```js
let brand = "nkie";
function now() {
  this.brand = "adidas"; // 여기서의 this는 globalThis
}

console.log("함수실행전 : ", brand); // 👉 "nkie"
now();
console.log("함수실행후 : ", brand); // 👉 여전히 "nkie"
console.log("this.brand: ", this.brand); // 👉 "adidas"
```

### 10.4. 객체에 속성으로 만든 함수에서의 this

- `객체에서 this` 는 객체 전체를 가르킨다.
- 어? function 사용하니까 `this 가 상황에 따라서 변하는데?`

```js
const Preson = {
  name: "아이유",
  age: 20,
  SayHi: function () {
    console.log(this);
  },
};
```

```js
// this는 함수 호출 방식에 따라 다르게 동작
function coffee() {
  console.log(this);
}
coffee();
```

### 10.5. 객체 생성자 함수로 사용시 this

```js
function robot(_owner) {
  this;
}
robot("길동이");
new robot("길동이"); // new는 객체 생성
```

### 10.6. 내가 이해하기로 아래처럼 정리했다.

- function 에 작성한 this 는 어디서 함수를 사용했는가에 따라 다르다.

```js
const Person = {
say : function(){

}
}
say(); 지금은 person, say 함수를 사용했으므로

person.say();
```

### 10.7. 화살표 함수의 this는?

- 화살표 함수는 `상위 스코프`를 가르킨다.

```js
const say = () => {
  console.log(this);
};
say();
```

```js
const Person = {
  name: "아이유",
  say: function () {
    console.log(this.name);
  },
};
Person.say();
Person.sayArrow();
```

```js
const Person = {
  name: "아이유",
  say: function () {
    setTimeout(function () {
      console.log("일반 함수:");
      console.log(this); // window (또는 undefined in strict mode)
      console.log(this.name); // undefined: window.name 찾음
    }, 3000);
  },
  sayArrow: () => {
    console.log("화살표 함수:");
    console.log(this); // 전역 객체 (window)
    console.log(this.name); // undefined: 객체.name 찾음

    setTimeout(() => {
      console.log("setTimeout 안의 화살표 함수:");
      console.log(this); // 여전히 window
      console.log(this.name); // undefined: window.name 찾음
    }, 3000);
  },
};

Person.say(); // 3초 후: 일반 함수 → this는 window
Person.sayArrow(); // 즉시 실행 + 3초 후 실행 → this는 window
```

## 11. 생성자 함수 (목적이 `객체를 생성`하는 것)

- `new 키워드`를 붙여서 함수를 호출하다.

```js
// 메서드를 인스턴스마다 정의
function Person(_name) {
  this.name = _name;
  this.say = function () {
    console.log(this.name + " 안녕하세요");
  };
  console.log(this);
  console.log(this.name);
}

const a = new Person("둘리");
a.say();

const b = new Person("또치");
b.say();

const c = new Person("마이콜");
c.say();

const d = new Person("고길동");
d.say();
```

- `prototype`을 이용하면 공통 기능을 자동으로 부여한다.

```js
// prototype을 이용
function Person(_name) {
  this.name = _name;
  console.log(this);
  console.log(this.name);
}

Person.prototype.say = function () {
  console.log(this.name + " 안녕하세요");
};

const a = new Person("둘리");
a.say();

const b = new Person("또치");
b.say();

const c = new Person("마이콜");
c.say();

const d = new Person("고길동");
d.say();
```

## 12. 클래스

- 목적이 `객체를 생성`하는 것

### 12.1. 생성자 메소드 (constructor Method)

```js
class Person {
  // 클래스에서 메소드 함수 만드는 법
  // 메소드명(){}
  // 객체를 생성하는 함수 : 변경 불가
  // 디폴트 객체 생성자 함수
  constructor(_name, _age) {
    console.log("new 하면 자동 실행");
    console.log(_name);
    this.name = _name;
    this.age = _age;
  }
}
const a = new Person("둘리", 500000);
console.log(a);
```

```
사람이라는 것을 코딩으로 표현하고 싶다.
Property(특성, 속성, attribute) : 성별, 직업, 이름, 나이 등

 Method(함수...) : function 웃는다()
```

### 12.2. 나의 메소드 만들기

- `메소드명 () {할일}`

```js
class Person {
  constructor(_name, _age) {
    console.log("new 하면 자동 실행");
    console.log(_name);
    this.name = _name;
    this.age = _age;
  }

  // say라는 메소드 정의
  say() {
    console.log(this.name); // say 메소드에서 name을 출력합니다.
  }
}

const a = new Person("둘리", 500000);
a.say(); // say 메소드 호출, name이 출력됩니다.
console.log(a); // 객체 출력
```

### 12.3. 나의 속성 만들기

- Property : 프로퍼티
- constructor 메소드에서 만든다.

```js
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
```

### 12.4. 상속 이해해 보기

- 행동은 메소드 / 모양은 상속

- 1단계

```js
// 동물
class Animal {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
// 강아지
class Dog {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
// 새
class Bird {
  constructor() {
    this.eye = 2;
    this.nose = 1;
  }
}
```

- 2단계

```js
// 동물 클래스
class Animal {
  constructor(eye, nose) {
    this.eye = eye;
    this.nose = nose;
  }
}

// 강아지 클래스
class Dog extends Animal {
  constructor() {
    super(2, 1); // 동물의 기본 특징: 눈 2개, 코 1개
    this.name = "강아지";
  }
}

const b = new Dog();
console.log(b);

// 새 클래스
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
  }
}

const c = new Bird();
console.log(c);

// 출력 결과 예시
Dog { eye: 2, nose: 1, name: '강아지' }
Bird { eye: 2, nose: 1, name: '이쁜새' }

```

- 3단계: 확장

```js
// 동물 클래스
class Animal {
  constructor(eye, nose) {
    this.eye = eye;
    this.nose = nose;
  }
  speak(){
    console.log("소리를 내요");
  }
}
const a = new Animal(2,1);
a.speak();

// 강아지 클래스
class Dog extends Animal {
  constructor() {
    super(2, 5);
    this.name = "강아지";
  }
    speak(){
    console.log("멍멍이라고 소리를 내요");
}
}

const b = new Dog();
b.speak();
console.log(b);

// 새 클래스
class Bird extends Animal {
  constructor() {
    super(2, 1);
    this.name = "이쁜새";
  }
      speak(){
    console.log("짹짹이라고 소리를 내요");
}
}

const c = new Bird();
c.speak();
console.log(c);

// 출력 결과 예시
소리를 내요
멍멍이라고 소리를 내요
Dog { eye: 2, nose: 5, name: '강아지' }
짹짹이라고 소리를 내요
Bird { eye: 2, nose: 1, name: '이쁜새' }
```

### 12.5. 접근 제한자 이해하기

- 프로퍼티와 메소드를 활용하는

### 12.5.1. 종류

- 만약 JAVA 라면

```java
public : 마음대로 접근가능, 공유하는
private : 사적인 즉, 클래스 내부에서만 접근가능
protected : 상속 받은 클래스들만 접근 가능
```

- 만약 JavaScript 라면

```js
public : 마음대로 접근가능, 공유하는
# : 사적인 즉, 클래스 내부에서만 접근가능
```

```js
class Animal {
  // 안적으면 public
  eye;
  // #을 적으면 pricate
  #nose;

  constructor(eye, nose) {
    this.eye = eye;
    this.#nose = nose;
  }
}

class Dog extends Animal {
  constructor() {
    super(2, 5);
  }
}

const a = new Dog();
console.log(a);
console.log(a.eye);
console.log(a.#nose);
```

### 12.6. 클래스에 고정된 속성, 메소드

```js
class MathCalc {
  constructor() {}
  static add(a, b) {}
  static minus(a, b) {}
}
MathCalc.add(3, 4);
MathCalc.minus(3, 4);

const a = new MathCalc();
a.add(3, 4); /// 에러: 생성된 객체로 접근 불가
```

## 13. 콜백함수

- `call`은 함수를 실행한다는 의미
- 일반 함수에 `매개변수로 전달된 함수`를 callback 함수라 칭한다.

### 13.1. 콜백함수 활용처

- 주로 사용자 행동에 따른 `이벤트 발생`시 실행하는 함수
- 서버 연동하여 자료를 호출하는 `이벤트 발생`시 실행하는 함수

```js
const say = function () {};
const cry = () => {};
// 매개변수로 전달된 함수 실행
function run(a) {
  a();
}

run(say);
run(cry);
// 아래 추천함.
run(function () {});
```

```js
const bt = document.querySelector;
bt.addEventLstener("click", function () {});
```
