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
            <div className='absolute p-36 mt-40 ml-96 text-red-800 text-9xl text-center justify-center'>
                <p>Hello</p>
            </div>
        </div>
        </>
    );
};

export default Banner;