/* 
// 자바처럼 분리되있지 않고 다 붙어있는 jsquery

const { ready } = require("jquery")

// 도큐멘트 불러주세요 "" '' 쌍 홀 따옴표 넣지마세요 jquery 에 절대 넣지않아요. 2개이상부터만 넣어요. document랑 window는 안한다. 나머진 쌍따옴표 꼭 넣으세요 

// window(브라우저)의 객체와  html안에 document(객체) 들어있는구조 알죠?
// 주어 , 메서드, 화면이준비되자마자;메서드가아닌이벤트예요ready는 이벤트는 시점이예요 클릭했을떄 창을 닫았을떄 슬라이드 롤오버됐을때 등, 메서드는 '어떻게 처리해라' 라는 거예요. 메서드가 월등히 많습니다. 이벤트는 몇개 되지도 않으니 (click 같은거) 다 외우세요.이벤트는 function만 받습니다. 구조가 단순합니다. 





$(document).ready(function () {

}
)

// 문제 #gnb를 클릭하면 실행(펑션)해라 , 쌍따옴표 쓰네요. 

$("#gnb").click(function () {

})

// 문제2 #gnb 첫번째 li를 클릭하면 실행해라 (=시나리오라고합니다.이걸보고 함수짜는겁니다.)

// 선생님이 쓴거 eq(-1)이 last-child 다. eq은같다라는뜻.
   $("#gnb li").eq(0).click(function () {
})


// 내가쓴거
// $("#gnb":first-child).click(function(){

// }
// )

// 학생이쓴거
$("#gnb li:first-child").click(function () {

})


// $("#gnb li") 주어
// eq(0) 첫번째를 잡아  메서드 ; 펑션이 안들어갔으니까
// eq(0)첫번째 li를 클릭했을 떄 이벤트 클릭하겠습니다.
// 주어 ㅡ 메서드 ㅡ 이벤트 구조

// 문제3 링크가 걸린 이미지를 클릭하면 실행해라
// $("#srcimage").click(function(){}) 내가 쓴것 틀리고,

// $("a img").click(function(){}) 선생님이 쓴것 에이안에 있는 이미지를 클릭했을때 펑션을 터뜨려라

// 문제4 
// $("#cart").click(function(){}) 내가 쓴것. 정답!
// $("").click(function(){}) 이 구조만 기본적으로 외우세요.

// react는 서툴러도 jquery는 잘해야 돼요. 그래서 에밋을 잘해야하고요.

// $("#gnb li").eq(-1).click(function(){}) li중에 마지막애 딱 한명만 잡아라

// 자바 하다가 제이쿼리 하면 느끼한 이유가 뭉뚱그려 지는 느낌, js 는 집합체와 단수 객체마다 메서드가 있는데 jquery는 뭉그러져 있다 그래서 제쿼리가 짜기 쉬운 코드다 이건 라이브러리가 세팅이 잘되있다는 뜻, 이건 무겁다는 뜻, 하지만 개발자 시장 진입이 용이해진 이유이기도함, 이건 리액트(가벼움,어려움)를 선호하는 이유.


// 문제5
// #gnb안의 첫번째 li a 요소를 클릭할때 실행해라.
// $("#gnb li").find("a").click(function(){}) li안에 자식객체 a를 찾아라 ->선생님팁

// eq(0), find("a") ,not

// $("#gnb li").eq(0).find("a").click(function(){}) 정답!


// --------------------------

// 이벤트의 종류.
// ready document에  씀
// click(아무나 전체 태그)
// hover(아무나 전체 태그)
// change(submit 제외한 모든 input 태그들; checkbox,selectbox,radio,input,select, 등 value값이 체인지 되는 것들 )
// select()도 change안에서 그냥 같이 쓴다. 버려도 될듯 휘리릭 ~
// submit(button/input)        주의: a는 submit 기능은 없어요 버튼이지
// focus -> input[type=text] 커서가 안으로 들어가는것 type이 text인 애만 쓰게 됩니다.

// 응용하기
//  화면이 준비되면 실행하라 라는 뜻은
//  $(document).ready(function(){})

// 여기까지가 웹기능사의 보일러플레이트 였습니다

// width 수정 이랑 m 0 auto 적절히 넣을 부분만 체크하면 웹기능사 시험 끝

// ready  -> document
// click  -> 전 태그
// hover ->전 태그
// change  -> checkbox, radio, input , select
// submit -> button, input
// focus  -> input[type=text]
 */
// ---------------------------------------

// 14시수업

// jquery 선택자연습할수있다.


$(document).ready(function () {
    //  화면이 준비되면 실행하라.
    $("h1 a").html("다지워");
    // a태그 주어 안쓰면 a태그는 지워지니까 a태그안지워지게 위처럼 h1 a 한거임

    // 2번째 대메뉴 텍스트가 네이버로
    $("#gnb > li").eq(1).find(".d1a").html("네이버")
    // 3번째 대메뉴의 소메뉴중 첫번째 텍스트가 구글
    // $("#gnb > li").eq(2).find(".d2a").eq(0).html("구글");학생식
    // $("#gnb > li").eq(2).find(".d2ul li").eq(0).find("a").html("구글"); 
    // 선생님식
    $("#gnb > li:eq(2) li:eq(0) a").html("구글")
    // 샘의최고의식 (eq은 css에는 없는 선택자 js에만 있어요.)

    // 모든 링크 안되게 처리. 링크를 죽여주는 attr메소드는 attr 속성에 접근하는 것 , a 야 href를 #none으로 바꿔죠.
    $("a").attr("href", "#none")
    // 이미지는 scr 링크는 href 

    // 문제 h1 에 있는 이미지야, 속성src를 logo로 바꿔죠.
    $("h1 img").attr("src", "logo.jpg")
    // attr(속성 , 값)

    // toggleClass, addClass, remveClass
    // img 에 on을 해줘 
    $("h1 img").addClass("on")

    // css메소드, css(스타일, 값) 
    $("body").css("background", "yellow")
    // body가 동적객체인지 정적개체인지 중요해요.

    // 문제: 클라이언트가 선택자문제를 의뢰했다 : display none, method css , gif인 이미지는 없애줘요.
    $('img[src$=".gif"]').css("display", "none")
    // $끝나는;접미사로 값을 가질때 선택  
    // ^시작하는; 접미사로 값을 가질 때 선택
    // *포함하는; 값이 포함된 모든 요소를 선택



    // 링크값이 없는 a 태그 없애주세요.
    $("a[href='']").css("dispaly", "none")



})



// 심화수업 상황극
//  add , attr, 자주씀 


