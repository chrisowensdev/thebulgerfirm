import React from "react";
import {
	FaCarCrash,
	FaStethoscope,
	FaExclamationTriangle,
} from "react-icons/fa";

const PersonalInjury = () => {
	return (
		<div>
			<FaCarCrash size={32} className="text-brand-dark" />
			<FaStethoscope size={32} className="text-brand-dark" />
			<FaExclamationTriangle size={32} className="text-brand-dark" />
		</div>
	);
};

export default PersonalInjury;
