var http = require("http");
var https = require("https");
var simplexml = require("xml-simple");
var xml2js = require("xml2js");

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

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
    				Url: "https://readms.net/rss",
    				Column: 1,
    				Row: 1
    			},
    			{
    				Url: "https://www.theverge.com/rss/index.xml",
    				Column: 1,
    				Row: 3
    			},
    			{
    				Url: "http://www.jeuxvideo.com/rss/rss.xml",
    				Column: 2,
    				Row: 1
    			},
    			{
    				Url: "https://www.gamekult.com/feed.xml",
    				Column: 2,
    				Row: 2
    			},
                {
                    Url: "https://www.gamespot.com/feeds/news/",
                    Column: 2,
                    Row: 3
                },
    			{
    				Url: "http://feeds.feedburner.com/Koreus-articles",
    				Column: 3,
    				Row: 1
    			},
    			{
    				Url: "https://www.lemonde.fr/rss/une.xml",
    				Column: 3,
    				Row: 2
    			},
                {
                    Url: "http://rss.cnn.com/rss/edition_world.rss",
                    Column: 3,
                    Row: 3
                }
    		]};

        res.json(data);
    };

    this.read = function (req, res) {
		
		var body = "";
        
        var protocol = http;
        
        if (req.query.url.startsWith("https")) {
            protocol = https;
        }

		protocol.get( req.query.url, function (resp) {
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
						var channel = parsed.channel || parsed;
                        
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
                        var chItems = channel.item || channel.entry;

						for (var i = 0; i < 5 && i < chItems.length; i++) {
							var item = chItems[i];

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
				
								var channel = result.channel || result;
                                
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
	
									var xmlItems = channel.item || result.item || channel.entry || result.entry;
	
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
