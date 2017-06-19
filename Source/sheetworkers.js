<script type="text/worker">
/* DATA */
var crewData = {
		assassins: {
			abilities: [{
					name: 'Deadly',
					description: 'Each PC may add +1 action rating to Hunt, Prowl, or Skirmish (up to a max rating of 3).'
				},
				{
					name: 'Crow\'s Veil',
					description: 'Due to hard-won experience or occult ritual, your activities are hidden from the notice of the death-seeker crows. You don\'t take extra heat when killing is involved on a score.'
				},
				{
					name: 'Emberdeath',
					description: 'Due to hard-won experience or occult ritual, you know the arcane method to destroy a living victim\'s spirit at the moment you kill them. Take 3 stress to channel electroplasmic energy from the ghost field to disintegrate the spirit and dead body in a shower of sparking embers.'
				},
				{
					name: 'No Traces',
					description: 'When you keep an operation quiet or make it look like an accident, you get half the rep value of the target (round up) instead of zero. When you end downtime with zero heat, take +1 rep.'
				},
				{
					name: 'Patron',
					description: 'When you advance your Tier, it costs half the coin it normally would. Who is your patron? Why do they help you?'
				},
				{
					name: 'Predators',
					description: 'When you use stealth or subterfuge to commit murder, take +1d to the engagement roll.'
				},
				{
					name: 'Vipers',
					description: 'When you acquire or craft poisons, you get +1 result level to your roll. When you employ a poison, you are specially prepared to be immune to its effects.'
				}
			],
			base: {
				claim_1_desc: '+1 scale for your\nSkulks cohorts',
				claim_1_name: 'Training\nRooms',
				claim_2_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_2_name: 'Vice Den',
				claim_3_desc: '+2 coin for lower-\nclass targets',
				claim_3_name: 'Fixer',
				claim_4_desc: '+1d gather info\nfor scores',
				claim_4_name: 'Informants',
				claim_5_desc: 'Body disposal,\n+1d to reduce heat\nafter killing',
				claim_5_name: 'Hagfish Farm',
				claim_6_desc: '+1 rep per score',
				claim_6_name: 'Victim\nTrophies',
				claim_7_desc: '',
				claim_7_name: '\nTurf',
				claim_9_desc: '',
				claim_9_name: '\nTurf',
				claim_10_desc: '-2 heat per score',
				claim_10_name: 'Cover\nOperation',
				claim_11_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_11_name: 'Protection\nRacket',
				claim_12_desc: '+1d to healing\nrolls',
				claim_12_name: 'Infirmary',
				claim_13_desc: '+2 coin for high-\nclass targets',
				claim_13_name: 'Envoy',
				claim_14_desc: '+1d engagement\nfor deception and\n social plans',
				claim_14_name: 'Cover Identities',
				claim_15_desc: '+1d engagement\nfor stealth plans',
				claim_15_name: 'City Records',
				claim_bridge_2_3: 0,
				claim_bridge_3_4: 0,
				claim_bridge_6_7: 0,
				claim_bridge_9_14: 0,
				claim_bridge_12_13: 0,
				claim_bridge_13_14: 0,
				crew_description: 'Murderers\nfor Hire',
				crew_xp_condition: 'Execute a successful accident, disappearance, murder, or ransom operation.',
				hunting_grounds_type: 'Hunting Grounds:',
				hunting_grounds_description: 'Accident - Disappearance - Murder - Ransom',
				upgrade_1_desc: 'Hardened (+1 trauma box)',
				upgrade_2_desc: 'Assassin rigging (2 free load of weapons or gear)',
				upgrade_2_tall: 'on',
				upgrade_3_desc: 'Ironhook Contacts (+1 Tier in prison)',
				upgrade_3_tall: 'on',
				upgrade_4_desc: 'Elite Skulks',
				upgrade_5_desc: 'Elite Thugs',
				upgrade_20_check: 'on',
				/* Insight */
				upgrade_21_check: 'on' /* Prowess */
			},
			contacts: [
				'Trev, a gang boss',
				'Lydra, a deal broker',
				'Irimina, a vicious noble',
				'Karlos, a bounty hunter',
				'Exeter, a spirit warden',
				'Sevoy, a merchant lord'
			]
		},
		bravos: {
			abilities: [{
					name: 'Dangerous',
					description: 'Each PC may add +1 action rating to Hunt, Skirmish, or Wreck (up to a max rating of 3).'
				},
				{
					name: 'Blood Brothers',
					description: 'When you fight alongside your cohorts in combat, they get +1d for teamwork rolls (setup and group actions). All of your cohorts get the thugs type for free (if they\'re already thugs, add another type).'
				},
				{
					name: 'Door Kickers',
					description: 'When you execute an assault plan, take +1d to the engagement roll.'
				},
				{
					name: 'Fiends',
					description: 'Fear is as good as respect. You may count each wanted level as if it was turf.'
				},
				{
					name: 'Forged in the Fire',
					description: 'Each PC has been toughened by cruel experience. You get +1d to resistance rolls.'
				},
				{
					name: 'Patron',
					description: 'When you advance your Tier, it costs half the coin it normally would. Who is your patron? Why do they help you?'
				},
				{
					name: 'War Dogs',
					description: 'When you’re at war (-3 faction status), your crew does not suffer -1 hold and PCs still get two downtime activities, instead of just one.'
				}
			],
			base: {
				claim_1_desc: '+1 scale for your\nThugs cohorts',
				claim_1_name: 'Barracks',
				claim_2_desc: '',
				claim_2_name: '\nTurf',
				claim_3_desc: '+2 coin for battle\nor extortion',
				claim_3_name: 'Terrorized\nCitizens',
				claim_4_desc: '+1d gather info\nfor scores',
				claim_4_name: 'Informants',
				claim_5_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_5_name: 'Protection\nRacket',
				claim_6_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_6_name: 'Fighting Pits',
				claim_7_desc: '',
				claim_7_name: '\nTurf',
				claim_9_desc: '',
				claim_9_name: '\nTurf',
				claim_10_desc: '',
				claim_10_name: '\nTurf',
				claim_11_desc: '+1d to healing\nrolls',
				claim_11_name: 'Infirmary',
				claim_12_desc: '-2 heat per score',
				claim_12_name: 'Bluecoat\nIntimidation',
				claim_13_desc: '+2 coin for lower-\nclass targets',
				claim_13_name: 'Street Fence',
				claim_14_desc: 'Stockpiles give you\n+1d to acquire\nassets',
				claim_14_name: 'Warehouses',
				claim_15_desc: '+1d engagement\nfor assault plans',
				claim_15_name: 'Bluecoat\nConfederates',
				claim_bridge_3_4: 0,
				claim_bridge_2_7: 0,
				claim_bridge_12_13: 0,
				cohort1_subtype: 'Thugs',
				crew_description: 'Mercenaries,\nThugs &\nKillers',
				crew_xp_condition: 'Execute a successful battle, extortion, sabotage, or smash & grab operation.',
				hunting_grounds_type: 'Hunting Grounds:',
				hunting_grounds_description: 'Battle - Extortion - Sabotage - Smash & Grab',
				upgrade_1_desc: 'Hardened (+1 trauma box)',
				upgrade_2_desc: 'Bravos rigging (2 free load of weapons or armor)',
				upgrade_2_tall: 'on',
				upgrade_3_desc: 'Ironhook Contacts (+1 Tier in prison)',
				upgrade_3_tall: 'on',
				upgrade_4_desc: 'Elite Rovers',
				upgrade_5_desc: 'Elite Thugs',
				upgrade_21_check: 'on' /* Prowess */
			},
			contacts: [
				'Meg, a pit-fighter',
				'Conway, a bluecoat',
				'Keller, a blacksmith',
				'Tomas, a physicker',
				'Walker, a ward boss',
				'Lutes, a tavern owner'
			]
		},
		cult: {
			abilities: [{
					name: 'Chosen',
					description: 'Each PC may add +1 action rating to Attune, Study, or Sway (up to a max rating of 3).'
				},
				{
					name: 'Anointed',
					description: 'You get +1d to resistance rolls against supernatural threats. You get +1d to healing rolls when you have supernatural harm.'
				},
				{
					name: 'Bound in Darkness',
					description: 'You may use teamwork with any cult member, regardless of the distance separating you. By taking 1 stress, your whispered message is heard by every cultist.'
				},
				{
					name: 'Conviction',
					description: 'Each PC gains an additional Vice: Worship. When you indulge this vice and bring a pleasing sacrifice, you don\'t overindulge if you clear excess stress. In addition, your deity will assist any one action roll you make—from now until you indulge this vice again.'
				},
				{
					name: 'Glory Incarnate',
					description: 'Your deity sometimes manifests in the physical world. This can be a great boon, but the priorities and values of a god are not those of mortals. You have been warned.'
				},
				{
					name: 'Sealed in Blood',
					description: 'Each human sacrifice yields -3 stress cost for any ritual you perform.'
				},
				{
					name: 'Zealotry',
					description: 'Your cohorts have abandoned their reason to devote themselves to the cult. They will undertake any service, no matter how dangerous or strange. They gain +1d to rolls against enemies of the faith.'
				}
			],
			base: {
				claim_1_desc: '+1 scale for your\nAdepts cohorts',
				claim_1_name: 'Cloister',
				claim_2_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_2_name: 'Vice Den',
				claim_3_desc: '+2 coin for occult\noperations',
				claim_3_name: 'Offertory',
				claim_4_desc: '-1 stress cost for\nall arcane powers\nand rituals',
				claim_4_name: 'Ancient Obelisk',
				claim_5_desc: '+1d to Consort\nw/ arcane entities\non site',
				claim_5_name: 'Ancient\nTower',
				claim_6_desc: '',
				claim_6_name: '\nTurf',
				claim_7_desc: '',
				claim_7_name: '\nTurf',
				claim_9_desc: '',
				claim_9_name: '\nTurf',
				claim_10_desc: '',
				claim_10_name: '\nTurf',
				claim_11_desc: '+1d to Attune\non site',
				claim_11_name: 'Spirit Well',
				claim_12_desc: 'Safe passage in\nthe Deathlands',
				claim_12_name: 'Ancient Gate',
				claim_13_desc: '+1d to Command\nand Sway on site',
				claim_13_name: 'Sanctuary',
				claim_14_desc: '+1d to healing\nrolls',
				claim_14_name: 'Sacred Nexus',
				claim_15_desc: '+1d engagement\nfor occult plans',
				claim_15_name: 'Ancient Altar',
				claim_bridge_3_4: 0,
				claim_bridge_4_9: 0,
				claim_bridge_6_11: 0,
				claim_bridge_12_13: 0,
				claim_bridge_13_14: 0,
				cohort1_subtype: 'Adepts',
				crew_description: 'Acolytes\nof a Deity',
				crew_xp_condition: 'Advance the agenda of your deity or embody its precepts in action.',
				hunting_grounds_type: 'Sacred Sites:',
				hunting_grounds_description: 'Acquisition - Augury - Consecration - Sacrifice',
				setting_show_deity: 'on',
				upgrade_1_desc: 'Ordained (+1 trauma box)',
				upgrade_2_desc: 'Cult rigging (2 free load of documents or implements)',
				upgrade_2_tall: 'on',
				upgrade_3_desc: 'Ritual sanctum in lair',
				upgrade_4_desc: 'Elite Adepts',
				upgrade_5_desc: 'Elite Thugs',
				upgrade_22_check: 'on' /* Resolve */
			},
			contacts: [
				'Gagan, an academic',
				'Adikin, an occultist',
				'Hutchins, an antiquarian',
				'Moriya, a spirit trafficker',
				'Mateas Kline, a noble',
				'Bennett, an astronomer'
			]
		},
		hawkers: {
			abilities: [{
					name: 'Silver Tongues',
					description: 'Each PC may add +1 action rating to Command, Consort, or Sway (up to a max rating of 3).'
				},
				{
					name: 'Accord',
					description: 'Sometimes friends are as good as territory. You may count up to three +3 faction statuses you hold as if they are turf.'
				},
				{
					name: 'The Good Stuff',
					description: 'Your merchandise is exquisite. The product quality is equal to your Tier+2. When you deal with a crew or faction, the GM will tell you who among them is hooked on your product (one, a few, many, or all).'
				},
				{
					name: 'Ghost Market',
					description: 'Through arcane ritual or hard-won experience, you have discovered how to prepare your product for sale to ghosts and/or demons. They do not pay in coin. What do they pay with?'
				},
				{
					name: 'High Society',
					description: 'It\'s all about who you know. Take -1 heat during downtime and +1d to gather info about the city\'s elite.'
				},
				{
					name: 'Hooked',
					description: 'Your gang members use your product. Add the savage, unreliable, or wild flaw to your gangs to give them +1 quality.'
				},
				{
					name: 'Patron',
					description: 'When you advance your Tier, it costs half the coin it normally would. Who is your patron? Why do they help you?'
				}
			],
			base: {
				claim_1_desc: '',
				claim_1_name: '\nTurf',
				claim_2_desc: '+1d engagement\nroll for social plans',
				claim_2_name: 'Personal\nClothier',
				claim_3_desc: '+2 coin for\nshow of force or\nsocialize',
				claim_3_name: 'Local Graft',
				claim_4_desc: '+1d to Survery or\nHunt on your turf',
				claim_4_name: 'Lookouts',
				claim_5_desc: '+1d gather info\nfor scores',
				claim_5_name: 'Informants',
				claim_6_desc: '',
				claim_6_name: '\nTurf',
				claim_7_desc: '',
				claim_7_name: '\nTurf',
				claim_9_desc: '',
				claim_9_name: '\nTurf',
				claim_10_desc: '+1d to Consort\nand Sway on site',
				claim_10_name: 'Luxury Venue',
				claim_11_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_11_name: 'Foreign Market',
				claim_12_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_12_name: 'Vice Den',
				claim_13_desc: '+2 coin for product\nsale or supply',
				claim_13_name: 'Surplus Caches',
				claim_14_desc: '-2 heat per score',
				claim_14_name: 'Cover\nOperation',
				claim_15_desc: '+1d engagement\nfor deception and\ntransport plans',
				claim_15_name: 'Cover Identities',
				claim_bridge_2_3: 0,
				claim_bridge_3_4: 0,
				claim_bridge_6_7: 0,
				claim_bridge_10_15: 0,
				claim_bridge_12_13: 0,
				claim_bridge_13_14: 0,
				crew_description: 'Vice\nDealers',
				crew_xp_condition: 'Acquire product supply, execute clandestine/covert sales, or secure new territory.',
				hunting_grounds_type: 'Sales Territory:',
				hunting_grounds_description: 'Sale - Supply - Show of Force - Socialize',
				upgrade_1_desc: 'Composed (+1 stress box)',
				upgrade_2_desc: 'Hawker\'s rigging (1 carried item is concealed and has no load)',
				upgrade_2_tall: 'on',
				upgrade_3_desc: 'Ironhook Contacts (+1 Tier in prison)',
				upgrade_3_tall: 'on',
				upgrade_4_desc: 'Elite Rooks',
				upgrade_5_desc: 'Elite Thugs',
				upgrade_14_check: 'on',
				/* Secure */
				upgrade_22_check: 'on' /* Resolve */
			},
			contacts: [
				'Rolan Wott, a magistrate',
				'Laroze, a bluecoat',
				'Lydra, a deal broker',
				'Hoxley, a smuggler',
				'Anya, a dilettante',
				'Marlo, a gang boss'
			]
		},
		shadows: {
			abilities: [{
					name: 'Everyone Steals',
					description: 'Each PC may add +1 action rating to Prowl, Finesse, or Tinker (up to a max rating of 3).'
				},
				{
					name: 'Ghost Echoes',
					description: 'From weird experience or occult ritual, all crew members gain the ability to see and interact with the ghostly structures, streets, and objects within the echo of Doskvol that exists in the ghost field.'
				},
				{
					name: 'Pack Rats',
					description: 'Your lair is a jumble of stolen items. When you roll to acquire an asset, take +1d.'
				},
				{
					name: 'Patron',
					description: 'When you advance your Tier, it costs half the coin it normally would. Who is your patron? Why do they help you?'
				},
				{
					name: 'Second Story',
					description: 'When you execute a clandestine infiltration, you get +1d to the engagement roll.'
				},
				{
					name: 'Slippery',
					description: 'When you roll entanglements, roll twice and keep the one you want. When you reduce heat on the crew, take +1d.'
				},
				{
					name: 'Synchronized',
					description: 'When you perform a group action, you may count multiple 6s from different rolls as a critical success.'
				}
			],
			base: {
				claim_1_desc: '+1d to Command\nand Sway on site',
				claim_1_name: 'Interrogation\nChamber',
				claim_2_desc: '',
				claim_2_name: '\nTurf',
				claim_3_desc: '+2 coin for burglary\nor robbery',
				claim_3_name: 'Loyal Fence',
				claim_4_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_4_name: 'Gambling Den',
				claim_5_desc: '+1d to Consort\nand Sway on site',
				claim_5_name: 'Tavern',
				claim_6_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_6_name: 'Drug Den',
				claim_7_desc: '+1d gather info\nfor scores',
				claim_7_name: 'Informants',
				claim_9_desc: '',
				claim_9_name: '\nTurf',
				claim_10_desc: '+1d to Survey or\nHunt on your turf',
				claim_10_name: 'Lookouts',
				claim_11_desc: 'Body disposal,\n+1d to reduce heat\nafter killing',
				claim_11_name: 'Hagfish Farm',
				claim_12_desc: '+1d to healing\nrolls',
				claim_12_name: 'Infirmary',
				claim_13_desc: '+2 coin for espionage\nor sabotage',
				claim_13_name: 'Covert Drops',
				claim_14_desc: '',
				claim_14_name: '\nTurf',
				claim_15_desc: '+1d engagement\nfor stealth plans',
				claim_15_name: 'Secret\nPathways',
				claim_bridge_3_4: 0,
				claim_bridge_2_7: 0,
				claim_bridge_9_14: 0,
				claim_bridge_12_13: 0,
				crew_description: 'Thieves,\nSpies, and\nSaboteurs',
				crew_xp_condition: 'Execute a successful espionage, sabotage, or theft operation.',
				hunting_grounds_type: 'Hunting Grounds:',
				hunting_grounds_description: 'Burglary - Espionage - Robbery - Sabotage',
				upgrade_1_desc: 'Steady (+1 stress box)',
				upgrade_2_desc: 'Thief Rigging (2 free load of tools or gear)',
				upgrade_2_tall: 'on',
				upgrade_3_desc: 'Underground maps & passkeys',
				upgrade_4_desc: 'Elite Rooks',
				upgrade_5_desc: 'Elite Skulks',
				upgrade_10_check: 'on',
				/* Hidden */
				upgrade_21_check: 'on' /* Prowess */
			},
			contacts: [
				'Dowler, an explorer',
				'Laroze, a bluecoat',
				'Amancio, a deal broker',
				'Fitz, a collector',
				'Adelaide Phroaig, a noble',
				'Rigney, a tavern owner'
			]
		},
		smugglers: {
			abilities: [{
					name: 'Like Part of the Family',
					description: 'Create one of your vehicles as a cohort (use the vehicle edges and flaws, below). Its quality is equal to your Tier +1.'
				},
				{
					name: 'All Hands',
					description: 'During downtime, one of your cohorts may perform a downtime activity for the crew to acquire an asset, reduce heat, or work on a long-term project.'
				},
				{
					name: 'Ghost Passage',
					description: 'From harsh experience or occult ritual, all crew members become immune to possession by spirits, but may choose to "carry" a second ghost as a passenger within their body.'
				},
				{
					name: 'Just Passing Through',
					description: 'During downtime, take -1 heat. When your heat is 4 or less, you get +1d to deceive people when you pass yourselves off as ordinary citizens.'
				},
				{
					name: 'Leverage',
					description: 'Your crew supplies contraband for other factions. Your success is good for them. Whenever you gain rep, gain +1 rep.'
				},
				{
					name: 'Reavers',
					description: 'When you go into conflict aboard a vehicle, you gain +1 effect for vehicle damage and speed. Your vehicle gains armor.'
				},
				{
					name: 'Renegades',
					description: 'Each PC may add +1 action rating to Finesse, Prowl, or Skirmish (up to a max rating of 3).'
				}
			],
			base: {
				claim_1_desc: '',
				claim_1_name: '\nTurf',
				claim_2_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_2_name: 'Side Business',
				claim_3_desc: '+2 coin for high-\nclass targets',
				claim_3_name: 'Luxury Fence',
				claim_4_desc: '(Tier roll) - Heat =\ncoin in downtime',
				claim_4_name: 'Vice Den',
				claim_5_desc: '+1d to Consort\nand Sway on site',
				claim_5_name: 'Tavern',
				claim_6_desc: 'Safe passage in\nthe Deathlands',
				claim_6_name: 'Ancient Gate',
				claim_7_desc: '',
				claim_7_name: '\nTurf',
				claim_9_desc: '',
				claim_9_name: '\nTurf',
				claim_10_desc: '',
				claim_10_name: '\nTurf',
				claim_11_desc: '+1d engagement\nfor transport plans',
				claim_11_name: 'Secret Routes',
				claim_12_desc: '+1d gather info\nfor scores',
				claim_12_name: 'Informants',
				claim_13_desc: 'Your cohorts have\ntheir own vehicles',
				claim_13_name: 'Fleet',
				claim_14_desc: '-2 heat per score',
				claim_14_name: 'Cover\nOperation',
				claim_15_desc: 'Stockpiles give you\n+1d to acquire\nassets',
				claim_15_name: 'Warehouse',
				claim_bridge_2_3: 0,
				claim_bridge_3_4: 0,
				claim_bridge_6_7: 0,
				claim_bridge_12_13: 0,
				claim_bridge_13_14: 0,
				cohort1_name: 'Vehicle',
				cohort1_subtype: 'Boat - Carriage - Other',
				cohort1_type: 'expert',
				crew_description: 'Suppliers\nof Illicit\nGoods',
				crew_xp_condition: 'Execute a successful smuggling or acquire new clients or contraband sources.',
				hunting_grounds_type: 'Cargo Types:',
				hunting_grounds_description: 'Arcane/Weird - Arms - Contraband - Passengers',
				upgrade_1_desc: 'Steady (+1 stress box)',
				upgrade_2_desc: 'Smuggler\'s rigging (2 items carried are perfectly concealed)',
				upgrade_2_tall: 'on',
				upgrade_3_desc: 'Camouflage (vehicles are perfectly concealed at rest)',
				upgrade_3_tall: 'on',
				upgrade_4_desc: 'Elite Rovers',
				upgrade_5_desc: 'Barge (+mobility for lair)',
				upgrade_6_check: 'on',
				/* Vehicle */
				upgrade_6_desc: 'Vehicle',
				/* change Carriage to Vehicle */
				upgrade_8_desc: 'Vehicle',
				/* change Boat to Vehicle */
				upgrade_21_check: 'on' /* Prowess */
			},
			contacts: [
				'Elynn, a dock worker',
				'Rolan, a drug dealer',
				'Sera, an arms dealer',
				'Nyelle, a spirit trafficker',
				'Decker, an anarchist',
				'Esme, a tavern owner'
			]
		},
		vigilantes: {
			abilities: [{
					check: 'on',
					name: 'As Good as Your Word',
					description: 'You may spend rep as coin in downtime actions. Vigilantes gain Obligation as a second vice.'
				},
				{
					name: 'Avengers',
					description: 'Each PC may add +1 action rating to Hunt, Prowl,or Command (up to a max rating of 3).'
				},
				{
					name: 'Thorn in your Side',
					description: 'When you use Stealth or Assault plans against a higher Tier faction, your Tier counts as +1.'
				},
				{
					name: 'Misdirection',
					description: 'At the end of a score, you may sacrifice half the rep gained to make another faction lose status with your target instead of your crew. How do you pin it on someone else?'
				},
				{
					name: 'Uncanny Preparation',
					description: 'Twice per session during a Desperate action, improve your effect or position. Describe a flashback that gives you the advantage now (setup action).'
				},
				{
					name: 'Moral Compass',
					description: 'Each PC gains an additional xp trigger: You fulfilled an obligation at a cost to you or the crew.'
				},
				{
					name: 'Favors',
					description: 'Spend one rep and describe how one of your contacts is put out to help you. Everyone in your crew gets one dot in an action your contact is skilled in for this score.'
				},
				{
					name: 'Roots',
					description: 'During downtime one of your contacts or cohorts may take a downtime action to acquire an asset, reduce heat, or recover.'
				}
			],
			base: {
				claim_1_desc: 'All your experts\nare loyal',
				claim_1_name: '\nFierce Allies',
				claim_2_desc: '+1d to indulge\nvice',
				claim_2_name: '\nLocal Heroes',
				claim_3_desc: '+2 rep on\ntakedown scores',
				claim_3_name: '\nPublicity',
				claim_4_desc: '+1d to Prowl back\nto your lair',
				claim_4_name: '\nHidden Paths',
				claim_5_desc: '+1d to Study or\nTinker on site',
				claim_5_name: '\nCatacombs',
				claim_6_desc: 'Large gang who\nwill fight for you',
				claim_6_name: 'Defiant\nCitizens',
				claim_7_desc: '',
				claim_7_name: '\nTurf',
				claim_9_desc: '',
				claim_9_name: '\nTurf',
				claim_10_desc: '+1d to healing\nrolls',
				claim_10_name: '\nInfirmary',
				claim_11_desc: '-1 Wanted Level\nif Citizens faction\nstatus is +3',
				claim_11_name: 'Above\nthe Law',
				claim_12_desc: '-2 heat per score',
				claim_12_name: 'Bluecoat\nConfidants',
				claim_13_desc: '+1d to Survey or\nHunt on your turf',
				claim_13_name: 'Lookouts',
				claim_14_desc: 'Smugglers, +1d to\nacquire asets',
				claim_14_name: 'The Hookup',
				claim_15_desc: '+2 rep on scores\nagainst the law',
				claim_15_name: 'Doskvol\'s\nMost Wanted',
				claim_bridge_2_3: 0,
				claim_bridge_3_4: 0,
				claim_bridge_6_11: 0,
				claim_bridge_10_15: 0,
				claim_bridge_12_13: 0,
				claim_bridge_13_14: 0,
				cohort1_type: 'expert',
				crew_description: 'Deluded\nAvengers',
				crew_xp_condition: 'Interfere with criminal scores, protect citizens, or antagonize the law.',
				hunting_grounds_type: 'Protected Grounds:',
				hunting_grounds_description: 'Uniting - Interference - Resistance - Terror',
				setting_show_origin: 'on',
				upgrade_1_desc: 'Unbroken (+1 trauma box)',
				upgrade_2_desc: 'Vigilantes attire (2 free load of weapons or supplies)',
				upgrade_2_tall: 'on',
				upgrade_3_desc: 'Irregulars (Experts gain +1d to Gather Information)',
				upgrade_3_tall: 'on',
				upgrade_4_desc: 'Willing to Fight (Experts are braves)',
				upgrade_5_desc: 'Spark-craft Technology',
				upgrade_22_check: 'on' /* Resolve */
			},
			contacts: [
				'Mara, a chief inspector',
				'Twelves, a Leviathan Hunter',
				'Soren, a restless ghost',
				'Poriso, famous opera singer',
				'Anis, a Spirit Warden',
				'Badger, a brilliant inventor'
			]
		}
	},
	playbookData = {
		"cutter": {
			"base": {
				"command1": "1",
				"friends_title": "playbook_cutter_friends_title",
				"gatherinfo1": "gatherinfo_how_can_I_hurt",
				"gatherinfo2": "gatherinfo_whos_most_afraid",
				"gatherinfo3": "gatherinfo_whos_most_dangerous",
				"gatherinfo4": "gatherinfo_what_do_they_intend",
				"gatherinfo5": "gatherinfo_how_can_I_get_them",
				"gatherinfo6": "gatherinfo_are_they_telling",
				"playbook_description": "playbook_cutter_description",
				"setting_traumata_set": "normal",
				"setting_vice_type": "normal",
				"skirmish1": "1",
				"skirmish2": "1",
				"xp_condition": "playbook_cutter_xp_condition"
			},
			"abilities": [{
				"name": "playbook_ability_battleborn",
				"description": "playbook_ability_battleborn_description"
			}, {
				"name": "playbook_ability_bodyguard",
				"description": "playbook_ability_bodyguard_description"
			}, {
				"name": "playbook_ability_ghost_fighter",
				"description": "playbook_ability_ghost_fighter_description"
			}, {
				"name": "playbook_ability_leader",
				"description": "playbook_ability_leader_description"
			}, {
				"name": "playbook_ability_mule",
				"description": "playbook_ability_mule_description"
			}, {
				"name": "playbook_ability_not_to_be_trifled_with",
				"description": "playbook_ability_not_to_be_trifled_with_description"
			}, {
				"name": "playbook_ability_savage",
				"description": "playbook_ability_savage_description"
			}, {
				"name": "playbook_ability_vigorous",
				"description": "playbook_ability_vigorous_description"
			}],
			"items": [{
				"bold": "on",
				"name": "playbook_item_fine_hand_weapon",
				"numboxes": "1"
			}, {
				"bold": "on",
				"name": "playbook_item_fine_heavy_weapon",
				"numboxes": "2"
			}, {
				"name": "playbook_item_scary_weapon_or_tool",
				"numboxes": "1"
			}, {
				"name": "playbook_item_manacles_&_chain",
				"numboxes": "0"
			}, {
				"name": "playbook_item_rage_essence_vial",
				"numboxes": "0"
			}, {
				"name": "playbook_item_spiritbane_charm",
				"numboxes": "0"
			}],
			"friends": ["playbook_cutter_friend_0", "playbook_cutter_friend_1", "playbook_cutter_friend_2", "playbook_cutter_friend_3", "playbook_cutter_friend_4"]
		},
		"ghost": {
			"base": {
				"friends_title": "playbook_ghost_friends_title",
				"gatherinfo1": "gatherinfo_what_do_they_intend",
				"gatherinfo2": "gatherinfo_how_can_I_get_them",
				"gatherinfo3": "gatherinfo_what_are_they_really",
				"gatherinfo4": "gatherinfo_what_should_I_look",
				"gatherinfo5": "gatherinfo_wheres_the_weakness",
				"gatherinfo6": "gatherinfo_how_can_I_find",
				"playbook_description": "playbook_ghost_description",
				"setting_stress_label": "drain",
				"setting_trauma_label": "gloom",
				"setting_traumata_set": "ghost",
				"setting_vice_type": "ghost",
				"xp_condition": "playbook_ghost_xp_condition",
				"xp_condition2": "playbook_ghost_xp_condition2",
				"xp_condition3": "playbook_ghost_xp_condition3"
			},
			"abilities": [{
				"check": "on",
				"name": "playbook_ability_ghost_form",
				"description": "playbook_ability_ghost_form_description"
			}, {
				"name": "playbook_ability_dissipate",
				"description": "playbook_ability_dissipate_description"
			}, {
				"name": "playbook_ability_manifest",
				"description": "playbook_ability_manifest_description"
			}, {
				"name": "playbook_ability_poltergeist",
				"description": "playbook_ability_poltergeist_description"
			}, {
				"name": "playbook_ability_possess",
				"description": "playbook_ability_possess_description"
			}],
			"items": [],
			"friends": []
		},
		"hound": {
			"base": {
				"friends_title": "playbook_hound_friends_title",
				"gatherinfo1": "gatherinfo_what_do_they_intend",
				"gatherinfo2": "gatherinfo_how_can_I_get_them",
				"gatherinfo3": "gatherinfo_what_are_they_really",
				"gatherinfo4": "gatherinfo_where_they_vulnerable",
				"gatherinfo5": "gatherinfo_where_did_x_go",
				"gatherinfo6": "gatherinfo_how_can_I_find",
				"hunt1": "1",
				"hunt2": "1",
				"playbook_description": "playbook_hound_description",
				"setting_traumata_set": "normal",
				"setting_vice_type": "normal",
				"survey1": "1",
				"xp_condition": "playbook_hound_xp_condition"
			},
			"abilities": [{
				"name": "playbook_ability_sharpshooter",
				"description": "playbook_ability_sharpshooter_description"
			}, {
				"name": "playbook_ability_focused",
				"description": "playbook_ability_focused_description"
			}, {
				"name": "playbook_ability_ghost_hunter",
				"description": "playbook_ability_ghost_hunter_description"
			}, {
				"name": "playbook_ability_scout",
				"description": "playbook_ability_scout_description"
			}, {
				"name": "playbook_ability_survivor",
				"description": "playbook_ability_survivor_description"
			}, {
				"name": "playbook_ability_tough_as_nails",
				"description": "playbook_ability_tough_as_nails_description"
			}, {
				"name": "playbook_ability_vengeful",
				"description": "playbook_ability_vengeful_description"
			}],
			"items": [{
				"bold": "on",
				"name": "playbook_item_fine_pair_of_pistols",
				"numboxes": "1"
			}, {
				"bold": "on",
				"name": "playbook_item_fine_long_rifle",
				"numboxes": "2"
			}, {
				"name": "playbook_item_electroplasmic_ammunition",
				"numboxes": "1"
			}, {
				"name": "playbook_item_a_trained_hunting_pet",
				"numboxes": "0"
			}, {
				"name": "playbook_item_spyglass",
				"numboxes": "1"
			}, {
				"name": "playbook_item_spiritbane_charm",
				"numboxes": "0"
			}],
			"friends": ["playbook_hound_friend_0", "playbook_hound_friend_1", "playbook_hound_friend_2", "playbook_hound_friend_3", "playbook_hound_friend_4"]
		},
		"hull": {
			"base": {
				"gatherinfo1": "gatherinfo_what_do_they_intend",
				"gatherinfo2": "gatherinfo_how_can_I_get_them",
				"gatherinfo3": "gatherinfo_what_are_they_really",
				"gatherinfo4": "gatherinfo_what_should_I_look",
				"gatherinfo5": "gatherinfo_wheres_the_weakness",
				"gatherinfo6": "gatherinfo_how_can_I_find",
				"playbook_description": "playbook_hull_description",
				"setting_load_h": "7",
				"setting_show_frame": "on",
				"setting_stress_label": "drain",
				"setting_trauma_label": "wear",
				"setting_traumata_set": "hull",
				"setting_vice_type": "hull",
				"xp_condition": "playbook_hull_xp_condition",
				"xp_condition2": "playbook_hull_xp_condition2",
				"xp_condition3": "playbook_hull_xp_condition3"
			},
			"abilities": [{
				"check": "on",
				"name": "playbook_ability_automaton",
				"description": "playbook_ability_automaton_description"
			}, {
				"name": "playbook_ability_overcharge",
				"description": "playbook_ability_overcharge_description"
			}, {
				"name": "playbook_ability_compartments",
				"description": "playbook_ability_compartments_description"
			}, {
				"name": "playbook_ability_electroplasmic_projectors",
				"description": "playbook_ability_electroplasmic_projectors_description"
			}, {
				"name": "playbook_ability_interface",
				"description": "playbook_ability_interface_description"
			}, {
				"name": "playbook_ability_secondary_hull",
				"description": "playbook_ability_secondary_hull_description"
			}, {
				"name": "playbook_ability_frame_upgrade",
				"description": "playbook_ability_frame_upgrade_description"
			}],
			"items": [],
			"friends": []
		},
		"leech": {
			"base": {
				"friends_title": "playbook_leech_friends_title",
				"gatherinfo1": "gatherinfo_what_do_they_intend",
				"gatherinfo2": "gatherinfo_how_can_I_get_them",
				"gatherinfo3": "gatherinfo_are_they_telling",
				"gatherinfo4": "gatherinfo_what_can_I_tinker",
				"gatherinfo5": "gatherinfo_what_might_happen",
				"gatherinfo6": "gatherinfo_how_can_I_find",
				"playbook_description": "playbook_leech_description",
				"setting_traumata_set": "normal",
				"setting_vice_type": "normal",
				"tinker1": "1",
				"tinker2": "1",
				"wreck1": "1",
				"xp_condition": "playbook_leech_xp_condition"
			},
			"abilities": [{
				"name": "playbook_ability_alchemist",
				"description": "playbook_ability_alchemist_description"
			}, {
				"name": "playbook_ability_analyst",
				"description": "playbook_ability_analyst_description"
			}, {
				"name": "playbook_ability_artificer",
				"description": "playbook_ability_artificer_description"
			}, {
				"name": "playbook_ability_fortitude",
				"description": "playbook_ability_fortitude_description"
			}, {
				"name": "playbook_ability_ghost_ward",
				"description": "playbook_ability_ghost_ward_description"
			}, {
				"name": "playbook_ability_physicker",
				"description": "playbook_ability_physicker_description"
			}, {
				"name": "playbook_ability_saboteur",
				"description": "playbook_ability_saboteur_description"
			}, {
				"name": "playbook_ability_venomous",
				"description": "playbook_ability_venomous_description"
			}],
			"items": [{
				"bold": "on",
				"name": "playbook_item_fine_tinkering_tools",
				"numboxes": "1"
			}, {
				"bold": "on",
				"name": "playbook_item_fine_wrecker_tools",
				"numboxes": "2"
			}, {
				"name": "playbook_item_blowgun_&_darts,_syringes",
				"numboxes": "0"
			}, {
				"name": "playbook_item_bandolier_of_alchemicals_(3)",
				"numboxes": "1"
			}, {
				"name": "playbook_item_bandolier_of_alchemicals_(3)",
				"numboxes": "1"
			}, {
				"name": "playbook_item_gadget",
				"numboxes": "1"
			}],
			"friends": ["playbook_leech_friend_0", "playbook_leech_friend_1", "playbook_leech_friend_2", "playbook_leech_friend_3", "playbook_leech_friend_4"]
		},
		"lurk": {
			"base": {
				"friends_title": "playbook_lurk_friends_title",
				"finesse1": "1",
				"gatherinfo1": "gatherinfo_what_do_they_intend",
				"gatherinfo2": "gatherinfo_how_can_I_get_them",
				"gatherinfo3": "gatherinfo_what_should_I_look",
				"gatherinfo4": "gatherinfo_whats_the_best_way",
				"gatherinfo5": "gatherinfo_where_can_I_hide",
				"gatherinfo6": "gatherinfo_how_can_I_find",
				"playbook_description": "playbook_lurk_description",
				"prowl1": "1",
				"prowl2": "1",
				"setting_traumata_set": "normal",
				"setting_vice_type": "normal",
				"xp_condition": "playbook_lurk_xp_condition"
			},
			"abilities": [{
				"name": "playbook_ability_infiltrator",
				"description": "playbook_ability_infiltrator_description"
			}, {
				"name": "playbook_ability_ambush",
				"description": "playbook_ability_ambush_description"
			}, {
				"name": "playbook_ability_daredevil",
				"description": "playbook_ability_daredevil_description"
			}, {
				"name": "playbook_ability_the_devil's_footsteps",
				"description": "playbook_ability_the_devil's_footsteps_description"
			}, {
				"name": "playbook_ability_expertise",
				"description": "playbook_ability_expertise_description"
			}, {
				"name": "playbook_ability_ghost_veil",
				"description": "playbook_ability_ghost_veil_description"
			}, {
				"name": "playbook_ability_reflexes",
				"description": "playbook_ability_reflexes_description"
			}, {
				"name": "playbook_ability_shadow",
				"description": "playbook_ability_shadow_description"
			}],
			"items": [{
				"bold": "on",
				"name": "playbook_item_fine_lockpicks",
				"numboxes": "0"
			}, {
				"bold": "on",
				"name": "playbook_item_fine_shadow_cloak",
				"numboxes": "1"
			}, {
				"name": "playbook_item_light_climbing_gear",
				"numboxes": "1"
			}, {
				"name": "playbook_item_silence_potion_vial",
				"numboxes": "0"
			}, {
				"name": "playbook_item_dark-sight_goggles",
				"numboxes": "1"
			}, {
				"name": "playbook_item_spiritbane_charm",
				"numboxes": "0"
			}],
			"friends": ["playbook_lurk_friend_0", "playbook_lurk_friend_1", "playbook_lurk_friend_2", "playbook_lurk_friend_3", "playbook_lurk_friend_4"]
		},
		"slide": {
			"base": {
				"friends_title": "playbook_slide_friends_title",
				"consort1": "1",
				"gatherinfo1": "gatherinfo_what_do_they_intend",
				"gatherinfo2": "gatherinfo_how_can_I_get_them",
				"gatherinfo3": "gatherinfo_are_they_telling",
				"gatherinfo4": "gatherinfo_what_are_they_really",
				"gatherinfo5": "gatherinfo_what_do_they_really",
				"gatherinfo6": "gatherinfo_how_can_I_blend",
				"playbook_description": "playbook_slide_description",
				"setting_traumata_set": "normal",
				"setting_vice_type": "normal",
				"sway1": "1",
				"sway2": "1",
				"xp_condition": "playbook_slide_xp_condition"
			},
			"abilities": [{
				"name": "playbook_ability_rook's_gambit",
				"description": "playbook_ability_rook's_gambit_description"
			}, {
				"name": "playbook_ability_cloak_&_dagger",
				"description": "playbook_ability_cloak_&_dagger_description"
			}, {
				"name": "playbook_ability_ghost_voice",
				"description": "playbook_ability_ghost_voice_description"
			}, {
				"name": "playbook_ability_like_looking_into_a_mirror",
				"description": "playbook_ability_like_looking_into_a_mirror_description"
			}, {
				"name": "playbook_ability_a_little_something_on_the_side",
				"description": "playbook_ability_a_little_something_on_the_side_description"
			}, {
				"name": "playbook_ability_mesmerism",
				"description": "playbook_ability_mesmerism_description"
			}, {
				"name": "playbook_ability_subterfuge",
				"description": "playbook_ability_subterfuge_description"
			}, {
				"name": "playbook_ability_trust_in_me",
				"description": "playbook_ability_trust_in_me_description"
			}],
			"items": [{
				"bold": "on",
				"name": "playbook_item_fine_clothes_&_jewelry",
				"numboxes": "0"
			}, {
				"bold": "on",
				"name": "playbook_item_fine_disguise_kit",
				"numboxes": "1"
			}, {
				"bold": "on",
				"name": "playbook_item_fine_loaded_dice,_trick_cards",
				"numboxes": "0"
			}, {
				"name": "playbook_item_trance_powder",
				"numboxes": "0"
			}, {
				"name": "playbook_item_a_cane-sword",
				"numboxes": "1"
			}, {
				"name": "playbook_item_spiritbane_charm",
				"numboxes": "0"
			}],
			"friends": ["playbook_slide_friend_0", "playbook_slide_friend_1", "playbook_slide_friend_2", "playbook_slide_friend_3", "playbook_slide_friend_4"]
		},
		"spider": {
			"base": {
				"consort1": "1",
				"consort2": "1",
				"friends_title": "playbook_spider_friends_title",
				"gatherinfo1": "gatherinfo_what_do_they_want",
				"gatherinfo2": "gatherinfo_what_should_I_look",
				"gatherinfo3": "gatherinfo_wheres_the_leverage",
				"gatherinfo4": "gatherinfo_how_can_I_discover",
				"gatherinfo5": "gatherinfo_what_do_they_intend",
				"gatherinfo6": "gatherinfo_how_can_I_get_them",
				"playbook_description": "playbook_spider_description",
				"setting_traumata_set": "normal",
				"setting_vice_type": "normal",
				"study1": "1",
				"xp_condition": "playbook_spider_xp_condition"
			},
			"abilities": [{
				"name": "playbook_ability_foresight",
				"description": "playbook_ability_foresight_description"
			}, {
				"name": "playbook_ability_calculating",
				"description": "playbook_ability_calculating_description"
			}, {
				"name": "playbook_ability_connected",
				"description": "playbook_ability_connected_description"
			}, {
				"name": "playbook_ability_functioning_vice",
				"description": "playbook_ability_functioning_vice_description"
			}, {
				"name": "playbook_ability_ghost_contract",
				"description": "playbook_ability_ghost_contract_description"
			}, {
				"name": "playbook_ability_jail_bird",
				"description": "playbook_ability_jail_bird_description"
			}, {
				"name": "playbook_ability_mastermind",
				"description": "playbook_ability_mastermind_description"
			}, {
				"name": "playbook_ability_weaving_the_web",
				"description": "playbook_ability_weaving_the_web_description"
			}],
			"items": [{
				"bold": "on",
				"name": "playbook_item_fine_cover_identity",
				"numboxes": "0"
			}, {
				"bold": "on",
				"name": "playbook_item_fine_bottle_of_whiskey",
				"numboxes": "1"
			}, {
				"name": "playbook_item_blueprints",
				"numboxes": "1"
			}, {
				"name": "playbook_item_vial_of_slumber_essence",
				"numboxes": "0"
			}, {
				"name": "playbook_item_concealed_palm_pistol",
				"numboxes": "0"
			}, {
				"name": "playbook_item_spiritbane_charm",
				"numboxes": "0"
			}],
			"friends": ["playbook_spider_friend_0", "playbook_spider_friend_1", "playbook_spider_friend_2", "playbook_spider_friend_3", "playbook_spider_friend_4"]
		},
		"whisper": {
			"base": {
				"attune1": "1",
				"attune2": "1",
				"friends_title": "playbook_whisper_friends_title",
				"gatherinfo1": "gatherinfo_what_is_arcane",
				"gatherinfo2": "gatherinfo_what_echoes",
				"gatherinfo3": "gatherinfo_what_is_hidden",
				"gatherinfo4": "gatherinfo_what_do_they_intend",
				"gatherinfo5": "gatherinfo_what_drives_them",
				"gatherinfo6": "gatherinfo_reveal",
				"playbook_description": "playbook_whisper_description",
				"setting_traumata_set": "normal",
				"setting_vice_type": "normal",
				"study1": "1",
				"xp_condition": "playbook_whisper_xp_condition"
			},
			"abilities": [{
				"name": "playbook_ability_compel",
				"description": "playbook_ability_compel_description"
			}, {
				"name": "playbook_ability_ghost_mind",
				"description": "playbook_ability_ghost_mind_description"
			}, {
				"name": "playbook_ability_iron_will",
				"description": "playbook_ability_iron_will_description"
			}, {
				"name": "playbook_ability_occultist",
				"description": "playbook_ability_occultist_description"
			}, {
				"name": "playbook_ability_ritual",
				"description": "playbook_ability_ritual_description"
			}, {
				"name": "playbook_ability_strange_methods",
				"description": "playbook_ability_strange_methods_description"
			}, {
				"name": "playbook_ability_tempest",
				"description": "playbook_ability_tempest_description"
			}, {
				"name": "playbook_ability_warded",
				"description": "playbook_ability_warded_description"
			}],
			"items": [{
				"bold": "on",
				"name": "playbook_item_fine_lightning_hook",
				"numboxes": "1"
			}, {
				"bold": "on",
				"name": "playbook_item_fine_spirit_mask",
				"numboxes": "1"
			}, {
				"name": "playbook_item_electroplasm_vials",
				"numboxes": "0"
			}, {
				"name": "playbook_item_spirit_bottles_(2)",
				"numboxes": "1"
			}, {
				"name": "playbook_item_ghost_key",
				"numboxes": "0"
			}, {
				"name": "playbook_item_demonbane_charm",
				"numboxes": "0"
			}],
			"friends": ["playbook_whisper_friend_0", "playbook_whisper_friend_1", "playbook_whisper_friend_2", "playbook_whisper_friend_3", "playbook_whisper_friend_4"]
		},
		"vampire": {
			"base": {
				"friends_title": "playbook_vampire_friends_title",
				"gatherinfo1": "gatherinfo_what_do_they_intend",
				"gatherinfo2": "gatherinfo_how_can_I_get_them",
				"gatherinfo3": "gatherinfo_what_are_they_really",
				"gatherinfo4": "gatherinfo_what_should_I_look",
				"gatherinfo5": "gatherinfo_wheres_the_weakness",
				"gatherinfo6": "gatherinfo_how_can_I_find",
				"playbook_description": "playbook_vampire_description",
				"setting_extra_stress": "3",
				"setting_vampirexp": "on",
				"setting_show_strictures": "on",
				"setting_traumata_set": "normal",
				"setting_vice_type": "vampire",
				"trauma": "4",
				"xp_condition": "playbook_vampire_xp_condition",
				"xp_condition2": "playbook_vampire_xp_condition2",
				"xp_condition3": "playbook_vampire_xp_condition3"
			},
			"abilities": [{
				"check": "on",
				"name": "playbook_ability_undead",
				"description": "playbook_ability_undead_description"
			}, {
				"name": "playbook_ability_terrible_power",
				"description": "playbook_ability_terrible_power_description"
			}, {
				"name": "playbook_ability_arcane_sight",
				"description": "playbook_ability_arcane_sight_description"
			}, {
				"name": "playbook_ability_a_void_in_the_echo",
				"description": "playbook_ability_a_void_in_the_echo_description"
			}, {
				"name": "playbook_ability_dark_talent",
				"description": "playbook_ability_dark_talent_description"
			}, {
				"name": "playbook_ability_sinister_guile",
				"description": "playbook_ability_sinister_guile_description"
			}],
			"items": [{
				"name": "playbook_item_fine_clothes_and_accoutrements",
				"numboxes": "0"
			}, {
				"name": "playbook_item_fine_personal_weapon",
				"numboxes": "1"
			}, {
				"name": "playbook_item_fine_shadow_cloak",
				"numboxes": "1"
			}, {
				"name": "playbook_item_demonbane_charm",
				"numboxes": "0"
			}, {
				"name": "playbook_item_spiritbane_charm",
				"numboxes": "0"
			}],
			"friends": ["playbook_vampire_friend_0", "playbook_vampire_friend_1", "playbook_vampire_friend_2", "playbook_vampire_friend_3", "playbook_vampire_friend_4"]
		}
	},
	factionsData = {
		factions1: [{
				name: 'faction_the_unseen',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_the_hive',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_the_circle_of_flame',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_the_silver_nails',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_lord_scurlock',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_the_crows',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_lampblacks',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_red_sashes',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_dimmer_sisters',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_the_grinders',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_billhooks',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_wraiths',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_the_gray_cloaks',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_ulf_ironborn',
				tier: 'I',
				hold: 'S'
			},
			{
				name: 'faction_the_foghounds',
				tier: 'I',
				hold: 'W'
			},
			{
				name: 'faction_the_lost',
				tier: 'I',
				hold: 'W'
			}
		],
		factions2: [{
				name: 'faction_imperial_military',
				tier: 'VI',
				hold: 'S'
			},
			{
				name: 'faction_city_council',
				tier: 'V',
				hold: 'S'
			},
			{
				name: 'faction_ministry_of_preservation',
				tier: 'V',
				hold: 'S'
			},
			{
				name: 'faction_leviathan_hunters',
				tier: 'V',
				hold: 'S'
			},
			{
				name: 'faction_ironhook_prison',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_sparkwrights',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_spirit_wardens',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_bluecoats',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_inspectors',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_iruvian_consulate',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_skovlan_consulate',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_the_brigade',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_severosi_consulate',
				tier: 'I',
				hold: 'S'
			},
			{
				name: 'faction_dagger_isles_consulate',
				tier: 'I',
				hold: 'S'
			}
		],
		factions3: [{
				name: 'faction_the_foundation',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_dockers',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_gondoliers',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_sailors',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_laborers',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_cabbies',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_cyphers',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_ink_rakes',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_rail_jacks',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_servants',
				tier: 'II',
				hold: 'W'
			}
		],
		factions4: [{
				name: 'faction_the_church_of_ecstasy',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_the_horde',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_the_path_of_echoes',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_the_forgotten_gods',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_the_reconciled',
				tier: 'III',
				hold: 'S'
			},
			{
				name: 'faction_skovlander_refugees',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_the_weeping_lady',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_deathlands_scavengers',
				tier: 'II',
				hold: 'W'
			}
		],
		factions5: [{
				name: 'faction_whitecrown',
				tier: 'V',
				hold: 'S'
			},
			{
				name: 'faction_brightstone',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_charterhall',
				tier: 'IV',
				hold: 'S'
			},
			{
				name: 'faction_six_towers',
				tier: 'III',
				hold: 'W'
			},
			{
				name: 'faction_silkshore',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_nightmarket',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_crow\'s_foot',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_the_docks',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_barrowcleft',
				tier: 'II',
				hold: 'S'
			},
			{
				name: 'faction_coalridge',
				tier: 'II',
				hold: 'W'
			},
			{
				name: 'faction_charhollow',
				tier: 'I',
				hold: 'S'
			},
			{
				name: 'faction_dunslough',
				tier: 'I',
				hold: 'W'
			}
		]
	},
	actionData = {
		insight: [
			'hunt',
			'study',
			'survey',
			'tinker'
		],
		prowess: [
			'finesse',
			'prowl',
			'skirmish',
			'wreck'
		],
		resolve: [
			'attune',
			'command',
			'consort',
			'sway'
		]
	},
	itemData = [{
			name: 'a_blade_or_two',
			numboxes: '1'
		},
		{
			name: 'throwing_knives',
			numboxes: '1'
		},
		{
			name: 'a_pistol',
			numboxes: '1',
			short: 'on'
		},
		{
			name: 'a_2nd_pistol',
			numboxes: '1',
			short: 'on'
		},
		{
			name: 'a_large_weapon',
			numboxes: '2'
		},
		{
			name: 'an_unusual_weapon',
			numboxes: '1'
		},
		{
			name: 'armor',
			numboxes: '2',
			short: 'on'
		},
		{
			name: '+heavy',
			numboxes: '3',
			short: 'on'
		},
		{
			name: 'burglary_gear',
			numboxes: '1'
		},
		{
			name: 'climbing_gear',
			numboxes: '2'
		},
		{
			name: 'arcane_implements',
			numboxes: '1'
		},
		{
			name: 'documents',
			numboxes: '1'
		},
		{
			name: 'subterfuge_supplies',
			numboxes: '1'
		},
		{
			name: 'demolition_tools',
			numboxes: '2'
		},
		{
			name: 'tinkering_tools',
			numboxes: '1'
		},
		{
			name: 'lantern',
			numboxes: '1'
		}
	],
	spiritPlaybooks = ['ghost', 'hull', 'vampire'],
	defaultValues = {
		cohort1_name: 'cohort',
		contacts_title: 'contacts',
		factions_title: 'factions_title',
		factions1_header: 'factions1',
		factions2_header: 'factions2',
		factions3_header: 'factions3',
		factions4_header: 'factions4',
		factions5_header: 'factions5',
		frame: 'frame',
		friends_title: 'friends',
		setting_stress_label: 'stress',
		setting_trauma_label: 'trauma',
		upgrade_6_desc: 'carriage',
		upgrade_7_desc: 'documents',
		upgrade_8_desc: 'boat',
		upgrade_9_desc: 'gear',
		upgrade_10_desc: 'hidden',
		upgrade_11_desc: 'implements',
		upgrade_12_desc: 'quarters',
		upgrade_13_desc: 'supplies',
		upgrade_14_desc: 'secure',
		upgrade_15_desc: 'tools',
		upgrade_16_desc: 'vault',
		upgrade_17_desc: 'weapons',
		upgrade_18_desc: 'workshop',
		upgrade_20_desc: 'insight',
		upgrade_21_desc: 'prowess',
		upgrade_22_desc: 'resolve',
		upgrade_23_desc: 'personal',
		upgrade_24_desc: 'mastery',
		xp_condition2: 'xp_beliefs',
		xp_condition3: 'xp_vice'
	};
