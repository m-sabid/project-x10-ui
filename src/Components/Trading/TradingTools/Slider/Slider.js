import React from 'react';
import './Slider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const componentName = () => {
    const responsive = {  superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
return (
    <div>
        <Carousel responsive={responsive}
         showDots={true}
        >
            <div>
                <div className='c-cart'>
                    <div>
                        <img src='' alt=''/>
                    </div>
                    <div><h4>NAmeddd</h4></div>
                </div>
            </div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
            <div>Item 6</div>
            <div>Item 7</div>
            <div>Item 8</div>
        </Carousel>
    </div>
);
};

export default componentName;