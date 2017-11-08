var dropdowndata;

var data = "";

var catarraysel;

var sectorarray = [];

var sectorarraysel;

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function FillGeoarray() {

}


function Resetcatarraysel() {
	catarraysel = [];
	catarraysel.push(["period"]);
	catarraysel.push(["geoitem"]);
}

$.getJSON("bevolkingssamenstellingoverzicht.json", function(json){
	data = json;
});

$.getJSON("overzichtdemografischeonderwerpen.json", function(json){
	dropdowndata = json;
});


$(document).ready(function(){

	Resetcatarraysel();
    
    $("#datatable").addClass('table table-striped');

    $.each(dropdowndata, function(i,item) {
    	$('#sel1').append("<option>" + item.Naam + "</option>");
    });

    $.each(data, function(i, item) {
		//sectorarray.push(item.geoitem);
		//console.log($.inarray(item.geoitem, sectorarray));
		if(($.inArray(item.geoitem,sectorarray)) == -1) {
			$('#sel2').append("<option>" + item.geoitem + "</option>");
			sectorarray.push(item.geoitem);
	}
	
	});

	$("#sel1").change(function() {
		var selection = $("#sel1").val();
		$("#result").empty();
		Resetcatarraysel();
		//var x = $("#sel1 option:selected").text();
		//catarraysel = [];
		//catarraysel.push(["period"]);
		//catarraysel.push(["geoitem"]);
		$.each(selection, function(i,field){
			//alert(field)
			$.each(dropdowndata, function(i,item){
				if (item.Naam == field) {
					code = this.Onderwerpcode;
					catarraysel.push([code]);
					//catarraysel.push(i++);
					//catarraysel = $.makeArray(dropdowndata);
					$("#result").append("<p>" + item.Beschrijving + " <b>(" + item.Onderwerpcode + ")</b>" +"</p>");
					
				}
			});
		});
	});
	
	$("#sel2").change(function() {
		var selection = $("#sel2").val();
		sectorarraysel = [];
		$.each(selection, function(i,item){
			sectorarraysel.push(item);
		});
	});

	$("button").click(function(){	

	    var result;
		$("#datathead").empty();
		$("#datatbody").empty();
		var tbl_body = "";

	    if (catarraysel.length == 2 && sectorarraysel.length == 0){
	    	alert("geen parameters geselecteerd");

		    } else  {
		    $.each(catarraysel, function(i,item){
				$("#datathead").append("<th>" + item + "</th>");
				});

			    $.each(data, function(i, item) {
			    	var tbl_row = "";
			    	if(($.inArray(item.geoitem,sectorarraysel)) != -1) {
			    		$.each(this, function(k , v) {
			    		
				    		$.each(catarraysel, function(k2,v2){
				    			if (k == v2) {
				    				tbl_row += "<td>"+v+"</td>";
				    			}
							});
				    	})
			    	}

				    tbl_body += "<tr>"+tbl_row+"</tr>";
				
				});	
			}	

		$("#datatable").addClass('table table-striped');
		$("#datatbody").append(tbl_body);

	});


});