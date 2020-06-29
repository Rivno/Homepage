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

var moduleList = [
        {
            Url: "http://feeds.feedburner.com/jster",
            request: {
                protocol: 'http',
                host: 'feeds.feedburner.com',
                path: '/jster',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 1,
            Row: 2
        },
        {
            Url: "https://mangadex.org/rss/follows/2YUk6ENMzvxsTu8HPBRXe4QZbStym9K3",
            request: {
                protocol: 'https',
                host: 'mangadex.org',
                path: '/rss/follows/2YUk6ENMzvxsTu8HPBRXe4QZbStym9K3',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 1,
            Row: 1
        },
        {
            Url: "http://www.horriblesubs.info/rss.php?res=1080",
            request: {
                protocol: 'http',
                host: 'www.horriblesubs.info',
                path: '/rss.php?res=1080',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 1,
            Row: 3
        },
        {
            Url: "http://www.jeuxvideo.com/rss/rss.xml",
            request: {
                protocol: 'http',
                host: 'www.jeuxvideo.com',
                path: '/rss/rss.xml',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 2,
            Row: 1
        },
        {
            Url: "https://www.gamekult.com/feed.xml",
            request: {
                protocol: 'https',
                host: 'www.gamekult.com',
                path: '/feed.xml',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 2,
            Row: 2
        },
        {
            Url: "https://www.gamespot.com/feeds/news/",
            request: {
                protocol: 'https',
                host: 'www.gamespot.com',
                path: '/feeds/news/',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 2,
            Row: 3
        },
        {
            Url: "https://www.theverge.com/rss/index.xml",
            request: {
                protocol: 'https',
                host: 'www.theverge.com',
                path: '/rss/index.xml',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 3,
            Row: 1
        },
        {
            Url: "https://www.lemonde.fr/rss/une.xml",
            request: {
                protocol: 'https',
                host: 'www.lemonde.fr',
                path: '/rss/une.xml',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 3,
            Row: 2
        },
        {
            Url: "http://rss.cnn.com/rss/edition_world.rss",
            request: {
                protocol: 'http',
                host: 'rss.cnn.com',
                path: '/rss/edition_world.rss',
                headers: {
                    'Content-Type': 'application/xml',
                },
            },
            Column: 3,
            Row: 3
        }
    ];

exports.controller = function() {
    this.name = "feed";
    
    this.listModule = function(req, res) {
        res.json({ ListModule: moduleList });
    };

    this.read = function (req, res) {
		
		var body = "";
        let currentModule;
        for (mod of moduleList) {
            if (mod.Url === req.query.url) {
                currentModule = mod;
                break;
            }
        }
        
        var protocol = http;
        
        //if (req.query.url.startsWith("https")) {
        if (currentModule.request.protocol = 'https') {
            protocol = https;
        }

		protocol.get( currentModule.request, function (resp) {
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
	
									var xmlItems = channel.item || result.item || channel.entry || result.entry || [];
	                                console.log('result =>');
                                    console.log(result);
	                                console.log('channel =>');
	                                console.log(channel);
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
		}).on('error', (e) => {
          console.error("Got error:", e.message);
        });

		
    };

    this._iamprivate = function() {
        // this is a private function
    };
};
