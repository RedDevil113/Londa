var Share = {
  go: function(_element, _options) {
      var
          self = Share,
          options = $.extend(
              {
                  type:       'vk',    // С‚РёРї СЃРѕС†СЃРµС‚Рё
                  url:        location.href,  // РєР°РєСѓСЋ СЃСЃС‹Р»РєСѓ С€Р°СЂРёРј
                  count_url:  location.href,  // РґР»СЏ РєР°РєРѕР№ СЃСЃС‹Р»РєРё РєСЂСѓС‚РёРј СЃС‡С‘С‚С‡РёРє
                  title:      "Искушение от MAXIM и Paco Rabanne", // Р·Р°РіРѕР»РѕРІРѕРє С€Р°СЂРёРЅРіР°
                  image:      "http://pacorabannepurexs.maximonline.ru/img/share.jpg",            // РєР°СЂС‚РёРЅРєР° С€Р°СЂРёРЅРіР°
                  text:       "Искушение от MAXIM и Paco Rabanne",             // С‚РµРєСЃС‚ С€Р°СЂРёРЅРіР°
              },
              $(_element).data(), // Р•СЃР»Рё РїР°СЂР°РјРµС‚СЂС‹ Р·Р°РґР°РЅС‹ РІ data, С‚Рѕ С‡РёС‚Р°РµРј РёС…
              _options            // РџР°СЂР°РјРµС‚СЂС‹ РёР· РІС‹Р·РѕРІР° РјРµС‚РѕРґР° РёРјРµСЋС‚ РЅР°РёРІС‹СЃС€РёР№ РїСЂРёРѕСЂРёС‚РµС‚
          );

      if (self.popup(link = self[options.type](options)) === null) {
          // Р•СЃР»Рё РЅРµ СѓРґР°Р»РѕСЃСЊ РѕС‚РєСЂС‹С‚СЊ РїРѕРїР°Рї
          if ( $(_element).is('a') ) {
              // Р•СЃР»Рё СЌС‚Рѕ <a>, С‚Рѕ РїРѕРґСЃС‚Р°РІР»СЏРµРј Р°РґСЂРµСЃ Рё РїСЂРѕСЃРёРј Р±СЂР°СѓР·РµСЂ РїСЂРѕРґРѕР»Р¶РёС‚СЊ РїРµСЂРµС…РѕРґ РїРѕ СЃСЃС‹Р»РєРµ
              $(_element).prop('href', link);
              return true;
          }
          else {
              // Р•СЃР»Рё СЌС‚Рѕ РЅРµ <a>, С‚Рѕ РїС‹С‚Р°РµРјСЃСЏ РїРµСЂРµР№С‚Рё РїРѕ Р°РґСЂРµСЃСѓ
              location.href = link;
              return false;
          }
      }
      else {
          // РџРѕРїР°Рї СѓСЃРїРµС€РЅРѕ РѕС‚РєСЂС‹С‚, РїСЂРѕСЃРёРј Р±СЂР°СѓР·РµСЂ РЅРµ РїСЂРѕРґРѕР»Р¶Р°С‚СЊ РѕР±СЂР°Р±РѕС‚РєСѓ
          return false;
      }
  },

    // Р’РљРѕРЅС‚Р°РєС‚Рµ
    vk: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  "Искушение от MAXIM и Paco Rabanne",
            image:  "http://pacorabannepurexs.maximonline.ru/img/share.jpg",
            text:   "Искушение от MAXIM и Paco Rabanne",
        }, _options);

        return 'http://vkontakte.ru/share.php?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&image='       + encodeURIComponent(options.image)
            + '&noparse=true';
    },

    // РћРґРЅРѕРєР»Р°СЃСЃРЅРёРєРё
    ok: function(_options) {
        var options = $.extend({
            url:    location.href,
            text:   "Искушение от MAXIM и Paco Rabanne",
        }, _options);

        return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
            + '&st.comments=' + encodeURIComponent(options.text)
            + '&st._surl='    + encodeURIComponent(options.url);
    },

    // Facebook
    fb: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  "Искушение от MAXIM и Paco Rabanne",
            image:  "http://pacorabannepurexs.maximonline.ru/img/share.jpg",
            text:   "Искушение от MAXIM и Paco Rabanne",
        }, _options);

        return 'http://www.facebook.com/sharer.php?s=100'
            + '&p[title]='     + encodeURIComponent(options.title)
            + '&p[summary]='   + encodeURIComponent(options.text)
            + '&p[url]='       + encodeURIComponent(options.url)
            + '&p[images][0]=' + encodeURIComponent(options.image);
    },

    // Р–РёРІРѕР№ Р–СѓСЂРЅР°Р»
    lj: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            text:   '',
        }, _options);

        return 'http://livejournal.com/update.bml?'
            + 'subject='        + encodeURIComponent(options.title)
            + '&event='         + encodeURIComponent(options.text + '<br/><a href="' + options.url + '">' + options.title + '</a>')
            + '&transform=1';
    },

    // РўРІРёС‚С‚РµСЂ
    tw: function(_options) {
        var options = $.extend({
            url:        location.href,
            title:      "Искушение от MAXIM и Paco Rabanne",
        }, _options);

        return 'http://twitter.com/share?'
            + 'text='      + encodeURIComponent(options.title)
            + '&url='      + encodeURIComponent(options.url);
    },

    // Mail.Ru
    mr: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            image:  '',
            text:   '',
        }, _options);

        return 'http://connect.mail.ru/share?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&imageurl='    + encodeURIComponent(options.image);
    },

    // РћС‚РєСЂС‹С‚СЊ РѕРєРЅРѕ С€Р°СЂРёРЅРіР°
    popup: function(url) {
        return window.open(url,'','toolbar=0,status=0,scrollbars=1,width=626,height=436');
    }
};

