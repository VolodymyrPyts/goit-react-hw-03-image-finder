import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as API from './services/api';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    modalImageSrc: '',
    showModal: false,
    isLoading: false,
    isNotLastPage: false,
    isEmpty: false,
  };

  async reciveImagesData() {
    const { images, query, page } = this.state;

    this.setState({ isLoading: true });
    const { imagesData, totalHits } = await API(query, page);

    if (totalHits) {
      this.setState(prevState => ({
        images: [...prevState.images, ...imagesData],
      }));
    }

    this.setState({
      isNotLastPage: images.length + imagesData.length < totalHits,
      isLoading: false,
      isEmpty: !totalHits,
    });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.addImages} />;
        <ImageGallery />;
      </>
    );
  }
}
