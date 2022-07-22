import './card.styles.css';

const Card = ({ monster }) => {
	const { name, email, id } = monster;
	return (
		<div className="card-container" key={id}>
			<img
				alt={`monster ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=111180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default Card;
