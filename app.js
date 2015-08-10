(function($) {
    $(document).ready(function() {
        var html =
            '<div class="numbering">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19</div>' +
            '<pre>' +
            '<span class="lightgray">&lt;!DOCTYPE html&gt;</span><br/>' +
            '&lt;html&gt;<br/>' +
            '&lt;head&gt;<br/>' +
                '<span class="in-one black">&lt;title&gt;view-source:mikaelahlinder.com&lt;/title&gt;</span><br/>' +
                '<span class="in-one">&lt;meta <span class="brown">charset</span>="<span class="blue">utf-8</span>" /&gt;</span><br/>' +
                '<span class="in-one">&lt;meta <span class="brown">name</span>="<span class="blue">viewport</span>" <span class="brown">content</span>="<span class="blue">width=device-width, initial-scale=1</span>"/&gt;</span><br/>' +
                '<span class="in-one">&lt;link <span class="brown">href</span>="<span class="lightblue">app.css</span>" <span class="brown">rel</span>="<span class="blue">stylesheet</span>" /&gt;</span><br/>' +
                '<span class="in-one">&lt;script <span class="brown">src</span>="<span class="lightblue">https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js</span>"&gt;&lt;/script&gt;</span><br/>' +
                '<span class="in-one">&lt;script <span class="brown">src</span>="<span class="lightblue">app.js</span>"&gt;&lt;/script&gt;</span><br/>' +
                '<span class="in-one green">&lt;!--[if lt IE 9]&gt;</span><br/>' +
                    '<span class="in-two green">&lt;script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"&gt;&lt;/script&gt;</span><br/>' +
                    '<span class="in-two green">&lt;script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"&gt;&lt;/script&gt;</span><br/>' +
                '<span class="in-one green">&lt;![endif]--&gt;</span><br/>' +
            '&lt;/head&gt;<br/>' +
            '&lt;body&gt;<br/>' +
                '<span class="in-one">&lt;div <span class="brown">class</span>="<span class="blue">container</span>"&gt;</span><br/>' +
                '<span class="in-one">&lt;/div&gt;</span><br/>' +
            '&lt;/body&gt;<br/>' +
            '&lt;/html&gt;<br/>' +
            '</pre>';

        $('.container').append(html);
    });
})(jQuery);