// ==========================================
// EVOLUTION DES RECETTES
// ==========================================

const revenueCanvas =
    document.getElementById("revenueChart");

if (revenueCanvas) {

    new Chart(revenueCanvas, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Fév",
                "Mars",
                "Avr",
                "Mai",
                "Juin",
                "Juil",
                "Août"
            ],

            datasets: [

                {
                    label: "Recettes fiscales",

                    data: [
                        850000,
                        920000,
                        980000,
                        1050000,
                        1120000,
                        1210000,
                        1390000,
                        1559900
                    ],

                    borderWidth: 3,

                    tension: 0.4,

                    fill: true
                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: false
                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        callback: function(value) {

                            return value.toLocaleString() + " DH";

                        }

                    }

                }

            }

        }

    });

}


// ==========================================
// PAYMENT CHART
// ==========================================

const paymentCanvas =
    document.getElementById("paymentChart");

if (paymentCanvas) {

    new Chart(paymentCanvas, {

        type: "doughnut",

        data: {

            labels: [
                "Payé",
                "Non payé",
                "En retard"
            ],

            datasets: [

                {

                    data: [
                        1850,
                        430,
                        150
                    ],

                    borderWidth: 1

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    position: "bottom"
                }

            }

        }

    });

}

