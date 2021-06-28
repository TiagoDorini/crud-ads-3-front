import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClienteIndex from './Cliente/cliente.index';
import NavbarIndex from "./Navbar"

function Routes() {
    return (
        <BrowserRouter>
            <NavbarIndex />
            <Switch>
                <Route path="/" exact>
                    <ClienteIndex />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;