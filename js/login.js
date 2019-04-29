$('#loginBtn').on('click', function () {
    login();
})
document.onkeydown = function (e) {
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13) {
        login();
    }
}

function login() {
    var name = $.trim($('#name').val());
    var password = $.trim($('#password').val());
    if (name == '') {
        layer.msg('请输入账号')
    } else if (password == '') {
        layer.msg('请输入密码')
    } else {
        var send = {
            username: name,
            password: password
        }
        rember();
        $.ajax({
            url: '/yixinjiao/login.action',
            type: 'post',
            data: send,
            success: function (msg) {
                if (msg.status == 200) {
                    window.location.href = 'index.html'
                } else {
                    layer.msg(msg.msg)
                }
            }
        })
    }
}

function rember() {
    var account = $.trim($('#name').val());
    var password = $.trim($('#password').val());
    if ($("#remember_me").is(':checked')) {　　　　
        $.cookie("rmbUser", "true", {
            expires: 7
        }); //存储一个带7天期限的cookie
        　　　　
        $.cookie("name", account, {
            expires: 7
        });　　　　
        $.cookie("password", password, {
            expires: 7
        });
    } else {　　　　
        $.cookie("rmbUser", "false", {
            expire: -1
        });　　　　
        $.cookie("username", "", {
            expires: -1
        });　　　　
        $.cookie("password", "", {
            expires: -1
        });
    }
}

$(document).ready(function () {　　　　 //获取cookie的值
    　　　　
    var username = $.cookie('name');　　　　
    var password = $.cookie('password');

    　　　　 //将获取的值填充入输入框中
    　　　　
    $('#name').val(username);　　　　
    $('#password').val(password);　　　　
    if (username != null && username != '' && password != null && password != '') {
        //选中保存秘密的复选框
        　　　　
        $("#remember_me").attr('checked', true);
    }
})
