import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import {
  BackgroundContainer,
  FailureViewContainer,
  FailureHeading,
  FailurePara,
  RetryButton,
  LoaderView,
  CardContainer,
  CardContentContainer,
  CardHeading,
  CardPara,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  isLoading: 'LOADING',
  failure: 'FAILURE',
}

class CourseDetailsRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    courseObj: {},
  }

  componentDidMount() {
    this.getCourseObject()
  }

  getCourseObject = async () => {
    this.setState({apiStatus: apiStatusConstants.isLoading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const coursesData = await fetch(url)
    if (coursesData.ok) {
      const jsonData = await coursesData.json()
      const courseObject = jsonData.course_details
      const modifiedData = {
        id: courseObject.id,
        name: courseObject.name,
        imageUrl: courseObject.image_url,
        description: courseObject.description,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        courseObj: {...modifiedData},
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCoursesDetails = () => {
    const {courseObj} = this.state

    return (
      <CardContainer>
        <img
          src={courseObj.imageUrl}
          alt={courseObj.name}
          style={{width: '50%'}}
        />
        <CardContentContainer>
          <CardHeading>{courseObj.name}</CardHeading>
          <CardPara>{courseObj.description}</CardPara>
        </CardContentContainer>
      </CardContainer>
    )
  }

  renderLoaderView = () => (
    <LoaderView data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
    </LoaderView>
  )

  renderFailureView = () => (
    <FailureViewContainer>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
        style={{width: '40%'}}
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We cannot seem to find the page you are looking for.
      </FailurePara>
      <RetryButton type="button" onClick={this.getCourseObject}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCoursesDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.isLoading:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <BackgroundContainer>
        <Header />
        {this.renderAllViews()}
      </BackgroundContainer>
    )
  }
}

export default CourseDetailsRoute
