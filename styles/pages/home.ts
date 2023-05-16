import {styled} from '@/styles';

export const HomeContainer = styled('main', {
	display: 'flex',
	// gap: '3rem',
	width: '100%',
	maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
	marginLeft: 'auto',
	overflowX: 'hidden',
	minHeight: '656px',
});
export const ProductLink = styled('div', {
	background: '$homeProductBackground',
	borderRadius: '8px',
	// padding: '.25rem',
	cursor: 'pointer',
	position: 'relative',
	overflow: 'hidden',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover',
	},

	strong: {
		fontSize: '$lg',
		color: '$gray100',
	},

	span: {
		fontSize: '$xl',
		fontWeight: 'bold',
		color: '$green300',
	},

	footer: {
		position: 'absolute',
		bottom: '.25rem',
		left: '.25rem',
		right: '.25rem',
		padding: '2rem',

		borderRadius: 6,

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		overflow: 'hidden',

		backgroundColor: '#00000099',

		transform: 'translateY(110%)',
		opacity: 0,
		transition: 'all .2s ease-in-out',
	},

	'&:hover': {
		footer: {
			transform: 'translateY(0)',
			opacity: 1,
		},
	},
});
