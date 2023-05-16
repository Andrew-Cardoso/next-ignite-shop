import {styled} from '@/styles';

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	minHeight: '100vh',
	justifyContent: 'center',
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: '1180px',
  margin: '0 auto',
});
