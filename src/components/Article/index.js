import React, {Component} from 'react'

class Article extends Component{
   constructor(props){
       super(props)

       this.state = {

       }
   }

   componentWillUnmount() {
       console.log('---','mounting')
   }

   // componentWillReceiveProps(nextProps) {
   //     console.log('---','will receive props');
   //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
   //         isOpen: nextProps.defaultOpen
   //     })
   // }

   componentWillUpdate(nextProps, nextState, nextContext) {
       console.log('---','will update');
   }

    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section>{article.text}</section>
        return (

            <div className='hello' style={{color:'red'}}>
                <h2>{article.title}
                    <button onClick={onButtonClick}> {
                        isOpen ? 'close':'open'
                    }</button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }


}

export default Article;