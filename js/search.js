$(function(){
    var searchCallback = function searchCallback(info){
        var results = $('.response');
        var frame = null;
        var img = null;

        info.results.forEach(function(el){
            frame = $('<div></div>');
            img = $('<img>');
            img.attr('src', el.itemurl);

            frame.append(img);
            results.append(frame);
        });
    };

    var request = function request(e){
        var $query = $('input').val();

        $.ajax({
            url: 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=' + $query,
            method: 'GET',
            success: searchCallback,
            error: function() {
                console.log('Error!');
            }
        });
    };

    $('button').on('click', request);

});