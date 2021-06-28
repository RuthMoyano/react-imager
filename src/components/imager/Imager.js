import React, { Component } from "react";
import Display from "../display/Display";
import Thumbnails from "../thumbnail/Thumbnail";

export class Imager extends Component {
state = {
    images: [
      "downloads/img 1.jpeg",
      "downloads/img 2.jpeg",
      "downloads/img 3.jpeg",
      "downloads/img 4.jpeg",
      "downloads/img 5.jpeg",
      "downloads/img 6.jpeg",
      "downloads/img 7.jpeg",
      "downloads/img 8.jpeg",
      "downloads/img 9.jpeg",
      "downloads/img 10.jpeg",
      "downloads/img 11.jpeg",
      "downloads/img 12.jpeg",
    ],
    bigImage: "",
    indexImage: "",
  };

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * this.state.images.length);

    this.setState({
      bigImage: this.state.images[randomNum],
      indexImage: randomNum,
    });
  }

  randomImageGenerator = () => {
    let randomNum = Math.floor(Math.random() * this.state.images.length);

    this.setState({
      bigImage: this.state.images[randomNum],
    });
  };

  backbutton = () => {
    if (this.state.indexImage === 0) {
      this.setState({
        bigImage: this.state.images[this.state.images.length - 1],
        indexImage: this.state.images.length - 1,
      });
    } else {
      this.setState({
        bigImage: this.state.images[this.state.indexImage - 1],
        indexImage: this.state.indexImage - 1,
      });
    }
  };

  forwardButton = () => {
    console.log(this.state.indexImage);

    if (this.state.indexImage === 11) {
      this.setState({
        bigImage: this.state.images[0],
        indexImage: 0,
      });
    } else {
      this.setState({
        bigImage: this.state.images[this.state.indexImage + 1],
        indexImage: this.state.indexImage + 1,
      });
    }
  };

  thumbnailsSelect = (item, index) => {
    console.log(item);
    this.setState({
      bigImage: item,
      indexImage: index,
    });
  };

  render() {
    return (
      <div>
      <Display
          bigImage={this.state.bigImage}
          randomImageGenerator={this.randomImageGenerator}
        />
        <button onClick={this.backbutton}> {"<"} </button>
        <button onClick={this.forwardButton}> {">"} </button>
        <Thumbnails
          images={this.state.images}
          thumbnailsSelect={this.thumbnailsSelect}
        />
      </div>
    );
  }
  
  export default Imager;
