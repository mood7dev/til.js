// 개발자가 직접 알아내는 경우
//console.log(singer.id);
//console.log(singer.name);
//console.log(singer.age);

// 반복문 활용
/*
for (let key in singer) {
  console.log(key);
  console.log(singer[key]);
}
*/

// for in 구문 예제 (대상은 객체 속성 반복)
const bts = {
  id: "123",
  name: "bts",
  age: [30, 20, 33],
  city: "서울",
};

/*
for (let key in bts) {
  console.log(`${key} : ${bts[key]}`);
}

const good = {
  productNum: 5502,
  targetProductService: "interTourR",
  targetProductId: "7",
  targetProductSubId: null,
  targetProductName: "[실시간 항공권] 인천 ↔ 나트랑",
  targetProductSubName: null,
  targetProductDetail: "",
  targetProductImageUrl:
    "https://common-live-vod.interparkcdn.net/data/image/20250106/14/96/20250106073804.jpg",
  targetProductOriginPrice: 221400,
  targetProductDiscountPrice: 0,
  targetProductPrice: 211400,
  targetProductLinkUrl:
    "https://travel.interpark.com/air/search/a:ICN-a:CXR-20250616/a:CXR-a:ICN-20250619?cabin=ECONOMY&infant=0&child=0&adult=1&byAirline=RS",
  targetDisplayStartTime: null,
  targetDisplayEndTime: null,
  displayOrder: 7,
  scheduleNum: 2010,
  status: 1,
  serviceName: "투어-해외여행",
};

// good 객체의 키와 값을 출력
for (let key in good) {
  console.log(`${key} : ${good[key]}`);
}
*/

/**
 *  숫자 더하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 덧셈 결과
 *
 * function add(a,b) {
 *  return a+b;
 * }
 *
 */

/**
 *  숫자 빼기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 뺄셈 결과
 *
 * function minus(a,b) {
 *  return a-b;
 * }
 *
 */

/**
 *  숫자 곱하기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 곱셈 결과
 *
 * function multi(a,b) {
 *  return a*b;
 * }
 *
 */

/**
 *  숫자 나누기 기능
 * @param {number} a
 * @param {number} b
 * @returns {number} - 나눗셈 결과
 * 
 *----- 호출 예 -----
 ````javascrip
 let result = divide(5,4)
 ```

 * function divide(a,b) {
 * 데이터 알아내고, 타입 비교하기
 * if(typeof a !== "number") {
 * return alert("분자는 숫자여야 합니다.");
 * }
 * if(typeof b !== "number") {
 * return alert("분모는 숫자여야 합니다.");
 * }
 * if( b === 0 ) {
 * return alert("분모는 0이 아니어야 합니다.");
 * }
 *  return a/b;
 * }
 *
 */

// 넘버 출력
const age = 1;
console.log(typeof age);

// 덧셈 사용
const resultAdd = add(5, 4);
const resultMinus = minus(5, 4);
const resultMulti = multi(5, 4);
const resultDivide = divide(5, 4);

/**
 *@param {string} symbol +, -, *, / 기호중 1개 입력
 *@param {number} a 숫자 입력
 *@param {number} b 숫자 입력
 *@returns {number} 결과는 숫자
 */

사용 예) ===========
```javascript
const result = calcurator("+", 5, 4);
```

function calculator(symbol, a, b) {
  if (typeof symbol !== "string") {
    return alert("기호를 입력하세요.");
  }
  let result;  // result를 함수 안에서 선언합니다.

  switch(symbol) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      if (b === 0) {
        return alert("분모는 0이 될 수 없습니다.");
      }
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
    default:
      return alert("올바른 기호를 입력해 주세요.");
  }
  
  return result;  // 계산된 결과를 반환합니다.
}