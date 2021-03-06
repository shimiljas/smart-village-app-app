import { Linking } from 'react-native';

/**
 *
 * Linking only works with a protocol, otherwise the phone do not know how to handle a link.
 * In this app we have five types of Linkings:
 *   1. http
 *   2. https
 *   3. tel
 *   4. mailto
 *   5. maps (ios) / geo (android)
 *
 * This method ensures, that a protocol is given or adds http:// at front
 */
function ensureProtocol(link) {
  const protocolRegExpMatch = link.match(/^https?:|tel:|mailto:|maps:|geo:/);
  let linkWithProtocol = link;

  if (!protocolRegExpMatch) {
    linkWithProtocol = `http://${link}`;
  }

  return linkWithProtocol;
}

// https://facebook.github.io/react-native/docs/linking.html#opening-external-links
export function openLink(link) {
  const linkWithProtocol = ensureProtocol(link);

  Linking.canOpenURL(linkWithProtocol)
    .then((canOpen) => {
      if (!canOpen) {
        alert('Can\'t handle: ' + linkWithProtocol);
      } else {
        return Linking.openURL(linkWithProtocol);
      }
    })
    .catch((err) => console.warn('An error occurred', err));
}
