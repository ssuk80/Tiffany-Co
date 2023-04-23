// 검색창 요소 (.search) 선택 시 강제 포커스 및 제어
const searchE1 = document.querySelector('.search');
// console.log(searchE1); 요소가 있는지 확인

// const searchInputE1 = document.querySelector('.search input');
// 아래와 같이 최적화
const searchInputE1 = searchE1.querySelector('input');

//검색창 요소를 클릭하면 input요소를 포커스하도록 실행
searchE1.addEventListener ('click',function () { //이벤트 핸들러
  searchInputE1.focus();//포커스 강제 적용
});

//input 요소에 포커스되면 실행
searchInputE1.addEventListener ('focus', function () {
  searchE1.classList.add('focused');
  searchInputE1.setAttribute('placeholder','통합검색');//html속성을 추가하는 메소드
});

//input 요소에 해제(블러)되면  통합검색 글씨가 없어지게 실행
searchInputE1.addEventListener ('blur', function () {
  searchE1.classList.remove('focused');
  searchInputE1.setAttribute('placeholder','');//html속성을 추가하는 메소드
});





// 모바일 메뉴 열고 닫기
const btnHamburger = document.querySelector ('.btn-hamburger');
const navEl = document.querySelector('.pc-nav');

const mobileNavEl = document.querySelector('.m-nav');
const btnClose = document.querySelector('.btn-close');
//햄버거 버튼을 클릭면 .nav 요소와 .btn-group 요소에 "active"클래스 추가 (in js)

//'active'라는 클래스값이 있으면 요소 보이기!(in css)
btnHamburger.addEventListener('click', function() {
  // 이기능을 실행 하겠다.
  // navEl.classList.add('active');
  // btnGroup.classList.add('active');
  mobileNavEl.classList.add('active');
 
});
btnClose.addEventListener('click', function () {

  mobileNavEl.classList.remove('active');
});



// 프로모션 수평 슬라이드 기능
new Swiper ('.visual .swiper', {
  direction:'horizontal',//수평 슬라이드(기본값)
  loop: true,//반복 재생 여부
  autoplay:{
    delay : 5000 //5초마다 슬라이드 바뀜(기본값:3000)
  }, //자동재생여부
  slidesPerView: 3,//한번에 보여줄 슬라이드 개수(기본값:1)
  centeredSlides: true,//1번 슬라이스가 가운데 보이기

  pagination: {
    el:'.visual .swiper-pagination' , //페이지 번호 요소 선택자
    clickable: true //사용자 페이지 번호 요소 제어 가능 여부
  }, //페이지 번호 사용
  navigation: { //슬라이드 이전/다음 버튼
    nextEl:'.visual .swiper-button-next',
    prevEl:'.visual .swiper-button-prev',
  },

});