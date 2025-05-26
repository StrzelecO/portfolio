const AboutBlock = ({ title, dotSize = 'w-4 h-4', children }) => (
  <div className='bg-primary-dark p-6 md:p-8 rounded-2xl shadow-lg'>
    <div className='flex items-center mb-4 md:mb-6'>
      <div className={`${dotSize} bg-accent-teal rounded-full mr-3 md:mr-4`} />
      <h3 className='text-text-light text-xl md:text-2xl font-semibold'>{title}</h3>
    </div>
    {children}
  </div>
);

export default AboutBlock;
