import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main/>
        <Row rowID='1' title='Up Coming' fetchURL={Requests.requestUpcoming}/>
        <Row rowID='2' title='Popular' fetchURL={Requests.requestpopular}/>
        <Row rowID='3' title='Top Rated' fetchURL={Requests.requestTopRated}/>
        <Row rowID='4' title='Trending' fetchURL={Requests.requestTrending}/>
        <Row rowID='5' title='Horror' fetchURL={Requests.requestHorror}/>
    </>
  )
}

export default Home