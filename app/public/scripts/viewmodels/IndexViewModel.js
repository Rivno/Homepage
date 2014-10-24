if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:device-width!important;}"));
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}

var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i) || false;
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i) || false;
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) || false;
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i) || false;
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || false;
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function doAjax(url) {
    $.ajax({ url: "/api/feed/read", data: { url: url } })
        .done(function (data) {
            alert("done");
        })
}

function moduleItem() {
    var self = this;

    self.title = ko.observable();
    self.link = ko.observable();
    self.description = ko.observable();
    self.content = ko.observable();
    self.expand = ko.observable(false);

    self.init = function (object) {
        self.title(object.Title);
        self.link(object.Link);
        self.description(object.Description);
        self.content(object.Content);
    }

    self.click = function () {
        window.open(self.link());
    }

    self.expandItem = function () {
        self.expand(!self.expand());
    }

    return self;
}

function module() {
    var self = this;

    self.id = ko.observable();
    self.type = ko.observable();
    self.title = ko.observable("Chargement...");
    self.items = ko.observableArray([]);
    self.column = ko.observable();
    self.row = ko.observable();
    self.line = ko.observable();
    self.maxItems = ko.observable();

    self.init = function (object) {
        self.id(object.Url);
        self.column(object.Column);
        self.row(object.Row);

        updateFeed();
    }

    var updateFeed = function () {
        $.ajax({ url: "/api/feed/read", data: { url: self.id } })
            .done(function (data) {
                self.title(data.data.Title);
                self.items.removeAll();
                for (var item in data.data.Items) {
                    var m = new moduleItem();
                    m.init(data.data.Items[item]);
                    self.items.push(m);
                }
                setTimeout(function () {
                    updateFeed();
                }, 1000 * 60 * 15);
            });
    }

    return self;
}

function column() {
    var self = this;

    self.index = ko.observable();
    self.items = ko.observableArray([]);

    self.init = function (object) {
        self.index(object.Index);
        self.items(object.Items);
    }

    return self;
}

