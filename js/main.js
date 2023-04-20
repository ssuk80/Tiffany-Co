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

