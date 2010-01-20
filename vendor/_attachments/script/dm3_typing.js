function dm3_typing() {

    doctype_implementation("vendor/dm3-typing/script/topictype_document.js")

    // IMPORTANT: if you make changes on the Topic Type declaration, you
    // must change deepamehta3.js accordingly (method "type_template").
    add_topic_type("Topic Type", {
        fields: [
            {id: "type-id", model: {type: "text"}, view: {editor: "single line", label: "Type ID"}, content: ""}
        ],
        view: {},
        implementation: "TopictypeDocument"
    })



    /**************************************************************************************************/
    /**************************************** Overriding Hooks ****************************************/
    /**************************************************************************************************/



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
