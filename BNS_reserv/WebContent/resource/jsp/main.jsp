<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/resource/css/main.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resource/css/bootstrap.min.css" />
<script
	src="${pageContext.request.contextPath}/resource/js/jquery/jquery.js"></script>
<script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>




</head>

<body>

	<video autoplay loop id="intro_video" muted>
		<source
			src="${pageContext.request.contextPath}/resource/assets/video/vi2.mp4"
			type="video/mp4">
	</video>


	<div class="container">
		<h1>Blade and Soul</h1>
		<p>Welcome to BNS BUS reservation guide</p>
		<br>

		<div class="kakao">
			<a id="kakao-login-btn"></a> <a
				href="http://developers.kakao.com/logout"></a>
			<script>
				Kakao.init("70009e108e4f5d8b1b0fa8759b63dc8f");
				Kakao.Auth.createLoginButton({
					container : '#kakao-login-btn',
					success : function(authObj) {
						Kakao.API.request({
							url : '/v1/user/me',
							success : function(res) {
								alert(JSON.stringify(res)); //<---- kakao.api.request 에서 불러온 결과값 json형태로 출력
								alert(JSON.stringify(authObj)); //<----Kakao.Auth.createLoginButton에서 불러온 결과값 json형태로 출력

								//콘솔 로그
								console.log("id : ", res.id);//  id 정보 출력(id는 res안에 있기 때문에  res.id 로 불러온다)
								console.log("email : ", res.kaccount_email);// email 정보 출력 
								console.log("nickname : ",
										res.properties['nickname']);// 닉네임 출력(properties에 있는 nickname 접근, 
								// res.properties.nickname으로도 접근 가능 )
								console.log("access_token : ",
										authObj.access_token);// 토큰값 출력
							}

						});
					},

					fail : function(error) {
						alert(JSON.stringify(error));
						alert("로그인 실패!");
					}
				});
				
				function createKakaotalkLogout(){
					$("#kakao-login-btn").remove();
					var logoutBtn = $("<a/>",{"class":"kakao-logout-btn","text":"로그아웃"});
					logoutBtn.click(function(){
						Kakao.Auth.logout();
						
					
					});
				}
				
				
			</script>
		</div>
		<br> <br> <input type="button" class="btn btn-danger"
			id="onlydev" name="onlydev" value="개발자전용: 무시하고 다음 페이지로 이동"
			onClick="location.href='./menu.jsp';"> <br> <br>


	</div>





</body>


</html>