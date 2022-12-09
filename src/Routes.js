 import {Switch, Route, Redirect} from 'react-router-dom';
 import DogList from './DogList'
 import Filter from './Filter'
 import {dogs} from './App'

 const Routes = () => {
    return (
        <Switch>
            <Route exact path='/dogs'>
                <DogList dogs={dogs}/>
            </Route>
            <Route path='/dogs/:name'>
                <Filter dogs={dogs} />
            </Route>
            <Redirect to='/dogs' />
        </Switch>
    );
 }

 export default Routes;