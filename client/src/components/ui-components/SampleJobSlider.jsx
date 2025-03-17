import Slider from "react-slick";
import JobCard from "./JobCard";
import { LucideMoveLeft } from "lucide-react";


export default function SampleJobSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (

        <Slider {...settings}>
            <JobCard />
        </Slider>

    );
}

