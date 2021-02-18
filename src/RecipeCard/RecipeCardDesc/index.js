import React, { Fragment } from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './styles.scss';

class RecipeCardDesc extends React.Component{
  constructor(props){
	super(props);
	this.state = {
	  checked: false
	};
  }

  handleClick(props) {
	props.likeCallback();

	console.log('Click happened');
	console.log(this.state.checked);
	this.setState({ checked: !this.state.checked });
	console.log(this.state.checked);
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
	        <FontAwesome name='heart-o'/>
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
