
	//https://github.com/mapteb/simple_json-form-json_util
		
		function submitForm(){
		var jsonObj2 = {};
		$("#mdlRoot").find(".frmElemCls").each(function(i, ith){
			var tgnm = $(ith).prop("tagName").toLowerCase();
			//alert($(this).prop("tagName"));
			//alert(tgnm);
			var tgtyp = "";
			if($(ith).attr("type")!=undefined){
				tgtyp = $(ith).attr("type").toLowerCase();
			}
			//if this tagnm matches with any key in jsonObj2
			var nm = $(ith).attr("name"); 
			//alert(tgnm);
			if(nm!=undefined){
				if(tgnm=="input" && tgtyp=="text" || tgnm=="textarea" ){
					var it = {};
					jsonObj2[nm] = $(ith).val();
					 //jsonObj2.add(it);
				}
				else if(tgnm=="select"){
					var $selopts = [];
					$(ith).find("option:selected").each(function(j, jth){
						//console.log( $(ith).prop("tagName")+','+$(jth).val()+','+$(jth).text() );
						$selopts.push($(jth).val());
					});
					jsonObj2[nm] = $selopts;
				}
				else if(tgnm=="input" && tgtyp=="checkbox"){
					//alert( $(ith).prop("checked") );
					if(jsonObj2[nm]==undefined)jsonObj2[nm]=[];
					if($(ith).prop("checked"))
					     jsonObj2[nm].push($(ith).val());
					//jsonObj2[nm] = $selopts;
				}
				else if(tgtyp=="radio"){
					if($(ith).prop("checked"))
						jsonObj2[nm]=$(ith).val();
				}
			};
			
		});
		
		return jsonObj2;
		
		
	  }

