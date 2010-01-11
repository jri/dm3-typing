function dm3_typing() {

    this.init = function() {
        $("#searchmode_select").append($("<option>").text("By Type"))
    }

    this.search_widget = function(searchmode) {
        if (searchmode == "By Type") {
            return create_type_menu("search_type_select")
        }
    }

    this.search = function(searchmode) {
        if (searchmode == "By Type") {
            // 1) perform type search
            var type = ui.menu_item("search_type_select").label
            var result = get_topics_by_type(type)
            // 2) create result topic
            return create_result_topic(type, result, "SearchResult", function(row) {
                return {
                    id:    row.id,
                    type:  row.key,
                    label: row.value
                }
            })
        }
    }
}
