const navDropdown = document.getElementById("nav-dropdown-menu");
const showDropdown = document.getElementById("dropdownShow");

// Nav Sidebar
const sidebarToggle = document.querySelector(".sidebar-toggle");
const body = document.querySelector("body");

sidebarToggle.addEventListener('click', () => body.classList.toggle('sidebar-collapse'));

// Search Button
const searchBtn = document.querySelector("#search-btn");
const formShow = document.querySelector(".app-search");
const closeSearch = document.querySelector("#close-search");

searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    formShow.classList.remove('hide')
});
closeSearch.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(123)
    formShow.classList.add('hide');
});


// Morris charts
$("#linechart").sparkline([3, 4, 7, 5, 4, 6, 8, 7, 4, 3, 5, 7, 10], {
    type: "line",
    width: "200",
    height: "38",
    lineColor: "#28D094",
    fillColor: "#ffffff",
    lineWidth: 5,
    minSpotColor: "#28D094",
    maxSpotColor: "#28D094",
});

$("#linechart2").sparkline([7, 5, 6, 8, 9, 7, 5, 3, 1, 2, 4, 6, 8], {
    type: "line",
    width: "200",
    height: "38",
    lineColor: "#FF4961",
    fillColor: "#ffffff",
    lineWidth: 5,
    minSpotColor: "#FF4961",
    maxSpotColor: "#FF4961",
});

//e CHART
if ($("#e_chart_1").length > 0) {
    var eChart_1 = echarts.init(document.getElementById("e_chart_1"));
    function detectionData(str) {
        var color = "#666EE8";
        if (str >= 30 && str <= 60) {
            color = "#666EE8";
        } else if (str > 60) {
            color = "#666EE8";
        }
        return color;
    }
    var option4 = {
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
            {
                name: "traffic",
                type: "gauge",
                splitNumber: 5,
                axisLine: {
                    lineStyle: {
                        color: [
                            [0.31, "#f4f4f4"],
                            [1, "#f4f4f4"],
                        ],
                        width: 5,
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    distance: -80,
                    textStyle: {
                        color: "#878787",
                    },
                },
                splitLine: {
                    show: false,
                },
                itemStyle: {
                    normal: {
                        color: "#666EE8",
                    },
                },
                detail: {
                    formatter: "{value}%",
                    offsetCenter: [0, "60%"],
                    textStyle: {
                        fontSize: 12,
                        color: "#878787",
                    },
                },
                title: {
                    offsetCenter: [0, "100%"],
                },
                data: [
                    {
                        name: "",
                        value: 31,
                    },
                ],
            },
        ],
    };
    var app = [];
    app.timeTicket = setInterval(function () {
        var value = (Math.random() * 100).toFixed(2) - 0;
        option4.series[0].data[0].value = value;
        option4.series[0].axisLine.lineStyle.color[0][0] = value / 100;
        option4.series[0].axisLine.lineStyle.color[0][1] = detectionData(value);
        eChart_1.setOption(option4, true);
    }, 500);

    eChart_1.setOption(option4);
    eChart_1.resize();
}

// map
$("#India").vectorMap({
    map: "in_merc",
    backgroundColor: "transparent",
    regionStyle: {
        initial: {
            fill: "#1e88e5",
        },
    },
});

// AREA CHART
if ($("#morris_extra_line_chart").length > 0)
    Morris.Line({
        element: "morris_extra_line_chart",
        data: [
            {
                period: "2010",
                direct: 50,
                referrals: 80,
                search: 90,
                social: 20,
            },
            {
                period: "2011",
                direct: 130,
                referrals: 100,
                search: 190,
                social: 80,
            },
            {
                period: "2012",
                direct: 80,
                referrals: 60,
                search: 90,
                social: 70,
            },
            {
                period: "2013",
                direct: 70,
                referrals: 200,
                search: 60,
                social: 140,
            },
            {
                period: "2014",
                direct: 180,
                referrals: 150,
                search: 80,
                social: 140,
            },
            {
                period: "2015",
                direct: 105,
                referrals: 100,
                search: 110,
                social: 80,
            },
            {
                period: "2016",
                direct: 250,
                referrals: 150,
                search: 80,
                social: 200,
            },
        ],
        xkey: "period",
        ykeys: ["direct", "referrals", "search", "social"],
        labels: ["Direct", "Referrals", "Search", "Social"],
        pointSize: 2,
        fillOpacity: 0,
        lineWidth: 2,
        pointStrokeColors: ["#666EE8", "#1E9FF2", "#FF4961", "#FF9149"],
        behaveLikeLine: true,
        grid: false,
        hideHover: "auto",
        lineColors: ["#666EE8", "#1E9FF2", "#FF4961", "#FF9149"],
        resize: true,
        gridTextColor: "#878787",
        gridTextFamily: "Open Sans",
    });

