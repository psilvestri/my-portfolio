import { useState } from 'react';
import CollapseArrow from './CollapseArrow';

interface AccordionDropdownProps {
	dropDownID: string;
	title: string;
	children: React.ReactNode;
}

export default function AccordionDropdown({
	dropDownID,
	title,
	children,
}: AccordionDropdownProps) {
	const [showContent, setShowContent] = useState(false);

	const handleClick = () => {
		setShowContent(!showContent);
	};

	const rotate = showContent ? 'rotate(0)' : 'rotate(-90deg)';

	return (
		<div
			id={dropDownID}
			className="collapseSection">
			<div
				className="collapseHeader"
				onClick={handleClick}>
				<h2 className="collapseTitle">{title}</h2>
				<CollapseArrow
					style={
						{
							transform: rotate,
							transition: 'all 0.2s linear',
						} as React.CSSProperties
					}
				/>
			</div>

			<div className={'collapseContent ' + (showContent ? 'contentOpen' : '')}>
				{showContent && children}
			</div>
		</div>
	);
}
