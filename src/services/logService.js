import * as Sentry from '@sentry/browser';
import { sentryBrowserDsn } from "../config.json";
function init() {
  
  Sentry.init({dsn: sentryBrowserDsn});
// Set user information, as well as tags and further extras
  Sentry.configureScope(scope => {
    scope.setExtra('battery', 0.7);
    scope.setTag('user_mode', 'admin');
    scope.setUser({ id: '4711' });
    // scope.clear();
  });
   
  // Add a breadcrumb for future events
  Sentry.addBreadcrumb({
    message: 'My Breadcrumb',
    // ...
  });
}

function log(error) {
  console.log("In log service");
  // Capture exceptions, messages or manual events
  //Sentry.captureMessage('Hello, world!');
  Sentry.captureException(new Error(error));
 /* Sentry.captureEvent({
    message: 'Manual',
    stacktrace: [
      // ...
    ],
  });*/
}

export default {
  init,
  log
};
