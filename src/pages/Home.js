import "./Home.css";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="Content">
        <h1>WE MAKE THE BEST PRODUCTS!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
          ligula metus. Sed in arcu quis nisi tristique convallis. Nulla
          volutpat susc porta. Orci varius natoque penatibus et magnis dis
          parturient montes ridiculus mus. Pellentesque posuere accumsan
          pharetra. Curabiugue eget turpis. Donec ac tristique sem, a
          pellentesque ante.
        </p>

        <span className="Button" onClick={event =>  window.location.href='https://www.google.com'}>
            KNOW OUR PRODUCTS
        </span>

      </div>
    </div>
  );
}

export default Home;
