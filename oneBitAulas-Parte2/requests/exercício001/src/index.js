import 'core-js';
import 'regenerator-runtime/runtime';

import SentryObjects from './sentry';
import { getSentry } from './sentry_service';

async function loadSentry() {
    let sentryArray = [];
    let sentryJSON = await getSentry();

    sentryJSON.forEach(sentry => {
        let newSentry = new SentryObjects(sentry["sentryId"], sentry["fullname"], sentry["year_range_min"], sentry["year_range_max"]);
        sentryArray.push(newSentry);
    });
    return renderSentryObjects(sentryArray);
};

async function renderSentryObjects(sentryArray) {
    const olElement = document.querySelector('#sentry-list');

    sentryArray.forEach(sentry => {
        const liElement = document.createElement('li');
        const text = `(${sentry.id}) ${sentry.name}: risco de colisão entre ${sentry.minYear} e ${sentry.maxYear}`;
        liElement.innerText = text;
        olElement.appendChild(liElement);
    });
};

loadSentry();