$(document).ready(function() {

	loadStartPage();

	$('.navbar_tab').click(function(){
    
    //if this doesn't have active class
	 	if(!$(this).is('.active')) {

      //then remove active class from .active
	 		$('.active').removeClass('active');
      //add active class to this
	 		$(this).addClass('active');

	//		//Load the page of the active 
			switch ($(this).attr('id')) {
				case 'home':
					loadHomepage();
					break;
				case 'menu':
					loadMenuPage();
					break;
				case 'contact':
					loadContactPage();
					break;
			}
		}			
	});
});

var homeElem = '\
	<div class="container"> \
		<header> \
			<h1>fufu</h1> \
			<h3>wine &amp; steak resturant</h3> \
		</header> \
	\
		<nav>\
			<ul class="navbar"> \
				<li id="home" class="navbar_tab active">home</li> \
				<li id="menu" class="navbar_tab">menu</li> \
				<li id="contact" class="navbar_tab">contact</li> \
			</ul> \
		</nav> \
	\
		<div class="row"> \
			<div class="hero"> \
				<div class="hero_img col-8"></div> \
				<div class="hero--home hero_top-panel col-4"> \
					<p>members get rewards</p> \
				</div> \
				<div class="hero--home hero_bottom-panel col-4"> \
					<p>$20 off</p> \
				</div> \
				<div class="hero_list hidden"> \
					<ul>\
					</ul>	\
				</div> \
			</div> \
		</div> \
  </div> \
  </div>'


var loadStartPage = function() {
	$('#content').append($(homeElem));
};


var addAndRemoveClass = function(cssClass, _this) {
		$('.' + cssClass).removeClass(cssClass);
		$(_this).addClass(cssClass);
};


var loadHomepage = function() {
	//hides and shows 
	if (!$('.hero_list').is('.hidden')) {
		$('.hero_list').addClass('hidden');
	}
	
	if ($('.hero--home').is('.hidden')) {
		$('.hero--home').removeClass('hidden');
	}
	
	$('.hero_img--ext').removeClass('col-12')
		.addClass('col-8')
		.addClass('hero_img')
		.removeClass('hero_img--ext');
};


var loadHeroTemplate = function() {
		//hides and shows 
	if (!$('.hero--home').is('.hidden')) {
		$('.hero--home').addClass('hidden');
	} 
	 
	if ($('.hero_list').is('.hidden')) {
		$('.hero_list').removeClass('hidden')
	}

	if ($('.hero_img').is('.col-8')) {
		$('.hero_img').removeClass('col-8')
			.addClass('hero_img--ext')
			.addClass('.col-12')
			.removeClass('hero_img');
	}

	$('.hero_list').empty();

};

var loadMenuPage = function() {
	loadHeroTemplate();
	$('<ul>').appendTo('.hero_list')


	currentMenu();
};

var loadContactPage = function() {
	loadHeroTemplate();

	var contact = '\
			<dl> \
				<dt>Github:</dt>\
				<dd><a href="https://github.com/fufukha" alt="fufukha github">fufukha</a>\
			</dl>'

	$(contact).appendTo('.hero_list');
};




var currentMenu = function() {
	menuUpdater("Wine & steak", "Steak with wine", "Vegan steak with non-alcoholic wine");
};

var menuUpdater = function(entreStr) {
	for(var i = 0; i < arguments.length; ++ i) {

		var obj = $('<li>', { 
				html: arguments[i]
			});

		obj.appendTo('.hero_list ul');		
	}
};



