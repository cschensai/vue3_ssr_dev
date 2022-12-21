const getAmplitude = () => {
	const script = document.createElement('script');
	script.innerHTML = `
  (function (e, t) {
    var n = e.amplitude || { _q: [], _iq: {} };
    var r = t.createElement("script");
    r.type = "text/javascript";
    r.integrity =
      "sha384-G5p3YHHIMhqDroi1wiIRIEJZZCcdNsFWb90cB5FCjJEkCV1NN5gal4aaJRDHU6Qy";

    r.crossOrigin = "anonymous";
    r.async = true;
    r.src = "https://cdn.amplitude.com/libs/amplitude-8.16.0-min.gz.js";
    r.onload = function () {
      if (!e.amplitude.runQueuedFunctions) {
        console.log("[Amplitude] Error: could not load SDK");
      }
    };
    var s = t.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(r, s);
    function i(e, t) {
      e.prototype[t] = function () {
        this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
        return this;
      };
    }
    var o = function () {
      this._q = [];
      return this;
    };
    var a = [
      "add",
      "append",
      "clearAll",
      "prepend",
      "set",
      "setOnce",
      "unset",
      "preInsert",
      "postInsert",
      "remove",
    ];
    for (var c = 0; c < a.length; c++) {
      i(o, a[c]);
    }
    n.Identify = o;
    var l = function () {
      this._q = [];
      return this;
    };
    var u = [
      "setProductId",
      "setQuantity",
      "setPrice",
      "setRevenueType",
      "setEventProperties",
    ];
    for (var p = 0; p < u.length; p++) {
      i(l, u[p]);
    }
    n.Revenue = l;
    var d = [
      "init",
      "logEvent",
      "logRevenue",
      "setUserId",
      "setUserProperties",
      "setOptOut",
      "setVersionName",
      "setDomain",
      "setDeviceId",
      "enableTracking",
      "setGlobalUserProperties",
      "identify",
      "clearUserProperties",
      "setGroup",
      "logRevenueV2",
      "regenerateDeviceId",
      "groupIdentify",
      "onInit",
      "onNewSessionStart",
      "logEventWithTimestamp",
      "logEventWithGroups",
      "setSessionId",
      "resetSessionId",
      "getDeviceId",
      "getUserId",
      "setMinTimeBetweenSessionsMillis",
      "setEventUploadThreshold",
      "setUseDynamicConfig",
      "setServerZone",
      "setServerUrl",
      "sendEvents",
      "setLibrary",
      "setTransport",
    ];
    function v(t) {
      function e(e) {
        t[e] = function () {
          t._q.push([e].concat(Array.prototype.slice.call(arguments, 0)));
        };
      }
      for (var n = 0; n < d.length; n++) {
        e(d[n]);
      }
    }
    v(n);
    n.getInstance = function (e) {
      e = (!e || e.length === 0 ? "$default_instance" : e).toLowerCase();
      if (!Object.prototype.hasOwnProperty.call(n._iq, e)) {
        n._iq[e] = { _q: [] };
        v(n._iq[e]);
      }
      return n._iq[e];
    };
    e.amplitude = n;
  })(window, document);

  amplitude.getInstance().init("dbbed3f0afd31c382d0e02b755e37b87", {
    includeUtm: true,
    includeReferrer: true,
  });
  `;
	document.head.append(script);
};

export default () => {
	getAmplitude();
};
