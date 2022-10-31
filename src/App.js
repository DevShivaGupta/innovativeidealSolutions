import React from "react";
import Homepage from "./screens/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { HeaderMenu } from "./components/HeaderMenu";
import { DrawerMenu } from "./components/DrawerMenu";
import { Fragment, useState } from "react";
import { linksData, FooterData } from "./helper/Data";
import { FooterSection } from "./components/FooterSection";
import DarkSwitchMain from "./components/DarkSwitchMain";
import { MantineProvider, ColorSchemeProvider, Paper } from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { theme } from "./theme.js";
const LazyContactPage = React.lazy(() =>
  import("./screens/contact/ContactPage")
);
const LazyErrorPage = React.lazy(() => import("./screens/ErrorPage"));
const LazyServicePage = React.lazy(() =>
  import("./screens/services/ServicePage")
);
const LazyPaidCampaignsPage = React.lazy(() =>
  import("./screens/services/PaidCampaignsPage")
);
const LazyWebDevelopmentPage = React.lazy(() =>
  import("./screens/services/WebDevelopmentPage")
);
const LazyAppDevelopmentPage = React.lazy(() =>
  import("./screens/services/AppDevelopmentPage")
);
const LazySoftwarePage = React.lazy(() =>
  import("./screens/services/SoftwarePage")
);
const LazyWhyUsPage = React.lazy(() => import("./screens/whyus/WhyUsPage"));
const LazyOurWorksPage = React.lazy(() =>
  import("./screens/ourWorks/OurWorksPage")
);

function App() {
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <MantineProvider theme={theme} inherit>
          <Paper>
            <Fragment>
              <HeaderMenu
                links={linksData}
                setOpened={setOpened}
                opened={opened}
              />
              <DrawerMenu opened={opened} setOpened={setOpened} />
              <DarkSwitchMain />
              <Routes>
                <Route index element={<Homepage />} />
                <Route
                  path="*"
                  element={
                    <React.Suspense>
                      <LazyErrorPage />
                    </React.Suspense>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <React.Suspense>
                      <LazyContactPage />
                    </React.Suspense>
                  }
                />
                <Route
                  path="services/"
                  element={
                    <React.Suspense>
                      <LazyServicePage />
                    </React.Suspense>
                  }
                >
                  <Route
                    path="paidcampaigns"
                    element={
                      <React.Suspense>
                        <LazyPaidCampaignsPage />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path="webDevelopment"
                    element={
                      <React.Suspense>
                        <LazyWebDevelopmentPage />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path="appDevelopment"
                    element={
                      <React.Suspense>
                        <LazyAppDevelopmentPage />
                      </React.Suspense>
                    }
                  />
                  <Route
                    path="software&ERP"
                    element={
                      <React.Suspense>
                        <LazySoftwarePage />
                      </React.Suspense>
                    }
                  />
                </Route>
                <Route
                  path="whyUs"
                  element={
                    <React.Suspense>
                      <LazyWhyUsPage />
                    </React.Suspense>
                  }
                />
                <Route
                  path="ourWorks"
                  element={
                    <React.Suspense>
                      <LazyOurWorksPage />
                    </React.Suspense>
                  }
                />
              </Routes>
              <FooterSection data={FooterData.data} />
            </Fragment>
          </Paper>
        </MantineProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
