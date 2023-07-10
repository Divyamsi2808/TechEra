import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
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
export const CardContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 5px 5px #e8e8e8;
  border-radius: 20px;
  align-self: center;
  margin-top: 10%;
  align-self: center;
  margin-bottom: 20px;
`

export const CardContentContainer = styled.div`
  padding: 20px;
  margin-left: 20px;
  align-self: flex-start;
`

export const CardHeading = styled.h1`
  font-size: 30px;
  color: #1e293b;
  font-weight: 700;
`

export const CardPara = styled.p`
  font-size: 20px;
  color: #64748b;
  font-weight: 600;
`
