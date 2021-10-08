// let number = 5;
// const leftBorderWidth = 1;

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0]; 

const countGroupedByReview = reviews.reduce(groupBy, {}); 
                /* {}    4.5 */
function groupBy (acc, review ){ 
    const count = acc[review] || 0; 
    return {...acc, [review]: count + 1} 
} 
console.log(countGroupedByReview);