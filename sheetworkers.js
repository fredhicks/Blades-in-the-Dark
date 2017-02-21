<script type="text/worker">
/* show deity section if cultists are selected */
on("change:crew_type", function () {
	getAttrs(['crew_type'], function (v) {
		if (v.crew_type.toLowerCase() === 'cultists') {
			setAttrs({
				show_deity : 1;
			});
		}
		else {
			setAttrs({
				show_deity : 0;
			});
		}
	});
});
</script>
