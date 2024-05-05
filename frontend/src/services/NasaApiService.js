import axios from "axios";

class NasaApiService {
  api_key = "iA3KhcVnlxbKpNDVQox2i1zEB4TlVoSfLEgU60Go";

  base_url = "https://api.nasa.gov/";

  async getAstronomyPictureOfTheDay(date) {
    try {
      const url = `${this.base_url}planetary/apod`;

      const response = await axios.get(url, {
        params: {
          api_key: this.api_key,
          date,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching APOD: ", error);
      return null;
    }
  }

  async getEpicImage() {
    try {
      const url = `${this.base_url}EPIC/api/natural/images?api_key=${this.api_key}`;

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error("Error fetching EPIC images: ", error);
      return null;
    }
  }

  async getMarsWeatherInsights(sol) {
    try {
      const url = `${this.base_url}insight_weather/?api_key=${this.api_key}&feedtype=json&ver=1.0`;

      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.error("Error fetching weather data for Sol", sol, error);
      return null;
    }
  }

  async getMarsRoverPhotos(sol, page) {
    try {
      const url = `${this.base_url}mars-photos/api/v1/rovers/curiosity/photos`;
      const response = await axios.get(url, {
        params: {
          sol: sol,
          page: page,
          api_key: this.api_key,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching Mars rover photos: ", error);
      return null;
    }
  }
}

const nasaapiInstance = new NasaApiService();

export default nasaapiInstance;
