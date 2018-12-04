
//클릭이벤트: 서버 클릭시 날짜 출력
function getDate(server){
	var requestServerDate= {"action":"getDate",	    			
			"server":server
	 };
	
	$.getJSON("../../TeamServ", requestServerDate, function(data){
		$(".go_date").empty();
		
		if(server === '경국지색') {
			
			for(var i=0;i<data.go_date.length;i++){
				$("#gyungguk_teamlist").append("<div id='date'"+ i +" class='go_date' onclick='getTime("+ '"경국지색"' +")'>"+data.go_date[i]+"</div>");	
			}
			
		
		} else if(server === '절세미인') {
			for(var i=0;i<data.go_date.length;i++){
				$("#jeolse_teamlist").append("<li id='date"+i+"'" +"class='go_date' onclick='getTime('절세미인')'>"+data.go_date[i]+"</li>");	
			}
		}
		
	});
}

//클릭이벤트: 날짜리스트 클릭시 시간 출력

function getTime(server){
	console.log("getTime입니다.");
	var requestServerTime= {"action":"getTime",	    			
			"server":server
	 };
	
	$.getJSON("../../TeamServ", requestServerTime, function(data){
		
			for(var i=0;i<data.go_time.length;i++){
				$(".time_manage").append("<div id='time"+i+"' onclick='getTeams("+ '"' + data.go_time[i] + '"'+")'><span>"+data.go_time[i]+"</span></div>");	
			}

	});
}


//클릭이벤트: 시간표 클릭시 해당 팀 리스트 출력
function getTeams(gt){
	console.log("getTeams입니다."+gt);
	var requestDate = {"action":"getTeams",	    			
			"go_time":gt
	 };
	
	$.getJSON("../../TeamServ", requestDate , function(data){

		$("#team_manage").empty();
		$("#teams_hide").show();
		console.log(data);
		for(var i=0;i<data.team_name.length;i++){
			$("#team_manage").append("<li id='team"+i+"'><a href='#' class='team_name'><span>"+data.team_name[i]+"</span></a></li>");	
		}

	});
}




/* 서버 사이드바 열림 애니메이션 (클릭이벤트) */
var nav = document.getElementById('nav');
window.onload = function() {
	nav.onclick();

}
function openNav() {
	document.getElementById("sidenav").style.width = "110px";
}

$('#container').click(function() {
	$('#second_server').hide();
	$('#third_server').hide();
	$('#fourth_server').hide();
	$('#fifth_server').hide();
	$('#sixth_server').hide();
	$('#seventh_server').hide();
	$('#eighth_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#first_server').hide();
	
});


$('#gyungguk').click(function() {
	$('#second_server').hide();
	$('#third_server').hide();
	$('#fourth_server').hide();
	$('#fifth_server').hide();
	$('#sixth_server').hide();
	$('#seventh_server').hide();
	$('#eighth_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#first_server').show();
});

$('#jeolse').click(function() {
	$('#first_server').hide();
	$('#third_server').hide();
	$('#fourth_server').hide();
	$('#fifth_server').hide();
	$('#sixth_server').hide();
	$('#seventh_server').hide();
	$('#eighth_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#second_server').show();
});

$('#gumgang').click(function() {
	$('#first_server').hide();
	$('#second_server').hide();
	$('#fourth_server').hide();
	$('#fifth_server').hide();
	$('#sixth_server').hide();
	$('#seventh_server').hide();
	$('#eighth_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#third_server').show();
});

$('#myungbul').click(function() {

	$('#first_server').hide();
	$('#second_server').hide();
	$('#third_server').hide();
	$('#fifth_server').hide();
	$('#sixth_server').hide();
	$('#seventh_server').hide();
	$('#eighth_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#fourth_server').show();
});

$('#singum').click(function() {
	$('#first_server').hide();
	$('#second_server').hide();
	$('#third_server').hide();
	$('#fourth_server').hide();
	$('#sixth_server').hide();
	$('#seventh_server').hide();
	$('#eighth_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#fifth_server').show();
});

$('#ilhwak').click(function() {
	$('#first_server').hide();
	$('#second_server').hide();
	$('#third_server').hide();
	$('#fourth_server').hide();
	$('#fifth_server').hide();
	$('#seventh_server').hide();
	$('#eighth_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#sixth_server').show();
});

$('#isim').click(function() {
	$('#first_server').hide();
	$('#second_server').hide();
	$('#third_server').hide();
	$('#fourth_server').hide();
	$('#fifth_server').hide();
	$('#sixth_server').hide();
	$('#eighth_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#seventh_server').show();
});

$('#hwaryung').click(function() {
	$('#first_server').hide();
	$('#second_server').hide();
	$('#third_server').hide();
	$('#fourth_server').hide();
	$('#fifth_server').hide();
	$('#sixth_server').hide();
	$('#seventh_server').hide();
	$('#ninth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#eighth_server').show();
});

$('#test_server').click(function() {
	$('#first_server').hide();
	$('#second_server').hide();
	$('#third_server').hide();
	$('#fourth_server').hide();
	$('#fifth_server').hide();
	$('#sixth_server').hide();
	$('#seventh_server').hide();
	$('#eighth_server').hide();

	$('#teams_hide').hide();
	$('#menu_hide').hide();
	$('#ninth_server').show();
});

$('a[class="go_time"]').click(function() {
	$(".teamlists").show();

});

$(".teamlists").click(function() {
	$(".go_time").show();
	$(".team_name").show();
	$(".menu").show();

});

/*$(".d1").click(e=>{


   $.ajax({
	            async: true,
	            type : 'get',
	            data :  $('#dynamicView').serialize(),
	            url : "/BNS_reserv/ViewServ?action=dynamicView",
	            dataType : 'json',
	            contentType: "application/json; charset=UTF-8",
	            timeout: 3000,
	            success : function(data) {
	            	alert("success 확인");
	            	console.log(data.result);
	            	
	            },
	            error: function() {
	            	alert("error 확인");

	            }
     		        });

});*/




