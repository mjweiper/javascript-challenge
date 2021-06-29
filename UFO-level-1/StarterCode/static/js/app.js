//from data.js
var tableData = data;

//select
var tbody = d3.select("tbody");


//create table that adds new rows of data for each UFO sighting
data.forEach(record => {

    var row = tbody.append("tr");
        //Loop
        Object.entries(record).forEach(([key, value]) => {
        row.append("td").text(value);

    });
});


//date form that searches through the date/time column
//select
var filterbtn = d3.select("#filter-btn");
filterbtn.on("click", function() {

    //resetting filter
     tbody.html("");
     d3.event.preventDefault();

    var input = d3.select("#datetime");
    var query = input.property("value");
    var populate = tableData.filter(one => one.datetime === query);
    populate.forEach((selection) => {
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

