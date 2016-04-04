var leaseData = [
    {
        "unitName": "A101",
        "beginTimestamp": 1328256000000,
        "endTimestamp": 1359978400000,
        "rent": 1200
    },
    {
        "unitName": "B201",
        "beginTimestamp": 1298966400000,
        "endTimestamp": 1398966400000,
        "rent": 1300
    },
    {
        "unitName": "A301",
        "beginTimestamp": 1275721200000,
        "endTimestamp": 1298966400000,
        "rent": 1500
    },
    {
        "unitName": "A101",
        "beginTimestamp": 1298966400000,
        "endTimestamp": 1310664000000,
        "rent": 1100
    },
    {
        "unitName": "A301",
        "beginTimestamp": 1357878400000,
        "endTimestamp": 1369878400000,
        "rent": 2000
    }
];
var begin = (new Date("2010")).getTime();//begin time of the gantt chart
var end = (new Date("2015")).getTime();//end time of the gantt chart
var time = end - begin;//the whole duration

//duration time for each rent
var duration = [];
for (var i = 0; i < leaseData.length; i++) {
    var d = leaseData[i].endTimestamp - leaseData[i].beginTimestamp;
    var length = d / time * 1000;
    duration.push(length);
}
//empty time for each unit from 2010
var empty = [];
for (var i = 0; i < leaseData.length; i++) {
    var d = leaseData[i].beginTimestamp - begin;
    var length = d / time * 1000;
    empty.push(length);
}
//highest aggregated rent
var startMonth = (new Date(leaseData[4].beginTimestamp)).getMonth() + 1;
var endMonth = (new Date(leaseData[0].endTimestamp)).getMonth() + 1;
var wholeMonth = "(" + startMonth + "~" + endMonth + ")";
$(document).ready(function() {
    $(".name").each(function(idx) {
        $(this).text(leaseData[idx].unitName);
    });
    $(".duration").each(function(idx) {
        $(this).css("width", duration[idx]);
    });
    $(".space").each(function(idx) {
        $(this).css("width", empty[idx]);
    });
    $("span").eq(3).text("2013" + " " + wholeMonth);
    $("span").eq(3).css("color", "red");
});





