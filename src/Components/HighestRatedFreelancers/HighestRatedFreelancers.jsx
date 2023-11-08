import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const HighestRatedFreelancers = () => {

    const topRated = [
        {
            "name": "John Doe",
            "img": "https://i.ibb.co/zXjRVXw/5-qanf54lln05s9aaey7fh326mvk9x410rpr8yalqrrk.jpg",
            "category": "Web Developer",
            "rating": 4.9
        },
        {
            "name": "Alice Smith",
            "img": "https://i.ibb.co/r6MHK9R/8-qanf54lln05s9aaey7fh326mvk9x410rpr8yalqrrk.jpg",
            "category": "Graphic Designer",
            "rating": 4.8
        },
        {
            "name": "Robert Johnson",
            "img": "https://i.ibb.co/LN38SP1/9-qanf54lln05s9aaey7fh326mvk9x410rpr8yalqrrk.jpg",
            "category": "Digital Marketer",
            "rating": 4.7
        },
        {
            "name": "Linda Brown",
            "img": "https://i.ibb.co/fGsDRR1/bg-video-qanf52px9c37m2d596m7y2nposj6omtb1hxzc1tk40.png",
            "category": "Content Writer",
            "rating": 4.9
        },
        {
            "name": "David Lee",
            "img": "https://i.ibb.co/xhnKgK4/12-qanf54lln05s9aaey7fh326mvk9x410rpr8yalqrrk.jpg",
            "category": "Mobile App Developer",
            "rating": 4.7
        },
        {
            "name": "Emily Wilson",
            "img": "https://i.ibb.co/qg7w2Zm/team5-qanf55jftu72kw91spu3njy3gy5abq4i1vwfrvpdlc.jpg",
            "category": "UI/UX Designer",
            "rating": 4.8
        }
    ]


    return (
        <div className='container mx-auto px-2 md:px-6 pb-24'>
            <div className="mb-10">
                <h4 className='text-4xl font-bold mb-2'>Highest Rated Freelancers</h4>
                <p className='text-sm text-gray-400'>Talented Freelancers for Your Project Needs</p>
            </div>
            <div className="rounded-lg py-4 mt-10">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        425: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        }
                    }}
                    navigation={{
                        nextEl: ".next",
                        prevEl: ".prev"
                    }}
                >
                    {topRated.map((top) => (
                        <SwiperSlide key={top.id}>
                            <div className="py-2">
                                <img className='rounded-xl mx-auto' src={top.img} alt="" />
                                <div className='flex justify-between items-center mt-4'>
                                    <h3 className='text-2xl font-bold text-center'>{top.name}</h3>
                                    <p className="text-base font-medium text-gray-400 flex items-center gap-2">
                                    <AiFillStar className='w-4 h-4'/> {top.rating}</p>
                                </div>
                                <div>
                                    <p className="text-base font-medium text-gray-400 mb-1">{top.category}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className='flex justify-center gap-3 mt-8'>
                    <button className="btn rounded-full prev"><BsArrowLeft /></button>
                    <button className="btn rounded-full next"><BsArrowRight /></button>
                </div>

            </div>
        </div>
    );
};

export default HighestRatedFreelancers;