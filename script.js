$(document).ready(function(){

    var gotApiUrl; 
    var gotDetailContent;
    $('#houses').on('click', 'img', function(){
        gotApiUrl = 'http://www.anapioficeandfire.com/api/houses/' + $(this).attr('id');
        // console.log(gotApiUrl); 
        gotDetailContent = '';

        // $.ajax({
        //     // url: 'https://www.anapioficeandfire.com/api/houses',
        //     url: 'https://www.anapioficeandfire.com/api/houses/' + $(this).attr('id'),
        //     type: 'GET',
        //     dataType:'json',
        //     success: function(res){

        //     }
        // });

        $.get('https://www.anapioficeandfire.com/api/houses/' + $(this).attr('id'), function(res){
            // console.log(res);
            //Add the name to the details
            gotDetailContent += '<h3>Name: ' + res.name + '</h3>'; 
            //Add the words to the details
            gotDetailContent += '<h3>Words: ' + res.words + '</h3>'; 
            // Add titles to the details
            gotDetailContent += '<h3>Titles: ';
            for (var i=0; i<res.titles.length; i++){
                gotDetailContent += res.titles[i] + ', ';
            }
            gotDetailContent += '</h3>'
            console.log(gotDetailContent);
            $('#detail_content').html(gotDetailContent);
        }, 'json');
    });
});