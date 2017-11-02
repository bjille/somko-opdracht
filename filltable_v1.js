$(document).ready(function(){

	
    
    $("#datatable").append("<tr><td>sno</td><td>name</td></tr>")
    $("#datatable").addClass('table table-striped');

	$("button").click(function(){
		$("p").html("Hello world") 

    var par1 = "bev_tot";
    var result;
	var data;
		$.getJSON("bevolkingssamenstellingoverzicht.json", function(json){
	    data = json;
	    var tbl_body = "";
	    $.each(data, function(i, item) {
	    	var tbl_row = "";

	    	$.each(this, function(k , v) {
	    		if (k == par1 || k == "period") {
	    			tbl_row += "<td>"+v+"</td>";
	    		}
            
        	})
	    	tbl_body += "<tr>"+tbl_row+"</tr>";
		    //alert(data[i].par1)
			var obj = data[i];
		    //console.log(data[i].geoitem);
		    var $tr = $('<tr>').append(

            $('<td>').text(obj.geoitem),
            $('<td>').text(obj[par1])

        ); console.log($tr.wrap('<p>').html());
		    //console.log(obj.geoitem);
		    //console.log(obj[par1]);
		    tbl_body += "<tr>"+tbl_row+"</tr>";
		});	
		$("#datatable").addClass('table table-striped');
		$("#datatable").html(tbl_body);



	});
	$('#thetable tr').not(':first').not(':last').remove();
var html = '';
for(var i = 0; i < data.d.length; i++)
            html += '<tr><td>' + data.d[i].FirstName + '</td><td>' + data.d[i].Age + '</td></tr>';
$('#thetable tr').first().after(html);

	});


});