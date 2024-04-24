import bgVideo from '../../assets/BRB.webm'


const Banner = () => {
    return (
        <>
        
        <div className='flex'>
            <div className=''>
                <video autoPlay muted loop >
                    <source src={bgVideo} type='video/webm' />
                </video>
            </div>
            <div className='lg:absolute lg:p-36 lg:mt-40 lg:ml-96  justify-center hidden lg:block'>
                <p className='lg:text-6xl text-center text-white'>Hey, I am <span className='text-cyan-400'>Reed!</span></p>
                <p className='text-sm lg:text-2xl mx-10 text-center mt-5 tracking-widest '>I am a full-time freelance designer from Bangladesh. <br /> I am specialized in VTuber Graphics.</p>
            </div>
        </div>
        </>
    );
};

export default Banner;

// text-fuchsia-300