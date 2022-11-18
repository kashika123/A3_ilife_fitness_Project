import React from 'react'
import "../styles/Weight.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WeightGain = () => {
  return (
    <Container fluid >
      <div className="row justify-content-center">
        <div md='auto' className="mt-5 text-center col"><h1>Weight Gain Diet plan</h1></div>
      </div>

      <div className="justify-content-center mt-5 title-weight row text-center ">
        <div className='d-none d-md-block col-md-2'></div>
        <div className='col-2'>Breakfast</div>
        <div className='col-2'>Lunch</div>
        <div className='col-2'>Dinner </div>
        <div className='col-2'>Snack2</div>
        <div className='col-2'>Snack2</div>
      </div>




      <div className="row d-md-none">
        <div className='day-weight-red-small col-1 mt-1'>
          M
        </div>
      </div>

      <Row className="justify-content-center mt-5 row-weight">
        <div className="col-2 fs-6 p-0 d-none d-md-block">
          <div className='day-weight-red'>
            M
          </div>
        </div>

        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0 ' >paratha + 1</li>
            <li className='p-0'>cup curd + 3</li>
            <li className='p-0'>cashews + 4</li>
            <li className='p-0'>almonds + 2</li>
            <li className='p-0'>walnuts</li>
          </ul>
        </div>
        <div className="col-2 fs-6 text-center  text-item">
          <ul>
            <li>1 cup moong dal/</li>
            <li>chicken</li>
            <li>curry + 1</li>
            <li>cup potato</li>
          </ul>
        </div>
        <div className="col-2 fs-6 text-center  text-item">
          <ul>
            <li>1 cup beans</li>
            <li>potato</li>
            <li>vegetable +</li>
            <li>3 chapatti +</li>
            <li>salad</li>
          </ul>
        </div>
        <div className="col-2 fs-6 text-center  text-item">
          <ul>
            <li>1 cup</li>
            <li>mango</li>
            <li>shake</li>
          </ul>
        </div>
        <div className="col-2 fs-6 text-center  text-item">
          <ul>
            <li>1 cup</li>
            <li>pomegranate</li>
            <li>juice + 2</li>
            <li>butter</li>
            <li>toasted</li>
            <li>bread</li>
          </ul>
        </div>
      </Row>


      <div className='mt-5 line-weight-red'></div>

      <div className='row d-md-none'>
        <div className='day-weight-black-small col-1 mt-1'>
          T
        </div>
      </div>

      <Row className="justify-content-center mt-5 row-weight">
        <div className="col-2 fs-6 p-0 d-none d-md-block">
          <div className='day-weight-black'>
            T
          </div>
        </div>


        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>3 paneer</li>
            <li className='p-0'>stuffed</li>
            <li className='p-0'>besan cheela</li>
            <li className='p-0'>+ green</li>
            <li className='p-0'>chutney</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup</li>
            <li className='p-0'>masoor dal</li>
            <li className='p-0'>+ 1 cup</li>
            <li className='p-0'>calocasia +</li>
            <li className='p-0'>3 chapatti</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup carrot</li>
            <li className='p-0'>peas</li>
            <li className='p-0'>vegetable</li>
            <li className='p-0'>+3 chapatti</li>
            <li className='p-0'>+ salad</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 apple</li>
            <li className='p-0'>smoothie</li>
            <li className='p-0'>with maple</li>
            <li className='p-0'>syrup</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup tomato</li>
            <li className='p-0'>soup with</li>
            <li className='p-0'>bread crumbs</li>
            <li className='p-0'>+ 1 cup aloo</li>
            <li className='p-0'>chaat</li>
          </ul>
        </div>
      </Row>

      <Row className='mt-5 line-weight-black'></Row>


      <div className='row d-md-none'>
        <div className='day-weight-red-small col-1 mt-1'>
          W
        </div>
      </div>

      <Row className="justify-content-center mt-5 row-weight">
        <div className="col-2 fs-6 p-0 d-none d-md-block">
          <div className='day-weight-red'>
            W
          </div>
        </div>

        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>

            <li className='p-0'>1.5 cup</li>
            <li className='p-0'>vegetable</li>
            <li className='p-0'>break upma</li>
            <li className='p-0'>+ 1 cup milk</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>

            <li className='p-0'>1 cup</li>
            <li className='p-0'>rajma curry</li>
            <li className='p-0'>+ 1 cup</li>
            <li className='p-0'>spinach potato</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>

            <li className='p-0'>1.5 cup</li>
            <li className='p-0'>parwal</li>
            <li className='p-0'>vegetable +</li>
            <li className='p-0'>3 chapatti +</li>
            <li className='p-0'>salad</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>

            <li className='p-0'>1 cup ripe</li>
            <li className='p-0'>banana</li>
            <li className='p-0'>with 2 tsp</li>
            <li className='p-0'>ghee</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>

            <li className='p-0'>1 cup</li>
            <li className='p-0'>vegetable</li>
            <li className='p-0'>juice + 1 cup</li>
            <li className='p-0'>upma</li>
          </ul>
        </div>
      </Row>

      <Row className='mt-5 line-weight-red'></Row>

      <div className='row d-md-none'>
        <div className='day-weight-black-small col-1 mt-1'>
          T
        </div>
      </div>

      <Row className="justify-content-center mt-5 row-weight">

        <div className="col-2 fs-6 p-0 d-none d-md-block">
          <div className='day-weight-black'>
            T
          </div>
        </div>

        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>2 cucmber</li>
            <li className='p-0'>potato</li>
            <li className='p-0'>sandwich + 1</li>
            <li className='p-0'>tsp green</li>
            <li className='p-0'>chutney + 1</li>
            <li className='p-0'>ornge juice</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup white</li>
            <li className='p-0'>chana/ fish</li>
            <li className='p-0'>curry + 3</li>
            <li className='p-0'>chapatti +</li>
            <li className='p-0'>1/2 cup rice + 1</li>
            <li className='p-0'>salad</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup</li>
            <li className='p-0'>cauliflower</li>
            <li className='p-0'>potato</li>
            <li className='p-0'>vegetable +3</li>
            <li className='p-0'>chapatti +</li>
            <li className='p-0'>salad</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup</li>
            <li className='p-0'>buttermilk +</li>
            <li className='p-0'>1 cup sweet</li>
            <li className='p-0'>potato</li>
            <li className='p-0'>chaat</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup almond</li>
            <li className='p-0'>milk + banana</li>
            <li className='p-0'>1/4 cup</li>
            <li className='p-0'>Hummus </li>
          </ul>
        </div>
      </Row>


      <Row className='mt-5 line-weight-black'></Row>


      <div className='row d-md-none'>
        <div className='day-weight-red-small col-1 mt-1'>
          F
        </div>
      </div>

      <Row className="justify-content-center mt-5 row-weight">
        <div className="col-2 fs-6 p-0 d-none d-md-block">
          <div className='day-weight-red'>
            F
          </div>
        </div>

        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>2 cup</li>
            <li className='p-0'>vegetable</li>
            <li className='p-0'>poha + 1 cup</li>
            <li className='p-0'>curd + 3</li>
            <li className='p-0'>chutney + 1</li>
            <li className='p-0'>cashews</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup chana dal</li>
            <li className='p-0'>+ 1 cup bhindi</li>
            <li className='p-0'>vegetable + 3</li>
            <li className='p-0'>chapatti + 1/2</li>
            <li className='p-0'>cup rice + salad</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup peas</li>
            <li className='p-0'>mushroom</li>
            <li className='p-0'>vegetable + </li>
            <li className='p-0'>3 chapatti +  </li>
            <li className='p-0'>salad</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>2 cups</li>
            <li className='p-0'>waterme</li>
            <li className='p-0'>lon juice </li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup sprouts</li>
            <li className='p-0'>salad + 2 potato</li>
            <li className='p-0'>cheela + green</li>
            <li className='p-0'>chutney</li>
          </ul>
        </div>
      </Row>



      <Row className='mt-5 line-weight-red'></Row>
      <div className='row d-md-none'>
        <div className='day-weight-black-small col-1 mt-1'>
          S
        </div>
      </div>

      <Row className="justify-content-center mt-5 row-weight">
        <div className="col-2 fs-6 p-0 d-none d-md-block">
          <div className='day-weight-black'>
            S
          </div>
        </div>

        <div className="col-2 text-center text-item">

          <ul className='p-0 m-0'>
            <li className='p-0'>3 vegetable</li>
            <li className='p-0'>suji cheela +</li>
            <li className='p-0'>1 cup</li>
            <li className='p-0'>strawberry</li>
            <li className='p-0'>shake</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">

          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup mix</li>
            <li className='p-0'>dal + 1 cup</li>
            <li className='p-0'>soybean</li>
            <li className='p-0'>curry</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">

          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup</li>
            <li className='p-0'>karela</li>
            <li className='p-0'>vegetable + </li>
            <li className='p-0'>3 chaptti + </li>
            <li className='p-0'>salad</li>


          </ul>
        </div>
        <div className="col-2 text-center text-item">

          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup</li>
            <li className='p-0'>coconut</li>
            <li className='p-0'>water + 1</li>
            <li className='p-0'>cup  </li>
            <li className='p-0'>pomegrate</li>

          </ul>
        </div>
        <div className="col-2 text-center text-item">

          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup fruit</li>
            <li className='p-0'>salad + 4</li>
            <li className='p-0'>pc</li>
            <li className='p-0'>vegetable</li>
            <li className='p-0'>cutlets</li>
          </ul>
        </div>
      </Row>


      <Row className='mt-5 line-weight-black'></Row>

      <div className='row d-md-none'>
        <div className='day-weight-red-small col-1 mt-1'>
          S
        </div>
      </div>


      <Row className="justify-content-center mt-5 row-weight">
        <div className="col-2 fs-6 p-0 d-none d-md-block">
          <div className='day-weight-red'>
            S
          </div>
        </div>

        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>3 onion</li>
            <li className='p-0'>stuffed</li>
            <li className='p-0'>parantha</li>
            <li className='p-0'>+1 cup</li>
            <li className='p-0'>curd</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup moong</li>
            <li className='p-0'>dal/ chicken</li>
            <li className='p-0'>curry + 1 cup</li>
            <li className='p-0'>potato and</li>
            <li className='p-0'>cauliflower</li>
            <li className='p-0'>vegetable   </li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup beans</li>
            <li className='p-0'>potato</li>
            <li className='p-0'>vegetable +</li>
            <li className='p-0'>3 cahaptti +</li>
            <li className='p-0'>salad</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup mango</li>
            <li className='p-0'>shake</li>
          </ul>
        </div>
        <div className="col-2 text-center text-item">
          <ul className='p-0 m-0'>
            <li className='p-0'>1 cup</li>
            <li className='p-0'>pomegran</li>
            <li className='p-0'>ate juice +</li>
            <li className='p-0'>2 butter</li>
            <li className='p-0'>toasted</li>
            <li className='p-0'>bread</li>
          </ul>
        </div>
      </Row>

      <Row className='mt-5 mb-5 line-weight-red'></Row>


      <Row className="justify-content-center">
        <Col md='auto' className="mt-5 text-center">
          <h1>Foods You Can Easily Consume in a Weight Gain Diet</h1>
        </Col>
      </Row>


      <Row className="mt-5 mb-5">
        <Col xs='1'></Col>
        <Col xs='10'>
          <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Lean Red Meat : </span> Steak contains a ton of protein and iron. Red meat is high in cholesterol, so most food professionals don’t recommend it as part of a healthy diet more than a few times per week.</p>
          <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Real Nut Butters :</span> Natural peanut butter is packed with protein and fats, making it a great choice for people trying to gain weight the healthy way. One tablespoon contains around 100 calories and has 4 grams of protein.</p>
          <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Whole Fat Milk :</span> Dietitians say that one simple substitution you can make when trying to gain weight is swapping your skim milk for whole milk. It’s only 60 calories more a glass as the fat is left in.</p>
          <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Tropical Fruit :</span> Fruits like mango, papaya, bananas, and pineapple are amazing choices according to food experts. They are full of natural sugars and can give you great energy.</p>
          <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Avocado :</span> These delicious green vegetables are an excellent way to add heart-healthy fats to your diet. One half of an avocado contains 140 calories, but also contain high levels of potassium, folic acid, and vitamin E.</p>
          <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Whole Wheat Bread :</span> Nutritionists say that eating healthy bread products is a great way to start gaining weight. If you’re adding bread to your diet, look for whole grains.</p>
          <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Nuts :</span> Nuts are a great snack for gaining weight. They are full of fat and nutrients, but also contain a great deal of fiber. Eating only a handful of nuts can keep you full for hours. Not all nuts are equal for fiber though.</p>
          <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Cheese :</span>  Try goat cheese with eggs, Swiss with roasted chicken, and Parmesan on top of asparagus. On its own, cheese also makes a great snack because it’s high in protein.</p>

        </Col>
      </Row>


    </Container>
  )
}

export default WeightGain