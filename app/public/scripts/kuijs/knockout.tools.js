function range(start, count) {
    if (arguments.length == 1) {
        count = start;
        start = 0;
    }

    var foo = [];
    for (var i = 0; i < count; i++) {
        foo.push(start + i);
    }

    return foo;
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) {
        return obj;
    }

    var copy = obj.constructor();

    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }

    return copy;
}

ko.bindingHandlers.hoverToggleCss = {
    update: function (element, valueAccessor) {
        var css = valueAccessor();

        ko.utils.registerEventHandler(element, "mouseover", function () {
            ko.utils.toggleDomNodeCssClass(element, ko.utils.unwrapObservable(css), true);
        });

        ko.utils.registerEventHandler(element, "mouseout", function () {
            ko.utils.toggleDomNodeCssClass(element, ko.utils.unwrapObservable(css), false);
        });
    }
};

ko.bindingHandlers.datePicker = {
    init: function (element, valueAccessor) {
        //$(element).val(valueAccessor());
        $(element).datepicker({ showOn: 'both', buttonImage: datePickerUri, buttonImageOnly: true }, $.datepicker.regional["fr"]);

        //handle the field changing
        ko.utils.registerEventHandler(element, "change", function () {
            var observable = valueAccessor();
            observable($(element).datepicker("getDate"));
        });

        //handle disposal (if KO removes by the template binding)
        ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
            $(element).datepicker("destroy");
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());

        //handle date data coming via json from Microsoft
        if (String(value).indexOf('/Date(') == 0) {
            value = new Date(parseInt(value.replace(/\/Date\((.*?)\)\//gi, "$1")));
        }
        else if (value != null) {
            value = new Date(value);
        }

        current = $(element).datepicker("getDate");

        if (value - current !== 0) {
            $(element).datepicker("setDate", value);
        }
    }
};

ko.bindingHandlers.chosen = {
    init: ko.bindingHandlers.options.init,
    update: function (element, valueAccessor, allBindingsAccessor) {
        ko.bindingHandlers.options.update(element, valueAccessor, allBindingsAccessor);

        $(element).chosen({
            placeholder_text_single: "Choisir...",
            no_results_text: "Oops, aucun résultat pour : ",
            allow_single_deselect: true
        });

        valueAccessor().subscribe(function (new_value) {
            $(element).trigger('chosen:updated');
        });

        $(element).val(allBindingsAccessor()['value']()).trigger("chosen:updated");

        allBindingsAccessor()['value'].subscribe(function (new_value) {
            $(element).trigger('chosen:updated');
        });
    }
};

ko.bindingHandlers.moneyLabel = {
    init: function (element, valueAccessor) { },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());

        var text = "";
        if (value != null) {
            text = value.toFixed(2) + " €";
        }

        $(element).text(text);
    }
};

