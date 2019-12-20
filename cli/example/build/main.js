(function () {
    'use strict';

    function trackEvent(data, extraData) {
        console.log('trackEvent', { data, extraData });
    }

    trackEvent({
      action: "Hi from CLI script"
    });

}());
