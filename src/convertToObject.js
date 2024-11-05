'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const lines = sourceString.replace('\n', '').split(';');

  for (let line of lines) {
    line = line.trim();

    if (!line.includes(':')) {
      continue;
    }

    const [property, value] = line.split(':');

    const cleanProperty = property.trim();
    const cleanValue = value.replace(';', '').trim();

    styles[cleanProperty] = cleanValue;
  }

  return styles;
}

module.exports = convertToObject;
