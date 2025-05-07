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
