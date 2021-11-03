
<div class="web-reviews-page-container">
<h1>Reviews</h1>
<div class="row">
{{#each result}}



<div class="col-sm-6 web-reviews article-loop">
  <a href="{{link}}" target="_blank"> 
  <img src="{{image}}" alt="SoundStage! Access Logo" width="100" height="100" class="news-logo" /></a>
    <h3 style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; color: rgb(34, 36, 38); font-size: 1.286rem; line-height: 1.2; font-family: OpenSans, Helvetica Neue, Helvetica, Arial, sans-serif; background-color: rgb(255, 255, 255);">
      {{details}}
    </h3>
  <p class="reviewer-name">{{reviewName}},<a target="_blank" class="company-link" href="{{link}}"> {{company}}</a></p>
  {{#ifEquals video ""}}
  {{else}}
  <div class="web-review-video">
  <iframe width="500" height="300" src="{{video}}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  {{/ifEquals}}
  <br>
</div>

{{/each}}

</div>
</div>