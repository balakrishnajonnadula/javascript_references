$.ajax({
    url: "data/grid.json",
    dataType: "JSON",
    success: function (data) {

        for (var i = 0; i < data.length; i++) {
            var grid = new Grid();
            grid.render($(".users-list"));
            grid.setData(data[i]);
        }
    },
    error: function () {

    }

})