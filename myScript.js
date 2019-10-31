function myFunction() {

    var _serviceRn = "Service Reference Number:";
    var _memberName = "Member's Name:";
    var _callersName = "Caller's Name:";
    var _callersPhone = "Caller's Phone Number:";
    var _callersEmail = "Caller's Email address:";
    var _providersName = "Provider's Name:";
    var _providersCPnumber = "Provider's Cell Phone Number: ";
    var _providersOPnumber = "Provider's Office Phone Number:";
    var _providersTitle = "Provider's Title: ";
    var _providersTz = "Provider's Time Zone:";
    var _providerInvolve = "How is this Provider involved in the care of this member?";
    var _apointmentYesNo = "Appointment requested: ";
    var _appointmentTime = "Date and Time of Appointment: ";
    var _preferredYesNo = "Preferred Timeframe Requested: ";
    var _preferredTime = "Preferred Timeframe range and date:";
    var _timestamp = "Time Provider Submitted the Request: ";

    var a = _serviceRn + document.getElementById("Srn").value;
    var b = _memberName + document.getElementById("Membersname").value;
    var c = _callersName + document.getElementById("Providersname").value;
    var d = _callersPhone + document.getElementById("Callernumber").value;
    var e = _callersEmail + document.getElementById("Callersemailadd").value;
    var f = _providersName + document.getElementById("Providersname").value;
    var g = _providersCPnumber + document.getElementById("Providerscpnumber").value;
    var h = _providersOPnumber + document.getElementById("Providersofnumber").value;
    var i = _providersTitle + document.getElementById("Title").value;
    var j = _providersTz + document.getElementById("timezone").value;
    var k = _providerInvolve + document.getElementById("Providersinvolved").value;
    var l = _apointmentYesNo + document.getElementById("App").value;
    var m = _appointmentTime + document.getElementById("appointment").value;
    var n = _preferredYesNo + document.getElementById("frame").value;
    var o = _preferredTime + document.getElementById("timeframe").value;
    var p = _timestamp + document.getElementById("Timestamp").value;
    var blank = " "

    var pp = "Peer to Peer Request";
    var ppestan = "P2P Request SRN: " + document.getElementById("Srn").value + " Contains PHI";
    var ppeapp = "P2P Request APPOINTMENT  SRN: " + document.getElementById("Srn").value + " Contains PHI";
    var ppefre = "P2P Request PREFERRED TIMEFRAME SRN: " + document.getElementById("Srn").value + "Contains PHI";

    //note
    var pptxfinl = "LETTER NOT RELEASED (Eligible for Reversal)";
    var pptxfinladd = "The member resides in Texas. The letter has not been released.";
    var pptxfilr = "LETTER RELEASED (Not Eligible for Reversal)";
    var pptxfilradd = "Provider notified that letter has been released and P2P will not result in change in determination, but P2P is requested.";
    var txfiscriptdc = "Script read:YES <br/> P2P Decline <br/> Final outcome of the call: Provider notified that letter has been released and the provider does not want a P2P discussion.";
    //email
    var txfiemaillns = "The member resides in Texas and the Adverse Determination Letter has not been issued";
    var txfiemaills = "The member resides in Texas and the Adverse Determination Letter has been released";

    var txfiemailsublinen = "TX P2P Request  LETTER NOT RELEASED  SRN:" + document.getElementById("Srn").value + " Contains PHI";
    var txfiemailsubliner = "TX P2P Request – LETTER RELEASED - SRN 'na' – Contains PHI"


    var ppmnrpplr = "Medicare P2P Request: Not Eligible for Peer-to-Peer Reversal of Decision";
    var mnrscript = "Script read:Yes <br/> P2P Accepted <br/> Final outcome of the call: Peer to Peer initiated";
    var mnrscriptdc = "Script read:YES <br/> P2P Decline <br/> Final outcome of the call: Provider notified that letter has been released and and the provider does not want a P2P discussion.";
    //email 
    var mnrsllr = "Post-Adverse Determination Medicare P2P Request - Not Eligible for Peer-to-Peer Reversal of Decision";
    var mnrslnlr = "Post-Adverse Determination Medicare P2P Request - Eligible for Peer-to-Peer Reversal of Decision";


    var _kindOfTemplate = document.getElementById("kindoftemplate").value;
    var _template = _kindOfTemplate;
    var doctemplate = [
        [pp, c, d, e, f, g, h, i, j, k, l, m, n, o],
        [pp, c, d, e, f, g, h, i, j, k, l, m, n, o],
        [pp, c, d, e, f, g, h, i, j, k, l, m, n, o],
        [pp, pptxfinladd, c, d, e, f, g, h, i, j, k, l, m, n, o, pptxfinladd],
        [pp, c, d, e, f, txfiscriptdc],
        [pp, pptxfilr, c, d, e, f, g, h, i, j, k, l, m, n, o, pptxfilradd],
        [pp, c, d, e, f, g, h, i, j, k, ],
        [ppmnrpplr, c, d, e, f, mnrscriptdc],
        [ppmnrpplr, c, d, e, f, g, h, i, j, k, mnrscript],
        [pp, c, d, e, f, g, h, i, j, k, l, m],
        [pp, pptxfinl, c, d, e, f, g, h, i, j, k, ],
        [pp, c, d, e, f, txfiscriptdc],
        [pp, pptxfilr, c, d, e, f, g, h, i, j, k, pptxfilradd],
        [pp, c, d, e, f, g, h, i, j, k, ],
        [ppmnrpplr, c, d, e, f, mnrscriptdc],
        [ppmnrpplr, c, d, e, f, g, h, i, j, k, mnrscript, ]
    ]

    var docemail = [
        [ppestan, a, b, f, g, h, i, p, j, k],
        [ppefre, a, b, f, g, h, i, p, j, o, k],
        [ppeapp, a, b, f, g, h, i, p, j, m, k],
        [txfiemailsublinen, a, b, f, g, h, i, j, k, m, o, txfiemaillns],
        ["No Email"],
        [txfiemailsubliner, a, b, f, g, h, i, j, k, l, m, n, o, txfiemaills],
        [mnrslnlr, a, b, f, g, h, i, j, k],
        ["No Email"],
        [mnrsllr, a, b, f, g, h, i, j, k],
        [ppeapp, a, b, f, g, h, i, j, k],
        [txfiemailsublinen, f, g, h, i, j, k, txfiemaillns],
        ["No Email"],
        [txfiemailsubliner, a, b, f, g, h, i, j, k, txfiemaills],
        [mnrslnlr, a, b, f, g, h, i, j, k],
        ["No Email"],
        [mnrsllr, a, b, f, g, h, i, j, k],
    ]


    var _selectedarraynote = doctemplate[_template]
    var _selectedarrayemail = docemail[_template]

    var _note = 0;
    var text = "";
    while (_selectedarraynote[_note]) {
        text += _selectedarraynote[_note] + "<br>";
        _note++;
    }


    var _email = 1;
    var textemail = "";
    while (_selectedarrayemail[_email]) {
        textemail += _selectedarrayemail[_email] + "<br/>";
        _email++;
    }

    var _sub = 0;
    var subemail = "";
    while (_selectedarrayemail[_sub]) {
        subemail += _selectedarrayemail[_sub] + "<br/>";
        _sub--;
    }


    document.getElementById("demo").innerHTML = text;
    document.getElementById("email").innerHTML = textemail;
    document.getElementById("subti").innerHTML = subemail;

}

