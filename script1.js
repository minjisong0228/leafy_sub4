$( document ).ready( function() {
        var jbOffset = $( '.nav' ).offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > 600) {//여기 지정된 길이 이후부터 적용됩니다
            $( '.nav' ).css({"background":"rgb(197,197,197)"});//색깔 바뀔 곳의 클래스 혹은 아이디 지정후 원하는 색상등을 지정
          }
          else {
            $( '.nav' ).css({"background":"rgba(197,197,197,0.7)"});//처음에 보이는 배경부분
          }
        });
      });