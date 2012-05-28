$(function(){





// http://api.ihackernews.com/page

var content = {"nextId":null,"items":[


{"title":"Backdoor found in a China-made US military chip ","url":"http://www.cl.cam.ac.uk/~sps32/sec_news.html#Assurance","id":4030746,"commentCount":86,"points":290,"postedAgo":"5 hours ago","postedBy":"turnersr"},

{"title":"The Art Of The iOS Icon","url":"http://www.mobileinc.co.uk/2012/05/the-art-of-the-ios-icon/","id":4031157,"commentCount":16,"points":63,"postedAgo":"2 hours ago","postedBy":"muratmutlu"},

{"title":"The Once and Future Visual Programming Environment","url":"http://techcrunch.com/2012/05/27/hey-kids-get-off-my-lawn-the-once-and-future-visual-programming-environment/","id":4030665,"commentCount":12,"points":39,"postedAgo":"6 hours ago","postedBy":"NelsonMinar"},

{"title":"Remind HN: If you want feedback, add an email to your profile","url":"/comments/4030868","id":4030868,"commentCount":17,"points":61,"postedAgo":"4 hours ago","postedBy":"ekpyrotic"}


],"version":"1.0","cachedOnUTC":"\/Date(1338166120058)\/"}

var $injectee = $('#injectee')
  , $structure = $('#structure')
  , $structureHtml = $structure.html()

var compiledContent = _.template($structureHtml, {story: content.items})


$injectee.html(compiledContent );





});
