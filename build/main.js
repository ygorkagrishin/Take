$(document).ready(function(){var t=$("#js-form");t.submit(function(e){e.preventDefault();var a=$(this).serialize();$.ajax({type:"POST",url:"action.php",data:a,success:function(){t.trigger("reset"),alert("Ваше сообщение отпрвлено!")}})})});
!function(){if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){var a=$(".some-box__table");a.hasClass("hover")&&a.removeClass("some-box__table_hover"),a.on("click",function(){a.hasClass("active")?a.removeClass("active"):a.addClass("active")})}}();
$("input, textarea").placeholder();