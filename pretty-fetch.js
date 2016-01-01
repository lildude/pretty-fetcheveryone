function changeSourceAll(original, newimg) {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].src.indexOf(original) !== -1) {
            images[i].src = images[i].src.replace(original, newimg);
        }
    }
}
// This is far from efficient.
changeSourceAll("http://www.fetcheveryone.com/images/feeling_2.gif", "http://twemoji.maxcdn.com/16x16/1f60d.png");
changeSourceAll("http://www.fetcheveryone.com/images/feeling_0.gif", "http://twemoji.maxcdn.com/16x16/1f610.png");
changeSourceAll("http://www.fetcheveryone.com/images/feeling_-1.gif", "http://twemoji.maxcdn.com/16x16/1f626.png");
changeSourceAll("http://www.fetcheveryone.com/images/feeling_1.gif", "http://twemoji.maxcdn.com/16x16/1f600.png");
changeSourceAll("http://www.fetcheveryone.com/images/feeling_-2.gif", "http://twemoji.maxcdn.com/16x16/1f622.png");
//http://www.fetcheveryone.com/images/feeling_2.gif => http://twemoji.maxcdn.com/16x16/1f60d.png
//http://www.fetcheveryone.com/images/feeling_0.gif => http://twemoji.maxcdn.com/16x16/1f610.png
//http://www.fetcheveryone.com/images/feeling_-1.gif => http://twemoji.maxcdn.com/16x16/1f626.png
//http://www.fetcheveryone.com/images/feeling_1.gif => http://twemoji.maxcdn.com/16x16/1f600.png
//http://www.fetcheveryone.com/images/feeling_-2.gif => http://twemoji.maxcdn.com/16x16/1f622.png
