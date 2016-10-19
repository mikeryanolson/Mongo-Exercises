module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?
Checkout.aggregate(
    [
        // Grouping pipeline
        { "$group": { 
            "_id": '$movieId', 
            "CheckoutCount": { "$sum": 1 }
        }},
        // Sorting pipeline
        { "$sort": { "CheckoutCount": -1 } },
    ],
    function(err,result) {
    	console.log(result[0]);
    }
);


// Movie.aggregate()

};