export const getTitle =  $ =>
	$('.group-header-bulletin').text()
	.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm,"")
	.replace(/\n/g, ' ')
	.replace('BOCMN', 'BOCM N');
