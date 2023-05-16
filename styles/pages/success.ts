import {styled} from '@/styles';

export const SuccessContainer = styled('main', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '0 auto',
	height: 656,

	h1: {
		fontSize: '$xxl',
		color: '$gray100',
	},

	p: {
		fontSize: '$xl',
		color: '$gray300',
		maxWidth: 560,
		textAlign: 'center',
		marginTop: '2rem',
    lineHeight: 1.4
	},

	a: {
    textDecoration: 'none',
		marginTop: '5rem',
		display: 'block',
    fontSize: '$lg',
    color: '$green500',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
	},
});

export const ImageContainer = styled('figure', {
	width: '100%',
	maxWidth: 130,
	height: 145,
	background: '$homeProductBackground',
	borderRadius: 8,
	padding: '.25rem',
	marginTop: '4rem',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	img: {
		objectFit: 'cover',
	},
});
