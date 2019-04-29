var list = [[{
    name: '天空',
    han: 'tiān',
    img: 'tian.gif',
    audio: 'tiankong'
}, {
    name: '地球',
    han: 'dì',
    img: 'di.gif',
    audio: 'diqiu'
}, {
    name: '玄狐',
    han: 'xúan',
    img: 'xuan.jpg',
    audio: 'xuanhu'
}, {
    name: '黄色',
    han: 'huáng',
    img: 'huang.gif',
    audio: 'huangse'
}, {
    name: '宇航员',
    han: 'yǔ',
    img: 'yu.gif',
    audio: 'yuhangyuan'
}, {
    name: '宙斯',
    han: 'zhòu',
    img: 'zhou.jpg',
    audio: 'zhousi'
}, {
    name: '洪水',
    han: 'hóng',
    img: 'hong.jpg',
    audio: 'hongshui'
}, {
    name: '慌山',
    han: 'huāng',
    img: 'huangs.jpg',
    audio: 'huangshan'
}], [
    {
        name: '日光',
        han: 'rì',
        img: '1.gif',
        audio: 'riguang'
},
    {
        name: '月亮',
        han: 'yùe',
        img: '2.gif',
        audio: 'yueliang'
},
    {
        name: '盈利',
        han: "yíng",
        type: 2,
        img: '3.jpg',
        audio: 'yingli'
},
    {
        name: '昃迎',
        han: "zè",
        img: '4.jpg',
        audio: 'zeying'
}, {
        name: '辰星',
        han: 'chén',
        type: 2,
        img: '5.jpg',
        audio: 'chenxing'
}, {
        name: '星宿',
        han: 'sù',
        type: 2,
        img: '6.gif',
        audio: 'xingxiu'
}, {
        name: '列队',
        han: 'liè',
        type: 2,
        img: '7.jpg',
        audio: 'liedui'
}, {
        name: '张开',
        han: 'zhāng',
        img: '8.gif',
        audio: 'zhanggong'
}
]]

var pageIndex = 0;
var itemIndex = 0;
var voice = 1;
var showbig = false;
var mySwiper;
var swiperIsRunning = false;

function createImage() {
    var html = '';
    $.each(list[pageIndex], function (index, item) {
        html += '<div class="image-ziItem" data-voice=' + item.audio + '>';
        if (item.type == 2) {
            html += "<div class='image-top'>" + item.name.slice(0, 1) + "<span>" + item.name.slice(1, 2) + "</span></div>"
        } else {
            html += "<div class='image-top'><span>" + item.name.slice(0, 1) + "</span>" + item.name.slice(1, item.name.length) + "</div>"
        }

        html += '<img src="./page/' + item.img + '" alt="">';
        html += '</div>'
    })
    $('.img-bigbox').html(html);
}
createImage();
$(function () {
    var pause = false;
    $('audio').bind('ended', function () {
        if (!showbig) {
            lunsss();
        }

    });

    $('audio').bind('play', function () {
        console.log('play');
    });
    $('.play').on('click', function () {
        if (!showbig) {
            if (!pause) {
                lunsss();
                pause = true;
            } else {
                $('audio').get(0).pause();
                pause = false;
            }
        } else {
            if (swiperIsRunning) {
                mySwiper.autoplay.stop();
                swiperIsRunning = false;
            } else {
                mySwiper.autoplay.start()
            }
        }

    })
    $('.play').trigger('click');
    $('.voice').click(function () {
        if (voice == 1) {
            document.getElementById("aud").muted = true;
            voice = 0
        } else {
            voice = 1
            document.getElementById("aud").muted = false;
        }

    })
    $('.home').on('click', function () {

        window.location.href = 'index.html'
    })
})

function lunsss() {
    var items = document.getElementsByClassName('image-ziItem');
    speak(items[itemIndex].getAttribute('data-voice'));
    $('.image-ziItem').eq(itemIndex).addClass('active');
    itemIndex++;
    if (itemIndex >= 8) {
        itemIndex = 0;
        showbig = true;
        //        pageIndex++
        //        if(pageIndex>=list.length){
        //            pageIndex = 0
        //        }
        //        createImage();
        setTimeout(function () {
            createSwiper();
        }, 1000)
    }
}

function speak(content) {
    var active = document.querySelector('.swiper-slide-active');
    var url = "audio/ci/" + content + '.mp3';
    var audio = document.querySelector('#tts_source');
    audio.src = url;
    audio.parentNode.load()

}

function createSwiper() {
    var html = '';
    $.each(list[pageIndex], function (index, item) {
        html += '<div class="swiper-slide"><img src="./page/' + item.img + '" alt=""/>'
        html += '<span class="name">'
        if (item.type == 2) {
            html += item.name.slice(0, 1) + "<span class='red'>" + item.name.slice(1, 2) + "</span>"
        } else {
            html += "<span class='red'>" + item.name.slice(0, 1) + "</span>" + item.name.slice(1, item.name.length)
        }

        html += '</span>'
        html += '</div>'
    });
    $('.swiper-wrapper').html(html);
    $('.bigImg').show();
    $('#list').hide();
    speak(list[pageIndex][0].audio)
    mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        speed: 1000,
        loop: false,
        stopOnLastSlide: true,
        on: {
            slideChangeTransitionStart: function () {
                if (this.activeIndex == 0) {
                    $('.bigImg').hide();
                    $('#list').show();
                    showbig = false;
                    pageIndex++
                    if (pageIndex >= list.length) {
                        pageIndex = 0
                    }
                    createImage();
                    lunsss();
                    mySwiper.destroy();
                }
            },
            slideChangeTransitionEnd: function () {
                var _this = this;
                speak(list[pageIndex][_this.activeIndex].audio);
            },
        },
    })
    swiperIsRunning = true;
}
