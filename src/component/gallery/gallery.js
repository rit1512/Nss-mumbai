import React, { Component } from 'react'
import Gallery from 'react-grid-gallery';
import blog1 from "../../Assets/blog2.jpg";
class gallery extends Component {
    

    render() {
        const IMAGES = [{

            src:"/home/surendra/Desktop/My Work/Assets/blog1.png",
            thumbnail:"../../Assets/blog2.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            alt:"image 1"
           
            
        },
    {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
           
            
    },
    
    {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
    }]
        return (
            <div className="container mt-5">
                 <Gallery enableImageSelection={false} images={IMAGES}/>,



            </div>
        )
    }
}
export default gallery;