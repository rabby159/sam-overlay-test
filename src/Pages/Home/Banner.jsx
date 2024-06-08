import bgVideo from '../../assets/BRB.webm';

const Banner = () => {
    return (
        <>
        
        <div className='flex relative top-0'>
            <div className='w-auto'>
                <video autoPlay muted loop >
                    <source src={bgVideo} type='video/webm' />
                </video>
            </div>
            <div className='absolute mt-20 md:mt-36 lg:mt-12 lg:p-36 xl:mt-40 xl:ml-96'>
                <p className='text-xs md:text-3xl lg:text-6xl text-center text-white shadowT'>Hey, I am <span className='text-cyan-400'>Reed!</span></p>
                <p className='text-xs md:text-xl lg:text-2xl mx-10 text-center md:mt-5 tracking-widest text-white'>I am a full-time freelance designer from Bangladesh. <br /> I am specialized in VTuber Graphics.</p>
                <div className="lg:pl-3 hidden md:block xl:hidden absolute ml-72 mt-5">
                <p className="text-center text-white mb-3">Comms: <span className="text-red-600">Open!</span></p>
                <p className="text-l bg-sky-400 p-3 rounded-md">Order Here</p>
          </div>
            </div>
            
        </div>
        </>
    );
};

export default Banner;