/* NECESSARY DATA TRANSFORMATION */
Object.keys(crewData).forEach(crew => {
	crewData[crew].contacts = crewData[crew].contacts.map(n => ({
		name: n
	}));
});
/* Translate itemData */
itemData.forEach(item => {
	item.boxes_chosen = 'on';
	item.name = getTranslationByKey(item.name);
});
/* Translate defaultValues */
Object.keys(defaultValues).forEach(k => {
	defaultValues[k] = getTranslationByKey(defaultValues[k]);
});
/* Translate factions */
Object.keys(factionsData).forEach(x => {
	factionsData[x].forEach(faction => {
		faction.name = getTranslationByKey(faction.name);
	});
});
/* Translate playbooks */
Object.keys(playbookData).forEach(playbook => {
	let base = playbookData[playbook].base,
		translatedBaseAttributes = [
			'friends_title',
			'gatherinfo1',
			'gatherinfo2',
			'gatherinfo3',
			'gatherinfo4',
			'gatherinfo5',
			'gatherinfo6',
			'playbook_description',
			'setting_stress_label',
			'setting_trauma_label',
			'xp_condition',
			'xp_condition2',
			'xp_condition3'
		];
	Object.keys(base).forEach(attr => {
		if (translatedBaseAttributes.includes(attr)) {
			base[attr] = getTranslationByKey(base[attr]);
		}
	});
	playbookData[playbook].friends = playbookData[playbook].friends.map(n => ({
		name: getTranslationByKey(n)
	}));
	playbookData[playbook].abilities.forEach(ability => {
		ability.name = getTranslationByKey(ability.name);
		ability.description = getTranslationByKey(ability.description);
	});
	playbookData[playbook].items.forEach(item => {
		item.name = getTranslationByKey(item.name);
		item.boxes_chosen = 'on';
	});
});
/* UTILITY FUNCTIONS */
var setDiceFromTotal = (name, numDice, upToFive, value) => {
		'use strict';
		value = value || 1;
		let setting = {};
		setting[`${name}1`] = (numDice > 0) ? value : 0;
		setting[`${name}2`] = (numDice > 1) ? value : 0;
		setting[`${name}3`] = (numDice > 2) ? value : 0;
		setting[`${name}4`] = (numDice > 3) ? value : 0;
		if (upToFive) {
			setting[`${name}5`] = (numDice > 4) ? value : 0;
		};
		setAttrs(setting);
	},
	fillRepeatingSectionFromData = (sectionName, dataList) => {
		'use strict';
		getSectionIDs(`repeating_${sectionName}`, idList => {
			let rowNameAttributes = idList.map(id => `repeating_${sectionName}_${id}_name`);
			getAttrs(rowNameAttributes, v => {
				let existingRows = Object.keys(v).map(x => v[x]),
					createdIDs = [];
				let setting = dataList.filter(o => !existingRows.includes(o.name))
					.map(o => {
						let rowID;
						while (!rowID) {
							let newID = generateRowID();
							if (!createdIDs.includes(newID)) {
								rowID = newID;
								createdIDs.push(rowID);
							}
						}
						return Object.keys(o).reduce((m, key) => {
							m[`repeating_${sectionName}_${rowID}_${key}`] = o[key];
							return m;
						}, {});
					})
					.reduce((m, o) => Object.assign(m, o), {});
				setAttrs(setting);
			});
		});
	},
	emptyFirstRowIfUnnamed = sectionName => {
		'use strict';
		getSectionIDs(`repeating_${sectionName}`, idList => {
			let id = idList[0];
			getAttrs([`repeating_${sectionName}_${id}_name`], v => {
				if (!v[`repeating_${sectionName}_${id}_name`]) {
					removeRepeatingRow(`repeating_${sectionName}_${id}`);
				};
			});
		});
	};
