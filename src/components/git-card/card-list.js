import React from 'react';
import Card from './card';
import data from '../../data';

const CardList = () => {
return(
    data.map(profile => (<Card {...profile} key={profile.id}/>))
)
}
export default CardList;