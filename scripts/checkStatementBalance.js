transactionId = ["banana-republic-1", "banana-republic-2", "nofrills", "netflix", "nigerian-prince", "ikea"]

transactionInfo = new Map();

transactionInfo.set(transactionId[0], "Looks like Banana Republic double charged you. We’ll ______ .")
transactionInfo.set(transactionId[1], "Looks like Banana Republic double charged you. We’ll ______ .")
transactionInfo.set(transactionId[3], "Oops! You forgot that you subscribed to Netflix. This one’s on you.")
transactionInfo.set(transactionId[4], "Hmm, you definitely didn’t send that. We’ll cover that transfer, looks like fraud.")
transactionInfo.set(transactionId[5], "Seems like IKEA didn’t charge you the right amount. We’ll get right on it.")

var firstReport = true;
var numUniqueReports = 0;
var reportedBananaRepublic = false;

function reportTransaction(id) {
    if (id !== "nofrills") {

        if (!firstReport) {
            if (numUniqueReports !==4) {
                if (id === "banana-republic-1" || id === "banana-republic-2") {
                    if (reportedBananaRepublic === false) {
                        const div = document.createElement("div");
                        div.classList.add("reportTransactionInfoBox");

                        const temp = numUniqueReports+1
                        div.setAttribute("id", "report-"+temp);
                        div.innerHTML = transactionInfo.get(id);

                        const parent = document.getElementsByClassName("reportTransactionContainer");
                        const latestReport = document.getElementById("report-"+numUniqueReports);

                        parent[0].insertBefore(div, latestReport);
                        
                        numUniqueReports++;

                        document.getElementsByClassName("errorsFoundNum")[0].innerHTML = numUniqueReports+"/4";
                        reportedBananaRepublic = true;
                    }
                    else {
                        //do nothing
                    }
                }
                else {
                    const div = document.createElement("div");
                    div.classList.add("reportTransactionInfoBox");

                    const temp = numUniqueReports+1
                    div.setAttribute("id", "report-"+temp);
                    div.innerHTML = transactionInfo.get(id);

                    const parent = document.getElementsByClassName("reportTransactionContainer");
                    const latestReport = document.getElementById("report-"+numUniqueReports);

                    parent[0].insertBefore(div, latestReport);
                    
                    numUniqueReports++;

                    document.getElementsByClassName("errorsFoundNum")[0].innerHTML = numUniqueReports+"/4";
                }
            }
        }
        else {
            document.getElementsByClassName("reportTransactionInfoBox")[0].innerHTML = transactionInfo.get(id);

            numUniqueReports++;

            document.getElementsByClassName("errorsFoundNum")[0].innerHTML = "1/4";

            firstReport = false;

            if (id === "banana-republic-1" || id === "banana-republic-2")
                reportedBananaRepublic = true;
        }

    }
    else {
        document.getElementsByClassName("nothingSuspiciousInfo")[0].classList.add("nothingSuspiciousInfoClicked");

        window.setTimeout(hideInfo, 1200);

        console.log( document.getElementsByClassName("nothingSuspiciousInfo"))
    }
}

function hideInfo() {
    document.getElementsByClassName("nothingSuspiciousInfo")[0].classList.remove("nothingSuspiciousInfoClicked")
}