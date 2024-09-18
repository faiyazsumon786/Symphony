import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../style.css';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import SliderCard from './common/SliderCard';
import imagesCollection from '../data/Imagecollection';

export default function BannerSlider() {
    const productNames = [
        'Shampan VAT', 
        'Exclusive Blend', 
        'Golden Reserve', 
        'Premium Edition', 
        'Heritage Collection'
    ];

    return (
        <div className="relative p-6 rounded-lg shadow-lg bg-animated-gradient"> {/* Background Animation */}
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={20}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 30,
                    depth: 90,
                    modifier: 2,
                }}
                pagination={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', paddingBottom: '90px' }}
            >
                {imagesCollection.slice(0, productNames.length).map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="h-full relative transition-transform duration-500 hover:scale-110 shadow-lg hover:shadow-xl">
                            <SliderCard data={item} productName={productNames[index]} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
