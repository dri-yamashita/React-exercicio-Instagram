import React, {useEffect} from "react";
import {Header} from "./components/header";
import {Highlights} from "./components/highlights/highlights";
import {Navbar} from "./components/navbar";
import {fetcher} from "./services";
import {Grid, GridItem} from "./ui/grid";

function App() {
  const [photos, setPhotos] = React.useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      console.log('fazendo requisição');
      const response = await fetcher("photos");
      console.log('requisição terminou');
      //console.log(response);
      setPhotos((prevPhotos) => {
        return response;
      });
     //console.log(photos, "array de photos");
    };

    makeRequest();
  }, []);
  //console.log(photos);

  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
        <input placeholder="oie teste" />
        {/*photos.map((photo) => ( <img key={photo.id} src = {photo.urls.small} />))} */}
      </GridItem>
    </Grid>
  );
}

export default App;
