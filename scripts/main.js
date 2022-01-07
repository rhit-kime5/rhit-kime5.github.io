var controller = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName("reveal1");
	for (var i = 0; i < revealElements.length; i++) { 
		new ScrollMagic.Scene({
				triggerElement: revealElements[i], 
				offset: 50, 
				duration: "100%",
				triggerHook: 1,
				// 50, 80%, 0.9
			}) 
			.setClassToggle(revealElements[i], "visible") 
			.addTo(controller);
	}

var reveal2Elements = document.getElementsByClassName("reveal2");
	for (var i = 0; i < reveal2Elements.length; i++) { 
		new ScrollMagic.Scene({
				triggerElement: reveal2Elements[i], 
				offset: 50, 
				duration: "0",
				triggerHook: 1,
			}) 
			.setClassToggle(reveal2Elements[i], "visible") 
			.reverse(false)
			.addTo(controller);
	}