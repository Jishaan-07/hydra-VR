import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap'
import './App.css'
import frame from './assets/Frame.png'
import hydratext from './assets/Hydra.png.png'
import women from './assets/women.png'
import man from './assets/blckman.png'
import arrow from './assets/arrow.png'
import simu from './assets/simulation.png'
import edu from './assets/education.png'
import self from './assets/self.png'
import out from './assets/outdoor.png'
import oculus from './assets/oculus.png'
import unity from './assets/unity.png'
import unreal from './assets/unreal.png'
import vive from './assets/vive.png'



function App() {
  return (
    <div style={{ width: '100%', height: '1000vh' }} className="main">
   <Navbar collapseOnSelect expand="lg" className="navbar text-light">
  <Container className='d-flex justify-content-between align-items-center'>
    <Navbar.Brand className='text-light' href="#home">
      <img style={{ width: '80px' }} src={frame} alt="" />
      <img src={hydratext} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link className='text-light mx-3 nav-hover' href="#about">About</Nav.Link>
        <Nav.Link className='text-light mx-3 nav-hover' href="#services">Services</Nav.Link>
        <Nav.Link className='text-light mx-3 nav-hover' href="#technologies">Technologies</Nav.Link>
        <Nav.Link className='text-light mx-3 nav-hover' href="#how-to">How To</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className='btns text-light mx-2 nav-hover' href="#contact-us">Contact US</Nav.Link>
        <Nav.Link className='btns2 text-light mx-2 nav-hover' href="#join-hydra">Join Hydra</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


      <div className="row container mt-5">
        <div className="col-lg-6 mt-5">
          <h1 className='landingtxt ms-5'><span className='ext'>Dive</span> Into The Depths <br /> Of <span className='ext'>Virtual Reality</span></h1>
          <p className='text-justify ms-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro beatae, voluptatibus dicta obcaecati fugit alias suscipit ipsa sed illo reiciendis culpa voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='build px-3 ms-5'>BUILD YOUR WORLD</button>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <img className='womenlanding' src={women} alt="" />
        </div>
      </div>

      <div className="d-flex justify-content-center  mt-5">
        <div className="tg1  mt-5 mx-5">
          <h3>Pay Us A Visit</h3>
          <p className='sublink'>Union St,Seatlle,WA 98101 <br />United States</p>
        </div>
        <div className="tg1  mt-5 mx-5">
          <h3>Give Us A Call</h3>
          <p className='sublink'>+981 111 888 58</p>

        </div>
        <div className="tg1  mt-5 mx-5">
          <h3>Send Us A Message</h3>
          <p className='sublink'>hydraVR@gmail.com</p>

        </div>
      </div>


      <div className="row container mt-5   " >
        <div className="col-lg-6">
          <h2 className='txtll'><span className='kkk'>INTRODUCTION</span>  <br /> TO HYDRA VR</h2>
          <img className='arrw' src={arrow} alt="" />

        </div>
        <div className="col-lg-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, iste eos. Velit officia dolore vel iste consectetur sed error consequuntur hic sit eligendi, aliquam libero! Consectetur eius inventore doloribus qui?
            Veritatis fugit aut quas reprehenderit voluptatibus laudantium culpa quidem sequi ab dolores accusantium iure nostrum dolore mollitia quis exercitationem officia delectus sit, adipisci nemo provident. Ipsa officiis eius magni nostrum!
            Aliquam dolorum,</p>
        </div>
      </div>

      <div className="row container mt-5">
        <div className="col-lg-6 d-flex justify-content-end">
          <img className='manimg img-fluid' src={man} alt="" />
        </div>

        <div className="col-lg-6 mt-5 mx-auto">
          <h1 className="mb-3 abt">ABOUT</h1>
          <h3 className="mb-3 ">HYDRA VR</h3>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui laboriosam quasi itaque reiciendis sed amet provident nisi! Aperiam molestiae non molestias quo similique, repudiandae, reiciendis architecto facilis nihil, ipsam mollitia?
            Dolorum rerum incidunt rem culpa totam voluptates eius omnis, nihil asperiores, debitis esse voluptatem quam ducimus animi? Optio voluptatum sit officia nemo aperiam, quo, at maiores laborum quae vero accusantium!
          </p>
          <button className='build px-3 ms-5 text-light'>LETS GET IN TOUCH</button>

        </div>


      </div>
      <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-lg-3 col-md-6 mb-4">
      <Card style={{ background: 'linear-gradient(135deg,#8176AF, #343045 )', color: 'white' }} className='mx-1 shadow'>
        <Card.Img variant="top" src={simu} style={{ width: '10rem' }} className="d-block mx-auto" />
        <Card.Body>
          <Card.Title className='text-center fw-bolder'>Simulation</Card.Title>
          <hr />
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button className='vrbtn' variant="primary">Try It Now</Button>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <Card style={{ background: 'linear-gradient(135deg,#8176AF, #343045 )', color: 'white' }} className='mx-1 shadow'>
        <Card.Img variant="top" src={edu} style={{ width: '10rem' }} className="d-block mx-auto" />
        <Card.Body>
          <Card.Title className='text-center fw-bolder'>Education</Card.Title>
          <hr />
          <Card.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button className='vrbtn' variant="primary">Try It Now</Button>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <Card style={{ background: 'linear-gradient(135deg,#8176AF, #343045 )', color: 'white' }} className='mx-1 shadow'>
        <Card.Img variant="top" src={self} style={{ width: '10rem' }} className="d-block mx-auto" />
        <Card.Body>
          <Card.Title className='text-center fw-bolder'>Self Care</Card.Title>
          <hr />
          <Card.Text className='text-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button className='vrbtn' variant="primary">Try It Now</Button>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className="col-lg-3 col-md-6 mb-4">
      <Card style={{ background: 'linear-gradient(135deg,#8176AF, #343045 )', color: 'white' }} className='mx-1 shadow'>
        <Card.Img variant="top" src={out} style={{ width: '10rem' }} className="d-block mx-auto" />
        <Card.Body>
          <Card.Title className='text-center fw-bolder'>Outdoor</Card.Title>
          <hr />
          <Card.Text className='text-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Card.Text>
          <div className="d-flex justify-content-center">
            <Button className='vrbtn' variant="primary">Try It Now</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>

      <div className="d-flex justify-content-center flex-wrap mt-5">
  <img className="mx-3 img-fluid" style={{ maxWidth: '200px' }} src={oculus} alt="" />
  <img className="mx-3 img-fluid" style={{ maxWidth: '200px' }} src={vive} alt="" />
  <img className="mx-3 img-fluid" style={{ maxWidth: '200px' }} src={unity} alt="" />
  <img className="mx-3 img-fluid" style={{ maxWidth: '200px' }} src={unreal} alt="" />
</div>

<div className="footer text-light py-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-4 text-center">
        <div className="footerlogo">
          <img src={frame} alt="" style={{ width: '150px' }} />
        </div>
        <p className="mt-3">Bringing the best virtual reality experiences to life.</p>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <h4 className="mb-3">About Us</h4>
        <ul className="list-unstyled">
          <li><a href="#about" className="text-light text-decoration-none">About</a></li>
          <li><a href="#technologies" className="text-light text-decoration-none">Technologies</a></li>
          <li><a href="#howto" className="text-light text-decoration-none">How To</a></li>
          <li><a href="#services" className="text-light text-decoration-none">Services</a></li>
          <li><a href="#join" className="text-light text-decoration-none">Join Hydra</a></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-12 mb-4">
        <h4 className="mb-3">Support</h4>
        <ul className="list-unstyled">
          <li><a href="#faq" className="text-light text-decoration-none">F.A.Q</a></li>
          <li><a href="#sitemap" className="text-light text-decoration-none">Site Map</a></li>
          <li><a href="#conditions" className="text-light text-decoration-none">Conditions</a></li>
          <li><a href="#licences" className="text-light text-decoration-none">Licences</a></li>
          <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-12 text-center">
        <p className="mt-4">&copy; 2024 Hydra VR. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</div>





    </div>
  )
}

export default App
