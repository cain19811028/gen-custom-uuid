function gen_uuidv4(){
    var d = new Date().getTime();
    var template = $("#template").val();
    var count = $("#count").val();
    var result = [];
    for(var i = 0; i < count; i++){
        var uuid = template.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        result.push(uuid + "<br>");
    }
    $("#result").html(result);
}