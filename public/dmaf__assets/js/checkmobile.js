dmaf("CheckMobile", ["DMAF", "Instance", "events"], function (DMAF, Instance, events) {

    var music_started = false;

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    function CheckMobile() {}
    CheckMobile.prototype = Object.create(Instance, {
        onAction: {
            value: function(trigger, actionTime, eventProperties, actionProperties) {
                switch (trigger) {
                    case "splash_screen":
                        if (isMobile.any() === null) {
                            //DO THIS IF IT'S A DESKTOP BROWSER
                            events.dispatch("init_beatpatternplayer");
                            events.dispatch("splash_screen_music");
                        } else {
                            //DO THIS IF IT'S A MOBILE BROWSER
                            if (music_started === true) {
                                events.dispatch("splash_screen_music");
                            }
                        }
                        break;
                    case "info_screen":
                        if (isMobile.any() === null) {
                            //DO THIS IF IT'S A DESKTOP BROWSER
                            events.dispatch("info_screen_music");
                        } else {
                            //DO THIS IF IT'S A MOBILE BROWSER
                            if (music_started === true) {
                                events.dispatch("info_screen_music");
                            } else {
                                events.dispatch("init_beatpatternplayer");
                                events.dispatch("info_screen_music");
                                music_started = true;
                            }
                        }
                        break;
                }

            }
        }
    });
    DMAF.registerInstance("customCode", "CheckMobile", CheckMobile);
});