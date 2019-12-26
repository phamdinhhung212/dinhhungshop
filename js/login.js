$(document).ready(function() {
	// login
	// data account
		// account 1
	// ------------------------------
	var myUsername_1 = 'phamdinhhung212@gmail.com';
	var myPassword_1 = 'gnuh20011028';
	// ------------------------------
		// account 2
	// ------------------------------
	var myUsername_2 = 'penryvn';
	var myPassword_2 = '123456789hung';
	// ------------------------------
		// account 3
	// ------------------------------
	var myUsername_3 = '';
	var myPassword_3 = '';
	// ------------------------------
	// handling login
	$('#form-login').submit(function() {
		// get name to admin greeting
		$(".admin-name").text($("#name").val());

		// get data login
		var username = $("#username").val();
		var password = $("#password").val();

		// check login
		if( username == myUsername_1 && password == myPassword_1 ) {
			alert('Đăng nhập thành công');
			$(".admin").stop().fadeOut(500);
			$("#personal-page").stop().fadeIn(500);
		}
		else {
			alert('Sai mật khẩu hoặc tài khoảng');
		}
		return false;
	});
	$("#personal-page span.close-login").click(function() {
		$("#personal-page").stop().fadeOut(500);
		$(".admin").stop().fadeIn(500);
	});

});

// get name to admin
$(document).ready(function() {

})