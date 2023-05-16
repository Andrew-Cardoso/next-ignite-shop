import {styled} from '@/styles';

export const ProductContainer = styled('main', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	alignItems: 'stretch',
	gap: '4rem',

	maxWidth: '1180px',
	margin: '0 auto',
});
export const ImageContainer = styled('figure', {
	width: '100%',
	height: 656,
	maxWidth: 576,
	background: '$homeProductBackground',
	borderRadius: 8,
	padding: '.25rem',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover',
	},

	variants: {
		loading: {
			true: {
				img: {
					filter: 'blur(24px) brightness(0.25)',
				},
			},
		},
	},
});
export const ProductDetailsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	h1: {
		fontSize: '$xxl',
		color: '$gray300',
	},

	span: {
		marginTop: '1rem',
		display: 'block',
		fontSize: '$xxl',
		color: '$green300',
	},

	p: {
		marginTop: '2.5rem',
		fontSize: '$md',
		lineHeight: 1.625,
		color: '$gray300',
	},

	button: {
		marginTop: 'auto',
		backgroundColor: '$green500',
		border: 0,
		color: '$white',
		borderRadius: 8,
		padding: '1.25rem',
		cursor: 'pointer',
		fontWeight: 'bold',
		fontSize: '$md',

		'&:hover': {
			backgroundColor: '$green300',
		},

		'&:disabled': {
			opacity: 0.6,
			cursor: 'not-allowed',
		},
	},
});
