import React from 'react';
import PropTypes from 'prop-types';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';
import style from 'styled-components';

const Container = style.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

`
class Carousel extends React.PureComponent {
  static propTypes = {
    defaultImg: CarouselSlide.propTypes.Img,
    defaultImgHeight: CarouselSlide.propTypes.imgHeight,
    slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
      .isRequired,
  };
  
  static defaultProps = {
    defaultImg: CarouselSlide.defaultProps.Img,
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
    Container: Container,
  }

  state = {
    slideIndex: 0,
  };

  handlePrevClick = () => {
    const { slides } = this.props;
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + slides.length - 1) % slides.length, // 1
    }));
  };

  handleNextClick = () => {
    const { slides } = this.props;
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + 1) % slides.length,
    }));
  };

  render() {
    const { defaultImg, defaultImgHeight, slides, ...rest } = this.props;
    return (
      <Container {...rest}>
        <CarouselSlide
          Img={defaultImg}
          imgHeight={defaultImgHeight}
          {...slides[this.state.slideIndex]}
        />
        <div>
          <CarouselButton data-action="prev" onClick={this.handlePrevClick}>
            Prev
          </CarouselButton>
          <CarouselButton data-action="next" onClick={this.handleNextClick}>
            Next
          </CarouselButton>
        </div>
      </Container>
    );
  }
}

export default Carousel;
