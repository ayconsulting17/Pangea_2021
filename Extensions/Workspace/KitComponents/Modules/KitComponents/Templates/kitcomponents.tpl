

<section class="kit-component-container">
<table class="kit-components" id="kit-components">
<tr>
    <th class="components-label">Components</th>
</tr>

  {{#each components}}
  <tr>
      <td class="kit-member-name"><a href="/{{url}}">{{displayName}}</a></td>
      <td class="kit-member-stock">{{#if qtyOnhand}} <div class="instock-label">In Stock</div> {{else}} <div class="product-line-stock-msg-out-text">Out of Stock</div> {{/if}}</td>
  </tr>
  {{/each}}
</table>
{{!-- <div class="components-label">Components:</div>
{{#each components}}
  <span class="kit-memberslist">
      <a href="/{{url}}">{{displayName}}</a>  -  {{#if qtyOnhand}} <div class="instock-label">In Stock - Quantity : {{qtyOnhand}}</div> {{else}} <div class="product-line-stock-msg-out-text">Out of Stock - Quantity : 0</div> {{/if}}
    </span>
{{/each}} --}}
</section>




<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->