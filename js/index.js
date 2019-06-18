/**
 * Created by chenshanshan on 2019/5/30.
 */
$(function () {
    //��ʼ��fullpage���
    //1. ����ÿһ����Ļ�ı�����ɫ
    //2. ������Ļ���ݵĶ��뷽ʽ    Ĭ���Ǵ�ֱ���е�    �ĳɶ�������
    //3. ���õ��� ����ָʾ�� ������
    //4. ��������ĳһ����ʱ��  �ص�����
    $(".container").fullpage({
        /*���ò���*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad: function (link, index) {
            //index ��� 1 ��ʼ  ��ǰ�������
            //console.log(index);
            $('.section').eq(index - 1).addClass('now');
        },
        //�뿪ĳһ��ҳ���ʱ�򴥷�
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
                    //ǰ�᣺img display:none;
                    //$(this).delay(i*0.5*1000).fadeIn();
                    //�� img opacity:0;
                    $(this).css("transition-delay", i * 0.5 + "s");
                });
            }

        },
        //����������ʼ��ϻ��߲��������Ⱦ���
        afterRender: function () {
            //thisû��api����
            //console.log(this);

            //jQuery�����ʼ��ʱ���װ�������
            //1. jQuery����ķ�װ $.fn.fullpage=function(){}
            //2. jQuery����û�еķ���ͨ��$.fn�ķ�ʽ׷�ӷ���  ��Ϊ�ǲ������
            //3. ���磺$.fn.src = function(){ return this.attr('src')  ѡ��˭this��jQuery���󣩾�ִ��˭ }

            //��������л���һҳ
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            //���������Ĺ��ﳵ����������ִ���ջ���ַ�Ķ���
            $('.screen04 .cart').on('transitionend', function () {
                //console.log("over");
                //:last  :first  :visible  :hidden  :checked  :selected  jQuery��չѡ����
                $('.screen04 .address').show().find('img:last-child').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });

            //�ڰ�������
            //1. ��ָ������궯
            $('.screen08').on("mousemove", function (e) {
                $(this).find('.hand').css({
                    left: e.clientX - 190,
                    top: e.clientY - 20
                });
            }).find('.again').on('click',function(){
                //2. �������һ��ʱ�����ö��������ص�һҳ
                //�����Ľ��й���
                //2.1 ��now ��
                //2.2 ��leaved ��
                //2.3 ��show ��
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                //2.4 ��class���� �������һ��style����
                //2.5 ��jQuery���� �������һ��style����
                $('.content [style]').removeAttr('style');

                //���ص�һҳ
                $.fn.fullpage.moveTo(1);
            });

        },
        //ҳ���л���ʱ��  Ĭ����700����
        scrollingSpeed: 1000
    });
});
