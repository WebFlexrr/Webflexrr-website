import React, { type FC } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import TeamPicture from "../../TeamPicture";

interface TeamSwiperProps {
	allTeamsDetails: getAllManagementData[];
}

const TeamSwiper: FC<TeamSwiperProps> = ({ allTeamsDetails }) => {
	return (
		<div className="grid h-auto w-full grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 2xl:grid-cols-3 ">
			{allTeamsDetails.map((personDetails) => (
				<TeamPicture personDetails={personDetails} key={personDetails._id} />
			))}
		</div>
	);
};

export default TeamSwiper;
