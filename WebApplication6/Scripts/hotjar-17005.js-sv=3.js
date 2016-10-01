window.hjSiteSettings = window.hjSiteSettings || {"testers_widgets":[],"surveys":[],"heatmaps":[],"recording_capture_keystrokes":true,"polls":[],"site_id":17005,"record_targeting_rules":[],"forms":[],"record":false,"r":0.3456186566,"deferred_page_contents":[]};

window.hjBootstrap = window.hjBootstrap || function (scriptUrl) {
    var s = document.createElement('script');
    s.src = scriptUrl;
    document.getElementsByTagName('head')[0].appendChild(s);
    window.hjBootstrap = function() {};
};

hjBootstrap('https://script.hotjar.com/modules-691216772196632f04b50d2bbc85de1b.js');