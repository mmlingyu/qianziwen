//弹框逻辑
var type = "";
var ord = '';
$('#closeBtn').on('click', function () {
    $('.alert').removeClass('show');
})
$('.login-btn').on('click',function(){
    $.ajax({
        type:"get",
        url:"/yixinjiao/logout.action",
        success:function(){
            window.location.href = "/yixinjiao/static/login.html"
        },
        error:function(msg){
            layer.msg(msg.msg)
        }
            
        
    })
})
$('.palyBtn').on('click', function () {
    type = $(this).data('type');
    ord = $(this).data('ord');
    if (type !== 'user') {
        $('.alert').addClass('show');
    } else {
        if (ord == 'tuxiang') {
            if (type == 'auto') {
                window.location.href = '/yixinjiao/static/tuwen.html'
            } else {
                window.location.href = '/yixinjiao/static/tuwenself.html'
            }
        }
        else if (ord == "tuwen") {
            if (type == 'auto') {
                window.location.href = '/yixinjiao/static/tuzi.html'
            } else {
                window.location.href = '/yixinjiao/static/tuziself.html'
            }
        }
        else if (ord == "hanyu") {
            if (type == 'auto') {
                window.location.href = '/yixinjiao/static/hanyu.html'
            } else {
                window.location.href = '/yixinjiao/static/hanyuSelf.html'
            }
        }
        else if (ord == 'xinhanyu') {
            if (type == 'auto') {
                window.location.href = '/yixinjiao/static//tuci.html'
            } else {
                window.location.href = '/yixinjiao/static//tuciself.html'
            }
        }
         else if (ord == 'xin1000') {
            if (type == 'auto') {
                window.location.href = '/yixinjiao/static/xintu.html'
            } else {
                window.location.href = '/yixinjiao/static/xintuself.html'
            }
        }
    }

})

// 判断输入的是否是数字
$('#getPlay').on('click', function () {
    var startNum = $('#startNum').val();
    var endNum = $('#endNum').val();
    if (!$.isNumeric(startNum)) {
        layer.msg('起始序号请输入数字')
    } else if (!$.isNumeric(endNum)) {
        layer.msg('终止序号请输入数字')
    } else if (Number(startNum) > Number(endNum)) {
        layer.msg("起始序号不能大于终止序号")
    } else {
        jump()
    }
})
$('.login-btn').on('click', function () {
        window.location.href = 'login.html'
    })
    // 判断跳转
function jump() {
    if (ord == 'tuxiang') {
        if (type == 'auto') {
            window.location.href = '/yixinjiao/static/tuwen.html'
        } else {
            window.location.href = '/yixinjiao/static/tuwenself.html'
        }
    }
    else if (ord == "tuwen") {
        if (type == 'auto') {
            window.location.href = '/yixinjiao/static/tuzi.html'
        } else {
            window.location.href = '/yixinjiao/static/tuziself.html'
        }
    }
    else if (ord == "hanyu") {
        if (type == 'auto') {
            window.location.href = '/yixinjiao/static/hanyu.html'
        } else {
            window.location.href = '/yixinjiao/static/hanyuSelf.html'
        }
    }
    else if (ord == 'xinhanyu') {
        if (type == 'auto') {
            window.location.href = '/yixinjiao/static/tuci.html'
        } else {
            window.location.href = '/yixinjiao/static/tuciself.html'
        }
    }
    else if (ord == 'xin1000') {
        if (type == 'auto') {
            window.location.href = '/yixinjiao/static/xintu.html'
        } else {
            window.location.href = '/yixinjiao/static/xintuself.html'
        }
    }
    //window.location.href = 'hanyuSelf.html'
}
