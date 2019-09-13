const CATEGORY_LANGUAGE = 5;
const CATEGORY_SIZE = 4;
const RESOURCE_SIZE = 20;
const CATEGORY_MASK = ((1 << CATEGORY_SIZE) - 1) << RESOURCE_SIZE;
const RESOURCE_MASK = (1 << RESOURCE_SIZE) - 1;

let languages = {de: 0, en: 1, es: 2};

export let Text = {
  ERROR_CRITICAL: 1048576,
  ERROR_FATAL: 1048577,
  LABEL_CANCEL: 1048578,
  LABEL_OK: 1048579,
  TEXT_INTRO: 1048580
};

let data = [];
// Text
data[1] = {
  '0': 'critical',
  '1': 'fatal',
  '2': 'cancel',
  '3': 'ok',
  '4': 'Welcome to the Universe'
};
// Language: de
// Language: en
// Language: es
data[5] = {
  '0': 'kritisch',
  '1': 'tödlich',
  '2': 'stornieren',
  '3': 'ok',
  '4': 'Willkommen im Universum',
  '16777216': 'critical',
  '16777217': 'fatal',
  '16777218': 'cancel',
  '16777219': 'ok',
  '16777220': 'Welcome to the Universe',
  '33554432': 'crítica',
  '33554433': 'fatal',
  '33554434': 'cancelar',
  '33554435': 'okay',
  '33554436': 'Bienvenido al universo'
};

export function getLanguageCode(locale) {
  let range, result;

  result = languages[locale];

  // Lookup
  if (result === undefined && locale.indexOf('-') !== -1) {
    range = locale.split('-');
    range.pop();
    return getLanguageCode(range.join('-'));
  }

  return result;
}

export function getResource(resourceId) {
  const category = (resourceId & CATEGORY_MASK) >> RESOURCE_SIZE;
  const resource = resourceId & RESOURCE_MASK;

  return data[category][resource];
}

export function getText(resourceId, locale) {
  let translated;
  const resource = resourceId & RESOURCE_MASK;
  const code = getLanguageCode(locale);

  if (code !== undefined) {
    translated = (code << (RESOURCE_SIZE + CATEGORY_SIZE)) + resource;
    return data[CATEGORY_LANGUAGE][translated];
  }
}
