$(function(){
 
$('.search').on('click',function(e){
	
		$('.header-inner .nav .daohang').addClass('nav0');
		$('.shousuo').addClass('shousuo0')
		$('.fanhui').addClass('fanhui1');
		e.preventDefault();
	
})
$('.fanhui').on('click',function(e){
   e.preventDefault();
	$('.header-inner .nav .daohang').removeClass('nav0');
		$('.shousuo').removeClass('shousuo0');
		$('.fanhui').removeClass('fanhui1');
})
$('.box').on('click',function(){
	$('.xialakuang').toggleClass('xialakuang1');
	$('.box1').toggleClass('box1-1');
		$('.box2').toggleClass('box2-1');
})
//banner部分的轮播图
var item=$('.banner .banner-center ul li');
var banner=$('.banner .anniu ul li');
var moving=false;
var move=function(n,dir){

    var index=$('.banner .banner-center .active');
        moving=true;
    index.addClass(dir)
    .delay(600)
    .queue(function(){
      moving=false;
        $(this).removeClass('active')
        .removeClass(dir)
        .dequeue();
       })
     var op=(dir==='left')?'right':'left';
       $(n).addClass(op)
       //强制动画
       $(n).get(0).offsetWidth;
       $(n).removeClass(op)
       .addClass('active')
       banner.removeClass('anniu0').eq(item.index(n)).addClass('anniu0')
     }
  var zuo=$('.btn .btn-left');
  var you=$('.btn .btn-right');
  zuo.on('click',function(){
    if(moving){
            return;
           }
       var index=$('.banner .banner-center .active');
       if(index.next().length){
          var next=index.next();
       }else{
          var next=item.eq(0);
       }
     
       move(next,'right')
    
      
  })
  you.on('click',function(){
    if(moving){
            return;
           }
      var index=$('.banner .banner-center .active');
       if(index.prev().length){
          var next=index.prev();
       }else{
          var next=item.eq(-1);
       }
     
       move(next,'left')
    
       
  })
   
  banner.on('click',function(e){
        e.preventDefault;
        
      var index=$('.banner .banner-center .active');
      var num=item.index(index);
      var num1=$(this).index();
      if(num==num1){
          return
        }
      //三元表达式
      var d=(num>num1)?'right':'left';
      move(item.eq(num1),d)

  })
  var t=setInterval(function(){
      you.trigger('click')
  } ,2000)
  $('.banner').on('mouseover',function(){
      clearInterval(t)
  })
  $('.banner').on('mouseout',function(){
      t=setInterval(function(){
      you.trigger('click')
  } ,2000)
  })


























//选项卡

$('.footer-1 h3').on('click',function(){
   if($('.footer').outerWidth(true)>768){
      
      return;
   }
   
   $(this).next().toggleClass('xuanka');
  /* $(this).find('.jiahao1').toggleClass('jiahao0')
  $(this).find('.jiahao2').toggleClass('jiahao0')*/
   
})
$('.jiahao').on('click',function(){
  $(this).find('.jiahao1').toggleClass('jiahao0')
  $(this).find('.jiahao2').toggleClass('jiahao0')
})













})