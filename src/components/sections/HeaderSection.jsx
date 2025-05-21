import React from 'react';

const HeaderSection = ({ id }) => {
	return (
		<section id={id} className='min-h-screen bg-primary-dark pt-20'>
			<div className='container mx-auto my-48 px-4 py-20 flex flex-col md:flex-row items-center gap-8'>
				<div>
					<h1 className='text-4xl font-bold text-white mb-4'>
						Oliwia Strzelec
					</h1>
					<p className='text-accent-blue text-2xl mb-6'>lorem ipsum</p>
				</div>
			</div>
		</section>
	);
};

export default HeaderSection;
