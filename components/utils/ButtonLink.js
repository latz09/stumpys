import Link from 'next/link';

const ButtonLink = ({ to, title }) => {
	return (
		<Link href={to}>
			<a className='btn px-6 py-3 bg-yellow-600'>{title}</a>
		</Link>
	);
};

export default ButtonLink;
