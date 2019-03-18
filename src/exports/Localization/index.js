const Localization = {
  get locale() {
    const locale =
      navigator.language ||
      navigator['systemLanguage'] ||
      navigator['browserLanguage'] ||
      navigator['userLanguage'] ||
      this.locales[0];

    // The native format is en-US
    return locale.replace('_', '-');
  },
  get locales() {
    const { languages = [] } = navigator;
    return Array.from(languages);
  },

  get timezone() {
    const defaultTimeZone = 'Etc/UTC';
    if (typeof Intl === 'undefined') {
      return defaultTimeZone;
    }
    return Intl.DateTimeFormat().resolvedOptions().timeZone || defaultTimeZone;
  },
};

export default Localization;
