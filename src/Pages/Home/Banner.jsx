import bgVideo from '../../assets/BRB.webm'


const Banner = () => {
    return (
        <>
        
        <div className='flex '>
            <div className=''>
                <video autoPlay muted loop>
                    <source src={bgVideo} type='video/webm' />
                </video>
            </div>
            <div className='absolute p-36 mt-40 ml-96  justify-center'>
                <p className='text-6xl text-center text-white'>Hey, I'm <span className='text-cyan-400'>Reed!</span></p>
                <p className='text-2xl mx-10 text-center mt-5 tracking-widest'>I'm a full-time freelance designer from Bangladesh. <br /> I'm specialized in VTuber Graphics.</p>
            </div>
        </div>
        </>
    );
};

export default Banner;

// text-fuchsia-300