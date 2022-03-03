import React from 'react';
import './Body.css';
import { useDataLayerValue } from '../DataLayer';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/scrollbar";



function Body() {

  const [{ top, user, artists, played }] = useDataLayerValue()
  return (

    <Container fluid className='body noselect' >
              <div className='user_header'>
                <h1>Olá, {user?.display_name} </h1>
                <img src={user?.images[0].url}/>
              </div>
              <hr />
        <Container fluid>

          <h2 className='section_1'>Artistas mais ouvidos</h2>
          <Swiper
            scrollbar={{
              hide: false,
            }}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320:{
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            modules={[ Scrollbar ]}
            className="carrosel1"
            >{artists?.items?.map((artists, i) => (
              <SwiperSlide>
                <div className='item'>
                <img className='artist_img' src={artists.images[2].url}/>
                <p className='item_title'>{i + 1} - {artists.name}</p>
                </div>            
              </SwiperSlide>
            ))}
          </Swiper>
            </Container>
           

        <Container fluid>
        <h2 className='section_1'>Músicas mais ouvidas</h2>
          <Swiper
            scrollbar={{
              hide: false,
            }}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320:{
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            modules={[ Scrollbar ]}
            className="carrosel1"
            >{top?.items?.map((top, i) => (
              <SwiperSlide>
                <div className='item2'>
                <img src={top.album.images[1].url}/>
                <p className='item_title'>{i + 1} - {top.name}</p>
                <p className='item_artist'>{top.artists[0].name}</p>
                </div>            
              </SwiperSlide>
            ))}
          </Swiper>
          </Container>


          <Container fluid>
          <h2 className='section_1'>Tocadas Recentemente</h2>
            <Swiper
              scrollbar={{
                hide: false,
              }}
              spaceBetween={5}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320:{
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 20,
                },
              }}
              modules={[ Scrollbar ]}
              className="carrosel1"
              >{played?.items?.map((played, i) => (
                <SwiperSlide>
                  <div className='item2'>
                  <img src={played.track.album.images[1].url}/>
                  <p className='item_title'>{i + 1} - {played.track.name}</p>
                  <p className='item_artist'>{played.track.artists[0].name}</p>
                  </div>            
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
    </Container>
  )
}

export default Body