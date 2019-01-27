import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Header from './header/headerApp';

//configs
import routes from '../configs/routes';

// styles
import globalStyle from '../styles/global.css';

//pages
const asyncContactPage = lazy(() =>
  import('../pages/Contact' /*webpackChunkName: "contact-page" */),
);
const asyncAboutPage = lazy(() =>
  import('../pages/About' /*webpackChunkName: "about-page" */),
);
const asyncMenuPage = lazy(() =>
  import('../pages/Menu' /*webpackChunkName: "menu-page" */),
);
const asyncDeliveryPage = lazy(() =>
  import('../pages/Delivery' /*webpackChunkName: "delivery-page" */),
);
const asyncHomePage = lazy(() =>
  import('../pages/Home' /*webpackChunkName: "home-page" */),
);
const asyncAccountPage = lazy(() =>
  import('../pages/Account' /*webpackChunkName: "Account-page" */),
);
const asyncOrderHistoryPage = lazy(() =>
  import('../pages/OrderHistoryPage' /*webpackChunkName: "Order-page" */),
);
const asyncMealPlannerPage = lazy(() =>
  import('../pages/MealPlanner' /*webpackChunkName: "MealPlanner-page" */),
);
const asyncMenuItemPage = lazy(() =>
  import('../pages/MenuItem'  /*webpackChunkName: "MenuItem-page" */),
);
const asyncErrorPage = lazy(() =>
  import('../pages/Error'  /*webpackChunkName: "Error-page" */),
);
const asyncCartPage = lazy(() =>
  import('../pages/Cart'  /*webpackChunkName: "Cart-page" */),
);
export default class App extends Component {
  // state = {
  //   modalOpen: false,
  // };

  // modalOpen = () => {
  //   this.setState({
  //     modalOpen: true,
  //   });
  // };

  // modalClose = () => {
  //   this.setState({
  //     modalOpen: false,
  //   });
  // };

  render() {
    return (
      <div className={globalStyle.div}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path={routes.HOME} exact component={asyncHomePage} />
            <Route path={routes.CONTACT} component={asyncContactPage} />
            <Route path={routes.ABOUT} component={asyncAboutPage} />
            <Route path={routes.DELIVERY} component={asyncDeliveryPage} />
            <Route exact path={routes.MENU} component={asyncMenuPage} />
            <Route path={routes.MENU_ITEM} component={asyncMenuItemPage} />
            <Route path={routes.ACCOUNT} component={asyncAccountPage} />
            <Route path={routes.ORDER_HISTORY} component={asyncOrderHistoryPage} />
            <Route path={routes.MEAL_PLANNER} component={asyncMealPlannerPage} />
            <Route path={routes.CART} component={asyncCartPage} />
            <Route path={routes.ERROR} component={asyncErrorPage} />
            <Redirect push to ={routes.ERROR}  />
        </Switch>
        </Suspense>
      </div>
    );
  }
}
