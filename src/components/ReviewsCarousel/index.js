// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  onPrevious = () => {
    const {count} = this.state
    this.setState(prevState => {
      const obj = count ? {count: prevState.count - 1} : ''
      return obj
    })
  }

  onNext = () => {
    const {count} = this.state
    this.setState(prevState => {
      let obj = count

      if (count < 3) {
        obj = {count: prevState.count + 1}
      }
      return obj
    })
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    console.log(count)
    return (
      <div className="app-container">
        <div className="review-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow-img"
            onClick={this.onPrevious}
          />

          <div className="info-container">
            <h1 className="heading">Reviews</h1>
            <button type="button" data-testid="leftArrow" className="button">
              <img
                src={reviewsList[count].imgUrl}
                alt={reviewsList[count].username}
                className="username"
              />
            </button>

            <p className="name">{reviewsList[count].username}</p>
            <p className="company-name">{reviewsList[count].companyName}</p>
            <p className="description">{reviewsList[count].description}</p>
          </div>

          <button type="button" data-testid="rightArrow" className="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
              onClick={this.onNext}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
