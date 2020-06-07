const clean = (phrase) => phrase.toLowerCase().replace(/[^a-z0-9ąęóżźńł]+/g, '');

export const checkPalindrom = (phrase) => {
  if (typeof (phrase) === 'string') {
    const cleanPhrase = clean(phrase);
    for (let i = 0; i < cleanPhrase.length; i++) {
      if (cleanPhrase[i] !== cleanPhrase[cleanPhrase.length - 1 - i]) {
        return false;
      }
      if (i >= cleanPhrase.length - 1 - i) {
        return true;
      }
    }
    return true;
  }
  throw new Error("It isn't a string!");
};
