

$(document).ready(function() {

//共通パーツ吐き出し
$('.nav_wrap').load('./htmlparts/header.html');
$('.footer').load('./htmlparts/footer.html');

  //商品一覧表示
  $.ajax({
    url: 'xml/item_info.xml',
    type: 'GET',
    dataType: 'xml',
  })
  .done(function(xml) {
    //console.log("ok");
    //console.log(xml);
    readXML(xml);
  })
  .fail(function() {
    console.log("error");
  });




});


function readXML(xml) {
  $(xml).find('data').each(function() {
    $('.category_item-box').append('<li data-id="'　+ $(this).find('id_no').text() +　'" class="category_item-box-detail"><a href="' + $(this).find('url').text() + '"><span><img src="images/item/' + $(this).find('img_no').text() + '.png"></span><span>' + $(this).find('img_txt').text() + '<br>¥<span class="price">' + $(this).find('cd_price').text() + '</span></span></a></li>');
    $('.category_item-box-detail:nth-child(3n)').css({'margin-right': '0'});
  });
}

jQuery(document).ready(function($) {

  //ギャラリーページアソート
  //アソートの記述
  var sort_btn = $('.side_menu_nav .side_menu_btn');
  //var sort_contens = $('.category_item-box-detail');

  sort_btn.click(function() {
    var sort_btn_id = $(this).attr('id').match(/[0-9]+/);
    //console.log(sort_btn_id);
    var sort_btn_id_no = sort_btn_id[0].toString();

    var sort_btn_id_no_text = sort_btn_id_no[0];
    $('.category_item-box-detail').hide();

    if ( 1 <= sort_btn_id_no_text <= 4) {
      $('.category_item-box-detail[data-id = "category' +　sort_btn_id_no_text　+ '"]').css('display', 'block');
      var box_no = $('.category_item-box-detail:visible').length;
      console.log(box_no);
      $('.category_item-box-detail:visible:nth-child(3)').css({'margin-right': '0'});
    }
    if ( sort_btn_id_no_text == 0) {
      $('.category_item-box-detail').css('display', 'block');
    }
    });


    //detailページ「関連商品」部分制御
    var detail_sort = $('.related>.item_box');
    detail_sort.children('.item:nth-child(3n)').each(function() {
      $(this).css('margin-right', 0 + 'px');
    });










});






