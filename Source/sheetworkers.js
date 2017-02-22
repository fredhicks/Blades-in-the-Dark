<script type="text/worker">
on("change:crew_type", function () {
	getAttrs(['crew_type', 'crew_description'], function (v) {
		var crewDescriptions = {
			assassins: 'murderers\nfor hire',
			bravos: 'mercenaries,\nthugs &\nkillers',
			cult: 'acolytes\nof a deity',
			hawkers: 'vice\ndealers',
			shadows: 'thieves,\nspies, and\nsaboteurs',
			smugglers: 'suppliers\nof illicit\ngoods'
		};
		var finalSettings = {
			show_deity: 0,
			cohort1_name: 'Cohort'
		};
		/* show deity section if cultists are selected */
		if (v.crew_type.toLowerCase() === 'cult') {
			finalSettings.show_deity = 1;
		}
		/* change first cohort's name to vehicle if smugglers are selected */
		if (v.crew_type.toLowerCase() === 'smugglers') {
			finalSettings.cohort1_name = 'Vehicle';
		}
		/* add crew description if it does not exist yet */
		if (_.has(crewDescriptions, v.crew_type) && v.crew_description === '') {
			finalSettings.crew_description = crewDescriptions[v.crew_type];
		}
		setAttrs(finalSettings);
	});
});
</script>
