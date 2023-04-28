//탑메뉴 로그인 모달창
const loGinModal = document.getElementById("login_modal");
const loGinOpen = document.getElementById("login_open_btn");
loGinOpen.addEventListener("click", function(){
  loGinModal.style.display = "flex";
});
  
const moDalClose = loGinModal.querySelector(".close_btn")
moDalClose.addEventListener("click", function () {
  loGinModal.style.display = "none";
});


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
  breakpoints: {
    768: {
      slidesPerView :1
    },
    1024: {
      slidesPerView :3
    }
  },
  pagination: {
    el:'.visual .swiper-pagination' , //페이지 번호 요소 선택자
    clickable: true //사용자 페이지 번호 요소 제어 가능 여부
  }, //페이지 번호 사용
  navigation: { //슬라이드 이전/다음 버튼
    nextEl:'.visual .swiper-button-next',
    prevEl:'.visual .swiper-button-prev',
  },

});


//scrollMagic사용
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)추가 및 옵션 지정
     triggerElement: spyEl,
     triggerHook: 0.8 //화면에 80%지점부터 보여짐 여부 감시 (0-1사이 지정)
    })
    .setClassToggle(spyEl,'show') // 요소가 화면에 보이면 show클래스 추가
    .addTo( new ScrollMagic.Controller());// 컨트롤러에 장면을 할당
    // (필수) - 라이브러리에서 지정한 문법으로 깊게 이해
  
});

//  light 위에  떠있는 부유 요소 애니메이션
// gsap.to(요소, 지속시간, 옵션: {})
gsap.to('.floating1', 1, {
  delay: 1,//얼마나 늦게 애니메이션을 시작할 것인지 지연 시간 설정
  y: 10, //transform:translateY (): 와 같음, 수직으로 얼마나 움직일 지 설정
  repeat: -1, //몇 번 반복하는지 설정, -1은 무한 반복을 의미함
  yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생
  ease: Power1.easeInOut //Easing함수 적용, 느리게 - 빠르게 -느리게
 });


//동영상 모달창 띄우기
 const modal = document.getElementById("modal");
 const btnModal = document.getElementById("btn-modal");
 btnModal.addEventListener("click", function() {
     modal.style.display = "flex";
 });
//모달창 닫음 버튼
const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});
//모달창 바깥영역 클릭시 닫음
modal.addEventListener("click", function(e) {
  const evTarget = e.target
  if(evTarget.classList.contains("modal-overlay")) {
      modal.style.display = "none";
  }
});
//모달창 Esc버튼 누르면 닫음
window.addEventListener("keyup", function(e) {
  if(modal.style.display === "flex" && e.key === "Escape") {
      modal.style.display = "none";
  }
});

//회원가입
const memBerModal = document.getElementById("member_modal");
const memBerOpen = document.getElementById("member_open_btn");

memBerOpen.addEventListener('click', function(){
  memBerModal.style.display = "flex";
});
const memBerClose  = memBerModal.querySelector(".close_btn");
memBerClose.addEventListener('click', function(){
  memBerModal.style.display = "none";
});


//현재 연도 표시
//날짜 정보를 가진 js의 Data객체를 이용
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();//현재연도의 정보가 숫자 데이터로 반환됨
