

$(document).ready(function(){
  

  $('#md_menu').load(config.md_file_path + '/' + config.menu_page, function(){
    $('#menu').html(htmlUnescape(marked($('#md_menu').html()), mkdOpt));  
  });

  var p = getURLParameter('page');
  
  if(p && getURLParameter('page').split('#')[0]) {
    p = getURLParameter('page').split('#')[0];
    $('#pagename').html(p.split('.md')[0]);
    
    $('#md').load(config.md_file_path + '/' + p, function(){
      $('#page').html(htmlUnescape(marked($('#md').html(), mkdOpt))); 
      $('#page a').each(function(){
        $(this).append('<img width="15px" src="images/link.png"/>');
      });
    });

    
  } else {
    $('#pagename').html('Welcome');
    
    $('#md').load(config.md_file_path + '/' + config.welcome_page, function(){
      $('#page').html(htmlUnescape(marked($('#md').html())));  
    });
  }

  $('#show').click(function() { 
    $.blockUI({ 
      message: $('#md'), 
      onOverlayClick: $.unblockUI,
      css: { 
        border: 'none', 
        padding: '15px', 
        backgroundColor: '#000', 
        '-webkit-border-radius': '10px',  
        '-moz-border-radius': '10px', 
        opacity: .8, 
        color: '#fff', 
        "vertical-align": "left",
        top:  "30px",
        left: ($(window).width() - 810) /2 + 'px', 
        width: '810px' 
      }
    }); 
  });

  $('#edit').click(function(){
    var edit_url = 'https://github.com/' + config.user + '/' + config.project + '/edit/' + 'gh-pages/' + config.md_folder_name + '/' + (p?p:config.welcome_page);
    alert(edit_url);
    window.open(edit_url);
  });

  


});

var mkdOpt = {
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  langPrefix: 'language-',
  highlight: function(code, lang) {
    if (lang === 'js') {
      return highlighter.javascript(code);
    }
    return code;
  }
};

function getURLParameter(name) {
  var u = decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
  );

  if(u == 'null' || u == 'NULL') 
    return null;
  else
    return u;
}

function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

function htmlUnescape(value){
    return String(value)
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}