import React from 'react';
import { HashRouter, Switch,Route} from 'react-router-dom';
import * as Pages from './Pages/index';
class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <HashRouter>
                <Route >
                    <Route exact path="/" component={Pages.Home} />
                    <Route exact path="/Programme" component={Pages.Programme} />
                    <Route exact path="/Programme/Booking" component={Pages.Booking} />
                    <Route exact path="/Service" component={Pages.Service} />
                    <Route exact path="/Existing" component={Pages.Existing} />
                    <Route exact path="/Community" component={Pages.Community} />
                    <Route exact path="/Development" component={Pages.Development} />
                    <Route exact path="/DDNDetaile" component={Pages.DDNDetaile} />
                    <Route exact path="/TimeLine" component={Pages.TimeLine} />
                    <Route exact path="/FAQ" component={Pages.FAQ} />
                    <Route exact path="/News" component={Pages.NewsPage} />
                    <Route exact path="/NewsDetaile/:id" component={Pages.NewsDetaile} />
                    <Route exact path="/NewsDetaile1" component={Pages.NewsDetaile1} />
                    <Route exact path="/NewsDetaile2" component={Pages.NewsDetaile2} />
                    <Route exact path="/NewsDetaile3" component={Pages.NewsDetaile3} />
                    <Route exact path="/NewsDetaile4" component={Pages.NewsDetaile4} />
                    <Route exact path="/NewsDetaile5" component={Pages.NewsDetaile5} />
                    <Route exact path="/NewsDetaile6" component={Pages.NewsDetaile6} />

                    <Route exact path="/NewsList" component={Pages.NewsList} />
                    <Route exact path="/ArticlesDetail/:id" component={Pages.ArticlesDetail} />
                    <Route exact path="/ArticlesList" component={Pages.ArticlesList} />
                </Route>
            </HashRouter>
        )
    }
}



export default AppRouter;