/* DEFAULT FILLS FOR PLAYBOOKS AND CREWS */
/* Set some default fields when setting crew type or playbook */
var crewAttributes = [...new Set([].concat(...Object.keys(crewData).map(x => Object.keys(crewData[x].base))))],
	playbookAttributes = [...new Set([].concat(...Object.keys(playbookData).map(x => Object.keys(playbookData[x].base))))],
	watchedAttributes = new Set([].concat(crewAttributes, playbookAttributes));
on('change:crew_type change:playbook', event => {
	'use strict';
	getAttrs(['crew_type', 'playbook', 'changed_attributes'], v => {
		let changedAttributes = (v.changed_attributes || '').split(','),
			data, baseData, sourceName;
		switch (event.sourceAttribute) {
		case 'crew_type':
			sourceName = v.crew_type.toLowerCase();
			if (crewData.hasOwnProperty(sourceName)) {
				data = crewData[sourceName].base;
				baseData = crewAttributes;
				emptyFirstRowIfUnnamed('contact');
				emptyFirstRowIfUnnamed('crewability');
				fillRepeatingSectionFromData('contact', crewData[sourceName].contacts);
				fillRepeatingSectionFromData('crewability', crewData[sourceName].abilities);
			};
			break;
		case 'playbook':
			sourceName = v.playbook.toLowerCase();
			if (playbookData.hasOwnProperty(sourceName)) {
				data = playbookData[sourceName].base;
				emptyFirstRowIfUnnamed('friend');
				emptyFirstRowIfUnnamed('ability');
				fillRepeatingSectionFromData('playbookitem', playbookData[sourceName].items);
				fillRepeatingSectionFromData('friend', playbookData[sourceName].friends);
				fillRepeatingSectionFromData('ability', playbookData[sourceName].abilities);
				baseData = playbookAttributes;
			};
		};
		/* Change unset attributes to default */
		if (data) {
			let finalSettings = {};
			if (!spiritPlaybooks.includes(sourceName)) {
				baseData.filter(name => !changedAttributes.includes(name))
					.forEach(name => (finalSettings[name] = defaultValues[name] || ''));
			};
			Object.keys(data).filter(name => !changedAttributes.includes(name))
				.forEach(name => (finalSettings[name] = data[name]));
			setAttrs(finalSettings);
		};
	});
});
/* Watch for changes in auto-set attributes */
watchedAttributes.forEach(name => {
	'use strict';
	on(`change:${name}`, eventInfo => {
		if (eventInfo.sourceType === 'player') {
			getAttrs(['changed_attributes'], v => {
				let changedAttributes = [...new Set(v.changed_attributes.split(',').concat(name))].filter(x => !!x).join(',');
				setAttrs({
					changed_attributes: changedAttributes
				});
			});
		}
	});
});
/* DERIVED DICE NUMBERS */
var actions1 = Object.keys(actionData).reduce((m, k) => {
		m[k] = actionData[k].map(s => `${s}1`);
		return m;
	}, {}),
	actionsFlat = [].concat(...Object.keys(actionData).map(x => actionData[x])),
	actions1Flat = actionsFlat.map(str => str + '1'),
	calculateResistance = name => {
		'use strict';
		getAttrs(actions1[name], v => {
			let numDice = Object.keys(v).map(x => v[x]).reduce((s, c) => s + parseInt(c || 0), 0);
			setDiceFromTotal(name, numDice);
		});
	},
	calculateVice = () => {
		'use strict';
		getAttrs(actions1Flat, v => {
			let numDice = Math.min(...Object.keys(actions1).map(name => {
				return actions1[name].reduce((s, str) => s + parseInt(v[str] || 0), 0);
			}));
			setDiceFromTotal('vice', numDice);
		});
	};
