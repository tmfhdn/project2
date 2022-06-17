
const navtab = {

    init: function(){
        this.motab();
    },
    motab: function() {
        let mBtn = $(".mBtn");
        let closeBtn = $(".closeBtn");

        // 모바일 버튼 클릭
        $(mBtn).click(function(){
            $(".mNav").addClass("on");
            $(".bg-shadow").css("display", "block");
        });
        // 화면 클릭
        $(".bg-shadow").click(function(){
            $(".mNav").removeClass("on");
            $(".bg-shadow").css("display", "none");
        });
        // 닫기 버튼 클릭
        $(closeBtn).click(function(){
            $(".mNav").removeClass("on");
            $(".bg-shadow").css("display", "none");
        });
    }
}

$(document).ready(function(){
    navtab.init();
})