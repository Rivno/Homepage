exports.controller = function() {
    this.name = "home";

    this.index = function(req, res) {
        res.render('home/index', { title: "Homepage" } );
    };

    this._iamprivate = function() {
        // this is a private function
    };
};
