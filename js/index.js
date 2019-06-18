/**
 * Created by chenshanshan on 2019/5/30.
 */
$(function () {
    //初始化fullpage组件
    //1. 设置每一个屏幕的背景颜色
    //2. 设置屏幕内容的对齐方式    默认是垂直居中的    改成顶部对齐
    //3. 设置导航 设置指示器 点容器
    //4. 监听进入某一屏的时间  回调函数
    $(".container").fullpage({
        /*配置参数*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function (link, index) {
            //index 序号 1 开始  当前屏的序号
            //console.log(index);
            $('.section').eq(index - 1).addClass('now');
        },
        //离开某一个页面的时候触发
        onLeave: function (index, nextIndex, direction) {
            //console.log("ok");
            var currentSection = $('.section').eq(index - 1);
            if (index == 2 && nextIndex == 3) {
                currentSection.addClass('leaved');
            } else if (index == 3 && nextIndex == 4) {
                currentSection.addClass('leaved');
            } else if (index == 5 && nextIndex == 6) {
                //currentSection.removeClass('now').addClass('leaved');
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
            } else if (index == 6 && nextIndex == 7) {
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    // $(item)=$(this);
                    //前提：img display:none;
                    //$(this).delay(i*0.5*1000).fadeIn();
                    //当 img opacity:0;
                    $(this).css("transition-delay", i * 0.5 + "s");
                });
            }

        },
        //最好在组件初始完毕或者插件内容渲染完毕
        afterRender: function () {
            //this没有api方法
            //console.log(this);

            //jQuery插件初始的时候封装这个方法
            //1. jQuery插件的封装 $.fn.fullpage=function(){}
            //2. jQuery本身没有的方法通过$.fn的方式追加方法  认为是插件方法
            //3. 例如：$.fn.src = function(){ return this.attr('src')  选择谁this（jQuery对象）就执行谁 }

            //点击更多切换下一页
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            //当第四屏的购物车动画结束后执行收货地址的动画
            $('.screen04 .cart').on('transitionend', function () {
                //console.log("over");
                //:last  :first  :visible  :hidden  :checked  :selected  jQuery扩展选择器
                $('.screen04 .address').show().find('img:last-child').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });

            //第八屏功能
            //1. 手指跟着鼠标动
            $('.screen08').on("mousemove", function (e) {
                $(this).find('.hand').css({
                    left: e.clientX - 190,
                    top: e.clientY - 20
                });
            }).find('.again').on('click',function(){
                //2. 点击再来一次时，重置动画并返回第一页
                //动画的进行过程
                //2.1 加now 类
                //2.2 加leaved 类
                //2.3 加show 类
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                //2.4 加class属性 后果：加一个style属性
                //2.5 加jQuery方法 后果：加一个style属性
                $('.content [style]').removeAttr('style');

                //跳回第一页
                $.fn.fullpage.moveTo(1);
            });

        },
        //页面切换的时间  默认是700毫秒
        scrollingSpeed: 1000
    });
});
