import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

import About from './pages/about/about';
import Contact from './pages/contact/contact';
import ProductList from './pages/product-list/product-list';
import ProductDetails from './pages/product-details/product-details';
import OrderStatus from './pages/order-status/order-status';
import Payment from './pages/payment/payment';

import { GlobalStyles } from './components/styles/global-style';
import { MainWrapper, MainBody, MainContent, MainNav } from './components/styles/style';


function App() {

    // generate user identity on first load
    let userId = localStorage.getItem('userIdentity');
    if (!userId) {
        axios.get('https://localhost:44380/api/auth')
            .then(response => {
                localStorage.setItem('userIdentity', response.data);
            })
            .catch(() => {
                alert('User can not be created');
            })
    }

    return (
        <Router>
            <GlobalStyles />
            <MainWrapper>
                <header>
                    <Header />
                </header>
                <MainBody>
                    <MainNav>
                        <Navbar />
                    </MainNav>

                    <MainContent>
                        <Switch>
                            <Route exact path='/' component={ProductList} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                            <Route path='/details/:id' component={ProductDetails} />
                            <Route path='/payment/:orderId' component={Payment} />
                        </Switch>
                    </MainContent>

                </MainBody>

                <OrderStatus />

                <Footer />
            </MainWrapper>

        </Router>
    );
}

export default App;