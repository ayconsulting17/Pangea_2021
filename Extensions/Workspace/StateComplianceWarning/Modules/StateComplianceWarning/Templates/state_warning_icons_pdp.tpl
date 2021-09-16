
<div class="warning-icon-msg-container">
        <div class="warning-icon">
            <img src="{{icon}}" />
        </div>
        <p class="warning-text">{{{message}}}</p>      
</div>

{{#ifEquals message2 ""}}
{{else}}
<div class="warning-icon-msg-container">
        <div class="warning-icon">
            <img src="{{icon2}}" />
        </div>
        <p class="warning-text">{{{message2}}}</p>      
</div>
{{/ifEquals}}
