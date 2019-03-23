import React, { Fragment } from 'react'
import { pure } from 'recompose'
import shortid from 'shortid';
import Html2canvas from 'html2canvas'

// const slideThumbnails = (props) => {
//     const { slides, currentSlide, onClickHandler } = props;
//     // createcanvas();
//     console.warn(props)
//     return <Fragment>
//         <Createcanvas hash={slides} />
//         <ul className="sliderss mt-4">
//             {slides.map(slide => <li key={shortid.generate()} onClick={() => onClickHandler(slide.hash)} >
//                 <img src={`https://dummyimage.com/600x400/ddd/${slide.hash === currentSlide.hash ? '07b' : '000'}&text=` + (slide.displayOrder || '')} className="w-100" alt={slide.header}></img>
//             </li>)}
//         </ul>
//     </Fragment>
// }
// const Createcanvas = async({slides = []}) => {
//     const canvas = await Html2canvas(document.body) //, {canvas:document.getElementById('ppp')}
//     console.log(canvas)
//     // document.body.appendChild(canvas);
//     return slides.length> 0 ?canvas :
// }
// export default slideThumbnails


const slideThumbnails = (props) => {
    const { slides, currentSlide, onClickHandler } = props;
    // console.warn(props)
    return <Fragment>
        <ul className="sliderss mt-4">
            {slides.map(slide => <li key={shortid.generate()} onClick={() => onClickHandler(slide.hash)} >
                <img src={`https://dummyimage.com/600x400/ddd/${slide.hash === currentSlide.hash ? '07b' : '000'}&text=` + (slide.displayOrder || '')} className="w-100" alt={slide.header}></img>
            </li>)}
        </ul>
    </Fragment>
}
export default pure(slideThumbnails);