/* Register attribute/action event handlers */
Object.keys(actionData).forEach(attributeName => {
	'use strict';
	actionData[attributeName].forEach(actionName => {
		on(`change:${actionName}1`, () => calculateResistance(attributeName));
	});
	on([1, 2, 3, 4].map(x => `change:${attributeName}${x}`).join(' '), calculateVice);
});
/* GENERATE FACTIONS */
on('change:generate_factions', () => {
	'use strict';
	Object.keys(factionsData).forEach(function (sectionName) {
		fillRepeatingSectionFromData(sectionName, factionsData[sectionName]);
	});
});
/* GENERATE ABILITIES */
on('change:generate_abilities', () => {
	'use strict';
	getAttrs(['generate_source'], v => {
		let sectionName, dataList;
		if (crewData.hasOwnProperty(v.generate_source)) {
			sectionName = 'crewability';
			dataList = crewData[v.generate_source].abilities;
		}
		else if (playbookData.hasOwnProperty(v.generate_source)) {
			sectionName = 'ability';
			dataList = playbookData[v.generate_source].abilities;
		};
		emptyFirstRowIfUnnamed(sectionName);
		fillRepeatingSectionFromData(sectionName, dataList);
	});
});
/* GENERATE FRIENDS */
on('change:generate_friends', () => {
	'use strict';
	getAttrs(['generate_source'], v => {
		let sectionName, dataList;
		if (crewData.hasOwnProperty(v.generate_source)) {
			sectionName = 'contact';
			dataList = crewData[v.generate_source].contacts;
		}
		else if (playbookData.hasOwnProperty(v.generate_source)) {
			sectionName = 'friend';
			dataList = playbookData[v.generate_source].friends;
		};
		emptyFirstRowIfUnnamed(sectionName);
		fillRepeatingSectionFromData(sectionName, dataList);
	});
});
/* CALCULATE WANTED */
on('change:wanted', () => {
	'use strict';
	getAttrs(['wanted'], v => {
		setDiceFromTotal('wanted', parseInt(v.wanted));
	});
});
/* EXTRA STRESS BOXES */
on('change:setting_extra_stress', () => {
	'use strict';
	getAttrs(['setting_extra_stress'], v => {
		setDiceFromTotal('setting_extra_stress', parseInt(v.setting_extra_stress), true, 'on');
	});
});
/* CALCULATE COHORT QUALITY */
var calculateCohortDots = function (t1, t2, t3, t4, imp, type, prefix) {
		'use strict';
		let numDots = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4);
		if (imp === 'on') {
			numDots = numDots - 1;
		};
		if (type === 'elite' || type === 'expert') {
			numDots = numDots + 1;
		};
		setDiceFromTotal(`${prefix}die`, numDots, true);
	},
	qualityAttrs = ['crew_tier1', 'crew_tier2', 'crew_tier3', 'crew_tier4', 'cohort1_impaired', 'cohort1_type'],
	qualityEvent = qualityAttrs.map(x => `change:${x}`).join(' '),
	repeatingQualityAttrs = ['crew_tier1', 'crew_tier2', 'crew_tier3', 'crew_tier4', 'repeating_cohort:impaired', 'repeating_cohort:type'],
	repeatingQualityEvent = repeatingQualityAttrs.map(x => `change:${x}`).join(' ');
