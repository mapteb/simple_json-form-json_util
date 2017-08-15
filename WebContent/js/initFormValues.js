//https://github.com/mapteb/simple_json-form-json_util
function initFormVals(_jsonObj){
	//for each form tagtype
	$("#mdlRoot").find(".frmElemCls").each( function(n, nth){
		var tgnm = $(this).prop("tagName").toLowerCase();
		if(tgnm=='input'||tgnm=='select'||tgnm=='textarea'){
			var tgtyp = '';
			var nm = "";
			if( $(this).attr("type" )!=undefined ){
				
			     tgtyp = $(this).attr("type" ).toLowerCase();
			}
			if( $(this).attr("name" )!=undefined ){
				
			     nm = $(this).attr("name" );
			}
			//for every key in the model2form json 
			//if the key matches the name attr of the tag 
			var $v = $(nth);
	        if(_jsonObj[nm]!=undefined){
				 if(tgnm=='select'){
							 var opt = $v.html();
							var jsnObjLoc = _jsonObj[nm];
							 $.each(jsnObjLoc, function(i,itm){
								 $v.find('option').each(function(){
									 if( $(this).attr("value")==itm )
								      $(this).prop("selected", "selected");
							     });
							 });
					 }
	                 if(tgtyp=="checkbox"){
						 var $vLoc = $v;
						var jsnObjLoc = _jsonObj[nm];
						 var str = "";
						 $.each(jsnObjLoc, function(i,itm){
								 if( $v.attr("value")==itm )
							         $v.prop("checked", "checked");
						 });
	
					 }
	                 if(tgtyp=="radio"){
								 if( $v.attr("value")==_jsonObj[nm] )
							         $v.prop("checked", true);
					 }
	                 if(tgnm=="input" && tgtyp=="text"){
						$v.val(_jsonObj[nm]);
	                 }
	                 if( tgnm=="textarea"){
							$v.text(_jsonObj[nm]);
	                 }
	
				
			
		       }
		   }

		});

}
	


