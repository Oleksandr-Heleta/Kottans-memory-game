const
    IMAGE_URL = ['./img/cat1.png',
        './img/cat2.png',
        './img/cat3.png',
        './img/cat4.png',
        './img/cat5.png',
        './img/cat6.png',
        './img/cat7.png',
        './img/cat8.png',
        './img/cat9.png'];


function templateStr(tpl, attributes) {
    for (var i in attributes) {
        if (attributes.hasOwnProperty(i)) {
            tpl = tpl.replace('{{' + i + '}}', attributes[i]);
        }
    }
    return tpl;
};
