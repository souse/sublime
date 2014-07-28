(function(){
	//ASD命名空间
	if(!window.ADS){window.ADS = {}}
	/**
	* Checks to see if the current browser is compatible with the entire library
	*/
	function isCompatible(other){
		if(
			other === false
			|| !Array.prototype.push
			|| !Object.hasOwnProperty
			|| !document.createElement
			|| !document.getElementByTagName
		){
			return false;
		}else{return true;}
	}
	window['ADS']['isCompatible'] = isCompatible;
	/**
	* document.getElementById(); replacement.
	*/
	function $(){
			var elements = new Array();
			// Find all the elements supplied as arguments
			for(var i=0; i<arguments.length; i++){
				var element = arguments[i];
				if(typeof element == 'string'){
					element = document.getElementById(element);
				}
				if (arguments.length == 1) {
					return element;
				}
				elements.push(element);
			}
			return elements;
	}
	window['ADS']['$'] = $;	
	
})();
