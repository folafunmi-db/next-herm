// Can be used to specify variables that'd be injected at build time
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				BASE_URL: "http://localhost:3000",
			},
		};
	}

	return {
		env: {
			BASE_URL: "https://nexthermapp.azurewebsites.net",
		},
	};
};
