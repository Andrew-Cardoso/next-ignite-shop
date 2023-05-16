import {createStitches} from '@stitches/react';

export const {config, styled, globalCss, css, keyframes, getCssText, theme, createTheme} =
	createStitches({
		theme: {
			colors: {
				white: '#fff',

				gray900: '#121214',
				gray800: '#202024',
				gray300: '#c4c4cc',
				gray100: '#e1e1e6',

				green500: '#00875f',
				green300: '#00b37e',

				homeProductBackground: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
			},

			fontSizes: {
				md: '1.125rem',
				lg: '1.25rem',
				xl: '1.5rem',
				xxl: '2rem',
			},
		},
	});
