 
        var firebaseEmailAuth; //파이어베이스 email 인증 모듈 전역변수
        var firebaseDatabase; //파이어베이스 db 모듈 전역변수
        var name; //유저 이름
        var loginUserKey; //로그인한 유저의 부모 key
        var userInfo; //로그인한 유저의 정보 object type

        //파이어 베이스 초기화 코드
        var config = {
            apiKey: "AIzaSyBwOqfjqsnDHYBx0H90ob4J_ZosWF2MdLg",
            authDomain: "seedgreendata.firebaseapp.com",
            databaseURL: "https://seedgreendata-default-rtdb.firebaseio.com",
            projectId: "seedgreendata",
            storageBucket: "seedgreendata.appspot.com",
            messagingSenderId: "327441750186",
            appId: "1:327441750186:web:5d81abb5e75e821ca658d3",
            measurementId: "G-XD6C0TDX2D"
        };
        //파이어베이스 초기화
        firebase.initializeApp(config);
        //인증모듈 객체 가져오기
        firebaseEmailAuth = firebase.auth();
        //데이터베이스 모듈객체 가져오기
        firebaseDatabase = firebase.database();

        //세션 체크 함수
        userSessionCheck();


 
