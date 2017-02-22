<script type="text/worker">
on("change:crew_type", function () {
	getAttrs(['crew_type'], function (v) {
		var finalSettings = {
			show_deity: 0,
			cohort1_name: 'Cohort'
		};
		/* show deity section if cultists are selected */
		if (v.crew_type.toLowerCase() === 'cultists') {
			finalSettings.show_deity = 1;
		}
		/* change first cohort's name to vehicle if smugglers are selected */
		if (v.crew_type.toLowerCase() === 'smugglers') {
			finalSettings.cohort1_name = 'Vehicle';
		}
		setAttrs(finalSettings);
	});
});
</script>
