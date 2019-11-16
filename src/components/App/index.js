import React, {PureComponent} from 'react'
import ArticleList from "../ArticleList";
import articles from '../../fixtures'

class App extends PureComponent{
    state = {
        reverted: false
    }

    render() {
        console.log('---',2,this.state);
        return (
            <div>
                <h1>
                    App name
                    <button onClick={this.revert}>Revetr</button>
                </h1>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        console.log('---',1);
        this.setState({
            reverted: !this.state.reverted
        })
    }

}
export default App;
