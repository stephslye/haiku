import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';


class PoemShow extends React.Component {
  state = {
    poem: null,
    errors: {}
  }

  componentDidMount() {
    axios.get(`/api/poems/${this.props.match.params.id}`)
      .then(res => {
        this.setState({poem: res.data});
        // console.log(this.state.poem);
      });
  }


  handleDelete = () => {
    axios.delete(`/api/poems/${this.props.match.params.id}`, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${Auth.getPayload().sub}`));
  }



  render() {
    const {poem} = this.state;

    if(!poem) return null;
    return (
      <section>

        {poem.haiku && <div className="card">
          <div className="card-image-show" style={{ backgroundImage: `url(${poem.image})` }}>
          </div>
          <div className="card-content">
            <Link to={`/users/${poem.poet._id}`}><h2>{poem.poet.username}</h2></Link>
            <p className='subtitle is-6'>{poem.createdAtRelative}</p>
            <div>
              <p> {poem.haiku[0].line1} </p>
              <p> {poem.haiku[0].line2} </p>
              <p> {poem.haiku[0].line3} </p>
              <p> {poem.haiku[0].attr} </p>
            </div>
          </div>
          {(Auth.isAuthenticated() && (Auth.getPayload().sub === poem.poet._id)) && <button className= 'button is-danger' onClick={this.handleDelete}>Delete this photohaiku</button>}
        </div>}

      </section>
    );
  }
}

export default PoemShow;
