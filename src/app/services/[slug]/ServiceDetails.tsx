// import Process from "@/app/services/[slug]/Process";
// import Image from "next/image";
import React from "react";
// import Core_Services from "./CoreServices";
import PulseCircle from "@/components/ui/PulseCircle";
// import Technologies from "./Technologies";

// interface ServiceDetailsProps {
// 	 serviceDetails: findServiceByName;
// }

// const ServiceDetails: FC<ServiceDetailsProps> = async () => {
const ServiceDetails = async (): Promise<React.JSX.Element> => {
	return (
		<section className="h-auto w-full ">
			<section className="h-auto w-full pb-20 md:px-0 ">
				<section className="flex h-auto w-full flex-col">
					{/* title */}
					<section className=" mx-auto h-auto w-full max-w-[100rem] px-5 pb-20 xl:py-16">
						<section className=" flex w-full flex-col-reverse gap-8 lg:flex-row lg:gap-0 xl:h-[37rem] ">
							<div className=" flex h-full w-full flex-col justify-center xl:w-[60%] xl:pl-20">
								<div className="flex h-[80%] w-full flex-col gap-6 border border-primary p-6 xl:border-y xl:border-l xl:px-20 xl:py-12">
									<section className="flex w-full gap-4 text-secondary">
										<PulseCircle />
										{/* {serviceDetails.name} */}
									</section>
									<section className="h-auto w-full">
										{/* <h1 className="text-left "> {serviceDetails.name}</h1> */}
									</section>
									<section className="  h-full w-full">
										{/* <p>{serviceDetails.description}</p> */}
									</section>
								</div>
							</div>
							<div className=" flex w-full items-center justify-center px-6 xl:w-[40%] ">
								{/* <Image
									src={serviceDetails.image}
									width={"1000"}
									height={"0"}
									alt={serviceDetails.name}
									className=" w-full drop-shadow-lg  "
								/> */}
							</div>
						</section>
					</section>
					{/* <Technologies weAreUsing={serviceDetails.weAreUsing} />
					<Core_Services services={serviceDetails.services} />
					<Process process={serviceDetails.procedure} /> */}
				</section>
			</section>
		</section>
	);
};

export default ServiceDetails;
