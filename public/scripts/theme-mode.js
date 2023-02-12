(function() {
    const THEME_MODE = {
        DARK: 'dark',
        LIGHT: 'light',
    };

	const getInitialColorMode = () => {
		const persistedColorPreference = window.localStorage.getItem('atora-theme');
		const hasPersistedPreference =
			typeof persistedColorPreference === 'string';

		/**
		 * If the user has explicitly chosen light or dark,
		 * use it. Otherwise, this value will be null.
		 */
		if (hasPersistedPreference) {
			return persistedColorPreference;
		}

		// If there is no saved preference, use a media query
		const mql = window.matchMedia(`(prefers-color-scheme: ${THEME_MODE.DARK})`);
		const hasMediaQueryPreference = typeof mql.matches === 'boolean';

		if (hasMediaQueryPreference) {
			return mql.matches ? THEME_MODE.DARK : THEME_MODE.LIGHT;
		}

		return THEME_MODE.DARK;
	};

	const colorMode = getInitialColorMode();
	const root = document.documentElement;
	root.style.setProperty('--initial-color-mode', colorMode);

	// add HTML attribute if dark mode
	if (colorMode === THEME_MODE.DARK) {
		document.documentElement.setAttribute('data-theme', THEME_MODE.DARK);
    }
})();
