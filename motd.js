var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET', 'https://mcapi.us/server/status?ip=82.124.247.224&port=41738', true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            var motd = obj.motd;
			document.getElementById("MOTD").innerHTML = motd;
         }
    }
};
xmlhttp.send(null);