import ReactGA from "react-ga";

export const initGA = () => {
  //console.log("GA init for env: ", getConfig().publicRuntimeConfig.backend_url);

  ReactGA.initialize("UA-128216771-2");
};

export const logPageView = (userId) => {
  //console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({
    page: window.location.pathname
  });

  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (
  category = "",
  action = "",
  label = "",
  value = "noValue"
) => {
  if (category && action && label) {
    let data = { category, action, label };

    if (value != "noValue") {
      data.value = value;
    }

    ReactGA.event(data);
  } else {
    console.log("Missing data for sending event");
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