function displayDate() {
    var time_current = Date();
    document.getElementById("Timestamp").value = time_current;
}





function myMail() {
    try {
        let a = document.getElementById("rmdName").value;
        let b = document.getElementById("email").innerText;
        let c = document.getElementById("subti").innerText;
        var mail = "mailto:" + a + "?subject=" + c + "&body=" + b;
        var mlink = document.createElement('a');
        mlink.setAttribute('href', mail);
        mlink.click();
    } catch (e) {
        alert(e);
        // act on any error that you get
    }
}

function hideForm() {
    var myConts = document.getElementById("myCont");
    var myforms = document.getElementById("myForm");
    var _centertog = document.getElementById("centerCon");
    if (myConts.style.width === "3%") {
        myConts.style.width = "28%";
        myforms.style.visibility = "visible";
        _centertog.style.width = "53%";

    } else {
        myConts.style.width = "3%";
        myforms.style.visibility = "hidden";
        _centertog.style.width = "78%";

    }

}

function mytimeconverter() {

    let a = document.getElementById("inpppuuuutttt").value;
    let b = toDate(a, "h:m");
    var timehawai = new Date(b);
    var timealaska = new Date(b);
    var timepacific = new Date(b);
    var timemountain = new Date(b);
    var timearizona = new Date(b);
    var timecentral = new Date(b);
    var timeeastern = new Date(b);

    var _hawaii;
    var _alaska;
    var _pacific;
    var _arizona;
    var _mountain;
    var _central;
    var _eastern;



    var orig = document.getElementById("origtimezn").value;


    switch (orig) {
        case "0":
            _hawaii = 0;
            _alaska = 120;
            _pacific = 180;
            _arizona = 180;
            _mountain = 240;
            _central = 300;
            _eastern = 360;
            break;

        case "1":
            _hawaii = -120;
            _alaska = 0;
            _pacific = 60;
            _arizona = 180;
            _mountain = 240;
            _central = 300;
            _eastern = 360;
            break;

        case "2":
            _hawaii = -240;
            _alaska = -120;
            _pacific = 0;
            _arizona = 0;
            _mountain = 60;
            _central = 120;
            _eastern = 180;
            break;

        case "3":
            _hawaii = -240;
            _alaska = -120;
            _pacific = 0;
            _arizona = 0;
            _mountain = 60;
            _central = 120;
            _eastern = 180;
            break;

        case "4":
            _hawaii = -240;
            _alaska = -120;
            _pacific = -60;
            _arizona = -60;
            _mountain = 0;
            _central = 60;
            _eastern = 120;
            break;

        case "5":
            _hawaii = -300;
            _alaska = -180;
            _pacific = -120;
            _arizona = -120;
            _mountain = -60;
            _central = 0;
            _eastern = 60;
            break;

        case "6":
            _hawaii = -360;
            _alaska = -240;
            _pacific = -180;
            _arizona = -180;
            _mountain = -120;
            _central = -60;
            _eastern = 0;
            break;

        default:

    }

    timehawai.setMinutes(timehawai.getMinutes() + _hawaii);
    timealaska.setMinutes(timealaska.getMinutes() + _alaska);
    timepacific.setMinutes(timepacific.getMinutes() + _pacific);
    timearizona.setMinutes(timearizona.getMinutes() + _arizona);
    timemountain.setMinutes(timemountain.getMinutes() + _mountain);
    timecentral.setMinutes(timecentral.getMinutes() + _central);
    timeeastern.setMinutes(timeeastern.getMinutes() + _eastern);

    //document.getElementById("enterTz").innerHTML= b.toLocaleTimeString();

    function toDate(dStr, format) {
        var now = new Date();
        if (format == "h:m") {
            now.setHours(dStr.substr(0, dStr.indexOf(":")));
            now.setMinutes(dStr.substr(dStr.indexOf(":") + 1));
            now.setSeconds(0);
            return now;
        } else
            return "Invalid Format";
    }


    var formTime = document.forms["frm1"];
    var text = "";
    let i;
    for (i = 0; i < formTime.length; i++) {
        text += formTime.elements[i].value + "<br>";
    }

    // CORRECT CODE "document.getElementById("demo").innerHTML = text;



    var _times = document.getElementById("convertedtime").value;
    var _timezoneee = document.getElementById("timezoneee").value;
    var timezones = [timehawai.toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        }), timealaska.toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        }), timepacific.toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        }),
        timearizona.toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        }), timemountain.toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        }), timecentral.toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        }),
        timeeastern.toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        })
    ];

    var convertedTime = timezones[_times];

    timezoneee.value = convertedTime;
}