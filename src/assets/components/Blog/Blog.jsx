import React from 'react';
import Chefs from '../chefs/Chefs';
import ChefBanner from '../ChefBanner/ChefBanner';
import ChefCard from '../ChefCard/ChefCard';

const Blog = () => {
    return (
        <div>
            <Chefs></Chefs>
            <ChefBanner></ChefBanner>
            <ChefCard></ChefCard>
        </div>
    );
};

export default Blog;