$(document).on('click', '.social__link', function(e){
    e.preventDefault();
    Share.go(this);
});
$(document).ready(function(){

	var winW = $(window).width();
	$('.nav-menu').css('left', (winW - 1010) / 2 - 45 + 'px');
	$('.nav-bar').css('left', (winW - 1010) / 2 - 45 + 'px');

	$(window).resize(function(){
		var ww = $(window).width();
		$('.nav-menu').css('left', (ww - 1010) / 2 - 45 + 'px');
		$('.nav-bar').css('left', (ww - 1010) / 2 - 45 + 'px');
	});

	$('.nav-bar').on('click', function(){
		$('.nav-menu').addClass('nav-menu__open');
		$(this).addClass('nav-bar__close');
	});

	$('.nav-menu__close').on('click', function(){
		$('.nav-menu').removeClass('nav-menu__open');
		$('.nav-bar').removeClass('nav-bar__close');
	});

  //modal
  var modalCont = $('.modal'),
    modalOver = $('.modal-overlay');
    
  $('.button-modal').on('click',function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $(id).addClass('open');
    $(modalOver).addClass('open-overlay');
    
    var hiddenValue = $(this).parents('.hidden-input').find('.hidden-input__value').text();
    $('#info-form').val(hiddenValue);

   });

  $('.cancel').on('click',function(){
    $(modalCont).removeClass('open');
    $(modalOver).removeClass('open-overlay');
  });
  $(modalOver).on('click',function(){
    $(modalCont).removeClass('open');
    $(modalOver).removeClass('open-overlay');
  });

  //modal list down
  $('.modal-select ul').on('click', function(){
    $(this).toggleClass('modal-select__open');
    $('.modal-select__text').toggleClass('modal-select__text-remove');
  });

  //modal select
  $('.modal-select li').on('click', function(){
    $('.modal-info__list').removeClass('modal-info__list-open');
    $('.modal-select li').removeClass('modal-select__item-active');
    var attr = $(this).attr('data-salon');
    $(this).addClass('modal-select__item-active');
    $('#' + attr).addClass('modal-info__list-open');
    $('.modal-select__text span').text($(this).text());
  });

  $('.blogerss-article')
    .mouseover(function(){
      $(this).parent('.blogerss-column').css('z-index', '20');
    })
    .mouseout(function(){
      $(this).parent('.blogerss-column').css('z-index', '0');
    });

  //animation
  if ($(window).width() > 768) {
   (function($) {
      $.fn.animated = function(inEffect) {
        $(this).each(function() {
          var ths = $(this);
          ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
              ths.addClass(inEffect).css("opacity", "1");
            };
          }, {
            offset: "90%"
          });

        });
      };
    })(jQuery);
      $("h1,.banner-descr__text").animated("fadeInRight", "fadeOutDown");
      $(".blogerss-column").animated("fadeIn", "fadeOutDown");
      $(".banner-info,.animation-svg__2,.animation-svg__4,.animation-svg__7,.animation-svg__8").animated("fadeInRight", "fadeOutDown");
      $('.blogerss-share,.animation-svg__5,.animation-svg__6,.animation-svg__9,.animation-svg__10').animated("fadeInUp", "fadeOutDown");
      $("header,.footer p").animated("fadeIn", "fadeOutDown");
      $(".animation-svg__1,.animation-svg__3").animated("fadeInLeft", "fadeOutDown");
    }


});