// AngleBtn
const btnSlide = document.querySelector(".box-btn-slide");
const chartResponsive = document.querySelector(".chart-responsive");

btnSlide.addEventListener("click", () => {
    event.preventDefault();
    btnSlide.classList.toggle("rotate-180");

    if (btnSlide.classList.contains("rotate-180")) {
        chartResponsive.style.display = "none";
    } else {
        chartResponsive.style.display = "block";
    }
});

// AngleBtn2
const btnSlide2 = document.querySelector(".box2-btn-slide");
const toDO = document.querySelector(".to-dolist");

btnSlide2.addEventListener("click", () => {
    event.preventDefault();
    btnSlide2.classList.toggle("rotate-180");

    if (btnSlide2.classList.contains("rotate-180")) {
        toDO.style.display = "none";
    } else {
        toDO.style.display = "block";
    }
});

// AngleBtn3
const btnSlide3 = document.querySelector(".box3-btn-slide");
const managerBox = document.querySelector(".manager-box");

btnSlide3.addEventListener("click", () => {
    event.preventDefault();
    btnSlide3.classList.toggle("rotate-180");

    if (btnSlide3.classList.contains("rotate-180")) {
        managerBox.style.display = "none";
    } else {
        managerBox.style.display = "block";
    }
});

// AngleBtn4
const btnSlide4 = document.querySelector(".box4-btn-slide");
const traffic = document.querySelector(".box-traffic");

btnSlide4.addEventListener("click", () => {
    event.preventDefault();
    btnSlide4.classList.toggle("rotate-180");

    if (btnSlide4.classList.contains("rotate-180")) {
        traffic.style.display = "none";
    } else {
        traffic.style.display = "block";
    }
});

// fullscreen1
const fullscreen1 = document.querySelector(".box-btn-fullscreen");
const box1 = document.querySelector(".widget1");

fullscreen1.addEventListener("click", () => {
    box1.classList.toggle("box-fullscreen");
});

// fullscreen2
const fullscreen2 = document.querySelector(".box2-btn-fullscreen");
const box2 = document.querySelector(".widget2");

fullscreen2.addEventListener("click", () => {
    box2.classList.toggle("box-fullscreen");
});

// fullscreen3
const fullscreen3 = document.querySelector(".box3-btn-fullscreen");
const box3 = document.querySelector(".widget3");

fullscreen3.addEventListener("click", () => {
    box3.classList.toggle("box-fullscreen");
});

// fullscreen4
const fullscreen4 = document.querySelector(".box4-btn-fullscreen");
const box4 = document.querySelector(".widget4");

fullscreen4.addEventListener("click", () => {
    box4.classList.toggle("box-fullscreen");
});

// todo list
let todoList = document.querySelector("ul.todo-list");

let checkboxes = todoList.querySelectorAll('input[type="checkbox"]');

// Attach a change event listener to each checkbox
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            this.parentNode.classList.add("done");
        } else {
            this.parentNode.classList.remove("done");
        }
    });
});

// Setting Button
const sidebarBtn = document.querySelector('.sidebar-btn');
const sidebarMenu = document.querySelector('.sidebar-menu');

sidebarBtn.addEventListener('click', () => sidebarMenu.classList.toggle('control-sidebar-open'));


// Todo list sorting
$(function () {
    $("#sortable").sortable();
});

// Get all the x icons with class "fa-xmark"
const xIcons = document.querySelectorAll('.box-btn-close');

// Attach click event listener to each x icon
xIcons.forEach(xIcon => {
  xIcon.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(123)
    // Find the closest ancestor element with class "col-12 col-lg-3"
    const parent = xIcon.closest('.graph');
    if (parent) {
      // Add the "hide" class to the parent element
      parent.classList.add('hide');
    }
  });
});