import React from 'react';
import Heading from '../../Heading';
import FeedbackCarousel from '@/components/Ui/Hero/FeedbackCarousel';
import getAllFeedback from '@/lib/getFeedback';

const FeedBack = async (): Promise<React.JSX.Element> => {
	const feedbacks = await getAllFeedback();

	return (
		<section className=" h-auto w-full bg-background2 ">
			<section className="h-auto w-full py-10 lg:py-36">
				<section className="mx-auto flex  w-full max-w-[100rem] flex-col gap-14 ">
					<Heading
						heading={'Client Feedback'}
						subHeading={'Happy Words From Happy Customer'}
					/>
					<FeedbackCarousel feedbacks={feedbacks} />
				</section>
			</section>
		</section>
	);
};

export default FeedBack;
