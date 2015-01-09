var http = require("http");
var simplexml = require("xml-simple");
var xml2js = require("xml2js");

exports.controller = function() {
    this.name = "feed";

    this.listModule = function(req, res) {

    	var data = {
    		ListModule: [
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
    		]};

        res.json(data);
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
								if (channel) {
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
