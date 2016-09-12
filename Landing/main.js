$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['splash', 'about', 'projects','team','contact'],
				sectionsColor: ['#000', '#FFF', '#000','#FFF', '#000'],
				navigation: true,
				navigationPosition: 'right',
				css3: true,
				responsiveWidth: 800;
			});
		});