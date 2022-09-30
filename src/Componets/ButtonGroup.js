

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (

        // <div className="row">
            <div className="carousel-button-group">
                <div className="">
                    <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
                        <i className="bi bi-arrow-left icon-circle" ></i>
                    </button>
                    <button className="" onClick={() => next()}><i className="bi bi-arrow-right icon-circle ms-2"></i></button>
                </div>

            </div>
        // </div>
    );
};

export default ButtonGroup