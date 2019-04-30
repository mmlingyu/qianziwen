(function PageResize() {
    (function GetSize() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//        width > 1920 ? width = 1920 : null; 
        width < 1200 ? width = 1200 : null;
        document.documentElement.style.fontSize = (width * (100 / 1920)) + "px";
        if (!window.onresize) {
            window.onresize = function() {
                onFooEndFunc(GetSize);
            }
        }
    })();
    var executionTimer;
    var onFooEndFunc = function(fn) {
        var delay = 300; // 鏍规嵁瀹為檯鎯呭喌鍙皟鏁村欢鏃舵椂闂�
        if (!!executionTimer) {
            clearTimeout(executionTimer);
        }
        //杩欓噷寤舵椂鎵ц浣犵殑鍑芥暟
        executionTimer = setTimeout(function() {
            fn();
        }, delay);
    };
})();