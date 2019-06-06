import React, { Component } from 'react'
import { editTrack } from '../services/ApiHelper'

class UpdateTrack extends Component {
    render(){
      return(
        <div className="editTrack">
          <form onSubmit = {this.onTrackFormSubmit}>
            <div>
              <label htmlFor="name">Restaurant Name</label>
              <input
              id="name"
              type="text"
              name="name"
              onChange={this.onRestaurantFormChange}
              placeholder="Wendys"/>
            </div>



            <div>
              <label htmlFor="name">Restaurant Neighborhood</label>
              <input
              id="neighborhood"
              type="text"
              name="neighborhood"
              onChange={this.onRestaurantFormChange}
              placeholder="Union Sqaure"/>
            </div>



            <div>
              <label htmlFor="name">Restaurant Photo</label>
              <input
              id="photo"
              type="text"
              name="photo"
              onChange={this.onRestaurantFormChange}
              placeholder="" />
            </div>



            <div>
              <button type="submit">Add Restaurant</button>
            </div>
            </form>

        </div>
      )
    }
  }


export default UpdateTrack
