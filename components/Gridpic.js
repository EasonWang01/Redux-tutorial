import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 600,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: 'http://www.designboom.com/shop/wp-content/uploads/2016/03/Bokk-Stool-500x400.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://www.wikispaces.com/i/content/box-wiki.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://images.stackcommerce.com/assets/productshot1-image/14537/0dad610d4ba6826cbdf170ed792f836bf15ed956_main_hero_image.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/600x315/26/89/8e/26898e110730cc4413db6768c83bcd43.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://webdesignledger.com/wp-content/uploads/2011/02/5270399366_45b7743fe3.jpg?imageView/1/w/240/h/180',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://www.bloodyloud.com/wp-content/gallery/trini-schultz/trini-schultz-photography-11.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://thedooverguy.com/wp-content/uploads/2011/01/live-life-to-the-fullest1.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://www.designboom.com/shop/wp-content/uploads/2015/10/vases_designboomshop-500x400.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple;