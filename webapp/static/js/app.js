function sendSMS(e){var t=$(".section-intro__form.-entry"),o=$(".section-intro__form.-success"),n=$(".section-intro__form.-fail"),s=e.phone.value,i={tags:[],channel:"Website",feature:"TextMeTheApp",data:{foo:"bar"}},f={},a=function(e,s){e?n.show():(t.hide(),n.hide(),o.show())};branch.sendSMS(s,i,f,a),e.phone.value=""}window.shyft={curSlide:1},$.fn.handleFeatureSlides=function(){function e(){var e=$(window).height(),t=Math.floor($(window).height()/1.65);console.log("resize this guy"),console.log(Math.floor(t)),e>1200&&(e=1200),o.css("min-height",function(){return e+60}),$(".features-item img").each(function(e,o){console.log($(o)),$(o).show(),$(o).height(t)})}function t(e){console.log(e),n.attr("class",""),n.addClass("features-top -slide"+e),s.each(function(t,o){$(o).hide(),$(o).hasClass("features-controls__slide"+e)&&$(o).fadeIn()}),i.each(function(t,o){console.log($(o)),$(o).hide(),$(o).hasClass("features-slide"+e)&&($(".features-item").each(function(e,t){$(t).css("transform","translateY(100%)")}),$(o).show(),$(".features-item",$(o)).each(function(e,t){0===e?window.setTimeout(function(){$(t).css("transform","translateY(0)")},100):1===e?window.setTimeout(function(){$(t).css("transform","translateY(0)")},200):2===e&&window.setTimeout(function(){$(t).css("transform","translateY(0)")},300)}))})}var o=$(this),n=$(".features-top",o),s=$(".features-controls__text p",o),i=$(".feature-slide",o),f=$(".features-controls__prev",o),a=$(".features-controls__next",o);console.log(this),f.click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:o.offset().top+30},0),1===window.shyft.curSlide?window.shyft.curSlide=3:window.shyft.curSlide=window.shyft.curSlide-1,t(window.shyft.curSlide)}),a.click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:o.offset().top+30},0),3===window.shyft.curSlide?window.shyft.curSlide=1:window.shyft.curSlide=window.shyft.curSlide+1,t(window.shyft.curSlide)}),e(),$(window).resize(function(){e()})},$(function(){window.setTimeout(function(){$(".intro-shiffy").addClass("-show-shiffy").delay(500).queue(function(e){$(".intro-shiffy__quote").addClass("-animate"),e()})},800),window.setTimeout(function(){$(".intro-shiffy__quote-text").show()},1600),$(".section-features").handleFeatureSlides(),$(window).resize(function(){})});