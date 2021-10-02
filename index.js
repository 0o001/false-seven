let map = [];
function falseSeven(event) {

    if(!map) {
        if(map[0][0] == map[1][0]) {
            map = [];
        }
    }

    if (event.which == 55 || event.keyCode == 55 ||
        event.which == 13 || event.keyCode == 13) {

        map.push([event.which || event.keyCode, Date.now()]);

        if(map.length == 2) {
            if(map[0] > map[1]) {
                if(map[0][1] - map[1][1] > -20) {

                    return true;

                }
            }
            map = [];
        }

    } else {
        map = [];
    }

    return false;

}

document.querySelector('.response')
.addEventListener("keypress", function(event) {

    document.querySelector('.result').innerHTML = falseSeven(event);

});
