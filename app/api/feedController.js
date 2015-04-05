var http = require("http");
var simplexml = require("xml-simple");
var xml2js = require("xml2js");
var mongojs = require("mongojs");

exports.controller = function() {
    this.name = "feed";

	var databaseUrl = 'localhost:27017/homepage';
	var collections = ['module']
	var db = mongojs.connect(databaseUrl, collections);

	var initlist = [
    			{
    				Url: "http://www.dragonball-multiverse.com/flux.rss.php?lang=fr",
    				Column: 1,
    				Row: 2
    			},
    			{
    				Url: "http://www.mangastream.com/rss",
    				Column: 1,
    				Row: 1
    			},
    			{
    				Url: "http://feeds.feedburner.com/Spi0nCom",
    				Column: 1,
    				Row: 3
    			},
    			{
    				Url: "http://rss.feedsportal.com/c/808/f/413796/index.rss",
    				Column: 2,
    				Row: 1
    			},
    			{
    				Url: "http://www.gamekult.com/feeds/actu.html",
    				Column: 2,
    				Row: 2
    			},
    			{
    				Url: "http://feeds.feedburner.com/Koreus-articles",
    				Column: 3,
    				Row: 1
    			},
    			{
    				Url: "http://lemonde.feedsportal.com/c/205/f/672611/index.rss",
    				Column: 3,
    				Row: 2
    			}
    		]; 

    db.module.remove({});
	for (var mod in initlist) {
		var initModule = initlist[mod];

		db.module.insert({
    		userId: 1, 
    		url: initModule.Url,
    		column: initModule.Column,
    		row: initModule.Row
    	});
	}  	    

    this.addRSSModule = function(req, res) {
//http://localhost:1337/api/feed/addRSSModule?userId=1&url=http%3A%2F%2Fwww.gamespot.com%2Ffeeds%2Fnews%2F&column=2&row=3

    	var userId = parseInt(req.query.userId);
    	var urlRSS = unescape(req.query.url);
    	var column = parseInt(req.query.column);
    	var row = parseInt(req.query.row);

    	db.module.insert({
    		userId: userId, 
    		url: urlRSS,
    		column: column,
    		row: row
    	});

        res.json({isOk: true});
    };

    this.listModule = function(req, res) {

    	var userId = parseInt(req.query.userId);
        console.log(userId);

    	db.module.find({userId: userId}).toArray(function (err, listModule) {
            
            var data = { listModules: undefined, error: undefined};

            if (listModule != null) {
                data.listModule = listModule;    
            }
            else {
                data.error = err;
            }

            res.json(data);     
        });
    };

    this.read = function (req, res) {
		
		var body = "";

		http.get( req.query.url, function (resp) {
			resp.setEncoding("utf8");
			resp.on('data', function (d) {
				body += d;
			});
			resp.addListener('error', function () {
				//console.log("error");
			});
			resp.addListener('end', function () {
				simplexml.parse(body, function (e, parsed) {
					var data = null;

					if (parsed) {					
						var channel = parsed.channel;

						var data = { 
							data: {
								Id: req.query.url,
								MaxItems: 5,
								Line: 1,
								Column: 1,
								Title: channel.title,
								Link: channel.link,
								Description: channel.description,
								Items: null
							}
						 }

						var items = [];

						for (var i = 0; i < 5 && i < channel.item.length; i++) {
							var item = channel.item[i];

							items.push({
							 	Title: item.title,
							 	Link: item.link,
							 	Description: item.description,
							 	Content: item.content
							 });
						}

						data.data.Items = items;
						res.json(data);
					}
					else {

						var parseString = xml2js.parseString;
						parseString(body, function (err, result) {
							if (result) {		
								if (result['rdf:RDF']) {
									result = result['rdf:RDF'];
									result.channel = result.channel[0];
								}
				
								var channel = result.channel;
								var data = { 
									data: {
										Id: req.query.url,
										MaxItems: 5,
										Line: 1,
										Column: 1,
										Title: channel.title,
										Link: channel.link,
										Description: channel.description,
										Items: null
									}
								 }

								var items = [];

								var xmlItems = channel.item;
								if (channel.item == undefined) {
									xmlItems = result.item;
								}

								for (var i = 0; i < 5 && i < xmlItems.length; i++) {
									var item = xmlItems[i];
									
									items.push({
									 	Title: item.title,
									 	Link: item.link,
									 	Description: item.description,
									 	Content: item["content:encoded"]
									 });
								}

								data.data.Items = items;
								res.json(data);
							}
							else {
								res.json({message: "error"});
							}
						});
					}
				});
			});
		});

		
    };

    this._iamprivate = function() {
        // this is a private function
    };
};
