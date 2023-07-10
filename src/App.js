import {Switch, Route, Redirect} from 'react-router-dom'
import TechEra from './components/TechEra'
import CourseDetailsRoute from './components/CourseDetailsRoute'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={TechEra} />
    <Route exact path="/courses/:id" component={CourseDetailsRoute} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
