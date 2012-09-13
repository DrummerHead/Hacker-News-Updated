$(function(){




var $injectee = $('#stories')
  , $structure = $('#structure')
  , $structureHtml = $structure.html()
  , jsonPath = 'http://api.ihackernews.com/page'
  , jsonPathMock = 'http://mcdlr.com/hacker-news-updated/jsonMock.json'

$.ajax({
  url : jsonPath,
  dataType : 'jsonp',
  data : {
    format : 'jsonp'
  },
  timeout: 4000,
  success : function(resp){
    templateAndInject(resp);
  },
  error : function(){
    inCaseOfEmergency();
  }
});

var inCaseOfEmergency = function(){
  $.ajax({
    url : jsonPathMock,
    dataType : 'json',
    success : function(resp){
      templateAndInject(resp);
    }
  });
}

var templateAndInject = function(content){
  var compiledContent = _.template($structureHtml, {story: content.items})
  $injectee.html(compiledContent);
}




});
