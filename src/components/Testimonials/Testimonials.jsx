import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data= [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsa vel adipisci consequuntur veritatis natus repellendus temporibus deserunt in et rerum?"
  },
  {
    avatar: AVTR2,
    name: 'Okafor Mmiri',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsa vel adipisci consequuntur veritatis natus repellendus temporibus deserunt in et rerum?"
  },
  {
    avatar: AVTR3,
    name: 'Calister Ebube',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsa vel adipisci consequuntur veritatis natus repellendus temporibus deserunt in et rerum?"
  },
  {
    avatar: AVTR4,
    name: 'Paul Eneche',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit Ipsa vel adipisci consequuntur veritatis natus repellendus temporibus deserunt in et rerum?"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container"
      
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="Client one" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

        {/* <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR2} alt="Client one" />
            </div>
          <h5>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Dolor expedita dicta reiciendis nesciunt nihil. Quas.
          </small>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR3} alt="Client one" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Dolor expedita dicta reiciendis nesciunt nihil. Quas.
          </small>
        </article>

        <article className='testimonial'>
          <div className="client_avatar">
            <img src={AVTR4} alt="Client one" />
          </div>
          <h5>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Dolor expedita dicta reiciendis nesciunt nihil. Quas.
          </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonials
