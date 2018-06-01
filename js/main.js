$(function(){
  // 商城页面
  $('.list.prods li').each(function(idx,el){
    $(el).click(function(){
      window.location.href = "mallSub.html"
    })
    $(el).find('.go').click(function(e){
      e.stopPropagation()
      // toast('兑换成功')
      $('.showItems').show(300)
      $('.showItems-mask').show(300)
      $('.showItems-info').addClass('active')
    })
  })
  $('.showItems-mask').click(function(e){
    e.stopPropagation()
    hideMask()
  })

  function hideMask(){
    $('.showItems-mask').hide(300)
    $('.showItems-info').removeClass('active')
    setTimeout(function(){
      $('.showItems').hide(300)
    },500)
  }

  // 星球基地  排行榜
  $('.rank').each(function(idx, el){
    $(el).find('h4 a').click(function(){
      console.log('a')
      $('.rank').eq(Math.abs(idx - 1)).show().siblings('.rank').hide()
    })
  })
})

// toast
function toast(text, value){
  if(value.length < 1){
    $('body').append('<div class="toast">'+ text +'</div>')
    $('.toast').show(300)
    setTimeout(function(){
      $('.toast').hide(300)
    },1000)
  }
}