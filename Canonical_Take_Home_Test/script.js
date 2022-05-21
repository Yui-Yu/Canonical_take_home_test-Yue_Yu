fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json').then((response)=>{
    return response.json(); //fetch data from API
}).then((data)=>{
    console.log(data);
    let blog=""; //define a varieble for HTML templating
    data.map((elements)=>{
        const { date, featured_media, title, author } = elements; //deconstruction
        const dateTemp = new Date(date);
        var options = {year:'numeric', month:'long', day:'numeric'}; //Convert the date data from the API to UK format
        console.log(dateTemp.toLocaleDateString('en-UK',options));
        blog+= `<div class="col-4 shadow box">
                    <div class="p-card p-card--highlighted">
                      <div class="p-card__inner">
                        <p>CLOUD AND SERVER</p>
                    </div>
                    <hr style="border-top: 1px dotted grey;" />
                    <div class="p-card__inner">
                      <img class="p-card__image" src="${featured_media}">
                      <div id="title">
                         <h3><a href="#">${title.rendered}</a></h3>
                      </div>
                      <p id="information">By <a href="#">${author}</a> on ${dateTemp.toLocaleDateString('en-UK',options)}</p>
                    </div>
                    <hr class="u-no-padding" style="border-top: 1px dotted grey;" />
                    <div class="p-card__inner">
                      <p>Article</p>
                    </div>
                </div>
            </div>`;
    });
    console.log(blog);
    document.getElementById("cards").innerHTML=blog;

}).catch((err)=>{
    console.log("err");
});