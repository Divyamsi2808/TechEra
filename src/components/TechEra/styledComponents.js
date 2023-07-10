import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const BackgroundContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const ContentContainer = styled.div`
  padding: 20px;
  width: 98%;
`

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #475569;
`
export const CoursesList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const CourseItem = styled.li`
  padding: 10px;
  display: flex;
`
export const LogoImage = styled.img`
  width: 30%;
  margin-right: 14px;
`

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
`
export const LinkElement = styled(Link)`
  width: 25%;
  margin-bottom: 14px;
  margin-right: 14px;
  text-decoration: none;
`
export const FailureViewContainer = styled.div`
  background-color: #ffffff;
  flex-grow: 1;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FailureHeading = styled.h1`
  font-size: 26px;
  color: #475569;
  font-weight: 700;
`
export const FailurePara = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #64748b;
`

export const RetryButton = styled.button`
  padding: 12px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  border: none;
  background-color: #4656a1;
`
export const LoaderView = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
