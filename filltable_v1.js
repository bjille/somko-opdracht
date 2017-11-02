$(document).ready(function(){

    
    $("#datatable").addClass('table table-striped');


		$.getJSON("overzichtdemografischeonderwerpen.json", function(json){
	    dropdowndata = json;
		    $.each(dropdowndata, function(i,item) {
		    	$('#sel').append("<option>" + item.Beschrijving + "</option>");
		    });
		});


	$("button").click(function(){

	    var par1 = "bev_tot";
	    var result;
		var data;

		$.getJSON("bevolkingssamenstellingoverzicht.json", function(json){
	    data = json;
	    var tbl_body = "";
	    //header = "<tr><th>" + "period" + "</th><th>" + par1 + "</th></th>";
	    $("#datatbody").append("<tr><th>" + "period" + "</th><th>" + par1 + "</th></th>");
	    
	    $.each(data, function(i, item) {
	    	var tbl_row = "";

	    	$.each(this, function(k , v) {
	    		if (k == par1 || k == "period") {
	    			tbl_row += "<td>"+v+"</td>";
	    		}
            
        	})
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
		//$("#datatable").html("<tbody>" + tbl_body + "</tbody>");
		//$("#datatbody").html(header + tbl_body);
		$("#datatbody").append(tbl_body);
		});
	});


});