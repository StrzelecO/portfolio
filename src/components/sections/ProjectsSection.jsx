import React from 'react';
import Project from '../Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import projects from '../../data/projects.json';

const ProjectsSection = ({ id }) => {
	return (
		<section
			id={id}
			className='min-h-screen bg-primary-dark py-16 md:pt-20 px-4 sm:px-6 lg:px-8'
			aria-label="Projects showcase section"
		>
			<div className='max-w-5xl mx-auto'>
				<h2 className='text-text-light text-2xl sm:text-4xl font-bold mb-16 text-center'>
					Projects
				</h2>

				{/* Small devices */}
				<div 
					className='block sm:hidden'
					aria-label="Projects carousel for mobile devices"
				>
					<Swiper
						modules={[Pagination]}
						pagination={{
							clickable: true,
						}}
						spaceBetween={16}
						slidesPerView={1}
						className='!pb-10'
						aria-label="Swipe through projects"
					>
						{projects.map(project => (
							<SwiperSlide 
								key={project.id}
								aria-label={`Project: ${project.title}`}
								role="group"
								aria-roledescription="slide"
							>
								<div className='md:min-h-screen flex items-start'>
									<Project project={project} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Normal devices (tablet, PC)*/}
				<div 
					className='hidden sm:grid md:grid-cols-2 gap-8'
					aria-label="Projects grid for desktop devices"
					role="list"
				>
					{projects.map(project => (
						<div 
							key={project.id}
							role="listitem"
							aria-label={`Project: ${project.title}`}
						>
							<Project project={project} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;