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
      const response = await fetcher("photos");
      setPhotos(response);
    };

    makeRequest();
  }, []);
  //console.log(photos);

  const transformedPhotos = React.useMemo(() => {
    console.log("transformando as fotos");
    return "fotos transformadas";
  }, [photos]);

  const transformedPhotos2 = () => {
    console.log("oi");
    return "outras fotos transformadas";
  };

  console.log(transformedPhotos2());
  console.log(transformedPhotos);

  return (
    <Grid>
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
        <Header />
        <Highlights />
        {photos.map((photo) => ( <img key={photo.id} src = {photo.urls.small} />))}
      </GridItem>
    </Grid>
  );
}

export default App;
