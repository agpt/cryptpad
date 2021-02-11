// Load #1, load as little as possible because we are in a race to get the loading screen up.
define([
    '/bower_components/nthen/index.js',
    '/api/config',
    'jquery',
    '/common/requireconfig.js',
    '/common/sframe-common-outer.js',
    '/common/cryptpad-common.js',
    '/common/common-util.js',
    '/common/common-hash.js',
    '/common/common-realtime.js',
    '/common/common-constants.js',
    '/common/common-interface.js',
], function (nThen, ApiConfig, $, RequireConfig, SFCommonO,
    Cryptpad, Util, Hash, Realtime, Constants, UI) {

    window.Cryptpad = {
        Common: Cryptpad,
        Util: Util,
        Hash: Hash,
        Realtime: Realtime,
        Constants: Constants,
        UI: UI
    };

    // Loaded in load #2
    nThen(function (waitFor) {
        $(waitFor());
    }).nThen(function (waitFor) {
        SFCommonO.initIframe(waitFor);
    }).nThen(function (/*waitFor*/) {
        //var addData = function (meta) {};
        SFCommonO.start({
            //addData:addData
        });
    });
});
