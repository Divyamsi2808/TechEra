import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import {
  BackgroundContainer,
  ContentContainer,
  Heading,
  CoursesList,
  LinkElement,
  CourseItem,
  LogoImage,
  Name,
  FailureViewContainer,
  FailureHeading,
  FailurePara,
  RetryButton,
  LoaderView,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  isLoading: 'LOADING',
  failure: 'FAILURE',
}

class TechEra extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    allCoursesList: [],
  }

  componentDidMount() {
    this.getAllCoursesData()
  }

  getAllCoursesData = async () => {
    this.setState({apiStatus: apiStatusConstants.isLoading})
    const url = 'https://apis.ccbp.in/te/courses'
    const coursesData = await fetch(url)
    if (coursesData.ok) {
      const jsonData = await coursesData.json()
      const modifiedData = jsonData.courses.map(eachObj => ({
        id: eachObj.id,
        name: eachObj.name,
        logoUrl: eachObj.logo_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        allCoursesList: [...modifiedData],
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderCoursesList = () => {
    const {allCoursesList} = this.state

    return (
      <ContentContainer>
        <Heading>Courses</Heading>
        <CoursesList>
          {allCoursesList.map(eachObj => (
            <LinkElement to={`/courses/${eachObj.id}`} key={eachObj.id}>
              <CourseItem>
                <LogoImage src={eachObj.logoUrl} alt={eachObj.name} />
                <Name>{eachObj.name}</Name>
              </CourseItem>
            </LinkElement>
          ))}
        </CoursesList>
      </ContentContainer>
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
      <RetryButton type="button" onClick={this.getAllCoursesData}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCoursesList()
      case apiStatusConstants.renderAllViews:
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

export default TechEra
