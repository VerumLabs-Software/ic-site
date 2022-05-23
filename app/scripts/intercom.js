import uniqid from "uniqid";

const intercom = () => {
  let user = JSON.parse(window.localStorage.getItem("user"));

  if (!user) {
    user = {
      user_id: uniqid(),
      created_at: Date.now(),
    };

    window.localStorage.setItem("user", JSON.stringify(user));
  }

  window.intercomSettings = {
    name: "",
    app_id: "tsijclvu",
    user_id: user.user_id,
    created_at: user.created_at,
    api_base: "https://api-iam.intercom.io",
  };

  // We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/tsijclvu'
  (function () {
    var w = window;
    var ic = w.Intercom;
    if (typeof ic === "function") {
      ic("reattach_activator");
      ic("update", w.intercomSettings);
    } else {
      var d = document;
      var i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };
      w.Intercom = i;
      var l = function () {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.intercom.io/widget/tsijclvu";
        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      };
      if (document.readyState === "complete") {
        l();
      } else if (w.attachEvent) {
        w.attachEvent("onload", l);
      } else {
        w.addEventListener("load", l, false);
      }
    }
  })();
};

export default intercom;
