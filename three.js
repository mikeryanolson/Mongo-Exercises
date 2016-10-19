module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?
Checkout.aggregate(
    [
        // Grouping pipeline
        { "$group": { 
            "_id": '$movieId', 
            "movieCount": { "$sum": 1 }
        }},
        // Sorting pipeline
        { "$sort": { "movieCount": -1 } },
    ],
    function(err,result) {
            if(err){
                console.log("it doesn't work");
            }
            //console.log(result[0]._id);
            var movieNum = result[0]._id;

        Movie.findOne({_id:movieNum},function(err,result){
            if(err){
                console.log("Error - abort!");
                } console.log(result.title);
            });
    }
);


// Movie.aggregate()

};