import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
	// Providers configs
	github: {
		login: 'innocenzi',
		type: 'user',
	},

	// Rendering configs
	width: 800,
	formats: ['json', 'svg', 'png'],
	tiers: [
		{
			title: 'Backers',
			preset: presets.medium,
		},
		{
			title: 'Sponsors',
			monthlyDollars: 15,
			preset: presets.large,
		},
		{
			title: 'Gold sponsors',
			monthlyDollars: 50,
			preset: presets.xl,
		},
	],
})
