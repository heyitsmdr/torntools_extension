"use strict";

(async () => {
	if (!getPageStatus().access) return;

	featureManager.registerFeature(
		"Smart Price",
		"bazaar",
		() => settings.pages.bazaar.smartPrice,
		initialise,
		execute,
		cleanup,
		{
			storage: ["settings.pages.bazaar.smartPrice"],
		},
		async () => {
			await checkDevice();
		}
	);

	function initialise() {
		
	}

	async function execute() {
		
	}

	async function cleanup() {
		
	}
})();
