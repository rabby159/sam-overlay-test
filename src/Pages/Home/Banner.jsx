import bgVideo from '../../assets/BRB.webm';

const Banner = () => {
    return (
        <>
        
        <div className='grid grid-cols-1'>
            <div className=''>
                <video autoPlay muted loop >
                    <source src={bgVideo} type='video/webm' />
                </video>
            </div>
            <div className='absolute mt-12 lg:p-36 lg:mt-40 lg:ml-96  justify-center '>
                <p className='text-sm lg:text-6xl text-center text-white shadowT'>Hey, I am <span className='text-cyan-400'>Reed!</span></p>
                <p className='text-sm lg:text-2xl mx-10 text-center mt-5 tracking-widest text-white'>I am a full-time freelance designer from Bangladesh. <br /> I am specialized in VTuber Graphics.</p>
            </div>
        </div>
        </>
    );
};

export default Banner;