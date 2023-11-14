import Container from "@mui/material/Container";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { FullPost } from "./pages/FullPost";
import { AddPost } from "./pages/AddPost";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {/* <Home /> */}
        {/* <FullPost /> */}
        <AddPost />
        {/*<Login />*/}
        {/*<Registration />*/}
      </Container>
    </>
  );
}

export default App;
