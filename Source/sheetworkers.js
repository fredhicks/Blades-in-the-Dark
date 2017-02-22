<script type="text/worker">
/* Set some default fields when setting crew type */
on('change:crew_type', function () {
	'use strict';
	let crewData = {
		assassins: {
			crew_description: 'Murderers\nfor Hire',
			crew_xp_condition: 'Execute a successful accident, disappearance, murder, or ransom operation.',
			hunting_grounds_type: 'Hunting Grounds:',
			hunting_grounds_description: 'Accident - Disappearance - Murder - Ransom',
			upgrade_1_desc: 'Hardened (+1 trauma box)',
			upgrade_2_desc: 'Assassin rigging (2 free load of weapons or gear)',
			upgrade_2_tall: '1',
			upgrade_3_desc: 'Ironhook Contacts (+1 Tier in prison)',
			upgrade_3_tall: '1',
			upgrade_4_desc: 'Elite Skulks',
			upgrade_5_desc: 'Elite Thugs',
			upgrade_20_check: 1,	/* Insight */
			upgrade_21_check: 1		/* Prowess */
		},
		bravos: {
			cohort1_description: 'Thugs',
			crew_description: 'Mercenaries,\nThugs &\nKillers',
			crew_xp_condition: 'Execute a successful battle, extortion, sabotage, or smash & grab operation.',
			hunting_grounds_type: 'Hunting Grounds:',
			hunting_grounds_description: 'Battle - Extortion - Sabotage - Smash & Grab',
			upgrade_1_desc: 'Hardened (+1 trauma box)',
			upgrade_2_desc: 'Bravos rigging (2 free load of weapons or armor)',
			upgrade_2_tall: '1',
			upgrade_3_desc: 'Ironhook Contacts (+1 Tier in prison)',
			upgrade_3_tall: '1',
			upgrade_4_desc: 'Elite Rovers',
			upgrade_5_desc: 'Elite Thugs',
			upgrade_21_check: 1		/* Prowess */
		},
		cult: {
			cohort1_description: 'Adepts',
			crew_description: 'Acolytes\nof a Deity',
			crew_xp_condition: 'Advance the agenda of your deity or embody its precepts in action.',
			hunting_grounds_type: 'Sacred Sites:',
			hunting_grounds_description: 'Acquisition - Augury - Consecration - Sacrifice',
			show_deity: 1,
			upgrade_1_desc: 'Ordained (+1 trauma box)',
			upgrade_2_desc: 'Cult rigging (2 free load of documents or implements)',
			upgrade_2_tall: '1',
			upgrade_3_desc: 'Ritual sanctum in lair',
			upgrade_3_tall: '0',
			upgrade_4_desc: 'Elite Adepts',
			upgrade_5_desc: 'Elite Thugs',
			upgrade_22_check: 1		/* Resolve */
		},
		hawkers: {
			crew_description: 'Vice\nDealers',
			crew_xp_condition: 'Acquire product supply, execute clandestine/covert sales, or secure new territory.',
			hunting_grounds_type: 'Sales Territory:',
			hunting_grounds_description: 'Sale - Supply - Show of Force - Socialize',
			upgrade_1_desc: 'Composed (+1 stress box)',
			upgrade_2_desc: 'Hawker\'s rigging (1 carried item is concealed and has no load)',
			upgrade_2_tall: '1',
			upgrade_3_desc: 'Ironhook Contacts (+1 Tier in prison)',
			upgrade_3_tall: '1',
			upgrade_4_desc: 'Elite Rooks',
			upgrade_5_desc: 'Elite Thugs',
			upgrade_14_check: 1,	/* Secure */
			upgrade_22_check: 1		/* Resolve */
		},
		shadows: {
			crew_description: 'Thieves,\nSpies, and\nSaboteurs',
			crew_xp_condition: 'Execute a successful espionage, sabotage, or theft operation.',
			hunting_grounds_type: 'Hunting Grounds:',
			hunting_grounds_description: 'Burglary - Espionage - Robbery - Sabotage',
			upgrade_1_desc: 'Steady (+1 stress box)',
			upgrade_2_desc: 'Thief Rigging (2 free load of tools or gear)',
			upgrade_2_tall: '1',
			upgrade_3_desc: 'Underground maps & passkeys',
			upgrade_3_tall: '0',
			upgrade_4_desc: 'Elite Rooks',
			upgrade_5_desc: 'Elite Skulks',
			upgrade_10_check: 1,	/* Hidden */
			upgrade_21_check: 1		/* Prowess */
		},
		smugglers: {
			cohort1_description: 'Type: Boat - Carriage - Other',
			cohort1_name: 'Vehicle',
			cohort1_quality1: 1,
			crew_description: 'Suppliers\nof Illicit\nGoods',
			crew_xp_condition: 'Execute a successful smuggling or acquire new clients or contraband sources.',
			hunting_grounds_type: 'Cargo Types:',
			hunting_grounds_description: 'Arcane/Weird - Arms - Contraband - Passengers',
			upgrade_1_desc: 'Steady (+1 stress box)',
			upgrade_2_desc: 'Smuggler\'s rigging (2 items carried are perfectly concealed)',
			upgrade_2_tall: '1',
			upgrade_3_desc: 'Camouflage (vehicles are perfectly concealed at rest)',
			upgrade_3_tall: '1',
			upgrade_4_desc: 'Elite Rovers',
			upgrade_5_desc: 'Barge (+mobility for lair)',
			upgrade_6_check: 1,					/* Vehicle */
			upgrade_6_desc: 'Vehicle',	/* change Carriage to Vehicle */
			upgrade_8_desc: 'Vehicle',	/* change Boat to Vehicle */
			upgrade_21_check: 1					/* Prowess */
		}
	},
		attributes = _.chain(crewData).map(o => _.keys(o)).flatten().uniq().union(['crew_type']).value();
	getAttrs(attributes, function (attrValues) {
		let finalSettings,
			defaultSettings = {
			show_deity: 0,
			cohort1_name: 'Cohort',
		}, attrsForce = ['show_deity', 'cohort1_name', 'upgrade_2_tall', 'upgrade_3_tall'],
			crew_type = attrValues.crew_type.toLowerCase();
		/* Change unset attributes to crew default */
		if (_.has(crewData, crew_type)) {
			finalSettings = _.reduce(crewData[crew_type], function(memo, value, key) {
				if (!attrValues[key] || _.contains(attrsForce, key)) {
					memo[key] = value;
				}
				return memo;
			}, _.clone(defaultSettings));
		}
		setAttrs(finalSettings);
	});
});
/* Set some default fields when setting playbook */
</script>
