import '../styles/CollapseArrow.css';

export default function CollapseArrow({
	style,
}: {
	style: React.CSSProperties;
}) {
	return (
		<div
			className="collapseArrow"
			style={style}></div>
	);
}