on(qualityEvent, () => {
	'use strict';
	getAttrs(qualityAttrs, attrs => {
		calculateCohortDots(attrs.crew_tier1, attrs.crew_tier2, attrs.crew_tier3, attrs.crew_tier4, attrs.cohort1_impaired, attrs.cohort1_type, 'cohort1_');
	});
});
on(repeatingQualityEvent + ' ' + ['name', 'subtype', 'edges', 'flaws', 'description'].map(x => `change:repeating_cohort:${x}`).join(' '), () => {
	'use strict';
	getSectionIDs('repeating_cohort', list => {
		list.forEach(id => {
			let attrList = repeatingQualityAttrs.map(str => str.replace(':', `_${id}_`));
			getAttrs(attrList, v => {
				calculateCohortDots(v.crew_tier1, v.crew_tier2, v.crew_tier3, v.crew_tier4, v[attrList[4]], v[attrList[5]], `repeating_cohort_${id}_`);
			});
		});
	});
});
/* LEFT-FILL CHECKBOXES */
var handleFourBoxesFill = name => {
	'use strict';
	on(`change:${name}1 change:${name}2 change:${name}3 change:${name}4`, event => {
		getAttrs([event.sourceAttribute], v => {
			let rName = event.sourceAttribute.slice(0, -1);
			if (v[event.sourceAttribute] === '1') {
				let setting = {};
				switch (event.sourceAttribute.slice(-1)) {
				case '4':
					setting[`${rName}3`] = '1';
				case '3':
					setting[`${rName}2`] = '1';
				case '2':
					setting[`${rName}1`] = '1';
				};
				setAttrs(setting);
			};
			if (v[event.sourceAttribute] === '0') {
				let setting = {};
				switch (event.sourceAttribute.slice(-1)) {
				case '1':
					setting[`${rName}2`] = '0';
				case '2':
					setting[`${rName}3`] = '0';
				case '3':
					setting[`${rName}4`] = '0';
				};
				setAttrs(setting);
			};
		});
	});
};
/* Action ratings */
actionsFlat.forEach(handleFourBoxesFill);
/* Crew Tier */
handleFourBoxesFill('crew_tier');
/* Items/Upgrades */
var legacyChecks = [
	'upgrade_1_check',
	'upgrade_24_check',
	'bandolier1_check',
	'bandolier2_check'
];
legacyChecks.forEach(name => {
	'use strict';
	on(['', '_b', '_c', '_d', '_e'].map(x => `change:${name}${x}`).join(' '), event => {
		getAttrs([event.sourceAttribute], v => {
			if (v[event.sourceAttribute] === 'on') {
				let setting = {};
				switch (event.sourceAttribute.slice('-1')) {
				case 'e':
					setting[`${name}_d`] = 'on';
				case 'd':
					setting[`${name}_c`] = 'on';
				case 'c':
					setting[`${name}_b`] = 'on';
				case 'b':
					setting[`${name}`] = 'on';
				};
				setAttrs(setting);
			};
			if (v[event.sourceAttribute] === '0') {
				let setting = {};
				switch (event.sourceAttribute.slice('-1')) {
				case 'k':
					setting[`${name}_b`] = 0;
				case 'b':
					setting[`${name}_c`] = 0;
				case 'c':
					setting[`${name}_d`] = 0;
				case 'd':
					setting[`${name}_e`] = 0;
				};
				setAttrs(setting);
			};
		});
	});
});
['item', 'playbookitem'].forEach(sectionName => {
	on([1, 2, 3].map(x => `change:repeating_${sectionName}:check_${x}`).join(' '), event => {
		getAttrs([event.sourceAttribute], v => {
			let rName = event.sourceAttribute.slice(0, -1),
				setting = {};
			if (v[event.sourceAttribute] === 'on') {
				switch (event.sourceAttribute.slice(-1)) {
				case '3':
					setting[`${rName}2`] = 'on';
				case '2':
					setting[`${rName}1`] = 'on';
				};
			};
			if (v[event.sourceAttribute] === '0') {
				switch (event.sourceAttribute.slice(-1)) {
				case '1':
					setting[`${rName}2`] = '0';
				case '2':
					setting[`${rName}3`] = '0';
				};
			};
			setAttrs(setting);
		});
	});
});
/* INITIALISATION AND UPGRADES */
on('sheet:opened', () => {
	'use strict';
	let initialRows = [
		'ability',
		'friend',
		'crewability',
		'contact'
	];
	/* Make sure sheet_type is never 0 */
	getAttrs(['sheet_type', 'changed_attributes'], v => {
		if (!['character', 'crew', 'faction'].includes(v.sheet_type)) {
			setAttrs({
				sheet_type: 'character'
			});
		}
	});
	/* Set up queries */
	setAttrs({
		bonusdice: `?{${getTranslationByKey('bonusdice')}}`,
		bonusdice_long: `?{${getTranslationByKey('bonusdice')}|0|1|2|3|4|5|6|-1|-2|-3}`,
		effect_query: getTranslationByKey('effect_query'),
		notes_query: `?{${getTranslationByKey('notes')}|}`,
		numberofdice: `?{${getTranslationByKey('numberofdice')}}`,
		numberofdice_long: `?{${getTranslationByKey('numberofdice')}|0|1|2|3|4|5|6}`,
		position_query: getTranslationByKey('position_query')
	});
	/* Setup and upgrades */
	getAttrs(['version'], v => {
		// Setup initial rows in repeating sections and generate standard items
		if (!v.version) {
			let setting = initialRows.reduce((memo, sectionName) => {
				memo[`repeating_${sectionName}_${generateRowID()}_dummy`] = 1;
				return memo;
			}, {});
			setAttrs(setting);
			fillRepeatingSectionFromData('item', itemData);
			setAttrs(defaultValues);
		};
		// Upgrade to 0.7: Convert legacy faction repeating section to text
		if (v.version && v.version.split('.')[0] === '0' && parseInt(v.version.split('.')[1]) < 7) {
			getSectionIDs('repeating_faction', list => {
				let sectionList = ['faction1', 'faction2'].concat(list.map(str => `repeating_faction_${str}`)),
					attrList = [].concat(...sectionList.map(str => [`${str}_name`, `${str}_status`, `${str}_description`]));
				getAttrs(attrList, v => {
					let output = sectionList.map(str => {
						return 'Name: ' + v[`${str}_name`] + '\n' +
							'Status: ' + (v[`${str}_status`] || '') + '\n' +
							'Notes: ' + (v[`${str}_description`] || '') + '\n';
					}).join('\n');
					setAttrs({
						faction_notes: output
					});
					setAttrs({
						faction1_name: '',
						faction1_status: '',
						faction1_description: '',
						faction1_expand: '',
						faction2_name: '',
						faction2_status: '',
						faction2_description: '',
						faction2_expand: ''
					});
					list.forEach(id => removeRepeatingRow(`repeating_faction_${id}`));
				});
			});
		};
		// Upgrade to 0.9: Convert ability/friend/crewability/contact first row
		if (v.version && v.version.split('.')[0] === '0' && parseInt(v.version.split('.')[1]) < 9) {
			let attrs = ['ability1_check', 'ability1_name', 'ability1_description',
				'friend1_status', 'friend1_name',
				'crew_ability1_check', 'crew_ability1_name', 'crew_ability1_description',
				'contact1_check', 'contact1_name'
			];
			getAttrs(attrs, v => {
				fillRepeatingSectionFromData('ability', [{
					check: v.ability1_check,
					description: v.ability1_description,
					name: v.ability1_name
				}]);
				fillRepeatingSectionFromData('friend', [{
					name: v.friend1_name,
					status: v.friend1_status
				}]);
				fillRepeatingSectionFromData('crewability', [{
					check: v.crew_ability1_check,
					description: v.crew_ability1_description,
					name: v.crew_ability1_name
				}]);
				fillRepeatingSectionFromData('contact', [{
					check: v.contact1_check,
					name: v.contact1_name
				}]);
			});
		};
		// Upgrade to 1.0: Make sure that resistance values are calculated correctly.
		if (v.version && parseInt(v.version.split('.')[0]) < 1) {
			Object.keys(actionData).forEach(calculateResistance);
			calculateVice();
		};
		// Upgrade to 1.4: Convert playbook items and repeating items
		if (v.version && (parseInt(v.version.split('.')[0]) < 1 || (parseInt(v.version.split('.')[0]) === 1 && parseInt(v.version.split('.')[1]) < 4))) {
			let indices = [...Array(10).keys()], // [0:9]
				allAttrs = [
					...indices.map(n => `item_${n}_check`),
					...indices.map(n => `item_${n}_desc`),
					'item_0_check_b',
					'item_0_check_c',
					'item_1_check_b'
				];
			getAttrs(allAttrs, v => {
				let items = [];
				if (v['item_0_desc']) {
					items.push({
						check_1: v['item_0_check'] || '0',
						name: v['item_0_desc'],
						numboxes: '1'
					});
					items.push({
						check_1: v['item_0_check_b'] || '0',
						name: v['item_0_desc'],
						numboxes: '1'
					});
					items.push({
						check_1: v['item_0_check_c'] || '0',
						name: v['item_0_desc'],
						numboxes: '1'
					});
				}
				if (v['item_1_desc']) {
					items.push({
						bold: 'on',
						check_1: v['item_1_check'] || '0',
						check_2: v['item_1_check_b'] || '0',
						name: v['item_1_desc'],
						numboxes: '2'
					});
				}
				['2', '3', '5', '6'].forEach(index => {
					if (v[`item_${index}_desc`]) {
						items.push({
							bold: (['2', '3'].includes(index) ? 'on' : '0'),
							check_1: v[`item_${index}_check`] || '0',
							name: v[`item_${index}_desc`],
							numboxes: '1'
						});
					}
				});
				['4', '7', '8', '9'].forEach(index => {
					if (v[`item_${index}_desc`]) {
						items.push({
							bold: ((index === '4') ? 'on' : '0'),
							check_1: v[`item_${index}_check`] || '0',
							name: v[`item_${index}_desc`],
							numboxes: '0'
						});
					}
				});
				items.forEach(obj => {
					obj['boxes_chosen'] = 'on';
				});
				fillRepeatingSectionFromData('playbookitem', items);
			});
			getSectionIDs('repeating_item', idArray => {
				let allAttrs = [
					...idArray.map(id => `repeating_item_${id}_desc`),
					...idArray.map(id => `repeating_item_${id}_check`),
					...idArray.map(id => `repeating_item_${id}_check_b`)
				];
				getAttrs(allAttrs, v => {
					let setting = {};
					idArray.forEach(id => {
						setting[`repeating_item_${id}_boxes_chosen`] = 'on';
						setting[`repeating_item_${id}_numboxes`] = '2';
						setting[`repeating_item_${id}_name`] = v[`repeating_item_${id}_desc`] || '';
						setting[`repeating_item_${id}_check_1`] = v[`repeating_item_${id}_check`] || '0';
						setting[`repeating_item_${id}_check_2`] = v[`repeating_item_${id}_check_b`] || '0';
					});
					setAttrs(setting);
				});
			});
		};
		// Upgrade to 1.5: Convert items
		if (v.version && (parseInt(v.version.split('.')[0]) < 1 || (parseInt(v.version.split('.')[0]) === 1 && parseInt(v.version.split('.')[1]) < 5))) {
			let indices = [...Array(25).keys()].slice(10),
				allAttrs = [
					...indices.map(n => `item_${n}_check`),
					...indices.map(n => `item_${n}_desc`),
					'item_14_check_b',
					'item_16_check_b',
					'item_16_check_c',
					'item_16_check_d',
					'item_16_check_e',
					'item_18_check_b',
					'item_22_check_b'
				];
			getAttrs(allAttrs, v => {
				let items = [{
						check_1: (v['item_10_check'] || '0'),
						name: (v['item_10_desc'] || 'A Blade or Two'),
						numboxes: '1'
					},
					{
						check_1: (v['item_11_check'] || '0'),
						name: (v['item_11_desc'] || 'Throwing Knives'),
						numboxes: '1'
					},
					{
						check_1: (v['item_12_check'] || '0'),
						name: (v['item_12_desc'] || 'A Pistol'),
						numboxes: '1',
						short: 'on'
					},
					{
						check_1: (v['item_13_check'] || '0'),
						name: (v['item_13_desc'] || 'A 2nd Pistol'),
						numboxes: '1',
						short: 'on'
					},
					{
						check_1: (v['item_14_check'] || '0'),
						check_2: (v['item_14_check_b'] || '0'),
						name: (v['item_14_desc'] || 'A Large Weapon'),
						numboxes: '2'
					},
					{
						check_1: (v['item_15_check'] || '0'),
						name: (v['item_15_desc'] || 'An Unusual Weapon'),
						numboxes: '1'
					},
					{
						check_1: (v['item_16_check'] || '0'),
						check_2: (v['item_16_check_b'] || '0'),
						name: (v['item_16_desc'] || 'Armor'),
						numboxes: '2',
						short: 'on'
					},
					{
						check_1: (v['item_16_check_c'] || '0'),
						check_2: (v['item_16_check_d'] || '0'),
						check_3: (v['item_16_check_e'] || '0'),
						name: (v['item_16_desc_b'] || '+Heavy'),
						numboxes: '3',
						short: 'on'
					},
					{
						check_1: (v['item_17_check'] || '0'),
						name: (v['item_17_desc'] || 'Burglary Gear'),
						numboxes: '1'
					},
					{
						check_1: (v['item_18_check'] || '0'),
						name: (v['item_18_desc'] || 'Climbing Gear'),
						numboxes: '2'
					},
					{
						check_1: (v['item_19_check'] || '0'),
						name: (v['item_19_desc'] || 'Arcane Implements'),
						numboxes: '1'
					},
					{
						check_1: (v['item_20_check'] || '0'),
						name: (v['item_20_desc'] || 'Documents'),
						numboxes: '1'
					},
					{
						check_1: (v['item_21_check'] || '0'),
						name: (v['item_21_desc'] || 'Subterfuge Supplies'),
						numboxes: '1'
					},
					{
						check_1: (v['item_22_check'] || '0'),
						check_2: (v['item_22_check_b'] || '0'),
						name: (v['item_22_desc'] || 'Demolition Tools'),
						numboxes: '2'
					},
					{
						check_1: (v['item_23_check'] || '0'),
						name: (v['item_23_desc'] || 'Tinkering Tools'),
						numboxes: '1'
					},
					{
						check_1: (v['item_24_check'] || '0'),
						name: (v['item_24_desc'] || 'Lantern'),
						numboxes: '1'
					}
				];
				items.forEach(obj => {
					obj['boxes_chosen'] = 'on';
				});
				fillRepeatingSectionFromData('item', items);
			});
		};
		if (v.version && (parseInt(v.version.split('.')[0]) < 1 || (parseInt(v.version.split('.')[0]) === 1 && parseInt(v.version.split('.')[1]) < 6))) {
			getAttrs(Object.keys(defaultValues), v => {
				let setting = {};
				Object.keys(defaultValues).forEach(k => {
					setting[k] = v[k] || defaultValues[k];
				});
				setAttrs(setting);
			});
		};
		// Set version number
		setAttrs({
			version: '1.6',
			character_sheet: 'Blades in the Dark v1.6'
		});
	});
});
</script>
