$(window).load(function() { 

	$x = $(window).width();    

	$('#btn_log').click(function(e){
		e.preventDefault();
		login();
	});

	$('#reg-btn').click(function(e){
		e.preventDefault();
		register();
	});


	var login = function(){

		var user = $('#username').val();
		var pass = $('#password').val();

		$.ajax({
			url: 'xhr/login.php',
			data:{
			username: user,
			password: pass
			},
			type: 'post',
			dataType: 'json',
			success: function(r){
				if(r.error){
					console.log(r.error);
				}else{
					// check_login();
					window.location.href = "home.html";

				}
			}
		});
	};

	var register = function(){
		var email = $('#regularInput').val();
		var user = $('#regusername').val();
		var pass = $('#regpassword').val();

		$.ajax({
			url: 'xhr/register.php',
			type: 'post',
			dataType: 'json',
			data: {
				email: email,
				username: user,
				password: pass

			},
		})
		.done(function(r) {
			if(r.error){
				console.log(r.error);
			}else{
				window.location.href = "home.html";
			}
		});
			
	};	

	$(function() {	
		$( "#accordion" ).accordion();
	});

	
});


