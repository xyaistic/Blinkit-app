import HomeScreen from '../screens/HomeScreen';
import DealDetailsScreen from '../screens/DealDetailsScreen';
import CategoryCardsDetailedScreen from '../screens/CategoryCardsDetailedScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';

export const drawerRoutes = [
  { name: 'Home', component: HomeScreen },
  { name: 'Details', component: DealDetailsScreen },
  { name: 'Category', component: CategoryCardsDetailedScreen },
  { name: 'SignUp', component: SignUpScreen },
  { name: 'SignIn', component: SignInScreen },
];

