exports.controller = function() {
    this.name = "default";

    this.get = function(req, res) {
        res.json( { projectName: "Homepage" } );
    };

    this._iamprivate = function() {
        // this is a private function
    };
};
