
var DAL = {
    getAllContacts: function(success, error) {
        $.ajax({
            type: "GET",
            url: "/api/contact",
            success: function(data) {
                success(data);
            },
            error: function() {
                error();
            }
        });
    }
};

var BL = {
    getAllContacts: function(success, error) {
        DAL.getAllContacts(function(contacts) {
            try {
                var fixedContacts = tran(contacts);
            }
            catch(err) {
                if(error) {
                    error(err);
                }

                return;
            }

            success(fixedContacts);
        }, function() {
            if(error) {
                error();
            }
        });
    }
};

////////////////////////////////////////////////////////////////
var DAL = {
    getAllContacts: function() {
        return $.ajax({});
    }
}

var BL = {
    getAllContacts: function() {
        return tran(DAL.getAllContacts());
    }
};

/////////////////////////////////////////////////////////////////
var DAL = {
    getAllContacts: function() {
        return $.ajax({url: "", type: "GET"});
    }
};

var BL = {
    getAllContacts: function() {
        return DAL.getAllContacts().then(tran);
    }
};
