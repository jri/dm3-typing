function dm3_typing() {



    /**************************************************************************************************/
    /**************************************** Overriding Hooks ****************************************/
    /**************************************************************************************************/



    /********** Provide "By Type" search mode **********/

    this.init = function() {
        $("#searchmode_select").append($("<option>").text("By Type"))
    }

    this.search_widget = function(searchmode) {
        if (searchmode == "By Type") {
            return create_type_menu("search-type-menu").dom
        }
    }

    this.search = function(searchmode) {
        if (searchmode == "By Type") {
            // 1) perform type search
            var type = ui.menu_item("search-type-menu").label
            var result = get_topics_by_type(type)
            // 2) create result topic
            return create_result_topic(type, result, "SearchResult")
        }
    }

    /**********  Working together with the DM3 Type Editor plugin **********/

    /**
     * Once a "Topic Type" topic is updated we must rebuild our type menu.
     */
    this.post_update = function(doc) {
        if (doc.type == "Topic" && doc.topic_type == "Topic Type") {
            update_type_menu()
        }
    }

    this.post_delete = function(doc) {
        if (doc.type == "Topic" && doc.topic_type == "Topic Type") {
            update_type_menu()
        }
    }



    /************************************************************************************************/
    /**************************************** Custom Methods ****************************************/
    /************************************************************************************************/



    function update_type_menu() {
        // Rebuilding the type menu is only required if the "By Type" searchmode is active.
        if (ui.menu_item("searchmode_select").label == "By Type") {
            rebuild_type_menu("search-type-menu")
        }
    }
}
