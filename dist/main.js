(()=>{"use strict";var __webpack_modules__={138:()=>{eval("\n\n$(function(){\n    load_effect();\n    $(window).scroll(function (){\n        scroll_effect();\n    });\n});\n \n//ふわっとロード\nfunction load_effect(){\n    var tt = $(window).scrollTop();\n    var hh = $(window).height();\n\n    $('.load-fade').each(function(){\n        var yy = $(this).offset().top;\n        if (tt > yy - hh){\n            $(this).addClass('done');\n        }\n    });\n    $('.load-fade2').each(function(){\n        var yy = $(this).offset().top;\n        if (tt > yy - hh){\n            $(this).addClass('done');\n        }\n    });\n    $('.load-fade3').each(function(){\n        var yy = $(this).offset().top;\n        if (tt > yy - hh){\n            $(this).addClass('done');\n        }\n    });\n    $('.load-up').each(function(){\n        var yy = $(this).offset().top;\n        if (tt > yy - hh){\n            $(this).addClass('done');\n        }\n    });\n\n}\n \n//ふわっとスクロール\nfunction scroll_effect(){\n    var tt = $(window).scrollTop();\n    var hh = $(window).height();\n    let sptop = $('#fv').height();\n\n    $('.scroll-fade').each(function(){\n        var yy = $(this).offset().top+380;//効果発生開始タイミングを操作したい場合は数値を変更する\n        if (tt > yy - hh){\n            $(this).addClass('done');\n        }\n    });\n    $('.scroll-fade2').each(function(){\n        var yy = $(this).offset().top+480;//効果発生開始タイミングを操作したい場合は数値を変更する\n        if (tt > yy - hh){\n            $(this).addClass('done');\n        }\n    });\n    $('.scroll-fade3').each(function(){\n        var yy = $(this).offset().top+580;//効果発生開始タイミングを操作したい場合は数値を変更する\n        if (tt > yy - hh){\n            $(this).addClass('done');\n        }\n    });\n    $('.scroll-up').each(function(){\n        var yy = $(this).offset().top+400;//効果発生開始タイミングを操作したい場合は数値を変更する\n        if (tt > yy - hh){\n            $(this).addClass('done');\n        }\n    });\n    if(tt > sptop){\n        $('.sp__link').addClass('btmposition');\n    }else{\n        $('.sp__link').removeClass('btmposition');\n    }\n}\n\n\n\n\nconst smoothScrollTrigger = document.querySelectorAll('a[href^=\"#\"]');\n  for (let i = 0; i < smoothScrollTrigger.length; i++){\n    smoothScrollTrigger[i].addEventListener('click', (e) => {\n      e.preventDefault();\n      let href = smoothScrollTrigger[i].getAttribute('href');\n       let targetElement = document.getElementById(href.replace('#', ''));\n      const rect = targetElement.getBoundingClientRect().top;\n      const offset = window.pageYOffset;\n      const gap = 0;\n      const target = rect + offset - gap;\n      window.scrollTo({\n        top: target,\n        behavior: 'smooth',\n      });\n    });\n  }\n\n\n  \n\n//# sourceURL=webpack://ballet/./src/index.js?")}},__webpack_exports__={};__webpack_modules__[138]()})();