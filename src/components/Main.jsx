import React, { Component } from 'react'
import { Container, Segment, Header, Divider, Image } from 'semantic-ui-react'
import api from '../api'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: [],
      isLoading: false
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getListings().then(listings => {
      this.setState({
        listings: listings.data.data,
        isLoading: false
      })
    })
  }

  render() {
    const { listings, isLoading } = this.state

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    
    const mainContainer = {
      margin: '0 auto',
      marginTop: '50px',
    }
    const imgCol = {
      float: 'right',
      padding: '20px'
    }
    const columnLeft = {
      float: 'left',
      width: '60%',
      textAlign: 'left',
      paddingTop: '20px'
    }
    const columnRight = {
      float: 'right',
      width: '500px'
    }
    const row = {
      display: 'flex',
    }

    const listingsArr = []
    listings.forEach(listing => {
      console.log(listing)
      listingsArr.push(
        <Segment key={listing['_id']}>
          <Header>{listing['title']}</Header>
          <div style={row}>
            <div style={columnLeft}>
              <p>
                <b>Price: </b>{formatter.format(listing['price'])}
              </p>
              <p>
                <b>Location: </b>{listing['location']}
              </p>
              <p>
                <b>Description: </b>{listing['description']}
              </p>
              <p>
                <b>Listed: </b>{listing['listed_date']}
              </p>
              <p>
                <b>Link: </b>{listing['url']}
              </p>
            </div>
            <div style={columnRight}>
              <div style={imgCol}>
                <Image src={listing['image']}></Image>
              </div>
            </div>
          </div>
        </Segment>
      )
    })

    return (
      <div>
        <Container textAlign="center">
          <div style={mainContainer}>
            {listingsArr}
          </div>
        </Container>
      </div>
    )
  }
}

export default Main
