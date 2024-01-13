import bgVideo from '../../assets/pexels-artem-podrez-7774511 (1080p).webm'


const Banner = () => {
    return (
        <div className=''>
            <video autoPlay muted loop>
                <source src={bgVideo} type='video/webm' />
            </video>
        </div>
    );
};

export default Banner;