	/*jshint esversion:6*/
	// Which users checked out any of the Lord of the Rings trilogy?
	// Movies ID's are 8, 11, and 15


module.exports = function(mongoose, Checkout, Movie) {
	// How many users are there?

	Checkout.aggregate(
    {
	$match : {
		$or:[
		{movieId:{"$in":[8, 11, 15]}}
			]}
    },
    {
	$group : { _id : "$userId", total : { $sum : 1 } }

    },
    function(err,result) {
    var lords = [];
    for (var i = 0; i<result.length; i++){
    	if (lords.includes(result[i]._id) === false){
    		lords.push(result[i]._id);
    	}
    } console.log(lords.length);
     console.log(lords);
    }

  ); 

// 	Checkout.aggregate(
//     [ { "$match" : { "$movieId" : 8 } } ],
//     { "$group": { "_id": null, "count": { "$sum": 1 } } }
// );


// Checkout.distinct('movieId', function(err, movieIds){
// 		count = 0;
// 		for(var i in movieIds){
// 			if (moviesIds[i] === 8 || 11 || 15){
// 				count = count + 1;
// 			}
// 		}
// 		console.log(count);
// 	});

};
