
function changeSourceAll(original, newimg) {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].src.indexOf(original) !== -1) {
            images[i].src = images[i].src.replace(original, newimg);
        }
    }
}

(function(){

    var loc = document.location.href;

    /* Training log specific javascript actions */
    if(/fetcheveryone\.com\/training\.php/.test(loc)){

        /* */
        document.addEventListener('DOMSubtreeModified', injectCSS, false);

        function injectCSS(){
            if(document.head){
                document.removeEventListener('DOMSubtreeModified', injectCSS, false);
                var link = document.createElement("link");
                link.href = chrome.extension.getURL("font-awesome.min.css");
                link.type = "text/css";
                link.rel = "stylesheet";

                document.head.appendChild(link);
            }
        }

        var images = document.getElementsByTagName('img');


        for (var i = 0; i < images.length; i++) {
          var trash = document.createElement('i');
          trash.className = 'fa fa-trash';
          if (images[i].src == "http://www.fetcheveryone.com/images/icons/delete.png") {
            images[i].parentNode.replaceChild(trash, images[i]);
          }
        }

        // Change the images for emojis. This is far from efficient.
        changeSourceAll("http://www.fetcheveryone.com/images/feeling_2.gif", "http://twemoji.maxcdn.com/2/svg/1f60d.svg");
        changeSourceAll("http://www.fetcheveryone.com/images/feeling_0.gif", "http://twemoji.maxcdn.com/2/svg/1f610.svg");
        changeSourceAll("http://www.fetcheveryone.com/images/feeling_-1.gif", "http://twemoji.maxcdn.com/2/svg/1f626.svg");
        changeSourceAll("http://www.fetcheveryone.com/images/feeling_1.gif", "http://twemoji.maxcdn.com/2/svg/1f600.svg");
        changeSourceAll("http://www.fetcheveryone.com/images/feeling_-2.gif", "http://twemoji.maxcdn.com/2/svg/1f622.svg");
        //http://www.fetcheveryone.com/images/feeling_2.gif => http://twemoji.maxcdn.com/16x16/1f60d.png
        //http://www.fetcheveryone.com/images/feeling_0.gif => http://twemoji.maxcdn.com/16x16/1f610.png
        //http://www.fetcheveryone.com/images/feeling_-1.gif => http://twemoji.maxcdn.com/16x16/1f626.png
        //http://www.fetcheveryone.com/images/feeling_1.gif => http://twemoji.maxcdn.com/16x16/1f600.png
        //http://www.fetcheveryone.com/images/feeling_-2.gif => http://twemoji.maxcdn.com/16x16/1f622.png
    }

    /* Editing training page - change columns to 50% width */
    if(/fetcheveryone\.com\/training-edit\.php/.test(loc) || /fetcheveryone\.com\/training-add\.php/.test(loc)){
      document.getElementsByClassName("fespan_2_of_3")[0].className = "fecol fespan_1_of_2";
      document.getElementsByClassName("fespan_1_of_3")[0].className = "fecol fespan_1_of_2";

      /* Add my own class to various boxes */
      document.getElementsByClassName("infobox_style3")[0].className += " col-box0";
    }

})()
