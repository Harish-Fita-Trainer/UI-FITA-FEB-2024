$(document).ready(function () {

    $('#submit-btn')
        .off("click")
        .on("click", function () {
            var name = $('#name').val();
            var phone = $('#phone').val();
            var email = $('#email').val();
            var gender = $('input[name="gender"]:checked').val();
            var agree = $('#agree').prop('checked');
            var password = $('#password').val();
            var confirmPassword = $('#confirm-password').val();

            $(".error").hide();

            if (name === "") {
                $("#name-error").text("Please enter your name.").show();
                return false;
            }

            if (phone === '') {
                $("#phone-error").text("Please Enter Your PhoneNo").show();
                return false;
            }

            if (email === "") {
                $("#email-error").text("Please enter your email.").show();
                return false;
            }



            if (!gender) {
                $("#gender-error").text("Please select your gender.").show();
                return false;
            }

            if (!agree) {
                $("#agree-error").text("Please agree to the terms and conditions.").show();
                return false;
            }

            if (password === "") {
                $("#password-error").text("Please enter a password.").show();
                return false;
            }

            if (password !== confirmPassword) {
                $("#confirm-password-error").text("Passwords do not match.").show();
                return false;
            }
            alert("Form submitted successfully!");
        });
});
