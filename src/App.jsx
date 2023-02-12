import React, {useEffect} from "react";
import {Header} from "./components/header";
import {Highlights} from "./components/highlights/highlights";
import {Navbar} from "./components/navbar";
import {fetcher} from "./services";
import {Grid, GridItem} from "./ui/grid";

function App() {
  const [photos, setPhotos] = React.useState([]);
  const [text, setText] = React.useState("");

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetcher("photos");
      setPhotos(response);
    };

    makeRequest();
  }, []);
  //console.log(photos);

  const allSmallPhotosMemoized = React.useMemo(() => {
    console.log('calling memoized function')
    return photos.map(item => item.urls.small);
  }, [photos]);

  const allSmallPhotosNOTMemoized = () => {
    console.log('calling NOT memoized function')
    return photos.map((item) => item.urls.small);
  };

allSmallPhotosNOTMemoized();

  return (
    <Grid>  
      <GridItem>
        <Navbar />
      </GridItem>
      <GridItem>
      <input
        placeholder="INPUT PARA RERENDERIZAR"
        onChange={(e) => setText(e.currentTarget.value)}
        style={{width: "90%", height: 50, border: "1px red solid", fontSize: 28 }}
      />
        <Header />
        <Highlights />
        {photos.map((photo) => ( <img key={photo.id} src = {photo.urls.small} />))}
      </GridItem>
    </Grid>
  );
}

export default App;
