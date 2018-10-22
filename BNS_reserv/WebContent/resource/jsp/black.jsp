<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="../favicon.ico">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resource/css/default.css" />
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resource/css/component.css" />
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath}/resource/css/black.css">
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resource/css/bootstrap.min.css" />
<script
	src="${pageContext.request.contextPath}/resource/js/jquery/jquery.js"></script>

<script src="${pageContext.request.contextPath}/resource/js/modernizr.custom.js"></script>

</head>
<body>

	<video autoplay loop id="background_video">
		<source
			src="${pageContext.request.contextPath}/resource/assets/video/skyscraper.mp4"
			type="video/mp4">
	</video>
	<div class="container">
		<h1>Blade and Soul</h1>
		<p>Welcome to BNS BUS reservation guide</p>
		<br>
		<button id="showLeft" style="color: red">Show/Hide Left Slide Menu</button>
	</div>



	<nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"
		id="cbp-spmenu-s1">
		<h3>Menu</h3>
		<a href="#">Celery seakale</a> <a href="#">Dulse daikon</a> <a
			href="#">Zucchini garlic</a> <a href="#">Catsear azuki bean</a> <a
			href="#">Dandelion bunya</a> <a href="#">Rutabaga</a>
	</nav>


	<script src="${pageContext.request.contextPath}/resource/js/classie.js"></script>
	<script src="${pageContext.request.contextPath}/resource/js/black.js"></script>


</body>
</html>