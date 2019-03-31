$(function () {
    //1- 动态设置ul的宽度
    // 获取.wjs-tabs 下面所有li标签，累加宽度，设置给ul
    var w = 0; //累加宽度
    $('.wjs-nav-tabs li').each(function (index, ele) {
        // jq获取width
        // widht();         content 
        // innerWidth()     content + padding
        // outerWidth();    content + padding + border
        // outerWidth(true) content + padding + border + margin
        w += $(ele).outerWidth(true);
        console.log(w);   
    });

    // 设置给ul 
    $('.wjs-nav-tabs').width(w);
});