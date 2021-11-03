<div class="web-reviews-item-container">
{{#each result}}
<div class="web-reviews-item article-loop-item">
 
  <a href="{{link}}" target="_blank"> 
  <img src="{{image}}" alt="SoundStage! Access Logo" width="100" height="100" class="news-logo" /></a>
    <h3 style="box-sizing: border-box; margin: 0px 0px 10px; padding: 0px; border: 0px; color: rgb(34, 36, 38); font-weight:bold; font-size: 1.286rem; line-height: 1.2; font-family: OpenSans, Helvetica Neue, Helvetica, Arial, sans-serif; background-color: rgb(255, 255, 255);">
      {{details}}
    </h3>
  <p class="reviewer-name">{{reviewName}},<a target="_blank" href="{{link}}"> {{company}}</a></p>
  <div style="text-align:center;">
  {{#ifEquals video ""}}
  {{else}}
  <iframe width="560" height="315" src="{{video}}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  {{/ifEquals}}
 </div>
</div>
{{/each}}
</div>