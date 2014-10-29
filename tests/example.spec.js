describe('.getAverageRating()', function() {
	var reportA;
	var reviews = {};
	beforeEach(function(){			 
	reviews.restaurantA = [
		{ 
			title: '', 
			stars: 5, 
			cost: 2,
			description: '' 
		},
		{ 
			title: '', 
			stars: 3, 
			cost: 4,
			description: '' 
		}

	];
	reportA = new ReviewsReport('Restaurant A 2014', reviews.restaurantA);
});	

	it('should calculate average rating', function() {
			//start here
			expect(reportA.getAverageRating()) == 4;
			//expect(reviews.restaurantB.getAverageRating()) == 4;			
	});

	it('should calculate average cost', function() {
			//start here
			expect(reportA.getAverageCost()) == 3;
			//expect(reviews.restaurantB.getAverageRating()) == 4;			
	});
	
	it('should be $$$', function() {
			//start here
			expect(reportA.convertCostToDollarSign()) == '$$$';
			//expect(reviews.restaurantB.getAverageRating()) == 4;			
	});
	it('should be name, rating, review, ', function() {
			//start here
			expect(reportA.summarize()) == {
			name: "Restaurant A 2014",
			averageStarRating: 4,
			totalReviews: 2,
			averageCost: {
			numeric: 3,
			symbol: "$$$"
			}
	  };
			//expect(reviews.restaurantB.getAverageRating()) == 4;			
	});
});

