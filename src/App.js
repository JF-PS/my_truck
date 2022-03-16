import AppBox from "./components/app/app-box";
import SearchBar from "./components/app/search-bar";
import Router from "./components/app/router";
import NavBar from "./components/app/nav-bar";

const App = () => (
  <AppBox>
    <SearchBar />
    <Router />
    <NavBar />
  </AppBox>
);

export default App;
