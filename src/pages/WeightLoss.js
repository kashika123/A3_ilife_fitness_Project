import React from 'react'
import "../styles/Weight.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WeightLoss = () => {
    return (
        <Container fluid >
            <Row className="justify-content-center">
                <Col md='auto' className="mt-5 text-center"><h1>Weight loss Diet plan</h1></Col>
            </Row>


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
                    <ul>
                        <li>Protein</li>
                        <li>Smoothie</li>
                        <li>+</li>
                        <li>Eggs</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul>
                        <li>Bean</li>
                        <li>Burrito</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul>
                        <li>BBQ</li>
                        <li>Cauliflower</li>
                        <li>Quinoa</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul>
                        <li>Apple</li>
                        <li>+</li>
                        <li>1 tbsp</li>
                        <li>Peanut Butter</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul>
                        <li>Pumpkin</li>
                        <li>Seeds in</li>
                        <li>Shell</li>
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
                        <li className='p-0'>Protein</li>
                        <li className='p-0'>Smoothie</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>Tofu</li>
                        <li className='p-0'>Scramble (2x)</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Cold</li>
                        <li className='p-0'>Sesame</li>
                        <li className='p-0'>Noodles</li>
                        <li className='p-0'>Edamame</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Salad</li>
                        <li className='p-0'>Pizza</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Homeamde</li>
                        <li className='p-0'>Trail mix</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Avocado</li>
                        <li className='p-0'>Toast</li>
                        <li className='p-0'>Smootie</li>
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
                        <li className='p-0'>Protein</li>
                        <li className='p-0'>Smoothie</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>Oatmea</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Garden</li>
                        <li className='p-0'>Omelet</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Baked</li>
                        <li className='p-0'>Asian Tofu</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Greek Yogurt</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>1/4 cup</li>
                        <li className='p-0'>Almonds</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>pear</li>
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
                        <li className='p-0'>Protein</li>
                        <li className='p-0'>Smoothie</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>Greek Yogurt parfait</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Veggie</li>
                        <li className='p-0'>Burger</li>
                        <li className='p-0'>Quinoa</li>
                        <li className='p-0'>Chickpea</li>
                        <li className='p-0'>Salad</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Vegeterian</li>
                        <li className='p-0'>Chill</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Chocolate</li>
                        <li className='p-0'>Protein</li>
                        <li className='p-0'>Muffin </li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Veggies</li>
                        <li className='p-0'>+ with</li>
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
                        <li className='p-0'>Protein</li>
                        <li className='p-0'>Smoothie</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>Avocado</li>
                        <li className='p-0'>Toast</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Baked</li>
                        <li className='p-0'>Potato</li>
                        <li className='p-0'>topped with</li>
                        <li className='p-0'>Vegetarian</li>
                        <li className='p-0'>chilli</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Wings</li>
                        <li className='p-0'>with blue </li>
                        <li className='p-0'>cheese </li>
                        <li className='p-0'>Dip  </li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Banana</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>1 tbsp </li>
                        <li className='p-0'>Pistachio</li>
                        <li className='p-0'>Butter</li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>1 cheese</li>
                        <li className='p-0'>Stick</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>an orange </li>
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
                        <li className='p-0'>Protein</li>
                        <li className='p-0'>Smoothie</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>Craig</li>
                        <li className='p-0'>McMuffin</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Power</li>
                        <li className='p-0'>Salad</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Portabella</li>
                        <li className='p-0'>Pizzas and</li>
                        <li className='p-0'>Soup</li>

                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Banana</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>1 tbsp Nut </li>
                        <li className='p-0'>Butter  </li>
                    </ul>
                </div>
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Greek</li>
                        <li className='p-0'>yogurt</li>
                        <li className='p-0'>with</li>
                        <li className='p-0'>Sunflower</li>
                        <li className='p-0'>seeds</li>
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
                        <li className='p-0'>Protein</li>
                        <li className='p-0'>Smoothie</li>
                        <li className='p-0'>+</li>
                        <li className='p-0'>Joy's Protein</li>
                        <li className='p-0'>Pancakes</li>

                    </ul>
                </div >
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0' >Chinese</li>
                        <li className='p-0' >Takeout</li>

                    </ul >
                </div >
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0' >Veggie</li>
                        <li className='p-0' >Burgers</li>


                    </ul >
                </div >
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>1 to 2 cups</li>
                        <li className='p-0'>Lentil</li>
                        <li className='p-0'>of black</li>
                        <li className='p-0'>bean  </li>
                        <li className='p-0'>soup  </li>
                    </ul>

                </div >
                <div className="col-2 text-center text-item">
                    <ul className='p-0 m-0'>
                        <li className='p-0'>Chocolate</li>
                        <li className='p-0'>Protein</li>
                        <li className='p-0'>Muffin</li>

                    </ul>
                </div >
            </Row >

            <Row className='mt-5 line-weight-red'></Row>


            <Row className="mt-5 mb-5">
                <Col xs='1'></Col>
                <Col xs='10'>
                    <p className='activities'> <span style={{ 'fontWeight': 'bold' }}>Eat on a schedule :</span> at least every four to five hours.</p>
                    <p className='activities'>Any combination of meals and snacks is possible. Favorite meals and snacks are encouraged to be repeated.</p>
                    <p className='activities'>Nonmeat protein sources should be included in every meal, such as eggs, dairy (yogurt, cheese, milk), quinoa, tofu, lentils, tempeh, or starchy beans (chickpeas, black beans, edamame, etc.). You can also incorporate nuts or seeds.</p>
                    <p className='activities'>Choose high-quality starch whenever possible. Brown and wild rice, quinoa, oats, baked/roasted potatoes, pasta, and other grains are all good choices.</p>
                    <p className='activities'>Bring nutrient-dense mini-meals and snacks with you so that you can satisfy your hunger when it strikes.</p>
                    <p className='activities'>Consume an unlimited amount of non-starchy vegetables at any time of day (such as carrots, tomatoes, peppers, celery, cucumbers, etc.).</p>
                    <p className='activities'>Drink plenty of water throughout the day. Aim for at least eight 8-ounce glasses (64+ ounces) of water per day.</p>
                </Col>
            </Row>


        </Container >
    )
}

export default WeightLoss