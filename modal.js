  
    $(document).ready(function () {
        $("#modalUpdate").modal('show');
        

    });

 

$.notify({
	icon: 'la la-leaf',
	title: '무단투기 어쩌고',
	message: '웹 열면 뜰 글자 어쩌구',
},{
	type: 'success',
	placement: {
		from: "bottom",
		align: "right"
	},
	time: 1000,
    });




$(".mapcontainer").mapael({
    map: {
        name: "world_countries",
        zoom: {
            enabled: true,
            maxLevel: 10
        },
        defaultPlot: {
            attrs: {
                fill: "#004a9b"
                , opacity: 0.6
            }
        },
        defaultArea: {
            attrs: {
                fill: "#b5b5b5"
                , stroke: "#fafafa"
            }
            , attrsHover: {
                fill: "#59d05d"
            }
            , text: {
                attrs: {
                    fill: "#505444"
                }
                , attrsHover: {
                    fill: "#000"
                }
            }
        }
    },
    areas: {
        // "department-56": {
        // 	text: {content: "Morbihan", attrs: {"font-size": 10}},
        // 	tooltip: {content: "<b>Morbihan</b> <br /> Bretagne"}
        // },

        "CN": {
            tooltip: { content: "<b>중화인민공화국</b><br/>확진 : 20438<br/>의심 : 23214<br/>치유 : 694<br/>사망 : 426" },
            attrs: {
                fill: "#000000" //위험수위 1위 색상11111111
            }
            , attrsHover: {
                fill: "#000000"
            }
        },


        "KR": {
            tooltip: { content: "<b>대한민국</b><br/>확진 : 16<br/>의심 : 512<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }
            , attrsHover: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }
        },


        "JP": {
            tooltip: { content: "<b>일본</b><br/>확진 : 16<br/>의심 : 300<br/>치유 : 4<br/>사망 : 0" },
            attrs: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }
            , attrsHover: {
                fill: "#7a0000"
            }
        },

        "SG": {
            tooltip: { content: "<b>싱가포르</b><br/>확진 : 13<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }
            , attrsHover: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }

        },


        "TH": {
            tooltip: { content: "<b>타이</b><br/>확진 : 19<br/>의심 : ?<br/>치유 : 7<br/>사망 : 0" },
            attrs: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }
            , attrsHover: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }

        },


        "AU": {
            tooltip: { content: "<b>오스트레일리아</b><br/>확진 : 12<br/>의심 : ?<br/>치유 : 2<br/>사망 : 0" },
            attrs: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }
            , attrsHover: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }

        },


        "US": {
            tooltip: { content: "<b>미국</b><br/>확진 : 11<br/>의심 : 98<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }
            , attrsHover: {
                fill: "#7a0000" //위험수위 2단계 색상222222222
            }
        },


        "MY": {
            tooltip: { content: "<b>말레이시아</b><br/>확진 : 8<br/>의심 : 98<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#bf2e2e" //위험수위 3단계 색상       
            }
            , attrsHover: {
                fill: "#bf2e2e" //위험수위 3단계 색상
            }
        },


        "VN": {
            tooltip: { content: "<b>베트남</b><br/>확진 : 8<br/>의심 : 98<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#bf2e2e" //위험수위 3단계 색상       
            }
            , attrsHover: {
                fill: "#bf2e2e" //위험수위 3단계 색상
            }
        },




        "DE": {
            tooltip: { content: "<b>도이칠란드</b><br/>확진 : 8<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#bf2e2e" //위험수위 3단계 색상
            }
            , attrsHover: {
                fill: "#bf2e2e" //위험수위 3단계 색상
            }

        },


        "FR": {
            tooltip: { content: "<b>프랑스</b><br/>확진 : 6<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#bf2e2e" //위험수위 3단계 색상3333333333333333
            }
            , attrsHover: {
                fill: "#bf2e2e" //위험수위 3단계 색상
            }

        },

        "IT": {
            tooltip: { content: "<b>이탈리아</b><br/>확진 : 2<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },


        "GB": {
            tooltip: { content: "<b>연합 왕국</b><br/>확진 : 2<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },


        "ES": {
            tooltip: { content: "<b>스페인</b><br/>확진 : 1<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },


        "AE": {
            tooltip: { content: "<b>아랍에미레이트</b><br/>확진 : 5<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#bf2e2e" //위험수위 3단계 색상
            }
            , attrsHover: {
                fill: "#bf2e2e" //위험수위 3단계 색상
            }

        },


        "CA": {
            tooltip: { content: "<b>캐나다</b><br/>확진 : 4<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },


        "FI": {
            tooltip: { content: "<b>핀란드</b><br/>확진 : 1<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },


        "IN": {
            tooltip: { content: "<b>인도</b><br/>확진 : 3<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },



        "PH": {
            tooltip: { content: "<b>필리핀</b><br/>확진 : 2<br/>의심 : ?<br/>치유 : 0<br/>사망 : 1" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },



        "LK": {
            tooltip: { content: "<b>스리랑카</b><br/>확진 : 1<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },


        "NP": {
            tooltip: { content: "<b>네팔</b><br/>확진 : 1<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },

        "KH": {
            tooltip: { content: "<b>캄보디아</b><br/>확진 : 1<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },

        "SE": {
            tooltip: { content: "<b>스웨덴</b><br/>확진 : 1<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },



        "NO": {
            tooltip: { content: "<b>노르웨이</b><br/>확진 : 1<br/>의심 : ?<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },



        "RU": {
            tooltip: { content: "<b>러시아 연방</b><br/>확진 : 2<br/>의심 : 6<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }
            , attrsHover: {
                fill: "#cc6b04" //위험수위 4단계 색상444444444444444444444444
            }

        },




        "MX": {
            tooltip: { content: "<b>멕시코</b><br/>확진 : 0<br/>의심 : 1<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }
            , attrsHover: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }

        },


        "BR": {
            tooltip: { content: "<b>브라질</b><br/>확진 : 0<br/>의심 : 2<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }
            , attrsHover: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }

        },


        "SD": {
            tooltip: { content: "<b>수단</b><br/>확진 : 0<br/>의심 : 1<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }
            , attrsHover: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }

        },

        "ZM": {
            tooltip: { content: "<b>잠비아</b><br/>확진 : 0<br/>의심 : 1<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }
            , attrsHover: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }

        },


        "CI": {
            tooltip: { content: "<b>코트디부아르</b><br/>확진 : 0<br/>의심 : 1<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }
            , attrsHover: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }

        },

        "MN": {
            tooltip: { content: "<b>몽골</b><br/>확진 : 0<br/>의심 : 5<br/>치유 : 0<br/>사망 : 0" },
            attrs: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }
            , attrsHover: {
                fill: "#f7df3e" //위험수위 5단계 색상55555555555555555555555555555555555
            }

        },
    },
});
 