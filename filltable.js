$(document).ready(function(){

	
    
    $("#datatable").append("<tr><td>sno</td><td>name</td></tr>")
    
    var par1 = "bev_tot";
    var result;
	var data;
		$.getJSON("bevolkingssamenstellingoverzicht.json", function(json){
	    data = json;
	    $.each(data, function(i, item) {
		    //alert(data[i].par1)
			var obj = data[i];
		    //console.log(data[i].geoitem);
		    var $tr = $('<tr>').append(
            $('<td>').text(obj.geoitem),
            $('<td>').text(obj[par1])

        ); console.log($tr.wrap('<p>').html());
		    //console.log(obj.geoitem);
		    //console.log(obj[par1]);
		});	

	$("button").click(function(){
		$("p").html("Hello world")

	});
	$('#thetable tr').not(':first').not(':last').remove();
var html = '';
for(var i = 0; i < data.d.length; i++)
            html += '<tr><td>' + data.d[i].FirstName + '</td><td>' + data.d[i].Age + '</td></tr>';
$('#thetable tr').first().after(html);

	});
$.getJSON(url , function(data) {
    var tbl_body = "";
    var odd_even = false;
    $.each(data, function() {
        var tbl_row = "";
        $.each(this, function(k , v) {
            tbl_row += "<td>"+v+"</td>";
        })
        tbl_body += "<tr class=\""+( odd_even ? "odd" : "even")+"\">"+tbl_row+"</tr>";
        odd_even = !odd_even;               
    })
    $("#target_table_id tbody").html(tbl_body);
});


});