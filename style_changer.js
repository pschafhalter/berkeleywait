function make_style_pairing(header_style, body_style) {
    var obj = {
        "header_style" : header_style,
        "body_style" : body_style
    }
    return obj;
}


styles_list = [
    make_style_pairing("color:#003262;","background-color:#FDB515;background-image: none;"),
    make_style_pairing("color:#FDB515;","background-color:#003262;background-image: none;"),
    make_style_pairing("color:#003262;","background-image:url(https://upload.wikimedia.org/wikipedia/commons/7/7f/UCBerkeleyCampus.jpg);"),
    make_style_pairing("color:#003262;","background-image:url(http://whitneylab.berkeley.edu/images/berkeleycampus.jpg);"),
    make_style_pairing("color:#FDB515;","background-image:url(http://www.thesfnews.com/wp-content/uploads/2015/07/sather_gate_night.png);"),
    make_style_pairing("color:#3B7EA1;","background-image:url(https://s3.amazonaws.com/advancedcms/zJ6vk6MWRW4ZciYemCpL_website6.jpg);"),
    make_style_pairing("color:#888888","background-image:url(http://www.greatvaluecolleges.net/wp-content/uploads/2014/07/UC-BERKELEY.jpg);")
];

function get_random_style_pairing() {
    var i = Math.floor(styles_list.length*Math.random());
    return styles_list[i];
}