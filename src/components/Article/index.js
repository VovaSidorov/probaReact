import React, {Component} from 'react'

class Article extends Component{
   constructor(props){
       super(props)

       this.state = {
           isOpen: props.defaultOpen
       }
   }

   componentWillUnmount() {
       console.log('---','mounting')
   }

   componentWillReceiveProps(nextProps) {
       if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
           isOpen: nextProps.defaultOpen
       })
   }

   componentWillUpdate(nextProps, nextState, nextContext) {
   }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (

            <div className='hello' style={{color:'red'}}>
                <h2>{article.title}
                    <button onClick={this.handleClick}> {
                        this.state.isOpen ? 'close':'open'
                    }</button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
    handleClick = () => {
        console.log('---','clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default Article;