import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './style.css';
import BlogCardModule from './BlogCardModule';

const cards = [
    { title:"Title of the blog or article will be here", subTitle:"Robert Wesker", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/robert.png'},
    { title:"Title of the blog or article will be here", subTitle:"Marta Łapacz", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/marta.png'},
    { title:"Title of the blog or article will be here", subTitle:"Lirdi Cani", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/lirdi.png'},
];

const PartPublication = () => {
    return (
        <div className='partPublication'>
            <div className='part-publication-title'>PUBLICATIONS</div>
            <div className='part-publication-blog-title d-flex justify-content-between align-items-end'>
                <div className='part-publication-blog-title-intro'>From our blog</div>
                <div className='d-flex justify-content-end'><Link to='/blog'><Button className='more-blog' >SEE MORE FROM OUR BLOG</Button></Link></div>
            </div>
            <BlogCardModule cards={cards} />
            <div className='partner-more-btn'><a href='/'>30 partners and more</a></div>
        </div>
    )
}

export default PartPublication;