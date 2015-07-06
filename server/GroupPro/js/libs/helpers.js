function elementById(id){
	return document.getElementById(id);
};

function getAjaxObject () {
	var ajax;
	if (XMLHttpRequest) {
		ajax = new XMLHttpRequest();
	} else {
		ajax = new Microsoft.ActiveObject();
	};
	return ajax;
}