var options1 = {
    key: "rzp_test_vkU0t6X5oKr5GR", // Enter the Key ID generated from the Dashboard
    amount: 4999 * 100,
    currency: "INR",
    description: "Safarr",
    image:
      "",
    prefill: {
      email: "gaurav.kumar@example.com",
      contact: +919900000000,
    },
    config: {
      display: {
        blocks: {
          banks: {
            name: "Most Used Methods",
            instruments: [
              {
                method: "wallet",
                wallets: ["freecharge"],
              },
              {
                method: "upi",
              },
            ],
          },
        },
        sequence: ["block.banks"],
        preferences: {
          show_default_blocks: true,
        },
      },
    },

    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function () {
        if (confirm("Are you sure, you want to close the form?")) {
          txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          txt = "You pressed Cancel!";
          console.log("Complete the Payment");
        }
      },
    },
  };


//   Option 2
var options2 = {
    key: "rzp_test_vkU0t6X5oKr5GR", // Enter the Key ID generated from the Dashboard
    amount: 9999 * 100,
    currency: "INR",
    description: "Safarr",
    image:
      "",
    prefill: {
      email: "gaurav.kumar@example.com",
      contact: +919900000000,
    },
    config: {
      display: {
        blocks: {
          banks: {
            name: "Most Used Methods",
            instruments: [
              {
                method: "wallet",
                wallets: ["freecharge"],
              },
              {
                method: "upi",
              },
            ],
          },
        },
        sequence: ["block.banks"],
        preferences: {
          show_default_blocks: true,
        },
      },
    },

    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function () {
        if (confirm("Are you sure, you want to close the form?")) {
          txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          txt = "You pressed Cancel!";
          console.log("Complete the Payment");
        }
      },
    },
  };

//   Option 3
var options3 = {
    key: "rzp_test_vkU0t6X5oKr5GR", // Enter the Key ID generated from the Dashboard
    amount: 19999 * 100,
    currency: "INR",
    description: "Safarr",
    image:
      "",
    prefill: {
      email: "gaurav.kumar@example.com",
      contact: +919900000000,
    },
    config: {
      display: {
        blocks: {
          banks: {
            name: "Most Used Methods",
            instruments: [
              {
                method: "wallet",
                wallets: ["freecharge"],
              },
              {
                method: "upi",
              },
            ],
          },
        },
        sequence: ["block.banks"],
        preferences: {
          show_default_blocks: true,
        },
      },
    },

    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function () {
        if (confirm("Are you sure, you want to close the form?")) {
          txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          txt = "You pressed Cancel!";
          console.log("Complete the Payment");
        }
      },
    },
  };

//   Option 4
var options4 = {
    key: "rzp_test_vkU0t6X5oKr5GR", // Enter the Key ID generated from the Dashboard
    amount: 29999 * 100,
    currency: "INR",
    description: "Safarr",
    image:
      "",
    prefill: {
      email: "gaurav.kumar@example.com",
      contact: +919900000000,
    },
    config: {
      display: {
        blocks: {
          banks: {
            name: "Most Used Methods",
            instruments: [
              {
                method: "wallet",
                wallets: ["freecharge"],
              },
              {
                method: "upi",
              },
            ],
          },
        },
        sequence: ["block.banks"],
        preferences: {
          show_default_blocks: true,
        },
      },
    },

    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    modal: {
      ondismiss: function () {
        if (confirm("Are you sure, you want to close the form?")) {
          txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          txt = "You pressed Cancel!";
          console.log("Complete the Payment");
        }
      },
    },
  };

  var rzp1 = new Razorpay(options1);
  document.getElementById("rzp-button1").onclick = function (e) {
    rzp1.open();
    e.preventDefault();
  };

  var rzp2 = new Razorpay(options2);
  document.getElementById("rzp-button2").onclick = function (e) {
    rzp2.open();
    e.preventDefault();
  };

  var rzp3 = new Razorpay(options3);
  document.getElementById("rzp-button3").onclick = function (e) {
    rzp3.open();
    e.preventDefault();
  };

  var rzp4 = new Razorpay(options4);
  document.getElementById("rzp-button4").onclick = function (e) {
    rzp4.open();
    e.preventDefault();
  };