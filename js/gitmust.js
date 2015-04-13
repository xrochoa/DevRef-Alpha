    {{! add ^ for conditional }}

    {{#objectxxx}}
    
        <div class="row">
        <div class="col-sm-3">
        <ul class="list-group">
        <li class="list-group-item">
        <span class="btn1" data-stateName="{{Command}}"><a class="glyphicon glyphicon-arrow-right"></a></span>
        <span class="btn2" data-stateName="{{Command}}" hidden><a class="glyphicon glyphicon-arrow-down"></a></span>
        <input value="{{Command}}"></intput>
        </li>
        </ul></div>
        <div class="col-sm-9"><pre>{{Description}}</pre></div>
        </div>
        <section class="toggle {{Command}}" hidden>
        {{#options}}
            <div class="row">
            <div class="col-sm-5">
            <ul class="list-group">
            <li class="list-group-item">
            <input value="{{Command}}"></intput></li>
            </ul></div>
        <div class="col-sm-7"><pre>{{Description}}</pre></div>
        </div>       
        {{/options}}
        </section>
    {{/objectxxx}}