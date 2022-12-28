function Ajax()
{
	var
		$http,
		$self = arguments.callee;

	if (window.XMLHttpRequest) {
		$http = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			$http = new ActiveXObject('Msxml2.XMLHTTP');
		} catch(e) {
			$http = new ActiveXObject('Microsoft.XMLHTTP');
		}
	}

	if ($http) {
		$http.onreadystatechange = function()
		{
			if (/4|^complete$/.test($http.readyState)) {
				document.getElementById('ReloadThis').innerHTML = $http.responseText;
				setTimeout(function(){$self();}, 1000);
			}
		};
		$http.open('GET', 'read.php' + '?' + new Date().getTime(), true);
	   $http.send(null);
	}

}
