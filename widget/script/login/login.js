let phoneval = false;
let codeVal = false;

function setphone(that) {
    if ((phone.test($(that).val()))) {
        console.log("手机号正确")
        phoneval = true;
        $("#getCode").addClass("clickgetCode")
    } else {
        phoneval = false;
        $("#getCode").removeClass("clickgetCode")
    }
    isLogin();
}

function setCode(that) {
    if ($(that).val().length >= 4) {
        codeVal = true;
    } else {
        codeVal = false;
    }
    isLogin();
}


function LoginBottom() {
    if ($("#phoneValue").val() == "") {
        console.log("请输入手机号");
        return;
    }
    if (!(phone.test($("#phoneValue").val()))) {
        console.log("手机号错误");
        return;
    }
    if ($("#codeVal").val() == "") {
        console.log("请输入验证码");
        return;
    }

    getLogin();
}


function isLogin() {
    if (phoneval && codeVal) {
        $("#LoginBottom").removeClass("NoClick")
        $("#LoginBottom").addClass("mainclick")
    }
}

var code = true;

function getCode(that) {
    let CodeClass = $(that).attr("class");
    var reg = RegExp(/clickgetCode/);
    if (reg.test(CodeClass)) {
        if (code) {
            var time = 60;
            code = false;
            $("#getCode").removeClass("clickgetCode")
            getCodeData();
            var inter = setInterval(function() {
                if (time == 0) {
                    code = true;
                    $("#getCode").addClass("clickgetCode")
                    $("#getCode").html("重新获取")
                    clearInterval(inter);
                } else {
                    time--;
                    $("#getCode").html(time);
                }
            }, 1000);
        }
    }
}
