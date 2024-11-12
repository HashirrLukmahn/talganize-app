import Carousel from '../../components/ui-components/Carousel'
import { images } from '../../assets/images'
function Home() {



    return (

        <div className='w-full h-full'>
            <Carousel />

            <div className='flex flex-col md:flex-row justify-center items-center gap-10 bg-[#C9C5BA] text-[#4B4847] px-10 md:px-20 lg:px-40 py-20'>

                <div>
                    <h2 className='mb-10 text-4xl'>ABOUT US</h2>
                    <p className='text-left mb-4 font-semibold'>Aligning talent with the right opportunities Global Reach:</p>
                    <p className='text-left'>
                        Extensive coverage in major markets, including Singapore, India, and the US.
                        Expertise Across Industries: Proficient in placing technology professionals in both tech and non-tech sectors. Specialized Focus: Deep expertise in private markets and manufacturing industries.
                        Partner with Talganize to elevate your recruitment strategy and secure the best talent for your organization.
                    </p>
                </div>
                <div>
                    <img className='w-100 md:w-[90%]' src={images.aboutUs} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Home