angular.module('categories', [
	'eggly.models.categories'])

	.config(function($stateProvider) {
		$stateProvider
			.state('eggly.categories', {
				url: "/",
				views: {
					'categories@': {
						controller: 'CategoriesCtrl as categoriesListCtrl',
						templateUrl: 'app/categories/categories.tmpl.html'

					},
					'bookmarks@': {
						controller: 'BookmarksCtrl',
						templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'

					}
 				}
			})
	})

	.controller('CategoriesCtrl', function CategoriesCtrl(CategoriesModel) {
		var categoriesListCtrl = this;
		CategoriesModel.getCategories()
			.then(function(result) {
				categoriesListCtrl.categories = result;
				//console.log(categoriesListCtrl.categories);
			});

	})