$('.btnshare').click(function (e) {
  e.preventDefault();
  if (
    $('.share_icons').css('visibility') ==
    'hidden'
  )
    $('.share_icons').css(
      'visibility',
      'visible'
    );
  else
    $('.share_icons').css('visibility', 'hidden');
});

function fbshareit(imgname) {
  //var url="https://berryaddis.com/bgilast3/"; //Set desired URL here
  //var img="https://berryaddis.com/bgilast3/" + imgname; //Set Desired Image here

  var url = imgname;
  var totalurl = url;
  //var heading=document.getElementsByClassName(title)[0].innerHTML;

  //alert(newscontent);
  //window.open ('http://www.facebook.com/sharer/sharer.php?quote='+ heading +'&u='+totalurl+'&p[summary]=','','width=1336, height=768, scrollbars=yes, resizable=no');
  window.open(
    'http://www.facebook.com/sharer/sharer.php?u=' +
      totalurl,
    '',
    'width=1336, height=768, scrollbars=yes, resizable=no'
  );
}

function tshareit(imgname) {
  //var url="https://berryaddis.com/bgilast3/"; //Set desired URL here
  //var img="https://berryaddis.com/bgilast3/" + imgname; //Set Desired Image here
  var url = imgname;
  var totalurl = url;

  //var heading=document.getElementsByClassName(title)[0].innerHTML;

  //alert(newscontent);
  window.open(
    'https://www.twitter.com/share?url=' +
      totalurl,
    '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
  );
}

function lnshareit(imgname) {
  //var url="https://berryaddis.com/bgilast3/"; //Set desired URL here
  //var img="https://berryaddis.com/bgilast3/" + imgname; //Set Desired Image here
  var url = imgname;
  var totalurl = url;

  //var heading=document.getElementsByClassName(title)[0].innerHTML;

  //alert(newscontent);
  window.open(
    'https://www.linkedin.com/shareArticle?url=' +
      totalurl,
    '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'
  );
}
