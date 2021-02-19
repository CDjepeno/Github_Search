import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './pages/Form';


export interface AppProps {
    
}
 
const App: React.FC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Form}/>                
            </Switch>
        </BrowserRouter>
      );
}
 
export default App;