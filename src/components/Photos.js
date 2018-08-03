import React from 'react';
import TextTruncate from 'react-text-truncate';

class Photos extends React.Component{

  constructor(){
    super();
    this.state = { mounted: false };
  }
  
  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {

    var photoNodes;
    var size = 25;

    if(this.state.mounted){
      photoNodes = this.props.data.slice(0, size).map(function (photo) {
        if(photo){
          let id = photo.id;
          let source = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

          let title = `${photo.title}`;

          return (
            // <div class="col-sm-6 col-md-4 col-lg-4" className="imageBox">
            //   <div class="card mb-4">
            //     <h7 class="card-header">
            //       <a href={source} key={id} taret="_blank">
            //         {photo.title}
            //       </a>
            //     </h7>
            //     <a href={source} key={id} target="_blank">
            //       <img src={source} alt={title} className="photoImage"/>
            //     </a>
            //   </div>
            // </div>
            <div class="column">
              <div class="card border-primary">
                <div class="card-header">
                  <a href={source} key={id} target="_blank" className="imageBox">
                    <img src={source} alt={title} className="photoImage"/>
                  </a>>
                </div>
                <div class="card-body">
                  <a href={source} key={id} target="_blank">
                    <p class="photo-title">{photo.title}</p>
                  </a>
                </div>
              </div>
            </div>
          );
        }
      });
    } 

    return (
      <div class="row">
        {photoNodes}
      </div>
      // <div className="photoList">
      //   <div class="row">
      //     {photoNodes}
      //   </div>
      // </div>
    );
  }
};

export default Photos;