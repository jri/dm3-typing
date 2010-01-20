function TopictypeDocument() {



    /**************************************************************************************************/
    /**************************************** Overriding Hooks ****************************************/
    /**************************************************************************************************/



    this.pre_create = function(doc) {
        // alert("Document hook pre_create of TopictypeDocument triggered. doc=" + JSON.stringify(doc))
        doc.instance_template = {fields: [], view: {}, implementation: "PlainDocument"}
        // alert("Extended doc=" + JSON.stringify(doc))
    }
}

TopictypeDocument.prototype = {
    __proto__: PlainDocument.prototype
}
