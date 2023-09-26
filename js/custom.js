$(function(){
  var current = 0; //section(콘텐츠요소)의 순번
  function scrollmove(){//scrollmove함수 생성 스크롤이 이동되는 구문
    //모든 사이드메뉴 버튼에 on클래스를 제거하고 순번이 current인 요소에 on클래스를 추가
    $(".navi > li").removeClass("on").eq(current).addClass("on");
    //변수 secTop에 순번이 current인 section요소의 top위치값을 할당
    var secTop = $("section").eq(current).offset().top;
    //스크롤위치를 secTop위치로 이동
    $("html,body").stop().animate({'scrollTop':secTop},1000);
  }
  //사이드 메뉴에 클릭이벤트 생성
  $(".navi > li").click(function(){
    current = $(this).index();//current변수 값을 클릭한 메뉴 버튼의 순번으로 할당
    scrollmove();//scrollmove함수 호출
  })

  var secleng = $("section").length;//section요소의 갯수를 변수에 할당

  //up버튼에 클릭이벤트 생성
  $(".up").click(function(){
    current--;//current변수값에 1을 빼서 다시 current변수에 할당
    //current값이 0보다 작으면 current값을 0으로 고정
    if(current < 0){current = 0}
    
    scrollmove();//scrollmove함수 호출
  });

  //down버튼에 클릭이벤트 생성
  $(".down").click(function(){
    current++;//current변수값에 1을 더해서 다시 current변수에 할당
    //current값이 secleng보다 같거나 크면 current값을 section마지막 index번호로 고정
    if(current >= secleng){current = secleng-1}
    
    scrollmove();//scrollmove함수 호출
  });

  
  let x = "do your best and love well"//typing요소에 들어갈 글자를 변수에 할당
  let i = 0; //글자의 순번을 담는 변수

  const typing = document.querySelector("#typing");//typing요소 선택

  function typeWriter(){//typeWriter함수 생성
    if(i < x.length){ //i변수가 x변수의 글자수 보다 작은 숫자일때 실행
      typing.innerHTML += x[i]; //typing요소에 x변수의 글자 중 순번이 i번째인 글자를 더해서 출력합니다.
      i++; //i변수에 1을 더해서 다시 i변수에 할당.
      setTimeout(typeWriter,200);//setTimeout(함수,딜레이타임) : 해당 시간 경과 후 함수를 호출
      //0.2초후에 typeWriter 함수를 호출
    }else{//i값이 x의 글자수 보다 커지면 호출
      i = 0; //i를 0으로 초기화 하고
      setTimeout(recall,1000);//1초뒤에 recall함수를 호출
    }
  }

  function recall(){//recall함수 생성
    typing.textContent = ""; //typing요소의 글자를 비워줍니다.
    typeWriter();//다시 typeWriter 함수를 호출        
  }

  typeWriter(); //함수 호출
})