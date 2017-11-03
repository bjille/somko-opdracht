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

	    var result;
		var data;
		$("#datatbody").empty();

		$.getJSON("bevolkingssamenstellingoverzicht.json", function(json){
	    data = json;
	    var tbl_body = "";
	    //$("#datatbody").append("<th>" + "period" + "</th>");
	    $.each(selectionarray, function(i,item){
			$("#datatbody").append("<th>" + item + "</th>");

	    });
	    //$("#datatbody").append("</tr>");
	    //$("#datatbody").append("<tr><th>" + "period" + "</th><th>" + selectionarray[0] + "</th></th>");
	    
	    $.each(data, function(i, item) {
	    	var tbl_row = "";

	    	$.each(this, function(k , v) {
	    		$.each(selectionarray, function(k2,v2){
	    			if (k == v2) {
	    				tbl_row += "<td>"+v+"</td>";
	    			}
				
				});
	    	})

		    tbl_body += "<tr>"+tbl_row+"</tr>";
		});	

		$("#datatable").addClass('table table-striped');
		//$("#datatable").html("<tbody>" + tbl_body + "</tbody>");
		//$("#datatbody").html(header + tbl_body);
		$("#datatbody").append(tbl_body);
		});
	});


});