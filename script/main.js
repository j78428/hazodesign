// JavaScript Document

$(document).ready(function(e) {


    /****** ToolTip 觸發 ******/
    $("[data-toggle='tooltip']").tooltip();


    /****** 弹出框功能初始化 ******/
    $(function() {
        $('[data-toggle="popover"]').popover();
    });



    /****** mobile menu 開啟/關閉 ******/
    $(".btn_menu").click(function(e) {
        $(".menu").addClass("open");
    });

    $(".btn_close_menu").click(function(e) {
        $(".menu").removeClass("open");
    });


    /****** 列表項目操作modal 開啟/關閉 ******/
    $(".btn_show_function").click(function(e) {
        $(".function_modal").addClass("show");
    });

    $(".function_modal .modal_mask").click(function(e) {
        $(".function_modal").removeClass("show");
    });

    $(".btn_close_function").click(function(e) {
        $(".function_modal").removeClass("show");
    });



    //浮動header 顯示/隱藏
    // var lastScrollY = 0;
    // window.addEventListener('scroll', function() {
    //     var newScrollY = this.scrollY;
    //     // 判斷是向上捲動，而且捲軸超過 200px
    //     if (newScrollY < lastScrollY) {
    //         $("header").addClass("floating");
    //     } else {
    //         $("header").removeClass("floating");
    //     }
    //     lastScrollY = newScrollY;
    // });



    // $(window).scroll(function() {
    //     var windowHeight = $(window).height();
    //     var scrollTop = $(window).scrollTop();
    //     if (scrollTop > windowHeight) {
    //         $("header").addClass("outside");
    //     } else {
    //         $("header").removeClass("outside");
    //     }
    // });


    

    /****** 置頂部按鈕偵測 *******/
    $(".btn_back_top").click(function() {
        // 讓捲軸用動畫的方式移動到 0 的位置
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 600);

        return false;
    });
    //超過某高度範圍顯示按鈕
    var lastScrollTop = 0;
    $(document).scroll(function() {
        //取得目前捲動的高度
        var ScrollTop = $(document).scrollTop();
        if (ScrollTop == 0) {
            $(".btn_back_top").removeClass("show");
        } else if (ScrollTop < lastScrollTop) {
            $(".btn_back_top").addClass("show");
        } else if (ScrollTop > lastScrollTop) {
            $(".btn_back_top").removeClass("show");
        }

        lastScrollTop = ScrollTop;
    });




});


/****** datepicker setting *******/
$.datepicker.regional['zh-TW'] = {
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    prevText: "上月",
    nextText: "次月",
    weekHeader: "週"
};
//將預設語系設定為中文
$.datepicker.setDefaults($.datepicker.regional["zh-TW"]);

$(function() {
    $(".birthday").datepicker({
        maxDate: '0',
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy/mm/dd',
        yearRange: '0:+100'
    });
    $(".start_date").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy/mm/dd',
        onClose: function(selectedDate) {
            $(".end_date").datepicker("option", "minDate", selectedDate);
        }
    });
    $(".end_date").datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy/mm/dd',
        onClose: function(selectedDate) {
            $(".start_date").datepicker("option", "maxDate", selectedDate);
        }
    });

});