var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36482835-2']);
_gaq.push(['_setDomainName', 'gho-m.ga']);

function ga(page) {
	(function() {
		if(undefined !== page && !!page)
			 _gaq.push(['_trackPageview', page]);
		else _gaq.push(['_trackPageview']);
		
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' === document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
}