function portalViewModel() {
    var self = this;

    self.modules = ko.observableArray([]);
    self.columns = ko.observableArray([]);
    self.criterion = ko.observable();

    self.searchEngine = ko.observable("bing");

    self.keypressSearch = function (data, event) {
        if (event.keyCode == 13) {
            self.search();
        }

        return true;
    }

    self.search = function () {
        var criterion = escape(self.criterion());
        if (self.searchEngine() === "bing") {
            window.open("http://www.bing.com/search?q=" + criterion);
        }
        if (self.searchEngine() === "google") {
            window.open("http://www.google.com/search?q=" + criterion);
        }
        if (self.searchEngine() === "facebook") {
            window.open("https://www.facebook.com/search/results.php?q=" + criterion);
        }
        if (self.searchEngine() === "twitter") {
            window.open("https://twitter.com/search?q=" + criterion);
        }
    }

    self.isInitializing = ko.observable(false);
    ko.computed(function () {
        if (self.isInitializing() === false) {
            var max = 0;
            var group = {};
            var arr = self.modules();
            for (var i = arr.length; --i >= 0;) {
                var value = arr[i].column();
                if (group[value] == undefined) {
                    group[value] = ko.observableArray([]);
                }
                group[value].push(arr[i]);
            }

            self.columns.removeAll();
            for (var col in group) {
                group[col].sort(function (left, right) {
                    var lrow = left.row();
                    var rrow = right.row();
                    return lrow === rrow ? 0 : (lrow < rrow ? -1 : 1)
                });
                self.columns.push(group[col]);
            }
        }
    });

    self.init = function (object) {
        self.isInitializing(true);

        for (var item in object.ListModule) {
            var mod = new module();
            mod.init(object.ListModule[item]);
            self.modules.push(mod);
        }

        self.isInitializing(false);
    }


    self.isMobile = function () {
        return isMobile.any();
    }

    var isMouseDown = false;
    var lastTarget = null;
    var curTarget = null;
    self.dragObject = ko.observable(null);
    var oldRow = null;
    var oldColumn = null;

    var mouseOffset = null;
    var lMouseState = false;
    var dragHelper = null;
    var tempDiv = null;
    var rootParent = null;
    var rootSibling = null;

    var mouseCoords = function (ev) {
        if (ev.pageX || ev.pageY) {
            return { x: ev.pageX, y: ev.pageY };
        }
        return {
            x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y: ev.clientY + document.body.scrollTop - document.body.clientTop
        };
    }

    self.masterMouseUp = function (object, ev) {
        if (isMouseDown) {
            self.modules.push(self.dragObject());
            curTarget = null;
            self.dragObject(null);
            isMouseDown = false;
        }
    }

    self.mouseDown = function (object, ev) {
        if (isMobile.any() === false) {
            isMouseDown = true;
            self.dragObject(object);
            self.modules.remove(self.dragObject());
        }
    }

    self.mouseUpEndColumn = function (object, ev, col) {
        if (isMouseDown) {

            var oldColumn = self.dragObject().column();
            var oldRow = self.dragObject().row();

            var listOldModule = ko.utils.arrayFilter(self.modules(), function (mod) {
                return mod.column() == oldColumn && mod.row() >= oldRow;
            });

            ko.utils.arrayForEach(listOldModule, function (mod) {
                mod.row(mod.row() - 1);
            });

            self.dragObject().row(object.length + 1);
            self.dragObject().column(col() + 1);
            self.modules.push(self.dragObject());

            curTarget = null;
            self.dragObject(null);
            isMouseDown = false;
        }
    }

    self.mouseUp = function (object, ev) {
        if (isMouseDown) {
            curTarget = object;
            var column = curTarget.column();
            var row = curTarget.row();

            var oldColumn = self.dragObject().column();
            var oldRow = self.dragObject().row();

            var listOldModule = ko.utils.arrayFilter(self.modules(), function (mod) {
                return mod.column() == oldColumn && mod.row() >= oldRow;
            });

            ko.utils.arrayForEach(listOldModule, function (mod) {
                mod.row(mod.row() - 1);
            });

            var listModule = ko.utils.arrayFilter(self.modules(), function (mod) {
                return mod.column() == column && mod.row() >= row;
            });

            ko.utils.arrayForEach(listModule, function (mod) {
                mod.row(mod.row() + 1);
            });

            self.dragObject().row(row);
            self.dragObject().column(column);
            self.modules.push(self.dragObject());

            curTarget = null;
            self.dragObject(null);
            isMouseDown = false;
        }
    }

    self.mouseMove = function (object, ev) {
        
        ev = ev || window.event;
        /*
        We are setting target to whatever item the mouse is currently on
        Firefox uses event.target here, MSIE uses event.srcElement
        */
        var target = ev.target || ev.srcElement;
        var mousePos = mouseCoords(ev);
        // mouseOut event - fires if the item the mouse is on has changed 
        if (lastTarget && (target !== lastTarget)) {
            // reset the classname for the target element 
            var origClass = lastTarget.getAttribute('origClass');
            if (origClass) lastTarget.className = origClass;
        }
        /*
        dragObj is the grouping our item is in (set from the createDragContainer function).
        if the item is not in a grouping we ignore it since it can't be dragged with this
        script.
        */
        var dragObj = target.getAttribute('DragObj');
        // if the mouse was moved over an element that is draggable 
        if (dragObj != null) {
            // mouseOver event - Change the item's class if necessary 
            if (target != lastTarget) {
                var oClass = target.getAttribute('overClass');
                if (oClass) {
                    target.setAttribute('origClass', target.className);
                    target.className = oClass;
                }
            }
            // if the user is just starting to drag the element 
            if (isMouseDown && !lMouseState) {
                // mouseDown target 
                curTarget = target;
                // Record the mouse x and y offset for the element 
                rootParent = curTarget.parentNode;
                rootSibling = curTarget.nextSibling;
                mouseOffset = getMouseOffset(target, ev);
                // We remove anything that is in our dragHelper DIV so we can put a new item in it. 
                for (var i = 0; i < dragHelper.childNodes.length; i++) {
                    dragHelper.removeChild(dragHelper.childNodes[i]);
                }
                // Make a copy of the current item and put it in our drag helper. 
                dragHelper.appendChild(curTarget.cloneNode(true));
                dragHelper.style.display = 'block';
                // set the class on our helper DIV if necessary 
                var dragClass = curTarget.getAttribute('dragClass');
                if (dragClass) {
                    dragHelper.firstChild.className = dragClass;
                }
                // disable dragging from our helper DIV (it's already being dragged) 
                dragHelper.firstChild.removeAttribute('DragObj');
                /*
                Record the current position of all drag/drop targets related
                to the element.  We do this here so that we do not have to do
                it on the general mouse move event which fires when the mouse
                moves even 1 pixel.  If we don't do this here the script
                would run much slower.
                */
                var dragConts = DragDrops[dragObj];
                /*
                first record the width/height of our drag item.  Then hide it since
                it is going to (potentially) be moved out of its parent.
                */
                curTarget.setAttribute('startWidth', parseInt(curTarget.offsetWidth));
                curTarget.setAttribute('startHeight', parseInt(curTarget.offsetHeight));
                curTarget.style.display = 'none';
                // loop through each possible drop container 
                for (var i = 0; i < dragConts.length; i++) {
                    with (dragConts[i]) {
                        var pos = getPosition(dragConts[i]);
                        /*
                        save the width, height and position of each container.
                        Even though we are saving the width and height of each
                        container back to the container this is much faster because
                        we are saving the number and do not have to run through
                        any calculations again.  Also, offsetHeight and offsetWidth
                        are both fairly slow.  You would never normally notice any
                        performance hit from these two functions but our code is
                        going to be running hundreds of times each second so every
                        little bit helps!
                        Note that the biggest performance gain here, by far, comes
                        from not having to run through the getPosition function
                        hundreds of times.
                        */
                        setAttribute('startWidth', parseInt(offsetWidth));
                        setAttribute('startHeight', parseInt(offsetHeight));
                        setAttribute('startLeft', pos.x);
                        setAttribute('startTop', pos.y);
                    }
                    // loop through each child element of each container 
                    for (var j = 0; j < dragConts[i].childNodes.length; j++) {
                        with (dragConts[i].childNodes[j]) {
                            if ((nodeName == '#text') || (dragConts[i].childNodes[j] == curTarget)) continue;
                            var pos = getPosition(dragConts[i].childNodes[j]);
                            // save the width, height and position of each element 
                            setAttribute('startWidth', parseInt(offsetWidth));
                            setAttribute('startHeight', parseInt(offsetHeight));
                            setAttribute('startLeft', pos.x);
                            setAttribute('startTop', pos.y);
                        }
                    }
                }
            }
        }
        // If we get in here we are dragging something 
        if (curTarget) {
            // move our helper div to wherever the mouse is (adjusted by mouseOffset) 
            dragHelper.style.top = mousePos.y - mouseOffset.y;
            dragHelper.style.left = mousePos.x - mouseOffset.x;
            var dragConts = DragDrops[curTarget.getAttribute('DragObj')];
            var activeCont = null;
            var xPos = mousePos.x - mouseOffset.x + (parseInt(curTarget.getAttribute('startWidth')) / 2);
            var yPos = mousePos.y - mouseOffset.y + (parseInt(curTarget.getAttribute('startHeight')) / 2);
            // check each drop container to see if our target object is "inside" the container 
            for (var i = 0; i < dragConts.length; i++) {
                with (dragConts[i]) {
                    if (((getAttribute('startLeft')) < xPos) &&
                        ((getAttribute('startTop')) < yPos) &&
                        ((getAttribute('startLeft') + getAttribute('startWidth')) > xPos) &&
                        ((getAttribute('startTop') + getAttribute('startHeight')) > yPos)) {
                        /*
                        our target is inside of our container so save the container into
                        the activeCont variable and then exit the loop since we no longer
                        need to check the rest of the containers
                        */
                        activeCont = dragConts[i];
                        // exit the for loop 
                        break;
                    }
                }
            }
            // Our target object is in one of our containers.  Check to see where our div belongs 
            if (activeCont) {
                // beforeNode will hold the first node AFTER where our div belongs 
                var beforeNode = null;
                // loop through each child node (skipping text nodes). 
                for (var i = activeCont.childNodes.length - 1; i >= 0; i--) {
                    with (activeCont.childNodes[i]) {
                        if (nodeName == '#text') continue;
                        // if the current item is "After" the item being dragged 
                        if (
                            curTarget != activeCont.childNodes[i] &&
                            ((getAttribute('startLeft') + getAttribute('startWidth')) > xPos) &&
                            ((getAttribute('startTop') + getAttribute('startHeight')) > yPos)) {
                            beforeNode = activeCont.childNodes[i];
                        }
                    }
                }
                // the item being dragged belongs before another item 
                if (beforeNode) {
                    if (beforeNode != curTarget.nextSibling) {
                        activeCont.insertBefore(curTarget, beforeNode);
                    }
                    // the item being dragged belongs at the end of the current container 
                }
                else {
                    if ((curTarget.nextSibling) || (curTarget.parentNode != activeCont)) {
                        activeCont.appendChild(curTarget);
                    }
                }
                // make our drag item visible 
                if (curTarget.style.display != '') {
                    curTarget.style.display = '';
                }
            }
            else {
                // our drag item is not in a container, so hide it. 
                if (curTarget.style.display != 'none') {
                    curTarget.style.display = 'none';
                }
            }
        }
        lMouseState = isMouseDown;
        // mouseMove target 
        lastTarget = target;
        // track the current mouse state so we can compare against it next time 
        lMouseState = isMouseDown;
        // this helps prevent items on the page from being highlighted while dragging 
        return false;
    }

    return self;
}