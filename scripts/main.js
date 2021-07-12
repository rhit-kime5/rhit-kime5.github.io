	var controller = new ScrollMagic.Controller();

    var revealElements = document.getElementsByClassName("portItems");
        for (var i = 0; i < revealElements.length; i++) { 
            new ScrollMagic.Scene({
                    triggerElement: revealElements[i], 
                    offset: 50, 
                    duration: "80%",
                    triggerHook: 0.9,
                })
                .setClassToggle(revealElements[i], "visible") 
             /*   .addIndicators({
                    name: "portItems " + (i + 1)
                }) */
                .addTo(controller);
        }