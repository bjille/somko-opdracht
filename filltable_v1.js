var dropdowndata;

var data;

var selectionarray;

$(document).ready(function(){

    
    $("#datatable").addClass('table table-striped');


		$.getJSON("overzichtdemografischeonderwerpen.json", function(json){
	    dropdowndata = json;
		    $.each(dropdowndata, function(i,item) {
		    	$('#sel').append("<option>" + item.Naam + "</option>");
		    });
		});

	$("#sel").change(function() {
		var x = $("#sel").val();
		$("#result").empty();
		selectionarray = [];
		//var x = $("#sel option:selected").text();
		//alert(x);
		$.each(x, function(i,field){
			//alert(field)
			$.each(dropdowndata, function(i,item){
				if (item.Naam == field) {
					code = this.Onderwerpcode;
					selectionarray.push([code]);
					//selectionarray.push(i++);
					//selectionarray = $.makeArray(dropdowndata);
					$("#result").append("<p>" + item.Beschrijving + "</p>");
					
				}
			});
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
	    $("#datatbody").append("<tr><th>" + "period" + "</th><th>" + selectionarray[0] + "</th></th>");
	    
	    $.each(data, function(i, item) {
	    	var tbl_row = "";

	    	$.each(this, function(k , v) {
	    		if (k == selectionarray[0] || k == "period") {
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