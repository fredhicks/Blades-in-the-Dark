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
		let defaultSettings = {
			show_deity: 0,
			cohort1_name: 'Cohort',
			},
			finalSettings = defaultSettings,
			attrsForce = ['show_deity', 'cohort1_name', 'upgrade_2_tall', 'upgrade_3_tall'],
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
on('change:playbook', function () {
	'use strict';
	let playbookData = {
		cutter: {
			command1: 1,
			gatherinfo1: 'How can I hurt them?',
			gatherinfo2: 'Who\'s most afraid of me?',
			gatherinfo3: 'Who\'s most dangerous here?',
			gatherinfo4: 'What do they intend to do?',
			gatherinfo5: 'How can I get them to [X]?',
			gatherinfo6: 'Are they telling the truth?',
			item_1_desc: 'Fine heavy weapon',
			item_2_desc: 'Fine hand weapon',
			item_6_desc: 'Scary weapon or tool',
			item_7_desc: 'Manacles & chain',
			item_8_desc: 'Rage essence vial',
			item_9_desc: 'Spiritbane charm',
			playbook_description: 'A Dangerous &\nIntimidating\nFighter',
			skirmish1: 1,
			skirmish2: 1,
			xp_condition: 'You addressed a challenge with violence or coercion.'
		},
		hound: {
			gatherinfo1: 'What do they intend to do?',
			gatherinfo2: 'How can I get them to [X]?',
			gatherinfo3: 'What are they really feeling?',
			gatherinfo4: 'Where are they vulnerable?',
			gatherinfo5: 'Where did [X] go?',
			gatherinfo6: 'How can I find [X]?',
			hunt1: 1,
			hunt2: 1,
			item_1_desc: 'Fine long rifle',
			item_2_desc: 'Fine pair of pistols',
			item_5_desc: 'Electroplasmic ammunition',
			item_6_desc: 'Spyglass',
			item_7_desc: 'A trained hunting pet',
			item_8_desc: 'Spiritbane charm',
			playbook_description: 'A Deadly\nSharpshooter\nand Tracker',
			survey1: 1,
			xp_condition: 'You addressed a challenge with tracking or violence.'
		},
		leech: {
			gatherinfo1: 'What do they intend to do?',
			gatherinfo2: 'How can I get them to [X]?',
			gatherinfo3: 'Are they telling the truth?',
			gatherinfo4: 'What can I tinker with here?',
			gatherinfo5: 'What might happen if I [X]?',
			gatherinfo6: 'How can I find [X]?',
			item_0_desc: 'Gadgets',
			item_1_desc: 'Fine wrecker tools',
			item_2_desc: 'Fine tinkering tools',
			item_5_desc: 'Bandolier of alchemicals (3)',
			item_6_desc: 'Bandolier of alchemicals (3)',
			item_7_desc: 'Blowgun & darts, syringes',
			playbook_description: 'A Saboteur and\nTechnician',
			show_alchemicals: 1,
			tinker1: 1,
			tinker2: 1,
			wreck1: 1,
			xp_condition: 'You addressed a challenge with technical skill or mayhem.'
		},
		lurk: {
			finesse1: 1,
			gatherinfo1: 'What do they intend to do?',
			gatherinfo2: 'How can I get them to [X]?',
			gatherinfo3: 'What should I look out for?',
			gatherinfo4: 'What\'s the best way in?',
			gatherinfo5: 'Where can I hide here?',
			gatherinfo6: 'How can I find [X]?',
			item_3_desc: 'Fine shadow cloak',
			item_4_desc: 'Fine lockpicks',
			item_5_desc: 'Light climbing gear',
			item_6_desc: 'Dark-sight goggles',
			item_7_desc: 'Silence potion vial',
			item_8_desc: 'Spiritbane charm',
			playbook_description: 'A Stealthy\nInfiltrator\nand Burglar',
			prowl1: 1,
			prowl2: 1,
			xp_condition: 'You addressed a challenge with stealth or evasion.'
		},
		slide: {
			consort1: 1,
			gatherinfo1: 'What do they intend to do?',
			gatherinfo2: 'How can I get them to [X]?',
			gatherinfo3: 'Are they telling the truth?',
			gatherinfo4: 'What are they really feeling?',
			gatherinfo5: 'What do they really care about?',
			gatherinfo6: 'How can I blend in here?',
			item_3_desc: 'Fine disguise kit',
			item_4_desc: 'Fine clothes & jewelry',
			item_6_desc: 'A cane-sword',
			item_7_desc: 'Fine loaded dice, trick cards',
			item_8_desc: 'Trance powder',
			item_9_desc: 'Spiritbane charm',
			playbook_description: 'A Subtle\nManipulator\nand Spy',
			sway1: 1,
			sway2: 1,
			xp_condition: 'You addressed a challenge with deception or in influence.'
		},
		spider: {
			consort1: 1,
			consort2: 1,
			gatherinfo1: 'What do they want most?',
			gatherinfo2: 'What should I look out for?',
			gatherinfo3: 'Where\'s the leverage here?',
			gatherinfo4: 'How can I discover [X]?',
			gatherinfo5: 'What do they intend to do?',
			gatherinfo6: 'How can I get them to [X]?',
			item_3_desc: 'Fine bottle of whiskey',
			item_4_desc: 'Fine cover identity',
			item_5_desc: 'Blueprints',
			item_7_desc: 'Vial of slumber essence',
			item_8_desc: 'Concealed palm pistol',
			item_9_desc: 'Spiritbane charm',
			playbook_description: 'A Devious\nMastermind',
			study1: 1,
			xp_condition: 'You addressed a challenge with calculation or conspiracy.'
		},
		whisper: {
			attune1: 1,
			attune2: 1,
			gatherinfo1: 'What is arcane or weird here?',
			gatherinfo2: 'What echoes in the ghost field?',
			gatherinfo3: 'What is hidden or lost here?',
			gatherinfo4: 'What do they intend to do?',
			gatherinfo5: 'What drives them to do this?',
			gatherinfo6: 'How can I reveal [X]?',
			item_1_desc: 'Fine lightning hook',
			item_2_desc: 'Fine spirit mask',
			item_6_desc: 'Spirit bottles (2)',
			item_7_desc: 'Electroplasm vials',
			item_8_desc: 'Ghost key',
			item_9_desc: 'Demonbane charm',
			playbook_description: 'An Arcane\nAdept and\nChanneler',
			study1: 1,
			xp_condition: 'You addressed a challenge with knowledge or arcane power.'
		}
		},
		attributes = _.chain(playbookData).map(o => _.keys(o)).flatten().uniq().union(['playbook']).value();
	getAttrs(attributes, function (attrValues) {
		let defaultSettings = {
			show_alchemicals: 0
			},
			finalSettings = defaultSettings,
			attrsForce = ['show_alchemicals'],
			playbook = attrValues.playbook.toLowerCase();
		/* Change unset attributes to crew default */
		if (_.has(playbookData, playbook)) {
			finalSettings = _.reduce(playbookData[playbook], function(memo, value, key) {
				if (!attrValues[key] || _.contains(attrsForce, key)) {
					memo[key] = value;
				}
				return memo;
			}, _.clone(defaultSettings));
		}
		setAttrs(finalSettings);
	});
});
</script>
