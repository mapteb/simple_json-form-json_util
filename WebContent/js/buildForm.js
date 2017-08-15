//https://github.com/mapteb/simple_json-form-json_util
function buildForm(_jsonObj){
	//for each form element
	$("#mdlRoot").find(".frmElemCls").each( function(n, nth){
		var tgnm = $(this).prop("tagName").toLowerCase();
        //of tagname input, select or textarea
		if(tgnm=='input'||tgnm=='select'||tgnm=='textarea'){
				var tgtyp = '';
				var nm = "";
				if( $(this).attr("type" )!=undefined ){
					
				     tgtyp = $(this).attr("type" ).toLowerCase();
				}
				if( $(this).attr("name" )!=undefined ){
					
				     nm = $(this).attr("name" );
				}
				//app
				var $v = $(nth);
		        if(_jsonObj[nm]!=undefined){
					 if(tgnm=='select'){
						 var opt = $v.html();
						var jsnObjLoc = _jsonObj[nm];
						 $.each(jsnObjLoc, function(i,itm){
							 var $optg = $(opt).val(itm.value).text(itm.name);
							 $v.append($optg);
						 });
					 }
	                 if(tgtyp=="checkbox"||tgtyp=="radio"){
						 var $vLoc = $v;
						var jsnObjLoc = _jsonObj[nm];
						 var str = "";
						 $.each(jsnObjLoc, function(i,itm){
							 var $optg = $vLoc.val(itm.value);
	                         str += $optg.prop("outerHTML")+itm.name+' &nbsp; &nbsp; ';
						 });
	                     $v.prop("outerHTML",str); 							 
					 }
				}
			}
		});
}
	



	


