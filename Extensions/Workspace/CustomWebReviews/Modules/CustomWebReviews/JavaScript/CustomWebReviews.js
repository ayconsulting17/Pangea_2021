define(
	'CustomWebReviews', [
		'CustomWebReviews.View'
	],
	function (
		CustomWebReviewsView
	) {
		'use strict';

		return {
			mountToApp: function mountToApp(container) {
				// using the 'Layout' component we add a new child view inside the 'Header' existing view 
				// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
				// more documentation of the Extensibility API in
				// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html

				/** @type {LayoutComponent} */
				var layout = container.getComponent('Layout');
				// var pdp = container.getComponent('PDP');
				// var child_view;
				// console.log('PDP',pdp);
				
				// if (pdp) {

				// 	pdp.on('beforeShowContent',function(){
				// 		console.log('before Content PDP',pdp);
				// 		if(!child_view){
				// 			child_view = layout.addChildView('Product.Information', function() { 
				// 				return new CustomWebReviews_itemView({ container: container });
				// 			});
				// 		}
			
				// 	})
				// 	// var pdp = container.getComponent('PDP');
		
				// }
				var self = this;
				layout.on('afterShowContent', function () {
					setTimeout(function () {
						(function (jQuery) {

							var paginate = {
								startPos: function (pageNumber, perPage) {
									// determine what array position to start from
									// based on current page and # per page
									return pageNumber * perPage;
								},

								getPage: function (items, startPos, perPage) {
									// declare an empty array to hold our page items
									var page = [];

									// only get items after the starting position
									items = items.slice(startPos, items.length);

									// loop remaining items until max per page
									for (var i = 0; i < perPage; i++) {
										page.push(items[i]);
									}

									return page;
								},

								totalPages: function (items, perPage) {
									// determine total number of pages
									return Math.ceil(items.length / perPage);
								},

								createBtns: function (totalPages, currentPage) {
									// create buttons to manipulate current page
									var pagination = jQuery('<div class="pagination" />');

									// add a "first" button
									pagination.append('<span class="pagination-button">&laquo;</span>');

									// add pages inbetween
									for (var i = 1; i <= totalPages; i++) {
										// truncate list when too large
										if (totalPages > 5 && currentPage !== i) {
											// if on first two pages
											if (currentPage === 1 || currentPage === 2) {
												// show first 5 pages
												if (i > 5) continue;
												// if on last two pages
											} else if (currentPage === totalPages || currentPage === totalPages - 1) {
												// show last 5 pages
												if (i < totalPages - 4) continue;
												// otherwise show 5 pages w/ current in middle
											} else {
												if (i < currentPage - 2 || i > currentPage + 2) {
													continue;
												}
											}
										}

										// markup for page button
										var pageBtn = jQuery('<span class="pagination-button page-num" />');

										// add active class for current page
										if (i == currentPage) {
											pageBtn.addClass('active');
										}

										// set text to the page number
										pageBtn.text(i);

										// add button to the container
										pagination.append(pageBtn);
									}

									// add a "last" button
									pagination.append(jQuery('<span class="pagination-button">&raquo;</span>'));

									return pagination;
								},

								createPage: function (items, currentPage, perPage) {
									// remove pagination from the page
									jQuery('.pagination').remove();

									// set context for the items
									var container = items.parent(),
										// detach items from the page and cast as array
										items = items.detach().toArray(),
										// get start position and select items for page
										startPos = this.startPos(currentPage - 1, perPage),
										page = this.getPage(items, startPos, perPage);

									// loop items and readd to page
									jQuery.each(page, function () {
										// prevent empty items that return as Window
										if (this) {

											if (this.window === undefined) {
												container.append(jQuery(this));
											}
										}
									});

									// prep pagination buttons and add to page
									var totalPages = this.totalPages(items, perPage),
										pageButtons = this.createBtns(totalPages, currentPage);

									container.after(pageButtons);
								}
							};

							// stuff it all into a jQuery method!
							jQuery.fn.paginate = function (perPage) {
								var items = jQuery(this);

								// default perPage to 5
								if (isNaN(perPage) || perPage === undefined) {
									perPage = 5;
								}

								// don't fire if fewer items than perPage
								if (items.length <= perPage) {
									return true;
								}

								// ensure items stay in the same DOM position
								if (items.length !== items.parent()[0].children.length) {
									items.wrapAll('<div class="pagination-items" />');
								}

								// paginate the items starting at page 1
								paginate.createPage(items, 1, perPage);

								// handle click events on the buttons
								jQuery(document).on('click', '.pagination-button', function (e) {
									// get current page from active button
									var currentPage = parseInt(jQuery('.pagination-button.active').text(), 10),
										newPage = currentPage,
										totalPages = paginate.totalPages(items, perPage),
										target = jQuery(e.target);

									// get numbered page
									newPage = parseInt(target.text(), 10);
									if (target.text() == '«') newPage = 1;
									if (target.text() == '»') newPage = totalPages;

									// ensure newPage is in available range
									console.log("newPage", newPage);
									console.log("totalPages", totalPages);
									if (newPage > 0 && newPage <= totalPages) {
										paginate.createPage(items, newPage, perPage);
									}
								});
							};

						})(jQuery);

						jQuery('.article-loop').paginate(5);

					}, 2000);
					/*
					 * jQuery Pagination
					 * Author: Austin Wulf (@austinwulf)
					 *
					 * Call the paginate method on an array
					 * of elements. Accepts # of items per page
					 * as an argument. Defaults to 5.
					 *
					 * Example:
					 *     jQuery(selector).paginate(3);
					 *
					 * Released under the MIT License.
					 *
					 * v 1.0
					 */



					/* This part is just for the demo,
					not actually part of the plugin */

				});

				/** @type {PageTypeComponent} */
				var pageTypeComponent = container.getComponent("PageType");
				pageTypeComponent.registerPageType({
					name: 'webreviews',
					routes: ['reviews', 'reviews/:url', 'reviews/:url?:options'],
					view: CustomWebReviewsView,
					// options: {
					// 	id: 'managesubscriptions'
					// },
					defaultTemplate: {
						name: 'customwebreviews.tpl',
						displayName: 'Pangea Audio Reviews',
					}
				});

			}
		};
	});