<div class="product-details-full">
	<div data-cms-area="item_details_banner" data-cms-area-filters="page_type"></div>

	<header class="product-details-full-header">
		<div id="banner-content-top" class="product-details-full-banner-top"></div>
	</header>

	<article class="product-details-full-content" itemscope itemtype="https://schema.org/Product">
		<meta itemprop="url" content="{{itemUrl}}">
		<meta itemprop="brand" content="{{model.item.custitem_brand}}" />
		<meta itemprop="description" content="{{model.item.featureddescription}}" />
		<meta itemprop="mpn" content="{{model.item.itemid}}" />
		<meta itemprop="name" content="{{model.item.displayname}}" />
		{{#each seoImgArr}}
			<meta itemprop="image" content="{{this}}" />
		{{/each}}
		<div id="banner-details-top" class="product-details-full-banner-top-details"></div>

		<section class="product-details-full-main-content">
			<div class="product-details-full-content-header">

				<div data-cms-area="product_details_full_cms_area_1" data-cms-area-filters="page_type"></div>

				<div id="product-details-header-container">
					<h2>{{category}}</h2>
					<h1 class="product-details-full-content-header-title">{{model.item.displayname}}</h1>
				</div>

				<!--<div class="product-details-full-rating" data-view="Global.StarRating"></div>-->
				<h3>{{model.item.custitem_jhm_product_type}}</h3>
				<div data-cms-area="item_info" data-cms-area-filters="path"></div>
			</div>
			<div class="product-details-full-main-content-left">
				<div class="product-details-full-image-gallery-container">
					<div id="banner-image-top" class="content-banner banner-image-top"></div>
					<div data-view="Product.ImageGallery"></div>
					<div id="banner-image-bottom" class="content-banner banner-image-bottom"></div>

					<div data-cms-area="product_details_full_cms_area_2" data-cms-area-filters="path"></div>
					<div data-cms-area="product_details_full_cms_area_3" data-cms-area-filters="page_type"></div>
				</div>
			</div>

			<div class="product-details-full-main-content-right">
			<div class="product-details-full-divider"></div>

			<div class="product-details-full-main">
				{{#if isItemProperlyConfigured}}
					<form id="product-details-full-form" data-action="submit-form" method="POST">

						<section class="product-details-full-info">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</section>

						<section data-view="Product.Options"></section>

						<div data-cms-area="product_details_full_cms_area_4" data-cms-area-filters="path"></div>

						<div data-view="Product.Sku"></div>

						<div data-view="Product.Price"></div>
						<div data-view="Quantity.Pricing"></div>

						<div data-view="Product.Stock.Info"></div>

						{{#if isPriceEnabled}}
							<div data-view="Quantity"></div>
							
							<section class="product-details-full-actions">
								<div class="product-details-full-actions-container">
									<div data-view="MainActionView"></div>
									<div data-view="ProductDetails.AddToQuote" class="product-details-full-actions-addtoquote"></div>
								</div>
							</section>
						{{/if}}
						
						{{#ifEquals model.item.itemtype "InvtPart"}}
                        <div class="pdp-attributes-container">
                            {{#ifEquals condition '&nbsp;'}} {{else}} 
							<div class="product-detail-options">
							<span class="product-detail-options-label">
							<i data-toggle="tooltip" data-placement="bottom" class="cart-summary-expander-tooltip"
            				title="
							{{#if new}}
							{{translate 'Insert text for New'}}
							{{else if demo}}
							{{translate 'Photo samples, gear we auditioned in our listening room, items returned for wrong color/wrong size, etc.'}}
							{{else if openbox}}
							{{translate 'Contents briefly examined or inspected'}}
							{{else if factory}}
							{{translate 'Original-condition items repackaged by the manufacturer'}}
							{{else if cosmetically_blemished }}
							{{translate 'A few dings or scratches, but functionally in original condition'}}
							{{else if used }}
							{{translate 'May show some signs of use'}}
							{{/if}}
							">
						</i>
							Condition:</span><span class="product-detail-options-value ">{{condition}}
							</span></div>{{/ifEquals}}	

                            {{#ifEquals finish '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Finish:</span><span class="product-detail-options-label"></span><span class="product-detail-options-value">{{finish}}</span></div>{{/ifEquals}}
                            {{#ifEquals length_metric '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Length (Metric):</span><span class="product-detail-options-value">{{length_metric}}</span></div>{{/ifEquals}}
                            {{#ifEquals length_us '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Length (US):</span><span class="product-detail-options-value">{{length_us}}</span></div>{{/ifEquals}}
                            {{#ifEquals amptospeaker '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Amp to Speaker:</span><span class="product-detail-options-value">{{amptospeaker}}</span></div>{{/ifEquals}}
                            {{#ifEquals storage '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Storage:</span><span class="product-detail-options-value">{{storage}}</span></div>{{/ifEquals}}
                            {{#ifEquals cartridge_output '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Cartridge Output:</span><span class="product-detail-options-value">{{cartridge_output}}</span></div>{{/ifEquals}}
                            {{#ifEquals rackmount '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Rackmount:</span><span class="product-detail-options-value">{{rackmount}}</span></div>{{/ifEquals}}
                            {{#ifEquals pair_or_single '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Pair or Single:</span><span class="product-detail-options-value">{{pair_or_single}}</span></div>{{/ifEquals}}
                            {{#ifEquals interconnect_end '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Interconnect End:</span><span class="product-detail-options-value">{{interconnect_end}}</span></div>{{/ifEquals}}
                            {{#ifEquals color '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Color:</span><span class="product-detail-options-value">{{color}}</span></div>{{/ifEquals}}
                            {{#ifEquals height '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Height:</span><span class="product-detail-options-value">{{height}}</span></div>{{/ifEquals}}
                            {{#ifEquals volume '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Volume:</span><span class="product-detail-options-value">{{volume}}</span></div>{{/ifEquals}}
                            {{#ifEquals amperage '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Amperage:</span><span class="product-detail-options-value">{{amperage}}</span></div>{{/ifEquals}}
                            {{#ifEquals tonearmtype '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Tonearm Type:</span><span class="product-detail-options-value">{{tonearmtype}}</span></div>{{/ifEquals}}
                            {{#ifEquals drawer_size '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Drawer Size:</span><span class="product-detail-options-value">{{drawer_size}}</span></div>{{/ifEquals}}
                            {{#ifEquals treatment '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Treatment:</span><span class="product-detail-options-value">{{treatment}}</span></div>{{/ifEquals}}
                            {{#ifEquals cable_contact_type '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Cable Type:</span><span class="product-detail-options-value">{{cable_contact_type}}</span></div>{{/ifEquals}}
                            {{#ifEquals boxsize '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Box Size:</span><span class="product-detail-options-value">{{boxsize}}</span></div>{{/ifEquals}}
                            {{#ifEquals size '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Size:</span><span class="product-detail-options-value">{{size}}</span></div>{{/ifEquals}}
                            {{#ifEquals width '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Width:</span><span class="product-detail-options-value">{{width}}</span></div>{{/ifEquals}}
                            {{#ifEquals weightcapacity '&nbsp;'}}{{else}} <div class="product-detail-options"><span class="product-detail-options-label">Weight Capacity:</span><span class="product-detail-options-value">{{weightcapacity}}</span></div>{{/ifEquals}}
                        </div>
                        {{/ifEquals}}



						{{#if showkitComponents}}
						<div data-view="KitComponents"></div>
						{{/if}}

						<div data-view="SocialSharing.Flyout" class="product-details-full-social-sharing"></div>

						{{#if showCompliance}}
						<div data-view="StateComplianceWarning" class="pdp-compliance-container"></div>
						{{/if}}

						<div class="product-details-full-main-bottom-banner">
							<div id="banner-summary-bottom" class="product-details-full-banner-summary-bottom"></div>
						</div>
					</form>
				{{else}}
					<div data-view="GlobalViewsMessageView.WronglyConfigureItem"></div>
				{{/if}}

				<div id="banner-details-bottom" class="product-details-full-banner-details-bottom" data-cms-area="item_info_bottom" data-cms-area-filters="page_type"></div>
			</div>
			</div>

		</section>

		<div data-cms-area="product_details_full_cms_area_5" data-cms-area-filters="page_type"></div>
		<div data-cms-area="product_details_full_cms_area_6" data-cms-area-filters="path"></div>

		<section data-view="Product.Information"></section>

		<!--<section data-view="Product.Information"></section>-->
		{{!-- <div id="product-details-custom-data">
			<div id="full-desc">
				{{{model.item.storedetaileddescription}}}
			</div>
			{{#if showDescToggle}}
				<div class="button-container">
					<a href="#" class="toggle-desc" data-action="toggle-expand" data-toggle-el="full-desc">See More</a>
				</div>
			{{/if}}
			<div class="details technical-specs">
				<h3>Technical Specifications</h3>
				{{{model.item.featureddescription}}}
			</div>
			<div class="details">
				<h3>Information</h3>
				<div data-view="Manuals"></div>
			</div>
		</div> --}}

		<!--<div class="product-details-full-divider-desktop"></div>-->

		<div data-cms-area="product_details_full_cms_area_7" data-cms-area-filters="path"></div>

		<!--<div data-view="ProductReviews.Center"></div>-->

		<div data-cms-area="product_details_full_cms_area_8" data-cms-area-filters="path"></div>

		<div class="product-details-full-content-related-items">
			<div data-view="Related.Items"></div>
		</div>

		<div class="product-details-full-content-correlated-items">
			<div data-view="Correlated.Items"></div>
		</div>
		<div id="banner-details-bottom" class="content-banner banner-details-bottom" data-cms-area="item_details_banner_bottom" data-cms-area-filters="page_type"></div>
	</article>
</div>



{{!----
Use the following context variables when customizing this template:

	model (Object)
	model.item (Object)
	model.item.internalid (Number)
	model.item.type (String)
	model.quantity (Number)
	model.options (Array)
	model.options.0 (Object)
	model.options.0.cartOptionId (String)
	model.options.0.itemOptionId (String)
	model.options.0.label (String)
	model.options.0.type (String)
	model.location (String)
	model.fulfillmentChoice (String)
	pageHeader (String)
	itemUrl (String)
	isItemProperlyConfigured (Boolean)
	isPriceEnabled (Boolean)

----}}
