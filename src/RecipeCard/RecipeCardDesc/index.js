import React, { Fragment } from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class RecipeCardDesc extends React.Component{
  constructor(props){
	super(props);
	this.state = {
	  checked: false,
	  color: 'gray'
	};
  }

  handleClick(props) {
	props.likeCallback();

	this.setState({ color: 'red' });
  }

  render(){
    let{
      title,
      time,
	  servings,
    } = this.props;
    
    return(
      <div className={styles['recipe-card-desc']}>

	      <div className={styles.title}>
	        {title}
	      </div>

	      <a className={styles.heart} onClick={() => {this.handleClick(this.props);}}>
	    '	<FontAwesome name='heart' style={{color:this.state.color}}/>
	      </a>

	      <div className={styles.time}>
	        <FontAwesome name='hourglass-half'/>
	        {time}
	      </div>

	      <div className={styles.servings}>
	        <FontAwesome name='user-o' />
	        {servings}
	      </div>

      </div>
      
    );
  }
}


export default RecipeCardDesc;
