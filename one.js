module.exports = function(mongoose, Checkout, Movie) {

Checkout.aggregate(
    [
        // Grouping pipeline
        { "$group": { 
            "_id": '$userId', 
            "CheckoutCount": { "$sum": 1 }
        }},
        // Sorting pipeline
        { "$sort": { "CheckoutCount": -1 } },
    ],
    function(err,result) {
    	console.log(result[0]);
    }
);

};


// answers:
// user 30
// into the wild
// 73 users