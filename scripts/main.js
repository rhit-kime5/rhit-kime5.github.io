var controller = new ScrollMagic.Controller();

var revealElements = document.getElementsByClassName("reveal");
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