ko.bindingHandlers.dateLabel = {
    init: function (element, valueAccessor) { },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());

        //handle date data coming via json from Microsoft
        if (String(value).indexOf('/Date(') == 0) {
            value = Date.fromISO(parseInt(value.replace(/\/Date\((.*?)\)\//gi, "$1")));
        }
        else if (value != null) {
            value = Date.fromISO(value);
        }

        var text = "";
        if (value != null) {
            text = $.datepicker.formatDate("dd/mm/yy", value);
        }

        $(element).text(text);
    }
};

(function () {
    var D = new Date('2011-06-02T09:34:29+02:00');
    if (!D || +D !== 1307000069000) {
        Date.fromISO = function (s) {
            var day, tz,
            rx = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
            p = rx.exec(s) || [];
            if (p[1]) {
                day = p[1].split(/\D/);
                for (var i = 0, L = day.length; i < L; i++) {
                    day[i] = parseInt(day[i], 10) || 0;
                };
                day[1] -= 1;
                day = new Date(Date.UTC.apply(Date, day));
                if (!day.getDate()) return NaN;
                if (p[5]) {
                    tz = (parseInt(p[5], 10) * 60);
                    if (p[6]) tz += parseInt(p[6], 10);
                    if (p[4] == '+') tz *= -1;
                    if (tz) day.setUTCMinutes(day.getUTCMinutes() + tz);
                }
                return day;
            }
            return NaN;
        }
    }
    else {
        Date.fromISO = function (s) {
            return new Date(s);
        }
    }
})()

/* Knockout Pager */
function knockoutCachePage(index, data) {
    var self = this;

    self.Index = index;
    self.DataSource = data;

    return self;
}

function knockoutPager(url, fnGetData, fnGetOptionalData, itemPerPage, itemPerPageFixe, sortColumn) {
    var self = this;

    self.NavigationUrl = url;

    self.DataSource = ko.observableArray();
    self.ReloadData = true;

    self.CurrentPage = ko.observable(1);
    self.PreviousPage = ko.observable();
    self.CurrentPage.subscribe(function (value) {
        self.Navigate();
    });

    if (itemPerPage === undefined) {
        itemPerPage = 20;
    }

    self.ItemPerPage = ko.observable(itemPerPage);
    self.ItemPerPage.subscribe(function (value) {
        self.ReloadData = true;
        self.DataSource.removeAll();

        if (self.CurrentPage() != 1) {
            self.CurrentPage(1);
        }
        else {
            self.Navigate();
        }
    });

    self.ItemPerPageList = ko.observableArray([5, 10, 20, 50, 100]);

    if (itemPerPageFixe === undefined) {
        itemPerPageFixe = false;
    }

    self.ItemPerPageFixe = itemPerPageFixe;

    self.TotalItem = ko.observable(0);

    self.SortOrder = "asc";

    self.SortColumn = sortColumn;

    self.Sort = function (sortColumn) {
        if (self.SortColumn != sortColumn) {
            self.SortColumn = sortColumn;
            self.SortOrder = "asc";
        }
        else {
            self.SortOrder = self.SortOrder == "asc" ? "desc" : "asc";
        }

        self.ReloadData = true;
        self.DataSource.removeAll();
        self.Navigate();
    }

    self.TotalPage = ko.computed(function () {
        return Math.ceil(self.TotalItem() / self.ItemPerPage());
    });

    self.PageList = ko.computed(function () {
        var tp = self.TotalPage();
        return range(1, tp > 0 ? tp : 1);
    });

    self.PagingRange = 5;

    self.PageListCurrentRange = ko.computed(function () {
        var range = self.PagingRange;
        var least = (self.CurrentPage() - 1) - Math.floor(range / 2);
        least = (least < 0) ? 0 : least;

        var add = (least + range) <= (self.TotalPage()) ? least + range : self.TotalPage();

        if ((add - least) < range) {
            least -= range - (add - least);
            least = (least < 0) ? 0 : least;
        }

        return self.PageList().slice(least, add);
    });

    self.PageListCurrentRangeMin = ko.computed(function () {
        return self.PageListCurrentRange()[0];
    });

    self.PageListCurrentRangeMax = ko.computed(function () {
        return self.PageListCurrentRange()[self.PageListCurrentRange().length - 1];
    });

    self.NavigateTo = function (data, event) {
        self.PreviousPage(self.CurrentPage());
        self.CurrentPage(data);
    }

    self.Previous = function (data, event) {
        self.NavigateTo(self.CurrentPage() - 1);
    }

    self.Start = function (data, event) {
        self.NavigateTo(1);
    }

    self.End = function (data, event) {
        self.NavigateTo(self.TotalPage());
    }

    self.Next = function (data, event) {
        self.NavigateTo(self.CurrentPage() + 1);
    }

    self.LastData = null;

    var getCriterion = function (data) {
        var optionalData = {};

        if (typeof fnGetOptionalData == 'function') {
            optionalData = fnGetOptionalData();
        }

        if (typeof optionalData == 'object') {
            for (var prop in optionalData) {
                data[prop] = optionalData[prop];
            }
        }
        else if (typeof optionalData != 'function' && typeof optionalData != 'undefined') {
            data["optionalData"] = optionalData;
        }
    }

    self.Navigate = function () {

        var data = { ItemPerPage: self.ItemPerPage(), SortOrder: self.SortOrder, SortColumn: self.SortColumn };

        getCriterion(data);
        
        if (JSON.stringify(self.LastData) != JSON.stringify(data)) {
            self.ReloadData = true;
            self.DataSource.removeAll();
        }

        var filterData = ko.utils.arrayFilter(self.DataSource(), function (filter) { return filter.Index == self.CurrentPage(); });
        if (!self.ReloadData && filterData.length > 0) {
            fnGetData(filterData[0].DataSource);
        }
        else {
            self.Loading(true);

            self.LastData = data;

            var dataToSend = ko.toJS(data);
            dataToSend.CurrentPage = self.CurrentPage();

            $.ajax({
                type: "POST",
                url: self.NavigationUrl,
                data: JSON.stringify(dataToSend),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: true,
                cache: true,
                success: function (data) {
                    if (data.isOk) {
                        if (data.totalItem != undefined && self.TotalItem() != data.totalItem) {
                            self.TotalItem(data.totalItem);
                        }
                    }

                    if (typeof fnGetData == 'function') {
                        fnGetData(data);
                    }
                    self.DataSource.push(new knockoutCachePage(self.CurrentPage(), data));

                    self.Loading(false);
                    self.ReloadData = false;
                }
            });
        }
    }

    self.CurrentPageHeight = ko.computed(function () {
        var trigger = self.DataSource();
        return $(".knockout-grid tbody").height();
    });

    self.Search = function () {
        self.ReloadData = true;
        self.DataSource.removeAll();

        if (self.CurrentPage() != 1) {
            self.CurrentPage(1);
        }
        else {
            self.Navigate();
        }
    }

    self.Loading = ko.observable(false);

    return self;
}
/* Knockout Pager End */