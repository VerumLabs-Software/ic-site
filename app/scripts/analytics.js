import mixpanel from "mixpanel-browser";

export default function analytics() {
  const MIXPANEL_TOKEN = "c854a887d5a45017ca7d344208ff2796";
  const EVENTS = {
    app_store_clicked: "click",
    google_play_clicked: "click",
    get_link_clicked: "submit",
    download_app_clicked: "click",
    enterprise_clicked: "click",
    enterprise_form_submitted: "submit",
    follow_ig_clicked: "click",
    follow_youtube_clicked: "click",
    follow_fb_clicked: "click",
  };

  mixpanel.init(MIXPANEL_TOKEN);
  mixpanel.register({
    app_type: "ic_landing",
  });

  mixpanel.track("landing_session");

  for (const event in EVENTS) {
    const actions = document.querySelectorAll(`[data-analytics="${event}"]`);

    actions.forEach(action => {
      action.addEventListener(EVENTS[event], e => {
        if (EVENTS[event] === "submit") {
          e.preventDefault();
        }

        switch (event) {
          case "get_link_clicked": {
            const formData = new FormData(action);
            const phoneInput = action.querySelector('[data-mask="tel"]');
            const phoneDialCode = phoneInput.dataset.dialCode;

            formData.set("phone", `+${phoneDialCode} ${formData.get("phone")}`);

            const phone = formData.get("phone");

            mixpanel.track(event, {phone});

            break;
          }

          default: {
            mixpanel.track(event);
            break;
          }
        }
      });
    });
  }
}
